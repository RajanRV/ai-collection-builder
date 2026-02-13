"use client";

import React from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en">
      <body className="antialiased bg-backColor min-h-screen flex flex-col items-center justify-center p-8">
        <h1 className="text-2xl font-bold text-secondary mb-4">
          Something went wrong
        </h1>
        <p className="text-gray text-center mb-6 max-w-md">{error.message}</p>
        <button
          type="button"
          onClick={reset}
          className="px-6 py-3 bg-primary text-white rounded-[4px] font-medium hover:opacity-90"
        >
          Try again
        </button>
      </body>
    </html>
  );
}
