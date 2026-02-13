"use client";

import React from "react";
import Image from "next/image";
import { Copy, Trash2 } from "lucide-react";
import type { DonationItem } from "@/types/donation";

type DonationListProps = {
  donations: DonationItem[];
  showAddBox: boolean;
  onAddBoxClick: () => void;
  donationTitle: string;
  donationDescription: string;
  onDonationTitleChange: (value: string) => void;
  onDonationDescriptionChange: (value: string) => void;
  onAddDonation: (title: string, description: string) => void;
  onCopyDonation: (donation: DonationItem) => void;
  onDeleteDonation: (id: string) => void;
  onCloseAddBox: () => void;
};

export default function DonationList({
  donations,
  showAddBox,
  onAddBoxClick,
  donationTitle,
  donationDescription,
  onDonationTitleChange,
  onDonationDescriptionChange,
  onAddDonation,
  onCopyDonation,
  onDeleteDonation,
  onCloseAddBox,
}: DonationListProps) {
  return (
    <>
      <div className="mt-[20px] max-w-[863px] w-full mx-auto bg-white shadow-[0px_2px_6px_1px_#00000026] rounded-[10px] mb-[20px]">
        {!showAddBox ? (
          <div
            onClick={onAddBoxClick}
            className="py-[30px] items-center flex justify-center gap-[12px] cursor-pointer"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") onAddBoxClick();
            }}
          >
            <Image
              src="/icons/HandHeart.svg"
              alt=""
              width={24}
              height={24}
              aria-hidden
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
                onChange={(e) => onDonationTitleChange(e.target.value)}
                placeholder="Donation Title"
                className="w-full text-[16px] sm:text-[18px] font-[600] text-[#2E2E2E] font-avenir mb-[8px] border-none outline-none focus:outline-none placeholder:text-[#2E2E2E] placeholder:font-[600]"
                aria-label="Donation title"
              />
              <input
                type="text"
                value={donationDescription}
                onChange={(e) => onDonationDescriptionChange(e.target.value)}
                placeholder="Donation description"
                className="w-full text-[14px] sm:text-[16px] text-[#7A7A7A] font-avenir border-none outline-none focus:outline-none placeholder:text-[#7A7A7A]"
                aria-label="Donation description"
              />
            </div>

            <div className="w-[1px] bg-[#E5E5E5]" />

            <div className="w-[200px] sm:w-[240px] flex items-center justify-center px-[16px] relative group">
              <button
                type="button"
                className="px-[24px] sm:px-[32px] py-[10px] sm:py-[12px] bg-[#2F8C99] text-white rounded-[50px] text-[14px] sm:text-[16px] font-[600] font-avenir hover:bg-[#257F91] transition-colors whitespace-nowrap"
              >
                Donate Now
              </button>

              <div className="absolute top-[4px] right-[4px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <button
                  type="button"
                  onClick={() => {
                    onAddDonation(donationTitle, donationDescription);
                    onCloseAddBox();
                  }}
                  className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Add donation"
                >
                  <Copy
                    size={20}
                    className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                  />
                </button>

                <button
                  type="button"
                  onClick={onCloseAddBox}
                  className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Cancel"
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
              <button
                type="button"
                className="px-[24px] sm:px-[32px] py-[10px] sm:py-[12px] bg-[#2F8C99] text-white rounded-[50px] text-[14px] sm:text-[16px] font-[600] font-avenir hover:bg-[#257F91] transition-colors whitespace-nowrap"
              >
                Donate Now
              </button>

              <div className="absolute top-[4px] right-[4px] flex opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto">
                <button
                  type="button"
                  onClick={() => onCopyDonation(donation)}
                  className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Duplicate donation"
                >
                  <Copy
                    size={20}
                    className="text-[#2E2E2E] group-hover:text-[#F36D36] transition-colors"
                  />
                </button>

                <button
                  type="button"
                  onClick={() => onDeleteDonation(donation.id)}
                  className="group w-[40px] h-[40px] bg-white border border-[#E5E5E5] rounded-[6px] flex items-center justify-center hover:bg-gray-50 transition-colors"
                  aria-label="Delete donation"
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
  );
}
