
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Target, TrendingUp, Share2, Zap, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: "Lead Generation",
      description: "We deliver leads that actually converts so that you can focus on closing, not chasing"
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "We don't stop at leads, we convert, we deliver revenues. We love accountability"
    },
    {
      icon: Share2,
      title: "Social Media Growth",
      description: "Making Brands visible, valuable & viral - consistently"
    },
    {
      icon: Zap,
      title: "Performance Ads",
      description: "We deliver winning ads to improve your funnel metrics."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            End-to-end growth solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-200 bg-white">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-black mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button variant="ghost" className="text-black hover:text-gray-700 p-0 font-semibold">
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
