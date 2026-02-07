import { howItWorks } from "../content";

export default function HowItWorksSection() {
  return (
    <section
      className="section-padding bg-cream-50"
      aria-labelledby="howitworks-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="howitworks-heading"
          className="section-heading text-navy-800 mb-14"
        >
          {howItWorks.heading}
        </h2>

        <div className="space-y-0">
          {howItWorks.steps.map((item, i) => (
            <div key={i} className="relative flex gap-5 md:gap-8">
              {/* Vertical line connector */}
              {i < howItWorks.steps.length - 1 && (
                <div
                  className="absolute left-6 top-16 w-0.5 bg-gold-500/30"
                  style={{ height: "calc(100% - 2rem)" }}
                  aria-hidden="true"
                />
              )}

              {/* Step number circle */}
              <div className="flex-shrink-0 relative z-10">
                <div className="w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center">
                  <span className="text-gold-400 text-sm font-bold">
                    {i + 1}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="pb-10">
                <span className="text-gold-600 text-xs font-bold tracking-wider uppercase mb-1 block">
                  {item.step}
                </span>
                <h3 className="text-navy-800 text-lg md:text-xl font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
