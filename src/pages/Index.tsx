
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import CoreValue from "@/components/CoreValue";
import Benefits from "@/components/Benefits";
import Success from "@/components/Success";
import WhyAmby from "@/components/WhyAmby";
import FounderQuote from "@/components/FounderQuote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import WhatsAppChat from "@/components/WhatsAppChat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <CoreValue />
      <Benefits />
      <Success />
      <WhyAmby />
      <FounderQuote />
      <CTA />
      <Footer />
      <WhatsAppChat />
    </div>
  );
};

export default Index;
