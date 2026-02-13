export const MAX_REQUIREMENT_LENGTH = 400;

export const AI_GENERATOR_MESSAGES = {
  EMPTY_REQUIREMENT: "Please describe your group gift requirement.",
  TOO_LONG: "Please keep your requirement under 400 characters.",
  GENERIC_ERROR:
    "Something went wrong while generating your donation content.",
  NETWORK_ERROR: "Network error while contacting the AI service.",
} as const;
