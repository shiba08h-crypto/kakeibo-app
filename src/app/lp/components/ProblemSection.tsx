import React from "react";
import { problems } from "../content";

const iconMap: Record<string, React.ReactNode> = {
  smartphone: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
    </svg>
  ),
  message: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  mirror: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
  ),
  calendar: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  ),
  question: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  ),
};

export default function ProblemSection() {
  return (
    <section
      className="section-padding bg-cream-50"
      aria-labelledby="problem-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2 id="problem-heading" className="section-heading text-navy-800 mb-12">
          {problems.heading}
        </h2>

        <ul className="space-y-4" role="list">
          {problems.items.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-700/5 flex items-center justify-center text-navy-700">
                {iconMap[item.icon]}
              </div>
              <p className="text-navy-800 text-sm md:text-base leading-relaxed pt-2">
                {item.text}
              </p>
            </li>
          ))}
        </ul>

        <p className="text-center text-navy-700 font-bold text-lg mt-10">
          {problems.closing}
        </p>
      </div>
    </section>
  );
}
