"use client";

import React, { useState } from "react";
import Input from "@/components/ui/Input";
import type { AiGeneratorResult } from "@/types/ai-generator";

const AiGeneratorPage: React.FC = () => {
  const [requirement, setRequirement] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AiGeneratorResult | null>(null);

  const handleGenerate = async () => {
    const trimmed = requirement.trim();
    setError(null);
    setResult(null);

    if (!trimmed) {
      setError("Please describe your donation or fundraiser requirement.");
      return;
    }

    if (trimmed.length > 400) {
      setError("Please keep your requirement under 400 characters.");
      return;
    }

    try {
      setLoading(true);
      const response = await fetch("/api/ai-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requirement: trimmed }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        setError(
          data?.error ??
            "Something went wrong while generating your donation content.",
        );
        return;
      }

      const data = (await response.json()) as AiGeneratorResult;
      setResult(data);
    } catch {
      setError("Network error while contacting the AI service.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-[#F7F7F7] flex flex-col">
      <div className="min-h-screen w-[90%] max-w-[1366px] mx-auto flex flex-col">
        <div className="mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
          <Input
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="Describe the donation or fundraiser you’re collecting for..."
            className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
          />

          {requirement && (
            <button
              type="button"
              onClick={() => {
                setRequirement("");
                setError(null);
                setResult(null);
              }}
              className="absolute right-[15px] top-1/2 -translate-y-1/2"
            >
              <img
                src="/icons/cross.svg"
                alt="clear"
                className="w-[16px] h-[16px]"
              />
            </button>
          )}
        </div>

        <div className="mt-[16px] w-[90%] lg:w-[625px] mx-auto text-sm text-gray font-avenir">
          This AI helper only supports{" "}
          <span className="font-semibold">donation or fundraiser</span> related
          requirements. For example: “School fundraiser to buy new lab
          equipment” or “Charity run raising donations for a children’s
          hospital”.
        </div>

        <div className="mt-[20px] w-[90%] lg:w-[625px] mx-auto flex items-center gap-3">
          <button
            type="button"
            onClick={handleGenerate}
            disabled={loading}
            className="bg-primary text-white font-avenir text-sm px-5 py-2 rounded-md disabled:opacity-60"
          >
            {loading ? "Generating..." : "Generate donation content"}
          </button>
          {loading && (
            <span className="text-gray text-sm font-avenir">
              Talking to AI…
            </span>
          )}
        </div>

        {error && (
          <div className="mt-[16px] w-[90%] lg:w-[625px] mx-auto text-sm text-red-600 font-avenir">
            {error}
          </div>
        )}

        {result && (
          <div className="mt-[32px] w-full max-w-[800px] mx-auto bg-white border border-[#DEDEDE] rounded-lg p-4 md:p-6 flex flex-col gap-4 md:flex-row">
            <div className="w-full md:w-1/2 flex items-center justify-center bg-[#F7F7F7] rounded-md overflow-hidden">
              {result.imageBase64 ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={`data:image/png;base64,${result.imageBase64}`}
                  alt={result.title || "Donation campaign image"}
                  className="max-h-64 w-full object-contain"
                />
              ) : (
                <div className="text-gray text-sm font-avenir p-4 text-center">
                  Image was not generated. You can still use the title and
                  description.
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-2">
              <h2 className="text-secondary text-lg md:text-xl font-avenir font-semibold">
                {result.title}
              </h2>
              <p className="text-secondary text-sm md:text-base font-avenir">
                {result.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiGeneratorPage;

