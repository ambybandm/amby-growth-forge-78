
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-blue-600 text-white font-lexend">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to accelerate your growth?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-2xl mx-auto">
            Join successful businesses that chose Amby for their growth journey
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg">
              Book our service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent">
              Free growth audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-6 text-white">
              <span className="text-blue-100">
                <span className="font-semibold">Email us:</span> teja@ambymc.com
              </span>
              <span className="text-blue-100">
                <span className="font-semibold">Call us:</span> +91 8333012936
              </span>
              <div className="flex items-center">
                <span className="font-semibold mr-2">Chat us:</span>
                <MessageCircle className="h-5 w-5 mr-2 text-green-400" />
                <span className="text-blue-100 cursor-pointer hover:text-white">WhatsApp</span>
              </div>
              <span className="text-blue-100">
                <span className="font-semibold">Visit us:</span> Rajapushpa, Financial district, Hyderabad, 500032
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
