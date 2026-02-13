/**
 * Validates that the requirement length is within the allowed limit.
 */
export function isRequirementLengthValid(
  text: string,
  maxLength: number
): boolean {
  return text.length <= maxLength;
}

/**
 * Checks if the requirement is non-empty after trimming.
 */
export function isRequirementNonEmpty(text: string): boolean {
  return text.trim().length > 0;
}
