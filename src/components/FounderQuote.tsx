
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
                <cite className="text-gray-600 font-semibold">
                  - Teja Undavalli, Founder, Amby
                </cite>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
            Book our service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 px-8 py-4 text-lg font-semibold bg-transparent">
            Free growth audit
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FounderQuote;
