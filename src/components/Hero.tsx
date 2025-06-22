
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 text-white flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1605810230434-7631ac76ec81')] bg-cover bg-center opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              AMBY
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              The Missing Team Behind Your Growth
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Leads. Sales. Content Creation.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book Our Service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300">
              <Play className="mr-2 h-5 w-5" />
              Free Strategy Consultation
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">100+</div>
              <div className="text-gray-300">Leads Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">4X</div>
              <div className="text-gray-300">Revenue Growth</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">1/5th</div>
              <div className="text-gray-300">Cost Per Acquisition</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
