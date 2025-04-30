// sentry.client.config.js
import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "",

  tracesSampleRate: 1.0, // Adjust for production
  debug: false, // Set to true for debugging during development
});
