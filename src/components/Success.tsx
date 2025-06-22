
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target, Youtube } from "lucide-react";

const Success = () => {
  const highlights = [
    {
      icon: Users,
      number: "4",
      text: "Full Batches Admissions Closed in just 1.5 months",
      color: "text-black"
    },
    {
      icon: DollarSign,
      number: "1/5th",
      text: "Acquired Customers at 1/5th of market avg cost",
      color: "text-black"
    },
    {
      icon: Target,
      number: "1/4th",
      text: "Generated leads at 1/4th of market avg cost",
      color: "text-black"
    }
  ];

  const caseStudies = [
    "Successful campaigns across multiple languages",
    "Sales webinar optimised - edtech",
    "Copywriting success",
    "Websites optimised for conversions"
  ];

  const handleVideoClick = () => {
    window.open('https://www.youtube.com/watch?v=DVd0PiOgiEo', '_blank');
  };

  return (
    <section className="py-20 bg-white">
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
                        <div key={index} className="bg-white border border-black p-4 text-center">
                          <highlight.icon className={`h-6 w-6 ${highlight.color} mx-auto mb-2`} />
                          <div className={`text-2xl font-bold ${highlight.color} mb-1`}>
                            {highlight.number}
                          </div>
                          <p className="text-black text-sm leading-relaxed">
                            {highlight.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side - YouTube video */}
                <div className="flex items-center justify-center">
                  <div 
                    className="bg-black text-white p-8 cursor-pointer hover:bg-gray-800 transition-all duration-300 w-full max-w-md aspect-video flex flex-col items-center justify-center border-2 border-black"
                    onClick={handleVideoClick}
                  >
                    <Youtube className="h-16 w-16 mb-4" />
                    <h4 className="text-lg font-semibold mb-2 text-center">Watch Case Study</h4>
                    <p className="text-sm text-center opacity-80">CodeBegun Success Story</p>
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
                  <div key={index} className="flex items-center p-4 bg-white border border-black">
                    <TrendingUp className="h-5 w-5 text-black mr-3 flex-shrink-0" />
                    <span className="text-black">{study}</span>
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
