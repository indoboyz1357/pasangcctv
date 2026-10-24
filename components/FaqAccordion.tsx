"use client";

import { useState } from "react";
import type { FaqItem } from "@/content/faq";

interface FaqAccordionProps {
  items: FaqItem[];
}

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="card overflow-hidden">
          <button
            id={`faq-btn-${i}`}
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
            className="w-full flex items-center justify-between gap-4 text-left py-1"
          >
            <span className="font-semibold text-white text-sm sm:text-base">
              {item.question}
            </span>
            <span
              className={`text-accent transition-transform duration-300 flex-shrink-0 ${
                openIndex === i ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </span>
          </button>

          <div
            id={`faq-panel-${i}`}
            role="region"
            aria-labelledby={`faq-btn-${i}`}
            className={`text-text-secondary text-sm leading-relaxed overflow-hidden transition-all duration-300 ${
              openIndex === i ? "max-h-80 pt-3" : "max-h-0"
            }`}
          >
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  );
}
