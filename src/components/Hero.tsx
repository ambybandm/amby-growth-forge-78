
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white text-black flex items-center justify-center relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 text-black">
              AMBY
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Missing Team Behind Your Growth
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Leads. Sales. Content Creation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Our Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Free Strategy Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">100+</div>
              <div className="text-gray-600">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">4X</div>
              <div className="text-gray-600">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-black mb-2">1/5th</div>
              <div className="text-gray-600">Cost Per Acquisition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
