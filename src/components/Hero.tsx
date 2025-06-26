import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.querySelector('section:has(h2:contains("Our services"))') || document.querySelector('[id*="services"]') || document.querySelector('section:nth-of-type(2)');
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const scrollToCTA = () => {
    const ctaSection = document.querySelector('section:has(h2:contains("Ready to accelerate"))') || document.querySelector('[class*="bg-black"]');
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleBookService = () => {
    window.open('https://calendly.com/ambymarcom/30min', '_blank');
  };
  const handleFreeAudit = () => {
    window.open('https://calendly.com/ambybandm/schedule-a-call', '_blank');
  };
  return <section className="min-h-screen bg-white text-black flex flex-col relative overflow-hidden font-lexend">
      {/* Header */}
      <header className="w-full py-4 md:py-6 px-4 md:px-6 border-b border-black">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/e1768634-31db-4374-a138-5b36403ead96.png" alt="Amby" className="h-8 md:h-12 w-auto" />
          </div>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold bg-transparent" onClick={scrollToServices}>
                Our Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold bg-transparent" onClick={scrollToCTA}>
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-6">
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 md:mb-8">
              <h2 className="font-bold mb-4 md:mb-6 leading-tight text-black text-center sm:text-5xl md:text-6xl lg:text-7xl text-6xl xl:text-7xl">
                The missing team<br />behind<br />your growth.
              </h2>
              <p className="md:text-xl text-black mb-6 md:mb-8 max-w-2xl mx-auto px-px lg:text-2xl text-base">Leads. Sales. Content creation.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto" onClick={handleBookService}>
                Book our service
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold bg-transparent w-full sm:w-auto" onClick={handleFreeAudit}>
                Free growth audit
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mt-12 md:mt-16 px-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">4X</div>
                <div className="text-black text-sm md:text-base">Revenue growth</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">1/5th</div>
                <div className="text-black text-sm md:text-base">Cost per acquisition</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-black mb-2">1 Lakh+</div>
                <div className="text-black text-sm md:text-base">Quality leads generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;