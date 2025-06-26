
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FounderQuote = () => {
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
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <span 
                    className="text-black hover:text-blue-600 cursor-pointer text-lg font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-600 transition-colors"
                    onClick={() => console.log('Navigate to Our mission')}
                  >
                    Our mission
                  </span>
                  <span 
                    className="text-black hover:text-blue-600 cursor-pointer text-lg font-semibold underline decoration-2 underline-offset-4 hover:decoration-blue-600 transition-colors"
                    onClick={() => console.log('Navigate to Our core values')}
                  >
                    Our core values
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim Your Free Growth Audit Section */}
        <div className="text-center mb-8">
          <div className="relative inline-block mb-4">
            <h3 className="text-3xl md:text-4xl font-bold text-black">
              Claim your free growth audit
            </h3>
            <svg 
              className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-full max-w-md h-3" 
              viewBox="0 0 300 12" 
              fill="none"
            >
              <path 
                d="M10 8c50-4 100-6 150-2s100 6 130 2" 
                stroke="#3B82F6" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <p className="text-lg text-gray-600 mb-8">
            Discuss your growth strategy and challenges and listen to our unique solutions
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold mb-4">
            Free growth audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <div className="text-sm text-gray-600">
            <p>• 30 min discussion • 30k worth</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
