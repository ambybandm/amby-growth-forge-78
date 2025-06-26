import { CheckCircle, Users, TrendingUp, Target } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Benefits = () => {
  const benefitSections = [
    {
      id: "business-owner",
      icon: Users,
      title: "As a business owner",
      benefits: [
        {
          title: "Avoid the Headache of Managing Many Teams",
          description: "We handle both marketing and sales, so you don't have to juggle different teams"
        },
        {
          title: "Get Your First 1,000 Customers — Fast",
          description: "Launch your products with confidence & kickstart your business growth"
        },
        {
          title: "Avoid Fluffy Reports — Get Real Growth",
          description: "No agency game. We focus on what truly matters: leads, sales, and revenue"
        }
      ]
    },
    {
      id: "growth-lead",
      icon: TrendingUp,
      title: "As a growth team lead",
      benefits: [
        {
          title: "Avoid Content Delays",
          description: "We deliver videos, designs, and copy on time so your teams & campaigns run smoothly."
        },
        {
          title: "Fix Funnel KPIs",
          description: "If your team can't hit their numbers, we step in, fix it & give KT"
        },
        {
          title: "Don't let limited team size stop your growth",
          description: "We can be your extended team to reach your growth targets"
        }
      ]
    },
    {
      id: "marketing-lead",
      icon: Target,
      title: "As a marketing team lead",
      benefits: [
        {
          title: "Get Ad Creatives That Actually Convert",
          description: "Struggling with poor-performing ads? We deliver creatives that drive real results."
        },
        {
          title: "Get Creatives On Time, Every Time",
          description: "Short on bandwidth? We deliver high-quality assets without delays."
        },
        {
          title: "Offload Execution, Focus on What Matters",
          description: "Too much on your plate? Hand over the work — you lead the strategy, we handle the rest."
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-white font-lexend">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How you can benefit
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="business-owner" className="w-full">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-3 gap-2 md:gap-0 mb-8 md:mb-12 bg-white">
              {benefitSections.map((section) => (
                <TabsTrigger 
                  key={section.id} 
                  value={section.id}
                  className="data-[state=active]:bg-blue-600 data-[state=active]:text-white text-black bg-gray-100 hover:bg-gray-200 py-3 md:py-4 px-4 md:px-6 text-sm md:text-base font-medium transition-all duration-200 w-full text-center"
                >
                  <section.icon className="h-4 w-4 mr-2 flex-shrink-0" />
                  <span className="truncate">{section.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {benefitSections.map((section) => (
              <TabsContent key={section.id} value={section.id} className="mt-40 md:mt-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                  {section.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="text-left">
                      <div className="flex items-start">
                        <CheckCircle className="h-6 w-6 mt-1 mr-3 flex-shrink-0 text-black" />
                        <div>
                          <h4 className="text-lg md:text-xl font-semibold mb-3 text-black">
                            {benefit.title}
                          </h4>
                          <p className="leading-relaxed text-gray-600 text-base md:text-lg">
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
