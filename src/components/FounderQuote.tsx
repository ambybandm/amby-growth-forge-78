
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
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 text-black font-lexend">
      <div className="container mx-auto px-4 md:px-6">
        {/* Founder Quote Section */}
        <div className="text-center mb-16">
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
              
              <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12 relative z-10">
                <div className="flex-shrink-0">
                  <div className="relative">
                    <img 
                      src="/lovable-uploads/3f6a2d9c-09dc-4285-bf37-0d43abbc314f.png" 
                      alt="Teja Undavalli, Founder" 
                      className="w-24 h-24 md:w-32 md:h-32 rounded-full object-cover border-4 border-blue-200 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-2 rounded-full">
                      <Award className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                
                <div className="flex-1 text-center lg:text-left">
                  <blockquote className="text-xl md:text-2xl lg:text-3xl font-bold italic mb-6 text-gray-800 leading-relaxed">
                    "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
                  </blockquote>
                  <cite className="text-blue-600 font-bold text-lg mb-6 block">
                    - Teja Undavalli, Founder, Amby
                  </cite>
                  
                  {/* Mission and Values Cards */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-full cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                      onClick={() => handleNavigate('Our mission')}
                    >
                      <Target className="h-4 w-4 mr-2" />
                      <span className="font-semibold">Our mission</span>
                    </div>
                    <div 
                      className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white px-6 py-3 rounded-full cursor-pointer hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
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
          <div className="bg-white rounded-3xl p-8 md:p-12 text-center shadow-xl border border-gray-100 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-transparent to-indigo-50"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Claim your free growth audit
              </h3>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                Discuss your growth strategy and challenges and listen to our unique solutions
              </p>
              
              <div className="mb-8">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 md:px-12 py-4 md:py-5 text-lg md:text-xl font-bold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                  onClick={handleFreeAudit}
                >
                  Get Free Growth Audit
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>
              
              {/* Benefits */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
                <div className="flex flex-col items-center p-4 bg-green-50 rounded-xl">
                  <div className="w-3 h-3 bg-green-500 rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-gray-700">30 min discussion</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-blue-50 rounded-xl">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-gray-700">30k worth</span>
                </div>
                <div className="flex flex-col items-center p-4 bg-orange-50 rounded-xl">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mb-2"></div>
                  <span className="text-sm md:text-base font-semibold text-gray-700">Only 10 slots/month</span>
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
