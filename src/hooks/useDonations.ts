import { useState, useCallback } from "react";
import type { DonationItem } from "@/types/donation";

function generateId(): string {
  return typeof crypto !== "undefined" && crypto.randomUUID
    ? crypto.randomUUID()
    : `donation-${Date.now()}`;
}

export function useDonations() {
  const [donations, setDonations] = useState<DonationItem[]>([]);
  const [donationTitle, setDonationTitle] = useState("");
  const [donationDescription, setDonationDescription] = useState("");
  const [showDonationBox, setShowDonationBox] = useState(false);

  const handleAddDonation = useCallback((title: string, description: string) => {
    if (!title.trim() && !description.trim()) return;
    setDonations((prev) => [
      ...prev,
      {
        id: generateId(),
        title,
        description,
      },
    ]);
  }, []);

  const handleDeleteDonation = useCallback((id: string) => {
    setDonations((prev) => prev.filter((d) => d.id !== id));
  }, []);

  return {
    donations,
    donationTitle,
    setDonationTitle,
    donationDescription,
    setDonationDescription,
    showDonationBox,
    setShowDonationBox,
    handleAddDonation,
    handleDeleteDonation,
  };
}
