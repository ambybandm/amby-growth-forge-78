
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Lead Generation",
      description: "We deliver leads that actually converts so that you can focus on closing, not chasing"
    },
    {
      title: "Sales",
      description: "We don't stop at leads, we convert, we deliver revenues. We love accountability"
    },
    {
      title: "Social Media Growth",
      description: "Making Brands visible, valuable & viral - consistently"
    },
    {
      title: "Performance Ads",
      description: "We deliver winning ads to improve your funnel metrics."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            End-to-end growth solutions that drive real results
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="group">
              <h3 className="text-xl font-normal text-gray-900 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                {service.description}
              </p>
              <Button variant="ghost" className="text-gray-900 hover:text-black p-0 font-normal text-sm">
                Know more
                <ArrowRight className="ml-2 h-3 w-3" />
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
