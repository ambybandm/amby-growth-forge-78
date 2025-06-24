
import { CheckCircle, Users, TrendingUp, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Benefits = () => {
  const benefitSections = [
    {
      id: "business-owner",
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
      id: "growth-lead",
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
      id: "marketing-lead",
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
    <section className="py-20 bg-white font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How You Can Benefit
          </h2>
          <p className="text-xl text-black max-w-2xl mx-auto">
            Tailored solutions for different roles and responsibilities
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="business-owner" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-12 bg-white">
              {benefitSections.map((section) => (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id}
                  className="data-[state=active]:bg-black data-[state=active]:text-white text-black py-4 px-6 text-sm font-medium transition-all duration-200 hover:bg-gray-100"
                >
                  <section.icon className="h-4 w-4 mr-2" />
                  {section.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {benefitSections.map((section) => (
              <TabsContent key={section.id} value={section.id}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {section.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-left">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mt-1 mr-3 flex-shrink-0 text-black" />
                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-black">
                            {benefit.title}
                          </h4>
                          <p className="leading-relaxed text-gray-600">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
