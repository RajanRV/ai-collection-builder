"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Check, X } from "lucide-react";
import Heading from "@/components/ui/Heading";
import type { AiGeneratorResult } from "@/types/ai-generator";

type DonationResultCardProps = {
  result: AiGeneratorResult;
};

export default function DonationResultCard({ result }: DonationResultCardProps) {
  const [isTitleEditing, setIsTitleEditing] = useState(false);
  const [isDescriptionEditing, setIsDescriptionEditing] = useState(false);
  const [editableTitle, setEditableTitle] = useState(result.title || "");
  const [editableDescription, setEditableDescription] = useState(
    result.description || ""
  );

  return (
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

      <div className="relative overflow-hidden">
        {result.imageBase64 ? (
          <Image
            src={`data:image/png;base64,${result.imageBase64}`}
            alt={result.title || "Gift collection image"}
            width={863}
            height={360}
            className="w-full h-[360px] object-cover"
            unoptimized
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
              aria-label="Edit title"
            />
            <div className="absolute right-[10px] top-1/2 -translate-y-1/2 flex gap-[8px]">
              <button
                type="button"
                onClick={() => setIsTitleEditing(false)}
                className="w-[32px] h-[32px] bg-[#2F8C99] text-white rounded-full flex items-center justify-center hover:bg-[#257F91]"
                aria-label="Save title"
              >
                <Check size={18} />
              </button>
              <button
                type="button"
                onClick={() => {
                  setEditableTitle(result?.title || "");
                  setIsTitleEditing(false);
                }}
                className="w-[32px] h-[32px] border border-[#DADADA] rounded-full flex items-center justify-center hover:bg-gray-100"
                aria-label="Cancel editing title"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        ) : (
          <div
            onClick={() => setIsTitleEditing(true)}
            className="cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") setIsTitleEditing(true);
            }}
          >
            <Heading
              title={editableTitle}
              variant="main"
              className="text-[24px] sm:text-[30px] lg:text-[45px]"
            />
          </div>
        )}

        <div className="mt-[16px]">
          {isDescriptionEditing ? (
            <div className="relative mt-[8px]">
              <textarea
                value={editableDescription}
                onChange={(e) => setEditableDescription(e.target.value)}
                rows={4}
                className="w-full border border-[#DADADA] rounded-[4px] px-[12px] py-[10px] text-[16px] outline-none"
                aria-label="Edit description"
              />
              <button
                type="button"
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
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ")
                  setIsDescriptionEditing(true);
              }}
            >
              <Heading
                title={editableDescription}
                variant="sub"
                className="text-[16px] sm:text-[18px]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
