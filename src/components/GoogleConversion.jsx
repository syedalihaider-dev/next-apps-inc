"use client";

import { useEffect } from "react";

export default function GoogleConversion() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !sessionStorage.getItem("conv_fired")
    ) {
      // Fire Google Ads conversion
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17899557039/VnxFCKO7rrscEK-hltdC",
        });
      }

      // Fire OpenAI Ads conversion
      if (typeof window.oaiq === "function") {
        window.oaiq("measure", "lead_created", { type: "customer_action" });
      }

      sessionStorage.setItem("conv_fired", "true");
    }
  }, []);

  return null;
}