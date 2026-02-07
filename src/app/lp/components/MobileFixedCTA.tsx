"use client";

import { useEffect, useState } from "react";

export default function MobileFixedCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Mobile bottom bar */}
      <div
        className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ${
          visible ? "translate-y-0" : "translate-y-full"
        }`}
        role="complementary"
        aria-label="カウンセリング予約"
      >
        <div className="bg-navy-800/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-area-pb">
          <a
            href="#booking"
            className="cta-button w-full text-sm py-3"
            data-cta="mobile-fixed"
            role="button"
          >
            無料カウンセリングを予約する（30分）
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>

      {/* Desktop fixed bottom-right button */}
      <div
        className={`fixed bottom-6 right-6 z-50 hidden md:block transition-all duration-300 ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        role="complementary"
        aria-label="いますぐ問い合わせ"
      >
        <a
          href="#booking"
          className="flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-navy-800 font-bold text-sm px-6 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
          data-cta="desktop-fixed"
          role="button"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
          いますぐ問い合わせ
        </a>
      </div>
    </>
  );
}
