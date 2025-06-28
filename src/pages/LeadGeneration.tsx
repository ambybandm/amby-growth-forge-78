
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Target, Users, TrendingUp, CheckCircle, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

const LeadGeneration = () => {
  const features = [
    "Meta Ads & Google Ads Management",
    "Custom Landing Page Creation",
    "Lead Tracking & Analytics",
    "A/B Testing for Ad Creatives",
    "Conversion Rate Optimization",
    "Video & Poster Ad Production"
  ];

  const benefits = [
    { icon: Target, title: "Qualified Leads", description: "We focus on quality over quantity, delivering leads that actually convert" },
    { icon: Users, title: "Targeted Audience", description: "Precise targeting to reach your ideal customers" },
    { icon: TrendingUp, title: "Improve Funnel Metrics", description: "Scalable solutions to improve funnel metrics" }
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
            <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-8">
              <Target className="h-10 w-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
              Lead Generation
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              We deliver leads that actually convert so that you can focus on closing, not chasing
            </p>
            <div className="flex flex-wrap gap-3 justify-center mb-12">
              {["#PaidCampaigns", "#MetaAds", "#GoogleAds", "#AdCreatives", "#LandingPage", "#LeadTracking"].map((tag, index) => (
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
            
            {/* CTA Buttons moved here */}
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
            <h2 className="text-4xl font-bold text-center text-black mb-12">
              Why Choose Our Lead Generation?
            </h2>
            
            {/* Number Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">1/4th</div>
                <div className="text-lg text-gray-600">Cost per lead</div>
              </div>
              <div className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">1200+</div>
                <div className="text-lg text-gray-600">Ad creatives delivered</div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
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

      {/* CTA Section */}
      <section className="py-20 bg-black text-white">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Generate Quality Leads?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your lead generation strategy and start driving results
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

export default LeadGeneration;
