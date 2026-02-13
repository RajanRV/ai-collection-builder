"use client";

import React from "react";
import Image from "next/image";
import Input from "@/components/ui/Input";
import Heading from "@/components/ui/Heading";
import DonationInputSection from "@/components/ai-generator/DonationInputSection";
import DonationResultCard from "@/components/ai-generator/DonationResultCard";
import DonationList from "@/components/ai-generator/DonationList";
import AiGenerator_Badge from "@/data/AiGenerator_Badge.json";
import type { BadgeItem } from "@/types/badge";
import { useAiGenerator } from "@/hooks/useAiGenerator";
import { useDonations } from "@/hooks/useDonations";

const BADGES = AiGenerator_Badge as BadgeItem[];

export default function AiGeneratorPage() {
  const {
    gift,
    setGift,
    loading,
    error,
    result,
    showResults,
    handleBadgeClick,
    handleGenerate: generate,
    handleClearInput,
  } = useAiGenerator();

  const {
    donations,
    donationTitle,
    setDonationTitle,
    donationDescription,
    setDonationDescription,
    showDonationBox,
    setShowDonationBox,
    handleAddDonation,
    handleDeleteDonation,
  } = useDonations();

  const handleGenerate = () => {
    setShowDonationBox(false);
    void generate();
  };

  if (!loading && !showResults) {
    return (
      <div className="bg-[#F7F7F7]">
        <div className="flex flex-col justify-center min-h-screen items-center m-auto max-w-[1366px] w-[93%]">
          <Heading
            title="Hi Molly, I'll help you get started!"
            variant="main"
            className="text-[24px] sm:text-[30px] lg:text-[40px] items-center text-center"
          />
          <Heading
            title="Tell us about the group gift you're collecting for:"
            variant="sub"
            className="text-[16px] sm:text-[20px] mt-[10px] sm:mt-[17px] items-center text-center"
          />

          <div className="mt-[30px] sm:mt-[46px]">
            <DonationInputSection
              value={gift}
              onChange={setGift}
              onGenerate={handleGenerate}
              error={error}
              badges={BADGES}
              onBadgeClick={handleBadgeClick}
            />
          </div>
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
                  type="button"
                  onClick={handleClearInput}
                  className="absolute right-[15px] top-1/2 -translate-y-1/2"
                  aria-label="Clear input"
                >
                  <Image
                    src="/icons/cross.svg"
                    alt=""
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
              alt="Loading"
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
                aria-label="Clear input"
              >
                <Image
                  src="/icons/cross.svg"
                  alt=""
                  width={16}
                  height={16}
                />
              </button>
            )}
          </div>
        </div>

        <div className="mt-[16px] sm:mt-[33px] px-[16px] py-[12px] mx-auto font-avenir bg-[#FFF0EA] text-[#2E2E2E] text-[14px] sm:text-[16px] font-[500] rounded-[8px]">
          Here is an example of a group gift collection for your occasion
        </div>

        {result && (
          <>
            <DonationResultCard
              key={`${result.title}-${result.description?.slice(0, 20)}`}
              result={result}
            />

            <DonationList
              donations={donations}
              showAddBox={showDonationBox}
              onAddBoxClick={() => setShowDonationBox(true)}
              donationTitle={donationTitle}
              donationDescription={donationDescription}
              onDonationTitleChange={setDonationTitle}
              onDonationDescriptionChange={setDonationDescription}
              onAddDonation={handleAddDonation}
              onDeleteDonation={handleDeleteDonation}
              onCloseAddBox={() => {
                setDonationTitle("");
                setDonationDescription("");
                setShowDonationBox(false);
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
