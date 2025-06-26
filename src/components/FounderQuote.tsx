
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 bg-white text-black font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="bg-gray-100 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/3f6a2d9c-09dc-4285-bf37-0d43abbc314f.png" 
                  alt="Teja Undavalli, Founder" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="flex-1 text-left">
                <blockquote className="text-xl md:text-2xl font-medium italic mb-4 text-black">
                  "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
                </blockquote>
                <cite className="text-gray-600 font-semibold mb-4 block">
                  - Teja Undavalli, Founder, Amby
                </cite>
                <div className="flex flex-col sm:flex-row gap-6 text-left">
                  <span 
                    className="text-black hover:text-blue-600 cursor-pointer text-lg font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-600 transition-colors"
                    onClick={() => handleNavigate('Our mission')}
                  >
                    Our mission
                  </span>
                  <span 
                    className="text-black hover:text-blue-600 cursor-pointer text-lg font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-600 transition-colors"
                    onClick={() => handleNavigate('Our core values')}
                  >
                    Our core values
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Redesigned Claim Your Free Growth Audit Section */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-12 text-center border border-blue-100">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Claim your free growth audit
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Discuss your growth strategy and challenges and listen to our unique solutions
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 mb-6"
              onClick={handleFreeAudit}
            >
              Free growth audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <div className="flex items-center justify-center space-x-8 text-sm text-gray-600">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                <span>30 min discussion</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                <span>30k worth</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
