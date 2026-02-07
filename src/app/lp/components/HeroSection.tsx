import { hero } from "../content";

function SparkleIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z"
        fill="currentColor"
      />
    </svg>
  );
}

function IBJBadge() {
  return (
    <div className="flex flex-col items-center" aria-label="IBJ正規加盟店認定バッジ">
      <div className="bg-white rounded-lg px-3 py-2 shadow-lg border border-gold-500/30">
        <div className="flex justify-center mb-0.5">
          <svg width="20" height="16" viewBox="0 0 20 16" fill="none" aria-hidden="true">
            <path d="M10 0L12.5 5H17.5L13.5 8.5L15 14L10 10.5L5 14L6.5 8.5L2.5 5H7.5L10 0Z" fill="#D4A843"/>
          </svg>
        </div>
        <div className="text-center">
          <span className="text-red-500 text-xs font-bold">♥</span>
          <span className="text-navy-800 text-sm font-bold tracking-tight">IBJ</span>
        </div>
        <div className="text-navy-800 text-[10px] font-bold text-center leading-tight">
          正規加盟店
        </div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[600px] md:min-h-[700px] bg-navy-700 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-navy-700 via-navy-700 to-navy-700/80" />

      {/* Counselor silhouette area - right side */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden md:block">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600/40 to-navy-700" />
        {/* Professional silhouette placeholder */}
        <div className="absolute right-8 bottom-0 w-[340px] h-[520px]">
          <div className="relative w-full h-full">
            {/* Head */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-28 bg-navy-600/60 rounded-full" />
            {/* Hair */}
            <div className="absolute top-2 left-1/2 -translate-x-[40%] w-28 h-36 bg-navy-800/50 rounded-t-full rounded-b-[40%]" />
            {/* Body - suit */}
            <div className="absolute top-32 left-1/2 -translate-x-1/2 w-44 h-[380px] bg-navy-600/40 rounded-t-3xl">
              {/* Suit lapels */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-20 bg-white/8 rounded-b-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Sparkle decorations */}
      <SparkleIcon className="absolute top-20 right-16 text-gold-400/30 w-4 h-4 hidden md:block" />
      <SparkleIcon className="absolute bottom-24 right-8 text-gold-400/40 w-5 h-5" />
      <SparkleIcon className="absolute top-40 left-[60%] text-white/10 w-3 h-3 hidden md:block" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-16 md:pt-24 pb-16">
        {/* IBJ Badge - top right on mobile, absolute on desktop */}
        <div className="flex justify-end mb-8 md:absolute md:top-8 md:right-8">
          <IBJBadge />
        </div>

        <div className="max-w-xl">
          <h1
            id="hero-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-6"
          >
            {hero.headline}
            <br />
            <span className="text-gold-400">{hero.headlineAccent}</span>
            <span className="text-white">{hero.headlineSuffix}</span>
          </h1>

          <p className="text-white/90 text-base sm:text-lg md:text-xl font-medium leading-relaxed mb-4 whitespace-pre-line">
            {hero.subHeadline}
          </p>

          <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
            {hero.description}
          </p>

          <p className="text-white/80 text-sm md:text-base mb-8">
            {hero.ctaNote}
          </p>

          <a
            href={`#booking`}
            className="cta-button text-base md:text-lg group"
            data-cta="hero"
            role="button"
          >
            <span>{hero.ctaText}</span>
            <svg
              className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1"
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
