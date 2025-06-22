
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join successful businesses that chose AMBY for their growth journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Our Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              <Calendar className="mr-2 h-5 w-5" />
              Free Strategy Consultation
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-200 mb-2">No Setup Fees</div>
              <div className="text-blue-100">Get started immediately</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-200 mb-2">Results in 30 Days</div>
              <div className="text-blue-100">See measurable growth</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-pink-200 mb-2">Full Transparency</div>
              <div className="text-blue-100">Weekly detailed reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
