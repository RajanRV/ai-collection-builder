import { NextRequest, NextResponse } from "next/server";
import { AiGeneratorResult } from "@/types/ai-generator";

const MAX_REQUIREMENT_LENGTH = 400;

function isLikelyDonationRelated(text: string): boolean {
  const lower = text.toLowerCase();
  const keywords = [
    "donation",
    "donations",
    "fundraiser",
    "fundraising",
    "charity",
    "nonprofit",
    "non-profit",
    "raise money",
    "raising money",
    "donor",
    "donors",
  ];

  return keywords.some((word) => lower.includes(word));
}

async function generateCampaignImage(prompt: string): Promise<string> {
  if (!process.env.STABILITY_API_KEY) {
    throw new Error("Server misconfigured: STABILITY_API_KEY is missing.");
  }

  const response = await fetch(
    "https://api.stability.ai/v1/generation/stable-diffusion-xl-1024-v1-0/text-to-image",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "image/png",
        Authorization: `Bearer ${process.env.STABILITY_API_KEY}`,
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: `A professional, heartwarming donation campaign banner image for: ${prompt}. 
                   Photorealistic, warm lighting, inspiring, high quality.`,
            weight: 1,
          },
          {
            // Negative prompt to avoid unwanted elements
            text: "text, watermark, logo, blurry, low quality, dark, scary, violent",
            weight: -1,
          },
        ],
        cfg_scale: 7,
        height: 1024,
        width: 1024,
        samples: 1,
        steps: 30,
      }),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Stability AI error: ${errorText}`);
  }

  // Response is raw PNG binary — must use arrayBuffer, NOT text()
  const buffer = await response.arrayBuffer();
  const base64 = Buffer.from(buffer).toString("base64");

  return `${base64}`;
}

export async function POST(request: NextRequest) {
  try {
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "Server misconfigured: GROQ_API_KEY is missing." },
        { status: 500 },
      );
    }

    const model = process.env.GROQ_MODEL ?? "llama-3.3-70b-versatile";

    const body = (await request.json()) as { requirement?: string };
    const requirement = (body.requirement ?? "").trim();

    if (!requirement) {
      return NextResponse.json(
        { error: "Please provide a donation requirement." },
        { status: 400 },
      );
    }

    if (requirement.length > MAX_REQUIREMENT_LENGTH) {
      return NextResponse.json(
        {
          error: `Requirement is too long. Please keep it under ${MAX_REQUIREMENT_LENGTH} characters.`,
        },
        { status: 400 },
      );
    }

    // TODO: For this we can use LLM models as a guardrails too but for now keeping this as basic.
    if (!isLikelyDonationRelated(requirement)) {
      return NextResponse.json(
        {
          error:
            "This app only supports donation or fundraiser related requirements. Please describe a donation-related campaign.",
        },
        { status: 400 },
      );
    }

    const systemPrompt = `
You are an assistant that designs landing content for DONATION or FUNDRAISER campaigns only.

Given a short description of a donation or fundraiser requirement, you MUST respond with STRICT JSON and nothing else.

JSON schema:
{
  "title": string,          // short, compelling campaign title
  "description": string    // 2-4 sentence description suitable for a donation page
}

RULES:
- The campaign MUST clearly be about donations, fundraising, charity, or similar.
- "imagePrompt" should be descriptive and visual — mention scene, mood, and subject.
- If the user requirement is clearly NOT about donations or fundraising, respond instead with:
  { "title": "", "description": "" }
and explain the problem only in your internal reasoning, not in the JSON.
`.trim();

    const userPrompt = `User donation requirement:\n"${requirement}"\n\nReturn ONLY the JSON object as specified. Do not include any commentary.`;

    const groqResponse = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model,
          messages: [
            { role: "system", content: systemPrompt },
            { role: "user", content: userPrompt },
          ],
          temperature: 0.7,
        }),
      },
    );

    if (!groqResponse.ok) {
      const errorText = await groqResponse.text();
      return NextResponse.json(
        {
          error: "Failed to generate content from Groq.",
          details: errorText,
        },
        { status: 502 },
      );
    }

    const data = (await groqResponse.json()) as {
      choices?: { message?: { content?: string } }[];
    };

    const content = data.choices?.[0]?.message?.content;
    if (!content) {
      return NextResponse.json(
        { error: "Groq did not return any content." },
        { status: 502 },
      );
    }

    let parsed: AiGeneratorResult & { imagePrompt?: string };
    try {
      parsed = JSON.parse(content) as AiGeneratorResult & {
        imagePrompt?: string;
      };
    } catch {
      return NextResponse.json(
        {
          error:
            "Failed to parse AI response. Please try again or adjust your requirement.",
        },
        { status: 502 },
      );
    }

    if (!parsed.title || !parsed.description) {
      return NextResponse.json(
        {
          error:
            "AI response was incomplete. Please refine your requirement and try again.",
        },
        { status: 502 },
      );
    }

    // Generate the campaign image using the AI-crafted prompt (or fall back to requirement)
    const imagePrompt = parsed.imagePrompt?.trim() || requirement;
    let imageBase64: string;

    try {
      imageBase64 = await generateCampaignImage(imagePrompt);
    } catch (imgError) {
      console.error("Image generation failed:", imgError);
      return NextResponse.json(
        {
          error:
            "Failed to generate campaign image. Please try again.",
          details: imgError instanceof Error ? imgError.message : String(imgError),
        },
        { status: 502 },
      );
    }

    const result: AiGeneratorResult = {
      title: parsed.title,
      description: parsed.description,
      imageBase64,
    };

    return NextResponse.json(result satisfies AiGeneratorResult);
  } catch {
    return NextResponse.json(
      { error: "Unexpected error while generating donation content." },
      { status: 500 },
    );
  }
}