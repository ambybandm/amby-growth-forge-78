
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, DollarSign, Target } from "lucide-react";

const Success = () => {
  const highlights = [
    {
      icon: Users,
      number: "4",
      text: "Full Batches Admissions Closed in just 1.5 months",
      color: "text-blue-500"
    },
    {
      icon: DollarSign,
      number: "1/5th",
      text: "Acquired Customers at 1/5th of market avg cost",
      color: "text-green-500"
    },
    {
      icon: Target,
      number: "1/4th",
      text: "Generated leads at 1/4th of market avg cost",
      color: "text-purple-500"
    }
  ];

  const caseStudies = [
    "Successful campaigns across multiple languages",
    "Sales webinar optimised - edtech",
    "Copywriting success",
    "Websites optimised for conversions"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Success with Amby
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real results for real businesses
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Card className="mb-12 bg-gradient-to-br from-blue-50 to-purple-50 border-0 shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-center mb-6">
                <Badge className="bg-blue-600 text-white px-4 py-1 text-sm font-semibold mr-4">
                  Recent Project
                </Badge>
                <h3 className="text-2xl font-bold text-gray-900">CodeBegun</h3>
              </div>
              
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">Service Provided:</h4>
                <p className="text-gray-600 leading-relaxed">
                  Offered revenue generation service • Generated leads • Conducted webinars • Handled sales • Delivered revenues
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-800 mb-6">Key Highlights:</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {highlights.map((highlight, index) => (
                    <div key={index} className="bg-white rounded-lg p-6 shadow-md text-center">
                      <highlight.icon className={`h-8 w-8 ${highlight.color} mx-auto mb-3`} />
                      <div className={`text-3xl font-bold ${highlight.color} mb-2`}>
                        {highlight.number}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {highlight.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-gray-50 to-white border-0 shadow-lg">
            <CardContent className="p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">Case Studies</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {caseStudies.map((study, index) => (
                  <div key={index} className="flex items-center p-4 bg-white rounded-lg shadow-sm">
                    <TrendingUp className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{study}</span>
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
