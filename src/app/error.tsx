"use client";

import React from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="bg-backColor min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-secondary text-2xl font-glamour mb-4">
        Something went wrong
      </h1>
      <p className="text-gray font-avenir text-center mb-6 max-w-md">
        {error.message}
      </p>
      <button
        type="button"
        onClick={reset}
        className="px-6 py-3 bg-primary text-white rounded-[4px] font-avenir font-[500] hover:opacity-90"
      >
        Try again
      </button>
    </div>
  );
}
