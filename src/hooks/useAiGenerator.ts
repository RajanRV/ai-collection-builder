import { useState, useCallback } from "react";
import type { AiGeneratorResult } from "@/types/ai-generator";
import {
  MAX_REQUIREMENT_LENGTH,
  AI_GENERATOR_MESSAGES,
} from "@/constants/ai-generator";

export function useAiGenerator() {
  const [gift, setGift] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [result, setResult] = useState<AiGeneratorResult | null>(null);
  const [showResults, setShowResults] = useState(false);

  const handleBadgeClick = useCallback((badge: string) => {
    setGift(`I'm collecting a group gift for a ${badge.toLowerCase()}`);
  }, []);

  const handleGenerate = useCallback(async () => {
    const trimmed = gift.trim();
    setError(null);
    setResult(null);

    if (!trimmed) {
      setError(AI_GENERATOR_MESSAGES.EMPTY_REQUIREMENT);
      return;
    }

    if (trimmed.length > MAX_REQUIREMENT_LENGTH) {
      setError(AI_GENERATOR_MESSAGES.TOO_LONG);
      return;
    }

    try {
      setLoading(true);
      setShowResults(false);

      const response = await fetch("/api/ai-generator", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ requirement: trimmed }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as {
          error?: string;
        } | null;
        setError(data?.error ?? AI_GENERATOR_MESSAGES.GENERIC_ERROR);
        setLoading(false);
        return;
      }

      const data = (await response.json()) as AiGeneratorResult;
      setResult(data);
      setTimeout(() => {
        setLoading(false);
        setShowResults(true);
      }, 1500);
    } catch {
      setError(AI_GENERATOR_MESSAGES.NETWORK_ERROR);
      setLoading(false);
    }
  }, [gift]);

  const handleClearInput = useCallback(() => {
    setGift("");
    setError(null);
    setResult(null);
    setShowResults(false);
    setLoading(false);
  }, []);

  return {
    gift,
    setGift,
    loading,
    error,
    result,
    showResults,
    handleBadgeClick,
    handleGenerate,
    handleClearInput,
  };
}
