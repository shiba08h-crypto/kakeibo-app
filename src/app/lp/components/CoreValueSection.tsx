import { coreValues, siteConfig } from "../content";

export default function CoreValueSection() {
  return (
    <section
      className="section-padding bg-navy-700"
      aria-labelledby="corevalue-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="corevalue-heading"
          className="section-heading text-white mb-14"
        >
          {coreValues.heading}
        </h2>

        <div className="space-y-8 md:space-y-10">
          {coreValues.items.map((item, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8"
            >
              <div className="flex items-start gap-4 md:gap-6">
                <div className="flex-shrink-0">
                  <span className="text-gold-400 text-3xl md:text-4xl font-bold tracking-tight">
                    {item.number}
                  </span>
                </div>
                <div>
                  <h3 className="text-white text-lg md:text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed mb-3">
                    {item.description}
                  </p>
                  <p className="text-gold-400/80 text-sm">
                    {item.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mid CTA */}
        <div className="text-center mt-12">
          <a
            href={siteConfig.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button"
            data-cta="core-value"
            role="button"
          >
            まずは無料で相談する
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
        </div>
      </div>
    </section>
  );
}
