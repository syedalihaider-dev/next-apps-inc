"use client";

import { useEffect } from "react";

export default function GoogleConversion() {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      typeof window.gtag === "function" &&
      !sessionStorage.getItem("conv_fired")
    ) {
      window.gtag("event", "conversion", {
        send_to: "AW-17899557039/VnxFCKO7rrscEK-hltdC",
      });

      sessionStorage.setItem("conv_fired", "true");
    }
  }, []);

  return null;
}