import React from "react";
import Link from "next/link";
import Heading from "@/components/ui/Heading";

export default function NotFound() {
  return (
    <div className="bg-backColor min-h-screen flex flex-col items-center justify-center p-8">
      <Heading
        title="404 - Page not found"
        variant="main"
        className="text-2xl sm:text-3xl mb-4 text-center"
      />
      <p className="text-gray font-avenir text-center mb-6">
        The page you are looking for does not exist.
      </p>
      <Link
        href="/"
        className="px-6 py-3 bg-primary text-white rounded-[4px] font-avenir font-[500] hover:opacity-90"
      >
        Back to Dashboard
      </Link>
    </div>
  );
}
