
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, Youtube } from "lucide-react";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const Success = () => {
  const highlights = [
    {
      icon: Users,
      number: "4",
      text: "Full batches admissions closed in just 1.5 months",
      color: "text-white"
    },
    {
      icon: DollarSign,
      number: "1/5th",
      text: "Acquired customers at 1/5th of market avg cost",
      color: "text-white"
    },
    {
      icon: Target,
      number: "1/4th",
      text: "Generated leads at 1/4th of market avg cost",
      color: "text-white"
    }
  ];

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

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=DVd0PiOgiEo', '_blank');
  };

  return (
    <section className="py-20 bg-white font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Success with Amby
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Real results for real businesses
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Modern CodeBegun Project Layout */}
          <Card className="mb-12 bg-white border border-gray-200 shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                {/* Left Column - Project Info */}
                <div className="lg:col-span-2 p-8">
                  <div className="flex items-center mb-6">
                    <Badge className="bg-black text-white px-4 py-2 text-sm font-semibold mr-4">
                      Recent project
                    </Badge>
                    <h3 className="text-3xl font-bold text-black">CodeBegun</h3>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-xl font-semibold text-black mb-4">Service provided:</h4>
                    <p className="text-black leading-relaxed text-lg">
                      Offered revenue generation service • Generated leads • Conducted webinars • Handled sales • Delivered revenues
                    </p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-black mb-6">Key highlights:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {highlights.map((highlight, index) => (
                        <div key={index} className="bg-black text-white p-6 rounded-lg text-center">
                          <highlight.icon className={`h-8 w-8 ${highlight.color} mx-auto mb-3`} />
                          <div className={`text-3xl font-bold ${highlight.color} mb-2`}>
                            {highlight.number}
                          </div>
                          <p className="text-white text-sm leading-relaxed">
                            {highlight.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Column - Media */}
                <div className="bg-gray-50 p-8 flex flex-col justify-center">
                  <div 
                    className="bg-black text-white p-8 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full aspect-video flex flex-col items-center justify-center border border-black rounded-lg mb-4"
                    onClick={handleVideoClick}
                  >
                    <Youtube className="h-16 w-16 mb-4" />
                    <h4 className="text-xl font-semibold mb-2 text-center">Watch case study</h4>
                    <p className="text-sm text-center opacity-80">CodeBegun success story</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <img 
                      src="/lovable-uploads/3511d400-61fa-43ff-a2fd-290b363961e7.png" 
                      alt="CodeBegun team meeting" 
                      className="w-full h-20 object-cover border border-gray-200 rounded"
                    />
                    <img 
                      src="/lovable-uploads/659b5bf7-c858-4e82-b7cc-f4c004c5e7d0.png" 
                      alt="CodeBegun celebration event" 
                      className="w-full h-20 object-cover border border-gray-200 rounded"
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
                    <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                      <div 
                        className="flex items-center justify-center p-8 bg-white border border-gray-200 relative overflow-hidden min-h-[200px] rounded-lg"
                        style={{
                          backgroundImage: `url(${study.bgImage})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center',
                          backgroundRepeat: 'no-repeat'
                        }}
                      >
                        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                        <div className="relative z-10 flex items-center text-center">
                          <TrendingUp className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                          <span className="text-white font-semibold text-lg">{study.title}</span>
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
