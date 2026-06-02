"use client";

import { useEffect } from "react";

export default function GoogleConversion() {
  useEffect(() => {
    window.gtag?.("event", "conversion", {
      send_to: "AW-17899557039/1hVUCIPj7LccEK-hltdC",
    });
  }, []);

  return null;
}