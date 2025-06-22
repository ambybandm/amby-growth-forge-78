
import { CheckCircle } from "lucide-react";

const Benefits = () => {
  const benefitSections = [
    {
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
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            How You Can Benefit
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Tailored solutions for different roles and responsibilities
          </p>
        </div>

        <div className="space-y-20">
          {benefitSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-normal text-gray-900 mb-12 text-center">
                {section.title}
              </h3>

              <div className="space-y-8">
                {section.benefits.map((benefit, benefitIndex) => (
                  <div key={benefitIndex} className="flex items-start border-b border-gray-100 pb-8 last:border-b-0">
                    <CheckCircle className="h-5 w-5 text-gray-400 mt-1 mr-4 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-normal text-gray-900 mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-gray-600 leading-relaxed font-light">
                        {benefit.description}
                      </p>
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
