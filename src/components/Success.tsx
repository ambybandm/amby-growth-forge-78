
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, DollarSign, Target, Play } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

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
    <section className="py-20 bg-gray-100 font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Success with Amby
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            #ResultsSpeakMoreThanWords
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* CodeBegun Project Layout */}
          <Card className="mb-12 bg-white border border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <span className="text-black text-4xl font-bold italic mr-4">
                  #RecentProject
                </span>
                <span className="text-black text-4xl font-bold mr-4">-</span>
                <h3 className="text-4xl font-bold text-black">CodeBegun</h3>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left Column - Project Info */}
                <div>
                  <div className="mb-8">
                    <h4 className="text-2xl font-semibold text-black mb-2">Service provided:</h4>
                    <p className="text-black leading-relaxed text-lg mb-4">
                      Revenue generation<br />
                      <span className="text-black font-medium">
                        #GeneratedLeads #HandledSales #ConvertedLeads #ConductedWebinars #DeliveredRevenues
                      </span>
                    </p>
                  </div>

                  <div>
                    <h4 className="text-2xl font-semibold text-black mb-6">Key highlights:</h4>
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Users className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-4xl font-bold text-black mb-1">4</div>
                          <p className="text-gray-700 text-lg">Full batches admissions closed in just 1.5 months</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <DollarSign className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-4xl font-bold text-black mb-1">1/5th</div>
                          <p className="text-gray-700 text-lg">Acquired customers at 1/5th of market avg cost</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Target className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                        <div>
                          <div className="text-4xl font-bold text-black mb-1">1/4th</div>
                          <p className="text-gray-700 text-lg">Generated leads at 1/4th of market avg cost</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Column - Media Collage */}
                <div className="space-y-4">
                  <div 
                    className="bg-black text-white p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full aspect-video flex flex-col items-center justify-center border border-black rounded-lg relative overflow-hidden h-64"
                    onClick={handleVideoClick}
                  >
                    <img 
                      src="/lovable-uploads/fd34aeb5-f0cc-4b72-9eb0-c1e12e0fa2e0.png" 
                      alt="Video thumbnail" 
                      className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                      <Play className="h-20 w-20 text-white" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <img 
                      src="/lovable-uploads/3511d400-61fa-43ff-a2fd-290b363961e7.png" 
                      alt="CodeBegun team meeting" 
                      className="w-full h-40 object-cover border border-gray-200 rounded"
                    />
                    <img 
                      src="/lovable-uploads/659b5bf7-c858-4e82-b7cc-f4c004c5e7d0.png" 
                      alt="CodeBegun celebration event" 
                      className="w-full h-40 object-cover border border-gray-200 rounded"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Case Studies Slider */}
          <Card className="bg-white border border-gray-200 shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-black mb-8 text-center">Case studies</h4>
              <Carousel className="w-full max-w-5xl mx-auto">
                <CarouselContent>
                  {caseStudies.map((study, index) => (
                    <CarouselItem key={index} className="md:basis-1/2">
                      <div 
                        className="flex items-center justify-center p-8 bg-white border border-gray-200 relative overflow-hidden min-h-[250px] rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300"
                        style={{
                          backgroundImage: `url(${study.bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                        onClick={() => handleCaseStudyClick(study.title)}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                        <div className="relative z-10 flex items-center text-center">
                          <TrendingUp className="h-8 w-8 text-white mr-4 flex-shrink-0" />
                          <span className="text-white font-semibold text-xl">{study.title}</span>
                        </div>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Success;
