"use client";

import React, { useEffect, useState } from "react";
import Input from "@/components/ui/Input";
import type { AiGeneratorResult } from "@/types/ai-generator";
import HeadingComponent from "@/components/ui/MainHeading";
import SubHeading from "@/components/ui/SubHeading";
import Badge from "@/components/ui/Badge";
import AiGenerator_Badge from "@/data/AiGenerator_Badge.json";
import Image from "next/image";
import { Check, Copy, Trash2, X } from "lucide-react";

const AiGeneratorPage: React.FC = () => {
  const [gift, setGift] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AiGeneratorResult | null>(null);
  const [showResults, setShowResults] = useState(false);
  const [showDonationBox, setShowDonationBox] = useState(false);
  const [donations, setDonations] = useState<
    Array<{ id: string; title: string; description: string }>
  >([]);
  const [donationTitle, setDonationTitle] = useState("");
  const [donationDescription, setDonationDescription] = useState("");
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState("");
  const [editableDescription, setEditableDescription] = useState("");

  useEffect(() => {
    if (result) {
      setEditableTitle(result.title || "");
      setEditableDescription(result.description || "");
    }
  }, [result]);

  const handleBadgeClick = (badge: string) => {
    setGift(`I'm collecting a group gift for a ${badge.toLowerCase()}`);
  };

  const handleGenerate = async () => {
    const trimmed = gift.trim();
    setError(null);
    setResult(null);
    setShowDonationBox(false)

    if (!trimmed) {
      setError("Please describe your group gift requirement.");
      return;
    }

    if (trimmed.length > 400) {
      setError("Please keep your requirement under 400 characters.");
      return;
    }

    try {
      setLoading(true);
      setShowResults(false);

      const response = await fetch("/api/ai-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requirement: trimmed }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(
          data?.error ??
            "Something went wrong while generating your donation content."
        );
        setLoading(false);
        return;
      }

      const data = (await response.json()) as AiGeneratorResult;
      setResult(data);
      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
      }, 1500);
    } catch {
      setError("Network error while contacting the AI service.");
      setLoading(false);
    }
  };

  const handleClearInput = () => {
    setGift("");
    setError(null);
    setResult(null);
    setShowResults(false);
    setLoading(false);
  };

  const handleAddDonation = (title: string, description: string) => {
    if (!title.trim() && !description.trim()) return;

    setDonations((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        description,
      },
    ]);
  };

  const handleCopyDonation = (donation: {
    id: string;
    title: string;
    description: string;
  }) => {
    setDonations([
      ...donations,
      {
        // eslint-disable-next-line react-hooks/purity
        id: Date.now().toString(),
        title: donation.title,
        description: donation.description,
      },
    ]);
  };

  const handleDeleteDonation = (id: string) => {
    setDonations(donations.filter((d) => d.id !== id));
  };

  if (!loading && !showResults) {
    return (
      <div className="bg-[#F7F7F7]">
        <div className="flex flex-col justify-center min-h-screen items-center m-auto max-w-[1366px] w-[93%]">
          <HeadingComponent
            title="Hi Molly, I'll help you get started!"
            className="text-[24px] sm:text-[30px] lg:text-[40px] items-center text-center"
          />
          <SubHeading
            title="Tell us about the group gift you're collecting for:"
            className="text-[16px] sm:text-[20px] mt-[10px] sm:mt-[17px] items-center text-center"
          />

          <div className="w-[90%] lg:w-[625px] mx-auto mt-[30px] sm:mt-[46px]">
            <Input
              value={gift}
              onChange={(e) => setGift(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void handleGenerate();
                }
              }}
              placeholder="I'm collecting a group gift for..."
              className="w-full h-[50px] px-[8px] py-[13px] bg-white focus:outline-none border border-[#DEDEDE] rounded-[4px]"
            />
          </div>

          <div className="flex flex-wrap mt-[12px] sm:mt-[28px] gap-[12px] items-center justify-center">
            {AiGenerator_Badge.map((item) => (
              <Badge
                key={item.id}
                badge={item.badge}
                onClick={() => handleBadgeClick(item.badge)}
              />
            ))}
          </div>

          {error && (
            <div className="mt-[16px] w-[90%] lg:w-[625px] mx-auto text-sm text-red-600 font-avenir text-center">
              {error}
            </div>
          )}
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="bg-[#F7F7F7] min-h-screen flex flex-col">
        <div className="max-w-[1366px] w-[93%] mx-auto flex flex-col flex-1">
          <div className="flex justify-center">
            <div className="mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
              <Input
                value={gift}
                onChange={(e) => setGift(e.target.value)}
                onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    void handleGenerate();
                  }
                }}
                placeholder="I'm collecting a group gift for..."
                className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
              />

              {gift && (
                <button
                  onClick={handleClearInput}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2"
                >
                  <Image
                    src="/icons/cross.svg"
                    alt="clear"
                    width={16}
                    height={16}
                  />
                </button>
              )}
            </div>
          </div>

          <div className="flex-1 flex items-center justify-center">
            <Image
              className="w-48"
              src="/icons/Loader.gif"
              alt="loader"
              width={192}
              height={192}
              unoptimized
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F7F7F7] flex flex-col">
      <div className="min-h-screen w-[90%] max-w-[1366px] mx-auto flex flex-col flex-1">
        <div className="flex justify-center">
          <div className="mt-[16px] sm:mt-[67px] relative w-[90%] lg:w-[625px] mx-auto">
            <Input
              value={gift}
              onChange={(e) => setGift(e.target.value)}
              onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  void handleGenerate();
                }
              }}
              placeholder="I'm collecting a group gift for..."
              className="w-full h-[50px] px-[8px] pr-[40px] py-[13px] bg-white border border-[#DEDEDE] rounded-[4px] focus:outline-none"
            />

            {gift && (
              <button
                type="button"
                onClick={handleClearInput}
                className="absolute right-[15px] top-1/2 -translate-y-1/2"
              >
                <Image
                  src="/icons/cross.svg"
                  alt="clear"
                  width={16}
                  height={16}
                />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[16px] sm:mt-[33px] px-[16px] py-[12px] mx-auto font-avenir bg-[#FFF0EA] text-[#2E2E2E] text-[14px] sm:text-[16px] font-[500] rounded-[8px]">
          Here is an example of a group gift collection for{" "}
          {gift
            .toLowerCase()
            .replace("i'm collecting a group gift for", "")
            .trim() || "your occasion"}
        </div>

        {result && (
          <>
            <div className="mt-[27px] max-w-[863px] w-full mx-auto bg-white rounded-t-[10px] shadow-[0px_2px_6px_1px_#00000026] rounded-[10px]">
              <div className="flex justify-end gap-[14px] px-[24px] py-[18px] bg-white rounded-t-[10px] border-b border-[#F1F1F1]">
                <button
                  type="button"
                  className="px-[28px] py-[8px] text-sm border border-[#E5E5E5] bg-white text-[#7A7A7A] rounded-[6px]"
                >
                  Preview
                </button>

                <button
                  type="button"
                  className="px-[28px] py-[8px] text-sm bg-[#F36D36] text-white rounded-[6px]"
                >
                  Try this out
                </button>
              </div>

              <div className="relative  overflow-hidden">
                {result.imageBase64 ? (
                  <img
                    src={`data:image/png;base64,${result.imageBase64}`}
                    alt={result.title || "Gift collection image"}
                    className="w-full h-[360px] object-cover"
                  />
                ) : (
                  <div className="w-full h-[300px] bg-gradient-to-br from-[#F36D36] to-[#257F91] flex items-center justify-center">
                    <span className="text-white text-xl font-avenir">
                      Gift Collection
                    </span>
                  </div>
                )}
              </div>
              <div className="px-[24px] py-[32px]">
                {isTitleEditing ? (
                  <div className="relative mb-[16px]">
                    <input
                      value={editableTitle}
                      onChange={(e) => setEditableTitle(e.target.value)}
                      className="w-full text-[28px] font-semibold border border-[#DADADA] rounded-[4px] px-[12px] py-[8px] pr-[80px] outline-none"
                    />

                    <div className="absolute right-[10px] top-1/2 -translate-y-1/2 flex gap-[8px]">
                      <button
                        onClick={() => setIsTitleEditing(false)}
                        className="w-[32px] h-[32px] bg-[#2F8C99] text-white rounded-full flex items-center justify-center hover:bg-[#257F91]"
                      >
                        <Check size={18} />
                      </button>
                      <button
                        onClick={() => {
                          setEditableTitle(result?.title || "");
                          setIsTitleEditing(false);
                        }}
                        className="w-[32px] h-[32px] border border-[#DADADA] rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        <X size={18} />
                      </button>
                    </div>
                  </div>
                ) : (
                  <div
                    onClick={() => setIsTitleEditing(true)}
                    className="cursor-pointer"
                  >
                    <HeadingComponent
                      title={editableTitle}
                      className="text-[24px] sm:text-[30px] lg:text-[45px]"
                    />
                  </div>
                )}
                <div className="mt-[16px]">
                  <SubHeading
                    title="Hey everyone!"
                    className="text-[16px] sm:text-[18px]"
                  />

                  {isDescriptionEditing ? (
                    <div className="relative mt-[8px]">
                      <textarea
                        value={editableDescription}
                        onChange={(e) => setEditableDescription(e.target.value)}
                        rows={4}
                        className="w-full border border-[#DADADA] rounded-[4px] px-[12px] py-[10px] text-[16px] outline-none"
                      />

                      <button
                        onClick={() => setIsDescriptionEditing(false)}
                        className="mt-[16px] px-[18px] py-[8px] bg-[#2F8C99] text-white rounded-[4px] text-sm"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => setIsDescriptionEditing(true)}
                      className="cursor-pointer mt-[8px]"
                    >
                      <SubHeading
                        title={editableDescription}
                        className="text-[16px] sm:text-[18px]"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="mt-[20px] max-w-[863px] w-full mx-auto bg-white shadow-[0px_2px_6px_1px_#00000026] rounded-[10px] mb-[20px]">
              {!showDonationBox ? (
                <div
                  onClick={() => setShowDonationBox(true)}
                  className="py-[30px] items-center flex justify-center gap-[12px] cursor-pointer"
                >
                  <Image
                    src="/icons/HandHeart.svg"
                    alt="Hand Heart"
                    width={24}
                    height={24}
                  />
                  <h2 className="font-[800] font-avenir text-[#257F91] text-[16px] sm:text-[18px]">
                    Add custom donation
                  </h2>
                </div>
              ) : (
                <div className="flex items-stretch sm:px-[32px] py-[24px] sm:py-[28px]">
                  <div className="flex-1 px-[24px]">
                    <input
                      type="text"
                      value={donationTitle}
                      onChange={(e) => setDonationTitle(e.target.value)}
                      placeholder="Donation Title"
                      className="w-full text-[16px] sm:text-[18px] font-[600] text-[#2E2E2E] font-avenir mb-[8px] border-none outline-none focus:outline-none placeholder:text-[#2E2E2E] placeholder:font-[600]"
                    />
                    <input
                      type="text"
                      value={donationDescription}
                      onChange={(e) => setDonationDescription(e.target.value)}
                      placeholder="Donation description"
                      className="w-full text-[14px] sm:text-[16px] text-[#7A7A7A] font-avenir border-none outline-none focus:outline-none placeholder:text-[#7A7A7A]"
                    />
                  </div>

                  <div className="w-[1px] bg-[#E5E5E5]" />

                  <div className="w-[200px] sm:w-[240px] flex items-center justify-center px-[16px] relative group">
                    <button className="px-[24px] sm:px-[32px] py-[10px] sm:py-[12px] bg-[#2F8C99] text-white rounded-[50px] text-[14px] sm:text-[16px] font-[600] font-avenir hover:bg-[#257F91] transition-colors whitespace-nowrap transition-opacity">
                      Donate Now
                    </button>

                    <div
                      className="absolute top-[4px] right-[4px] flex
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                pointer-events-none group-hover:pointer-events-auto"
                    >
                      <button
                        onClick={() => {
                          handleAddDonation(donationTitle, donationDescription);
                          setDonationTitle("");
                          setDonationDescription("");
                          setShowDonationBox(false);
                        }}
                        className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Copy
                          size={20}
                          className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                        />
                      </button>

                      <button
                        onClick={() => {
                          setDonationTitle("");
                          setDonationDescription("");
                          setShowDonationBox(false);
                        }}
                        className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Trash2
                          size={20}
                          className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {donations.map((donation) => (
              <div
                key={donation.id}
                className="mt-[20px] max-w-[863px] w-full mx-auto bg-white shadow-[0px_2px_6px_1px_#00000026] rounded-[10px] mb-[20px]"
              >
                <div className="flex items-stretch sm:px-[32px] py-[24px] sm:py-[28px]">
                  <div className="flex-1 px-[24px]">
                    <h3 className="text-[16px] sm:text-[18px] font-[600] text-[#2E2E2E] font-avenir mb-[8px]">
                      {donation.title}
                    </h3>
                    <p className="text-[14px] sm:text-[16px] text-[#7A7A7A] font-avenir">
                      {donation.description}
                    </p>
                  </div>

                  <div className="w-[1px] bg-[#E5E5E5]" />

                  <div className="w-[200px] sm:w-[240px] flex items-center justify-center px-[16px] relative group">
                    <button className="px-[24px] sm:px-[32px] py-[10px] sm:py-[12px] bg-[#2F8C99] text-white rounded-[50px] text-[14px] sm:text-[16px] font-[600] font-avenir hover:bg-[#257F91] transition-colors whitespace-nowrap transition-opacity">
                      Donate Now
                    </button>

                    <div
                      className="absolute top-[4px] right-[4px] flex
                opacity-0 group-hover:opacity-100
                transition-opacity duration-200
                pointer-events-none group-hover:pointer-events-auto"
                    >
                      <button
                        onClick={() => handleCopyDonation(donation)}
                        className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Copy
                          size={20}
                          className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                        />
                      </button>

                      <button
                        onClick={() => handleDeleteDonation(donation.id)}
                        className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Trash2
                          size={20}
                          className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AiGeneratorPage;
