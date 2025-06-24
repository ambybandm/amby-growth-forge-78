
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, Youtube } from "lucide-react";

const Success = () => {
  const highlights = [
    {
      icon: Users,
      number: "4",
      text: "Full Batches Admissions Closed in just 1.5 months",
      color: "text-white"
    },
    {
      icon: DollarSign,
      number: "1/5th",
      text: "Acquired Customers at 1/5th of market avg cost",
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
    <section className="py-20 bg-gray-50 font-lexend">
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
          <Card className="mb-12 bg-white border-2 border-black">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Left side - Project details */}
                <div>
                  <div className="flex items-center mb-6">
                    <Badge className="bg-black text-white px-4 py-1 text-sm font-semibold mr-4">
                      Recent Project
                    </Badge>
                    <h3 className="text-2xl font-bold text-black">CodeBegun</h3>
                  </div>
                  
                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-black mb-3">Service Provided:</h4>
                    <p className="text-black leading-relaxed">
                      Offered revenue generation service • Generated leads • Conducted webinars • Handled sales • Delivered revenues
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-black mb-6">Key Highlights:</h4>
                    <div className="grid grid-cols-1 gap-4">
                      {highlights.map((highlight, index) => (
                        <div key={index} className="bg-black text-white p-4 text-center">
                          <highlight.icon className={`h-6 w-6 ${highlight.color} mx-auto mb-2`} />
                          <div className={`text-2xl font-bold ${highlight.color} mb-1`}>
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

                {/* Right side - Media collage */}
                <div className="space-y-4">
                  {/* YouTube video */}
                  <div 
                    className="bg-black text-white p-6 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full aspect-video flex flex-col items-center justify-center border-2 border-black"
                    onClick={handleVideoClick}
                  >
                    <Youtube className="h-12 w-12 mb-3" />
                    <h4 className="text-lg font-semibold mb-2 text-center">Watch Case Study</h4>
                    <p className="text-sm text-center opacity-80">CodeBegun Success Story</p>
                  </div>

                  {/* Project Images Grid */}
                  <div className="grid grid-cols-2 gap-2">
                    <img 
                      src="/lovable-uploads/3511d400-61fa-43ff-a2fd-290b363961e7.png" 
                      alt="CodeBegun team meeting" 
                      className="w-full h-24 object-cover border border-black"
                    />
                    <img 
                      src="/lovable-uploads/659b5bf7-c858-4e82-b7cc-f4c004c5e7d0.png" 
                      alt="CodeBegun celebration event" 
                      className="w-full h-24 object-cover border border-black"
                    />
                    <img 
                      src="/lovable-uploads/4f88fc2e-9d3b-4ad6-be40-c4cfeeec3230.png" 
                      alt="CodeBegun workshop" 
                      className="w-full h-24 object-cover border border-black"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-2 border-black">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-black mb-6">Case Studies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((study, index) => (
                  <div 
                    key={index} 
                    className="flex items-center p-6 bg-white border border-black relative overflow-hidden min-h-[120px]"
                    style={{
                      backgroundImage: `url(${study.bgImage})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  >
                    <div className="absolute inset-0 bg-black bg-opacity-60"></div>
                    <div className="relative z-10 flex items-center">
                      <TrendingUp className="h-5 w-5 text-white mr-3 flex-shrink-0" />
                      <span className="text-white font-semibold">{study.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Success;
