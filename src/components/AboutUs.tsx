
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Zap, Award } from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Mission driven",
      description: "We exist to accelerate business growth through strategic lead generation and revenue optimization."
    },
    {
      icon: Users,
      title: "Client focused",
      description: "Your success is our success. We build long-term partnerships based on trust and measurable results."
    },
    {
      icon: Zap,
      title: "Innovation first",
      description: "We leverage cutting-edge strategies and technologies to stay ahead of market trends."
    },
    {
      icon: Award,
      title: "Results obsessed",
      description: "We measure our success by your growth. Every strategy is designed to deliver tangible outcomes."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            About us
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto">
            We're a growth-focused agency dedicated to helping businesses scale through strategic lead generation, revenue optimization, and comprehensive marketing solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">Our story</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Founded with a vision to bridge the gap between marketing efforts and actual revenue generation, Amby emerged from the understanding that businesses need more than just leads – they need a complete growth ecosystem.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our team combines deep industry expertise with innovative approaches to deliver measurable results. We don't just generate leads; we create sustainable growth engines that drive long-term business success.
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-black mb-6">What sets us apart</h3>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Unlike traditional agencies that focus on vanity metrics, we're obsessed with revenue impact. Our full-funnel approach ensures that every lead generated has the potential to become a paying customer.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We're new, hungry, and determined to prove ourselves through exceptional results. This drive pushes us to go above and beyond for every client, treating their success as our own.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-black mb-3">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
