import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import CoreValueSection from "./components/CoreValueSection";
import FeaturesSection from "./components/FeaturesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import OnlineBannerSection from "./components/OnlineBannerSection";
import SocialProofSection from "./components/SocialProofSection";
import PricingSection from "./components/PricingSection";
import HowItWorksSection from "./components/HowItWorksSection";
import FAQSection from "./components/FAQSection";
import FinalCTASection from "./components/FinalCTASection";
import FooterSection from "./components/FooterSection";
import MobileFixedCTA from "./components/MobileFixedCTA";

export default function LandingPage() {
  return (
    <main>
      <HeroSection />
      <ProblemSection />
      <CoreValueSection />
      <FeaturesSection />
      <BeforeAfterSection />
      <OnlineBannerSection />
      <SocialProofSection />
      <PricingSection />
      <HowItWorksSection />
      <FAQSection />
      <FinalCTASection />
      <FooterSection />
      <MobileFixedCTA />
    </main>
  );
}
