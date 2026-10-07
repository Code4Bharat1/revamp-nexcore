"use client";

import React, { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

export const CountUp = ({ value, duration = 1.8, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.15 });

  // String parsing logic supporting floats, prefixes, and suffixes
  // Examples: "$2.8M" -> "$", "2.8", "M"; "0.1s" -> "", "0.1", "s"; "95%" -> "", "95", "%"
  const strVal = String(value ?? "");
  const match = strVal.match(/^([^\d]*?)(\d+(?:\.\d+)?)([\s\S]*)$/);

  if (!match) {
    // If no number pattern found (e.g. "Real-Time", "Auto"), render static value
    return <span className={className}>{strVal}</span>;
  }

  const prefix = match[1] || "";
  const numStr = match[2];
  const suffix = match[3] || "";

  const targetNumber = parseFloat(numStr);
  const decimals = (numStr.split(".")[1] || "").length;

  const [displayValue, setDisplayValue] = useState(
    (0).toFixed(decimals)
  );

  useEffect(() => {
    if (!isInView) {
      setDisplayValue((0).toFixed(decimals));
      return;
    }

    let startTime = null;
    let animationFrameId;

    const animateCount = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = (timestamp - startTime) / 1000;
      const progress = Math.min(elapsed / duration, 1);

      // Smooth easeOutCubic animation
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const current = easedProgress * targetNumber;

      if (decimals > 0) {
        setDisplayValue(current.toFixed(decimals));
      } else {
        setDisplayValue(Math.floor(current).toString());
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animateCount);
      } else {
        setDisplayValue(
          decimals > 0
            ? targetNumber.toFixed(decimals)
            : targetNumber.toString()
        );
      }
    };

    animationFrameId = requestAnimationFrame(animateCount);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isInView, targetNumber, decimals, duration]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`.trim()}>
      {prefix}{displayValue}{suffix}
    </span>
  );
};

export default CountUp;