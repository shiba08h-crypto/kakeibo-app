import { onlineBanner } from "../content";

export default function OnlineBannerSection() {
  return (
    <section className="bg-gold-500 py-10 md:py-14" aria-labelledby="online-heading">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <div className="flex items-center justify-center gap-3 mb-3">
          {/* Globe icon */}
          <svg
            className="w-8 h-8 md:w-10 md:h-10 text-navy-800"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
            />
          </svg>
          <h2 id="online-heading" className="text-navy-800 text-2xl md:text-3xl font-bold">
            {onlineBanner.heading}
          </h2>
        </div>

        <p className="text-navy-800 text-lg md:text-xl font-bold mb-3">
          {onlineBanner.subText}
        </p>

        <p className="text-navy-800/70 text-sm md:text-base">
          {onlineBanner.description}
        </p>
      </div>
    </section>
  );
}
