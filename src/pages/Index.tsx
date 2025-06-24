
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Benefits from "@/components/Benefits";
import Success from "@/components/Success";
import AboutUs from "@/components/AboutUs";
import WhyAmby from "@/components/WhyAmby";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <Benefits />
      <Success />
      <AboutUs />
      <WhyAmby />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
