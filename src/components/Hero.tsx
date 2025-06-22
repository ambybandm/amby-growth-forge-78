
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h1 className="text-2xl md:text-3xl font-light text-gray-900 mb-4 tracking-wider">
              AMBY
            </h1>
            <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight text-gray-900">
              The Missing Team Behind Your Growth
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 font-light">
              Leads. Sales. Content Creation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-3 text-base font-normal rounded-none border-0">
              Book Our Service
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button variant="outline" size="lg" className="border border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-3 text-base font-normal rounded-none">
              <Play className="mr-2 h-4 w-4" />
              Free Strategy Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-20">
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">100+</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">4X</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-light text-gray-900 mb-2">1/5th</div>
              <div className="text-gray-500 text-sm uppercase tracking-wide">Cost Per Acquisition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
