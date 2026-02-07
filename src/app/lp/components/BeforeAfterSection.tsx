import { beforeAfter } from "../content";

export default function BeforeAfterSection() {
  return (
    <section
      className="section-padding bg-cream-50"
      aria-labelledby="beforeafter-heading"
    >
      <div className="max-w-3xl mx-auto">
        <h2
          id="beforeafter-heading"
          className="section-heading text-navy-800 mb-12"
        >
          {beforeAfter.heading}
        </h2>

        {/* Before/After displayed vertically */}
        <div className="space-y-6">
          {/* Before */}
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <div className="bg-gray-100 px-6 py-3">
              <span className="text-gray-500 font-bold text-lg tracking-wider">
                {beforeAfter.before.label}
              </span>
            </div>
            <ul className="px-6 py-5 space-y-3" role="list">
              {beforeAfter.before.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-600 text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow down */}
          <div className="flex justify-center">
            <div className="w-12 h-12 rounded-full bg-gold-500 flex items-center justify-center shadow-lg">
              <svg
                className="w-6 h-6 text-navy-800"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>

          {/* After */}
          <div className="bg-navy-700 rounded-2xl overflow-hidden shadow-lg">
            <div className="bg-navy-800 px-6 py-3">
              <span className="text-gold-400 font-bold text-lg tracking-wider">
                {beforeAfter.after.label}
              </span>
            </div>
            <ul className="px-6 py-5 space-y-3" role="list">
              {beforeAfter.after.items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-white/90 text-sm md:text-base">
                  <svg
                    className="w-5 h-5 mt-0.5 flex-shrink-0 text-gold-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
