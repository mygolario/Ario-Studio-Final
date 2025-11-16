import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ServicesOverviewSection from "@/components/sections/ServicesOverviewSection";
import FeaturedPortfolioSection from "@/components/sections/FeaturedPortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import SocialProofSection from "@/components/sections/SocialProofSection";
import FinalCTASection from "@/components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <AboutSection />
      <ServicesOverviewSection />
      <FeaturedPortfolioSection />
      <ProcessSection />
      <SocialProofSection />
      <FinalCTASection />
    </div>
  );
}

