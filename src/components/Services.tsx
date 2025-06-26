
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Share2, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Lead generation",
      description: "We deliver leads that actually converts so that you can focus on closing, not chasing",
      tags: ["#PaidCampaigns", "#MetaAds", "#GoogleAds", "#AdCreatives", "#LandingPage", "#LeadTracking"],
      backgroundImage: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: TrendingUp,
      title: "Revenue generation",
      description: "We don't stop at leads, we convert, we deliver revenues. We love accountability",
      tags: ["#LeadGeneration", "#SalesScripts", "#SalesWebinars", "#ConversionOptimization", "#FullFunnelExecution"],
      backgroundImage: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Share2,
      title: "Social media growth",
      description: "Making brands visible, valuable & viral - consistently",
      tags: ["#PageManagement", "#PersonalBranding", "#ContentCalendar", "#ReelsAndShorts", "#AIContentCreation"],
      backgroundImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    },
    {
      icon: Zap,
      title: "Winning ad creatives",
      description: "We deliver winning ads to improve your funnel metrics.",
      tags: ["#AdsStrategy", "#HighConversionAds", "#VideoAds", "#PosterAds"],
      backgroundImage: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const handleServiceClick = (title: string) => {
    // Placeholder for future navigation
    console.log(`Navigating to service: ${title}`);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our services
          </h2>
          <p className="text-xl text-black font-semibold max-w-2xl mx-auto">
            #DriveRealResults
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 bg-white relative overflow-hidden cursor-pointer"
              onClick={() => handleServiceClick(service.title)}
            >
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${service.backgroundImage})` }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60" />
              <CardContent className="p-8 relative z-10">
                <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-200 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="bg-white bg-opacity-20 text-white px-3 py-1 rounded-full text-sm font-medium backdrop-blur-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="ghost" className="text-white hover:text-gray-300 p-0 font-semibold">
                  Know more
                  <ArrowRight className="ml-2 h-4 w-4" />
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
