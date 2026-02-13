/**
 * Validates required environment variables at runtime.
 * Call this from API routes or server code that needs these keys.
 */
export function getRequiredEnv(key: "GROQ_API_KEY" | "STABILITY_API_KEY"): string {
  const value = process.env[key];
  if (!value || value.trim() === "") {
    throw new Error(`Server misconfigured: ${key} is missing.`);
  }
  return value;
}

export function getOptionalEnv(
  key: "GROQ_MODEL",
  defaultValue: string
): string {
  return process.env[key]?.trim() || defaultValue;
}
