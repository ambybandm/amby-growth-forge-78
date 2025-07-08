
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Share2, Zap, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import winningAdCreativesBg from "@/assets/winning-ad-creatives-bg.jpg";
import revenueGenerationBg from "@/assets/revenue-generation-bg.jpg";

const Services = () => {
  const navigate = useNavigate();
  
  const services = [
    {
      icon: Target,
      title: "Lead generation",
      description: "We deliver leads that actually converts so that you can focus on closing, not chasing",
      tags: ["#PaidCampaigns", "#MetaAds", "#GoogleAds", "#AdCreatives", "#LandingPage", "#LeadTracking"],
      backgroundImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      route: "/lead-generation"
    },
    {
      icon: TrendingUp,
      title: "Revenue generation",
      description: "We don't stop at leads, we convert, we deliver revenues. We love accountability",
      tags: ["#LeadGeneration", "#SalesScripts", "#SalesWebinars", "#ConversionOptimization", "#FullFunnelExecution"],
      backgroundImage: revenueGenerationBg,
      route: "/revenue-generation"
    },
    {
      icon: Share2,
      title: "Social media growth",
      description: "Making brands visible, valuable & viral - consistently",
      tags: ["#PageManagement", "#PersonalBranding", "#ContentCalendar", "#ReelsAndShorts", "#AIContentCreation"],
      backgroundImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      route: "/social-media-growth"
    },
    {
      icon: Zap,
      title: "Winning ad creatives",
      description: "We deliver winning ads to improve your funnel metrics.",
      tags: ["#AdsStrategy", "#HighConversionAds", "#VideoAds", "#PosterAds"],
      backgroundImage: winningAdCreativesBg,
      route: "/winning-ad-creatives"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  return (
    <section className="py-12 md:py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4">
            Our services
          </h2>
          <p className="text-lg md:text-xl text-black font-semibold max-w-2xl mx-auto">
            #DriveRealResults
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 bg-white relative overflow-hidden cursor-pointer"
              onClick={() => handleServiceClick(service.route)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60" />
              <CardContent className="p-6 md:p-8 relative z-10">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center mb-4 md:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-6 w-6 md:h-8 md:w-8 text-black" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4 md:mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-white bg-opacity-20 text-white px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-white hover:text-gray-300 p-0 font-semibold text-sm md:text-base">
                  Know more
                  <ArrowRight className="ml-2 h-3 w-3 md:h-4 md:w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
