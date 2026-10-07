"use client";

import React from "react";

export default function ContentSection({
  children,
  className = "",
  id,
  noPadding = false,
}) {
  return (
    <section
      id={id}
      className={`bg-white rounded-3xl sm:rounded-4xl border border-slate-200/80 shadow-[0_4px_24px_rgba(6,15,40,0.03)] mb-10 overflow-hidden ${
        noPadding ? "" : "p-6 sm:p-10 md:p-12"
      } ${className}`}
    >
      {children}
    </section>
  );
}
