import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/common/Header";

export const metadata: Metadata = {
  title: "AI Collection Builder",
  description: "SSR-ready Next.js version of the AI Collection Builder UI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="pt-[64px]">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}

