
import { CheckCircle, Users, TrendingUp, Target } from "lucide-react";

const Benefits = () => {
  const benefitSections = [
    {
      icon: Users,
      title: "As a Business Owner",
      benefits: [
        {
          title: "One Partner for Both Marketing & Sales",
          description: "Avoid the headache of managing separate teams — we handle the full growth funnel."
        },
        {
          title: "Launch New Products with Confidence",
          description: "Get your first 100 customers — fast. We help you go from idea to sales."
        },
        {
          title: "Accountability That Drives Revenue",
          description: "No fluffy reports — we tie our work to actual sales and business growth."
        }
      ]
    },
    {
      icon: TrendingUp,
      title: "As a Growth Team Lead",
      benefits: [
        {
          title: "Scale Without Scaling Internal Headcount",
          description: "Think of us as your extended team — we plug into your system and deliver."
        },
        {
          title: "Predictable Lead Flow, No Bottlenecks",
          description: "We build reliable lead-gen machines so your sales pipeline stays healthy."
        },
        {
          title: "Full-Funnel Support to Hit Revenue Targets",
          description: "From awareness to conversion — we design, execute, and optimize the entire journey."
        }
      ]
    },
    {
      icon: Target,
      title: "As a Marketing Team Lead",
      benefits: [
        {
          title: "On-Demand Ad Creatives That Perform",
          description: "No bandwidth? We deliver high-converting performance creatives — fast and on-brand."
        },
        {
          title: "Ad Strategy to Execution, Done for You",
          description: "From message to media plan to delivery — we take care of the whole cycle."
        },
        {
          title: "Boost Campaign Results Without Burning Out",
          description: "We help you hit KPIs without overstretching your internal team or compromising quality"
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How You Can Benefit
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tailored solutions for different roles and responsibilities
          </p>
        </div>

        <div className="space-y-16">
          {benefitSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="max-w-6xl mx-auto">
              <div className="flex items-center justify-center mb-8">
                <div className="bg-blue-600 rounded-full p-4 mr-4">
                  <section.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">
                  {section.title}
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {section.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-green-500 mt-1 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
