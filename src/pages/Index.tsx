
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import WhyAmby from "@/components/WhyAmby";
import Success from "@/components/Success";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <WhyAmby />
      <Success />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
