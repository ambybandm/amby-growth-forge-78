
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, TrendingUp, DollarSign, Target, CheckCircle, MessageCircle, Users, Play } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const RevenueGeneration = () => {
  const navigate = useNavigate();
  
  const features = [
    "Full Funnel Execution",
    "Sales Script Development",
    "Conversion Optimization",
    "Revenue Tracking & Analytics",
    "Sales Webinar Creation",
    "Performance Accountability"
  ];

  const benefits = [
    { icon: DollarSign, title: "Direct Revenue Impact", description: "We focus on actual revenue, not just leads or traffic" },
    { icon: Target, title: "Conversion Focused", description: "Every strategy is designed to maximize conversions" },
    { icon: TrendingUp, title: "Proven Results", description: "Track record of delivering measurable revenue growth for clients" }
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

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=DVd0PiOgiEo', '_blank');
  };

  const handleCaseStudyClick = (title: string) => {
    const routeMap: { [key: string]: string } = {
      "Multi-language marketing campaigns": "/case-study/multi-language-campaign",
      "Educational webinar optimization": "/case-study/educational-webinar-optimization",
      "High-converting copywriting": "/case-study/high-converting-copywriting",
      "Conversion-focused website design": "/case-study/conversion-focused-website-design"
    };
    
    const route = routeMap[title];
    if (route) {
      navigate(route);
    }
  };

  const caseStudies = [
    {
      title: "Multi-language marketing campaigns",
      bgImage: "https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Educational webinar optimization",
      bgImage: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "High-converting copywriting",
      bgImage: "https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Conversion-focused website design",
      bgImage: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
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
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mx-auto mb-8">
              <TrendingUp className="h-10 w-10 text-green-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Revenue Generation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We don't stop at leads, we convert, we deliver revenues. We love accountability
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["#LeadGeneration", "#SalesScripts", "#SalesWebinars", "#ConversionOptimization", "#FullFunnelExecution"].map((tag, index) => (
                <span key={index} className="bg-gray-100 text-gray-800 px-4 py-2 rounded-full font-medium">
                  {tag}
                </span>
              ))}
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
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Button size="lg" className="bg-black hover:bg-gray-800 text-white px-8 py-4 text-lg font-semibold" onClick={handleBookService}>
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-2 border-black text-black hover:bg-black hover:text-white hover:border-black px-8 py-4 text-lg font-semibold bg-transparent" onClick={handleFreeAudit}>
                Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Recent Project Section */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-4 md:p-8">
                <div className="flex flex-col sm:flex-row items-start sm:items-center mb-4 md:mb-6 gap-2">
                  <span className="text-black text-2xl md:text-4xl font-bold italic">
                    #RecentProject
                  </span>
                  <span className="text-black text-2xl md:text-4xl font-bold hidden sm:block">-</span>
                  <h3 className="text-2xl md:text-4xl font-bold text-black">CodeBegun</h3>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                  {/* Left Column - Project Info */}
                  <div>
                    <div className="mb-6 md:mb-8">
                      <h4 className="text-xl md:text-2xl font-semibold text-black mb-2">Service provided:</h4>
                      <p className="text-black leading-relaxed text-base md:text-lg mb-4">
                        Revenue generation<br />
                        <span className="text-black font-medium text-sm md:text-base">
                          #GeneratedLeads #HandledSales #ConvertedLeads #ConductedWebinars #DeliveredRevenues
                        </span>
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xl md:text-2xl font-semibold text-black mb-4 md:mb-6">Key highlights:</h4>
                      <div className="space-y-4 md:space-y-6">
                        <div className="flex items-start">
                          <Users className="h-5 w-5 md:h-6 md:w-6 text-black mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <div className="text-2xl md:text-4xl font-bold text-black mb-1">4</div>
                            <p className="text-gray-700 text-sm md:text-lg">Full batches admissions closed in just 1.5 months</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <DollarSign className="h-5 w-5 md:h-6 md:w-6 text-black mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <div className="text-2xl md:text-4xl font-bold text-black mb-1">1/5th</div>
                            <p className="text-gray-700 text-sm md:text-lg">Acquired customers at 1/5th of market avg cost</p>
                          </div>
                        </div>
                        <div className="flex items-start">
                          <Target className="h-5 w-5 md:h-6 md:w-6 text-black mr-3 mt-1 flex-shrink-0" />
                          <div>
                            <div className="text-2xl md:text-4xl font-bold text-black mb-1">1/4th</div>
                            <p className="text-gray-700 text-sm md:text-lg">Generated leads at 1/4th of market avg cost</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column - Media Collage */}
                  <div className="space-y-4">
                    <div 
                      className="bg-black text-white p-4 md:p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full aspect-video flex flex-col items-center justify-center border border-black rounded-lg relative overflow-hidden h-48 md:h-64"
                      onClick={handleVideoClick}
                    >
                      <img 
                        src="/lovable-uploads/fd34aeb5-f0cc-4b72-9eb0-c1e12e0fa2e0.png" 
                        alt="Video thumbnail" 
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                        <Play className="h-12 w-12 md:h-20 md:w-20 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <img 
                        src="/lovable-uploads/3511d400-61fa-43ff-a2fd-290b363961e7.png" 
                        alt="CodeBegun team meeting" 
                        className="w-full h-32 md:h-40 object-cover border border-gray-200 rounded"
                      />
                      <img 
                        src="/lovable-uploads/659b5bf7-c858-4e82-b7cc-f4c004c5e7d0.png" 
                        alt="CodeBegun celebration event" 
                        className="w-full h-32 md:h-40 object-cover border border-gray-200 rounded"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-black mb-16">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center bg-white border border-gray-200 hover:shadow-lg transition-shadow">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                      <benefit.icon className="h-8 w-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-black mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Case Studies Slider */}
            <Card className="bg-white border border-gray-200 shadow-lg">
              <CardContent className="p-4 md:p-8">
                <h4 className="text-xl md:text-2xl font-bold text-black mb-6 md:mb-8 text-center">Case studies</h4>
                <Carousel className="w-full max-w-5xl mx-auto">
                  <CarouselContent>
                    {caseStudies.map((study, index) => (
                      <CarouselItem key={index} className="md:basis-1/2">
                        <div 
                          className="flex items-center justify-center p-4 md:p-8 bg-white border border-gray-200 relative overflow-hidden min-h-[200px] md:min-h-[250px] rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
                          style={{
                            backgroundImage: `url(${study.bgImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                          }}
                          onClick={() => handleCaseStudyClick(study.title)}
                        >
                          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                          <div className="relative z-10 flex items-center text-center px-2">
                            <TrendingUp className="h-6 w-6 md:h-8 md:w-8 text-white mr-3 md:mr-4 flex-shrink-0" />
                            <span className="text-white font-semibold text-base md:text-xl">{study.title}</span>
                          </div>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="hidden md:flex" />
                  <CarouselNext className="hidden md:flex" />
                </Carousel>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Drive Real Revenue?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your business and start generating revenues
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
    </div>
  );
};

export default RevenueGeneration;
