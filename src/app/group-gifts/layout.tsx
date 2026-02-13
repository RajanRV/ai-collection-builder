import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Gifts | AI Collection Builder",
  description:
    "Collect money for group gifts. Create from scratch or use AI to build your collection.",
};

export default function GroupGiftsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
