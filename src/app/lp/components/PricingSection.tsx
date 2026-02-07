import { pricing, siteConfig } from "../content";

export default function PricingSection() {
  return (
    <section
      className="section-padding bg-cream-50"
      aria-labelledby="pricing-heading"
      id="pricing"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="pricing-heading"
          className="section-heading text-navy-800 mb-2"
        >
          {pricing.heading}
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          {pricing.subHeading}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {pricing.plans.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-2xl p-6 ${
                plan.recommended
                  ? "bg-navy-700 text-white border-2 border-gold-500 shadow-xl scale-[1.02]"
                  : "bg-white text-navy-800 border border-gray-200 shadow-sm"
              }`}
            >
              {plan.recommended && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="bg-gold-500 text-navy-800 text-xs font-bold px-4 py-1 rounded-full whitespace-nowrap">
                    一番人気
                  </span>
                </div>
              )}

              <h3
                className={`text-lg font-bold mb-4 text-center ${
                  plan.recommended ? "text-white" : "text-navy-800"
                }`}
              >
                {plan.name}
              </h3>

              {/* Monthly fee */}
              <div className="text-center mb-1">
                <span className={`text-xs ${plan.recommended ? "text-white/60" : "text-gray-400"}`}>
                  月額
                </span>
              </div>
              <div className="text-center mb-4">
                <span
                  className={`text-3xl font-bold ${
                    plan.recommended ? "text-gold-400" : "text-navy-700"
                  }`}
                >
                  ¥{plan.monthlyFee}
                </span>
                <span className={`text-sm ${plan.recommended ? "text-white/60" : "text-gray-400"}`}>
                  /月
                </span>
              </div>

              {/* Registration fee */}
              <div className="text-center mb-6">
                <span className={`text-xs ${plan.recommended ? "text-white/50" : "text-gray-400"}`}>
                  入会金：¥{plan.registrationFee}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-6" role="list">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm">
                    <svg
                      className={`w-4 h-4 mt-0.5 flex-shrink-0 ${
                        plan.recommended ? "text-gold-400" : "text-gold-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className={plan.recommended ? "text-white/90" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Note */}
              <p
                className={`text-xs text-center mb-5 ${
                  plan.recommended ? "text-white/50" : "text-gray-400"
                }`}
              >
                {plan.note}
              </p>

              {/* CTA */}
              <a
                href={siteConfig.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`block text-center py-3 rounded-lg font-bold text-sm transition-all ${
                  plan.recommended
                    ? "cta-button w-full"
                    : "bg-navy-700 text-white hover:bg-navy-800"
                }`}
                data-cta={`pricing-${plan.name}`}
                role="button"
              >
                無料カウンセリングへ
              </a>
            </div>
          ))}
        </div>

        {/* Notes */}
        <div className="text-center mt-8 space-y-1">
          <p className="text-gray-400 text-xs">{pricing.taxNote}</p>
          <p className="text-gray-400 text-xs">{pricing.successFee}</p>
          <p className="text-gold-700 text-sm font-medium mt-3">
            {pricing.guarantee}
          </p>
        </div>
      </div>
    </section>
  );
}
