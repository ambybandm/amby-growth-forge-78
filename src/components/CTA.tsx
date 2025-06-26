
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTA = () => {
  const handleBookService = () => {
    window.open('https://calendly.com/ambymarcom/30min', '_blank');
  };

  const handleFreeAudit = () => {
    window.open('https://calendly.com/ambybandm/schedule-a-call', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918333012936', '_blank');
  };

  return (
    <section className="py-20 bg-black text-white font-lexend">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold mb-12">
            Ready to accelerate your growth?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              onClick={handleBookService}
            >
              Book our service
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 bg-transparent"
              onClick={handleFreeAudit}
            >
              Free growth audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-white">
              <div className="text-center">
                <div className="font-semibold">Email us</div>
                <div className="text-gray-300">teja@ambymc.com</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">Call us</div>
                <div className="text-gray-300">+91 8333012936</div>
              </div>
              <div className="text-center">
                <div className="font-semibold">Chat us</div>
                <div 
                  className="text-gray-300 cursor-pointer hover:text-white flex items-center justify-center"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-4 w-4 mr-1 text-green-400" />
                  WhatsApp
                </div>
              </div>
              <div className="text-center">
                <div className="font-semibold">Visit us</div>
                <div className="text-gray-300">Rajapushpa, Financial district, Hyderabad, 500032</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
