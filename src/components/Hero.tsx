
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-white text-black flex flex-col relative overflow-hidden font-lexend">
      {/* Header */}
      <header className="w-full py-6 px-6 border-b border-black">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-2xl font-bold text-black">AMBY</h1>
          
          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-6 text-black">
              <span className="hover:text-gray-600 cursor-pointer">Lead generation</span>
              <span className="hover:text-gray-600 cursor-pointer">Revenue generation</span>
              <span className="hover:text-gray-600 cursor-pointer">Social media growth</span>
              <span className="hover:text-gray-600 cursor-pointer">Performance ads</span>
            </div>
            <div className="flex items-center space-x-4">
              <Button size="sm" className="bg-black hover:bg-gray-800 text-white font-semibold">
                Book our service
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold">
                Get in touch
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center">
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-black">
                The missing team behind<br />your growth.
              </h2>
              <p className="text-xl md:text-2xl text-black mb-8 max-w-2xl mx-auto">
                Leads. Sales. Content creation.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold">
                Book our service
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 text-lg font-semibold">
                Free strategy consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">4X</div>
                <div className="text-black">Revenue growth</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">1/5th</div>
                <div className="text-black">Cost per acquisition</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-black mb-2">1 Lakh+</div>
                <div className="text-black">Quality leads generated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
