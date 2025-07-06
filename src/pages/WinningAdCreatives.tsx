
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Zap, Eye, BarChart3, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import WhatsAppChat from "@/components/WhatsAppChat";

const WinningAdCreatives = () => {
  const features = [
    "Video Ads",
    "Poster Ads", 
    "Ads Strategy",
    "Continuous Optimisation"
  ];

  const mediaLinks = [
    "https://drive.google.com/file/d/1pDlbn82Aql50LNOo7pled7Lh7qoI3k82/preview",
    "https://drive.google.com/file/d/1jE3aJ6ij0EOHizZ1dwAyoecw0HYOHqFp/preview",
    "https://drive.google.com/file/d/1sHBOM55XEInP5x73W5Cd5ZHG3-6TApcA/preview",
    "https://drive.google.com/file/d/1t3kY6O2bg5FYUXbS8VrkZrT620ucyvJ3/preview",
    "https://drive.google.com/file/d/1FwTBjlqlrDctBwvaeT9sY8yA1DHKRyy4/preview",
    "https://drive.google.com/file/d/1MyqrqdPCkHpS1TzD1mZ0yc3jbwlKrKpo/preview",
    "https://drive.google.com/file/d/1EezC3eK0rI8RKJODnNZ5gY2V_dubfKcI/preview",
    "https://drive.google.com/file/d/1mgVNwP6s-G7nBV8tvFU_TdESELQWnEKT/preview",
    "https://drive.google.com/file/d/1xtyIGOKfBFqSnFG72nXfCCJWqVbRsEDZ/preview",
    "https://drive.google.com/file/d/1o9wuVsyl_s5pVsm-kYDlAZ-2p2jxMABp/preview",
    "https://drive.google.com/file/d/1fS-IHBY-Rku53m5_PsYkTmP3qE32m5-6/preview",
    "https://drive.google.com/file/d/1qVXtTHvEZpDK5K5q80BNtgpbCmrGA-4e/preview"
  ];

  const handleBookService = () => {
    window.open('https://calendly.com/ambymarcom/30min', '_blank');
  };

  const handleFreeAudit = () => {
    window.open('https://calendly.com/ambybandm/schedule-a-call', '_blank');
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/918333012936', '_blank');
  };

  const benefits = [
    { icon: Eye, title: "Attention-Grabbing", description: "Creatives that stop the scroll and capture attention instantly" },
    { icon: BarChart3, title: "Performance Driven", description: "Every creative is designed and tested for maximum performance" },
    { icon: Zap, title: "Conversion Focused", description: "Ads that don't just look good, but actually drive conversions" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="w-full py-6 px-6 border-b border-black">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/">
            <img 
              src="/lovable-uploads/e1768634-31db-4374-a138-5b36403ead96.png" 
              alt="Amby" 
              className="h-12 w-auto"
            />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-black hover:text-blue-600 font-semibold">
              Home
            </Link>
            <Button variant="outline" size="sm" className="border-2 border-black text-black hover:bg-blue-600 hover:text-white hover:border-blue-600 font-semibold bg-transparent">
              Get in touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-purple-600 flex items-center justify-center mx-auto mb-8">
              <Zap className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Winning Ad Creatives
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We deliver winning ads to improve your funnel metrics
            </p>
          </div>
        </div>
      </section>

      {/* Media Showreel Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              Our Creative Portfolio
            </h2>
            <div className="overflow-hidden">
              <div className="flex animate-scroll gap-6">
                {[...mediaLinks, ...mediaLinks].map((link, index) => (
                  <div key={index} className="flex-none w-80 h-64 bg-gray-100 rounded-lg overflow-hidden">
                    <iframe
                      src={link}
                      className="w-full h-full"
                      frameBorder="0"
                      allowFullScreen
                      title={`Creative ${index + 1}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {features.map((feature, index) => (
                <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                      <h3 className="text-lg font-semibold text-black">{feature}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold" onClick={handleBookService}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white hover:border-black px-8 py-4 text-lg font-semibold bg-transparent" onClick={handleFreeAudit}>
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              Why Our Ad Creatives Win
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Looking for Winning Creatives?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's create ad creatives that drive real performance and results
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center mb-8 md:mb-12">
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200 px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto"
                onClick={handleBookService}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-white text-white hover:bg-white hover:text-black px-6 md:px-8 py-3 md:py-4 text-base md:text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto bg-transparent"
                onClick={handleFreeAudit}
              >
                Free Consultation
                <ArrowRight className="ml-2 h-4 md:h-5 w-4 md:w-5" />
              </Button>
            </div>

            {/* Contact Information */}
            <div className="text-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 text-white">
                <div className="text-center">
                  <div className="font-semibold text-sm md:text-base">Email us</div>
                  <div className="text-gray-300 text-sm md:text-base break-all">teja@ambymc.com</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm md:text-base">Call us</div>
                  <div className="text-gray-300 text-sm md:text-base">+91 8333012936</div>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm md:text-base">Chat us</div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-gray-300 hover:text-white hover:bg-gray-800 p-2 rounded-lg transition-all duration-200"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-4 w-4 md:h-5 md:w-5 mr-2 text-green-400" />
                    WhatsApp
                  </Button>
                </div>
                <div className="text-center">
                  <div className="font-semibold text-sm md:text-base">Visit us</div>
                  <div className="text-gray-300 text-sm md:text-base">Rajapushpa, Financial district, Hyderabad, 500032</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <WhatsAppChat />
    </div>
  );
};

export default WinningAdCreatives;
