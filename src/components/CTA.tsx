
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
    <section className="py-12 md:py-20 bg-primary text-primary-foreground font-lexend">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold mb-8 md:mb-12">
            Ready to accelerate your growth?
          </h2>
          
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
            <Button 
              size="lg" 
              className="bg-background text-foreground hover:bg-background/80 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
              onClick={handleBookService}
            >
              Book our service
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="border-2 border-background text-primary-foreground hover:bg-background hover:text-foreground px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 bg-transparent w-full sm:w-auto"
              onClick={handleFreeAudit}
            >
              Free growth audit
              <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
            </Button>
          </div>

          {/* Contact Information */}
          <div className="text-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-primary-foreground">
              <div className="text-center">
                <div className="font-semibold text-sm md:text-base">Email us</div>
                <div className="text-muted-foreground text-sm md:text-base break-all">teja@ambymc.com</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm md:text-base">Call us</div>
                <div className="text-muted-foreground text-sm md:text-base">+91 8333012936</div>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm md:text-base">Chat us</div>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="text-muted-foreground hover:text-primary-foreground hover:bg-background/20 p-2 rounded-lg transition-all duration-200"
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 text-accent" />
                  WhatsApp
                </Button>
              </div>
              <div className="text-center">
                <div className="font-semibold text-sm md:text-base">Visit us</div>
                <div className="text-muted-foreground text-sm md:text-base">Rajapushpa, Financial district, Hyderabad, 500032</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
