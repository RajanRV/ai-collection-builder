"use client";

import React from "react";
import Input from "@/components/ui/Input";
import Badge from "@/components/ui/Badge";
import type { BadgeItem } from "@/types/badge";

type DonationInputSectionProps = {
  value: string;
  onChange: (value: string) => void;
  onGenerate: () => void;
  error: string | null;
  badges: BadgeItem[];
  onBadgeClick: (badge: string) => void;
  placeholder?: string;
  inputClassName?: string;
  rightElement?: React.ReactNode;
};

export default function DonationInputSection({
  value,
  onChange,
  onGenerate,
  error,
  badges,
  onBadgeClick,
  placeholder = "I'm collecting a group gift for...",
  inputClassName = "w-full h-[50px] px-[8px] py-[13px] bg-white focus:outline-none border border-[#DEDEDE] rounded-[4px]",
  rightElement,
}: DonationInputSectionProps) {
  return (
    <>
      <div className="w-[90%] lg:w-[625px] mx-auto relative">
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
            if (e.key === "Enter") {
              e.preventDefault();
              void onGenerate();
            }
          }}
          placeholder={placeholder}
          className={rightElement ? `${inputClassName} pr-[40px]` : inputClassName}
        />
        {rightElement}
      </div>

      <div className="flex flex-wrap mt-[12px] sm:mt-[28px] gap-[12px] items-center justify-center">
        {badges.map((item) => (
          <Badge
            key={item.id}
            badge={item.badge}
            onClick={() => onBadgeClick(item.badge)}
          />
        ))}
      </div>

      {error && (
        <div className="mt-[16px] w-[90%] lg:w-[625px] mx-auto text-sm text-red-600 font-avenir text-center">
          {error}
        </div>
      )}
    </>
  );
}
