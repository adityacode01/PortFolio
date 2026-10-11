"use client";

import { useEffect, useState } from "react";

// Starts with the build-time year, then corrects itself in the browser so the footer never goes stale.
export function Year() {
  const [year, setYear] = useState(new Date().getFullYear());
  useEffect(() => setYear(new Date().getFullYear()), []);
  return <span suppressHydrationWarning>{year}</span>;
}
