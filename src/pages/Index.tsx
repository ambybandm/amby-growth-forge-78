
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Success from "@/components/Success";
import WhyAmby from "@/components/WhyAmby";
import FounderQuote from "@/components/FounderQuote";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Success />
      <WhyAmby />
      <FounderQuote />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
