
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gray-900 text-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-light mb-8">
            Ready to Accelerate Your Growth?
          </h2>
          <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-light">
            Join successful businesses that chose AMBY for their growth journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 text-base font-normal rounded-none">
              Book Our Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-base font-normal rounded-none">
              <Calendar className="mr-2 h-4 w-4" />
              Free Strategy Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div>
              <div className="text-lg font-normal text-white mb-2">No Setup Fees</div>
              <div className="text-gray-400 text-sm font-light">Get started immediately</div>
            </div>
            <div>
              <div className="text-lg font-normal text-white mb-2">Results in 30 Days</div>
              <div className="text-gray-400 text-sm font-light">See measurable growth</div>
            </div>
            <div>
              <div className="text-lg font-normal text-white mb-2">Full Transparency</div>
              <div className="text-gray-400 text-sm font-light">Weekly detailed reports</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
