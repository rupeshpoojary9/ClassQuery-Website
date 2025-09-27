import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AiTeammateSection from '@/components/sections/ai-teammate-section';
import FeaturesSection from '@/components/sections/features-section';
import WhoItsForSection from '@/components/sections/who-its-for-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import PricingSection from '@/components/sections/pricing-section';
import FaqSection from '@/components/sections/faq-section';
import FinalCtaSection from '@/components/sections/final-cta-section';
import { AnimatedWrapper } from '@/components/animated-wrapper';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AiTeammateSection />
        <FeaturesSection />
        <WhoItsForSection />
        <TestimonialsSection />
        <PricingSection />
        <FaqSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </div>
  );
}
