import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

const Hero = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToServices = () => {
    // Find the Services section by looking for the heading text
    const headings = document.querySelectorAll('h2');
    let servicesSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('our services')) {
        servicesSection = heading.closest('section');
      }
    });
    
    if (servicesSection) {
      servicesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback - scroll to approximately where services should be
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToCTA = () => {
    // Find the CTA section by looking for the heading text
    const headings = document.querySelectorAll('h2');
    let ctaSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('ready to accelerate')) {
        ctaSection = heading.closest('section');
      }
    });
    
    if (ctaSection) {
      ctaSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback - scroll to near bottom of page
      window.scrollTo({
        top: document.documentElement.scrollHeight - window.innerHeight - 200,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const scrollToCaseStudies = () => {
    const headings = document.querySelectorAll('h2');
    let caseStudiesSection = null;
    
    headings.forEach(heading => {
      if (heading.textContent?.toLowerCase().includes('success with amby')) {
        caseStudiesSection = heading.closest('section');
      }
    });
    
    if (caseStudiesSection) {
      caseStudiesSection.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const handleBookService = () => {
    window.open('https://calendly.com/ambymarcom/30min', '_blank');
  };

  const handleFreeAudit = () => {
    window.open('https://calendly.com/ambybandm/schedule-a-call', '_blank');
  };

  const handleServiceNavigation = (path: string) => {
    window.location.href = path;
    setIsMobileMenuOpen(false);
  };

  return (
    <section className="min-h-screen bg-white text-black flex flex-col relative overflow-hidden font-lexend">
      {/* Header */}
      <header className="w-full py-4 md:py-6 px-4 md:px-6 border-b border-black relative">
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex-shrink-0">
            <img src="/lovable-uploads/e1768634-31db-4374-a138-5b36403ead96.png" alt="Amby" className="h-8 md:h-12 w-auto" />
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white hover:border-black font-semibold bg-transparent" onClick={scrollToServices}>
              Our services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white hover:border-black font-semibold bg-transparent" onClick={scrollToCTA}>
              Contact us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-black z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="space-y-4">
                <div>
                  <button className="w-full text-left py-2 px-4 hover:bg-gray-100 font-medium" onClick={scrollToServices}>
                    Our services
                  </button>
                  <div className="ml-4 space-y-2 mt-2">
                    <button className="block w-full text-left py-1 px-4 text-sm text-gray-600 hover:text-black" onClick={() => handleServiceNavigation('/lead-generation')}>
                      Lead generation
                    </button>
                    <button className="block w-full text-left py-1 px-4 text-sm text-gray-600 hover:text-black" onClick={() => handleServiceNavigation('/revenue-generation')}>
                      Revenue generation
                    </button>
                    <button className="block w-full text-left py-1 px-4 text-sm text-gray-600 hover:text-black" onClick={() => handleServiceNavigation('/social-media-growth')}>
                      Social media growth
                    </button>
                    <button className="block w-full text-left py-1 px-4 text-sm text-gray-600 hover:text-black" onClick={() => handleServiceNavigation('/winning-ad-creatives')}>
                      Winning ad creatives
                    </button>
                  </div>
                </div>
                <button className="w-full text-left py-2 px-4 hover:bg-gray-100 font-medium" onClick={scrollToCaseStudies}>
                  Case studies
                </button>
                <button className="w-full text-left py-2 px-4 hover:bg-gray-100 font-medium" onClick={scrollToCTA}>
                  Contact us
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center px-4 md:px-6 my-[12px]">
        <div className="container mx-auto relative z-10 my-[21px]">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6 md:mb-8">
              <h2 className="md:text-6xl font-bold mb-4 md:mb-6 leading-tight text-black text-center py-0 my-0 text-6xl">
                The missing team behind your growth.
              </h2>
              <p className="text-base md:text-xl lg:text-2xl text-black mb-6 md:mb-8 max-w-2xl mx-auto px-px my-[10px]">Leads. Sales. Content creation.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-12 px-4">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold w-full sm:w-auto" onClick={handleBookService}>
                Book our service
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white hover:border-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold bg-transparent w-full sm:w-auto" onClick={handleFreeAudit}>
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
    </section>
  );
};

export default Hero;
