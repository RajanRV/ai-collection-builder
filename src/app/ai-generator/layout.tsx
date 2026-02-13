import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Generator | AI Collection Builder",
  description:
    "Use AI to create donation and group gift collection pages. Describe your campaign and get a generated layout.",
};

export default function AiGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
