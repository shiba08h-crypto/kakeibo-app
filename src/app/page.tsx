import HeroSection from "./lp/components/HeroSection";
import ProblemSection from "./lp/components/ProblemSection";
import CoreValueSection from "./lp/components/CoreValueSection";
import FeaturesSection from "./lp/components/FeaturesSection";
import HowItWorksSection from "./lp/components/HowItWorksSection";
import SocialProofSection from "./lp/components/SocialProofSection";
import PricingSection from "./lp/components/PricingSection";
import FAQSection from "./lp/components/FAQSection";
import FinalCTASection from "./lp/components/FinalCTASection";
import FooterSection from "./lp/components/FooterSection";
import MobileFixedCTA from "./lp/components/MobileFixedCTA";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CoreValueSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SocialProofSection />
      <PricingSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
      <MobileFixedCTA />
    </main>
  );
}
