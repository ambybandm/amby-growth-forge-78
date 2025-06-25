
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
          <div className="bg-blue-700 rounded-2xl p-8 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-2">Email us:</h4>
                <p className="text-blue-100">teja@ambymc.com</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Call us:</h4>
                <p className="text-blue-100">+91 8333012936</p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Chat us:</h4>
                <div className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2 text-green-400" />
                  <span className="text-blue-100 cursor-pointer hover:text-white">WhatsApp</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Visit us:</h4>
                <p className="text-blue-100">Rajapushpa, Financial district, Hyderabad, 500032</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
