import { finalCta } from "../content";

export default function FinalCTASection() {
  return (
    <section
      className="section-padding bg-navy-700"
      aria-labelledby="final-cta-heading"
      id="booking"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h2
          id="final-cta-heading"
          className="text-2xl md:text-3xl font-bold text-white leading-relaxed mb-4 whitespace-pre-line"
        >
          {finalCta.heading}
        </h2>

        <p className="text-white/80 text-base md:text-lg mb-10">
          {finalCta.subText}
        </p>

        <a
          href="#booking"
          className="cta-button text-lg md:text-xl px-10 py-5"
          data-cta="final"
          role="button"
        >
          {finalCta.ctaText}
          <svg
            className="ml-2 w-5 h-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </a>

        <p className="text-white/50 text-xs mt-4">
          {finalCta.note}
        </p>
      </div>
    </section>
  );
}
