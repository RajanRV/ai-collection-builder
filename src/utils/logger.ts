/**
 * Simple logger utility. Can be extended to send logs to a service in production.
 */
function log(level: "error" | "warn" | "info", message: string, data?: unknown) {
  if (process.env.NODE_ENV === "development") {
    const fn = level === "error" ? console.error : level === "warn" ? console.warn : console.log;
    if (data !== undefined) {
      fn(message, data);
    } else {
      fn(message);
    }
  }
}

export const logger = {
  error: (message: string, data?: unknown) => log("error", message, data),
  warn: (message: string, data?: unknown) => log("warn", message, data),
  info: (message: string, data?: unknown) => log("info", message, data),
};
