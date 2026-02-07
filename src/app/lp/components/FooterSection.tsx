import { footer } from "../content";

export default function FooterSection() {
  return (
    <footer className="bg-navy-900 px-5 py-10" role="contentinfo">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <p className="text-white font-bold text-lg">{footer.serviceName}</p>
          <p className="text-white/50 text-xs mt-1">{footer.tagline}</p>
        </div>

        <nav
          className="flex flex-wrap justify-center gap-4 mb-6"
          aria-label="フッターリンク"
        >
          {footer.links.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-white/40 text-xs hover:text-white/70 transition-colors underline-offset-2 hover:underline"
            >
              {link.text}
            </a>
          ))}
        </nav>

        <p className="text-white/30 text-xs text-center">
          {footer.copyright}
        </p>
      </div>
    </footer>
  );
}
