
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import HowItWorks from '@/components/HowItWorks';
import FeatureSection from '@/components/FeatureSection';
import AICapabilities from '@/components/AICapabilities';
import WhyTimeDive from '@/components/WhyTimeDive';
import Integrations from '@/components/Integrations';
import PricingSection from '@/components/PricingSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <FeatureSection />
        <AICapabilities />
        <WhyTimeDive />
        <Integrations />
        <PricingSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
