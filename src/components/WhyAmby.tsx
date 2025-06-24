
import { Rocket, Settings, BarChart3, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const WhyAmby = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Revenue-first, no BS approach",
      description: "We focus on what truly matters — leads, sales, and growth. No fluff, no vanity metrics",
      color: "text-white"
    },
    {
      icon: Settings,
      title: "Full-funnel execution — end to end",
      description: "From strategy to ads to sales calls — we own the entire journey so you don't have to juggle teams.",
      color: "text-white"
    },
    {
      icon: BarChart3,
      title: "Clear weekly reporting, no surprises",
      description: "Stay in the loop with transparent reports that show what's working and what's next.",
      color: "text-white"
    },
    {
      icon: Flame,
      title: "We're new, hungry & obsessed with results",
      description: "We're not riding on legacy — we're earning our name by delivering real outcomes, faster",
      color: "text-white"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Amby?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="text-left">
              <div className="flex items-start">
                <reason.icon className="h-8 w-8 text-white mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-3">
                    {reason.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {reason.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12">
          <div className="bg-gray-800 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <img 
                  src="/lovable-uploads/3f6a2d9c-09dc-4285-bf37-0d43abbc314f.png" 
                  alt="Teja Undavalli, Founder" 
                  className="w-24 h-24 rounded-full object-cover border-4 border-white"
                />
              </div>
              <div className="flex-1 text-left">
                <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
                  "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
                </blockquote>
                <cite className="text-gray-400 font-semibold">
                  - Teja Undavalli, Founder, Amby
                </cite>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button size="lg" className="bg-white text-black hover:bg-gray-200 px-8 py-4 text-lg font-semibold">
            Book our service
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent">
            Free strategy consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WhyAmby;
