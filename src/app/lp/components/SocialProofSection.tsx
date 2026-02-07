import { socialProof } from "../content";

export default function SocialProofSection() {
  return (
    <section
      className="section-padding bg-white"
      aria-labelledby="socialproof-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="socialproof-heading"
          className="section-heading text-navy-800 mb-3"
        >
          {socialProof.heading}
        </h2>

        <p className="text-center text-gray-500 text-sm md:text-base mb-12">
          {socialProof.subHeading}
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {socialProof.stats.map((stat, i) => (
            <div
              key={i}
              className="text-center bg-navy-700 rounded-xl py-6 px-3"
            >
              <div className="flex items-baseline justify-center gap-0.5">
                <span className="text-gold-400 text-3xl md:text-4xl font-bold">
                  {stat.number}
                </span>
                <span className="text-gold-400/80 text-lg md:text-xl font-bold">
                  {stat.unit}
                </span>
              </div>
              <p className="text-white/70 text-xs md:text-sm mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials - grid layout for 5-10 people */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {socialProof.testimonials.map((item, i) => (
            <div
              key={i}
              className="bg-cream-50 border border-gray-100 rounded-xl p-5 md:p-6"
            >
              <div className="flex items-start gap-4">
                {/* Avatar */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-navy-700 flex items-center justify-center">
                  <span className="text-gold-400 font-bold text-lg">
                    {item.initial}
                  </span>
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="text-navy-800 font-bold text-sm">
                      {item.age}・{item.occupation}
                    </span>
                    <span className="bg-gold-500/10 text-gold-700 text-xs font-bold px-2 py-0.5 rounded-full">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    {item.quote}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
