
import { Button } from "@/components/ui/button";
import { ArrowRight, Award, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FounderQuote = () => {
  const navigate = useNavigate();

  const handleFreeAudit = () => {
    window.open('https://calendly.com/ambybandm/schedule-a-call', '_blank');
  };

  const handleNavigate = (section: string) => {
    if (section === 'Our mission') {
      navigate('/our-mission');
    } else if (section === 'Our core values') {
      navigate('/our-core-values');
    }
  };

  return (
    <section className="py-20 bg-background text-foreground font-lexend">
      <div className="container mx-auto px-4 md:px-6">
        {/* Founder Quote Section */}
        <div className="text-center mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-card rounded-3xl p-8 md:p-12 shadow-xl border border-border relative overflow-hidden">
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/3f6a2d9c-09dc-4285-bf37-0d43abbc314f.png" 
                      alt="Teja Undavalli, Founder" 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-border shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground p-2 rounded-full">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold italic mb-6 text-foreground/90 leading-relaxed">
                    "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
                  </blockquote>
                  <cite className="text-foreground font-bold text-lg mb-6 block">
                    - Teja Undavalli, Founder, Amby
                  </cite>
                  
                  {/* Mission and Values Links */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <div 
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-full cursor-pointer hover:bg-primary/90 transition-all duration-300 flex items-center justify-center"
                      onClick={() => handleNavigate('Our mission')}
                    >
                      <Target className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Our mission</span>
                    </div>
                    <div 
                      className="bg-accent text-accent-foreground px-6 py-3 rounded-full cursor-pointer hover:bg-accent/90 transition-all duration-300 flex items-center justify-center"
                      onClick={() => handleNavigate('Our core values')}
                    >
                      <Award className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Our core values</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Free Growth Audit Section */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 text-center shadow-xl border border-border relative overflow-hidden">
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-background border-2 border-primary rounded-full mb-6">
                <Target className="h-8 w-8 text-primary" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Claim your free growth audit
              </h3>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
                Discuss your growth strategy and challenges and listen to our unique solutions
              </p>
              
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleFreeAudit}
                >
                  Get Free Growth Audit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-4 bg-background border border-border rounded-xl">
                  <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-foreground">30 min discussion</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-background border border-border rounded-xl">
                  <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-foreground">30k worth</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-background border border-border rounded-xl">
                  <div className="w-3 h-3 bg-primary rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-foreground">Only 10 slots/month</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
