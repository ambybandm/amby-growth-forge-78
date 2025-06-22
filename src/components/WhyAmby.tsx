
import { Rocket, Settings, BarChart3, Flame } from "lucide-react";

const WhyAmby = () => {
  const reasons = [
    {
      icon: Rocket,
      title: "Revenue-First, No BS Approach",
      description: "We focus on what truly matters — leads, sales, and growth. No fluff, no vanity metrics",
      color: "text-black"
    },
    {
      icon: Settings,
      title: "Full-Funnel Execution — End to End",
      description: "From strategy to ads to sales calls — we own the entire journey so you don't have to juggle teams.",
      color: "text-black"
    },
    {
      icon: BarChart3,
      title: "Clear Weekly Reporting, No Surprises",
      description: "Stay in the loop with transparent reports that show what's working and what's next.",
      color: "text-black"
    },
    {
      icon: Flame,
      title: "We're New, Hungry & Obsessed With Results",
      description: "We're not riding on legacy — we're earning our name by delivering real outcomes, faster",
      color: "text-black"
    }
  ];

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why AMBY?
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
            We're different because we focus on what matters most
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {reasons.map((reason, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1 border border-gray-700">
              <div className="flex items-start">
                <reason.icon className="h-12 w-12 text-white mr-6 mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-4">
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

        <div className="text-center">
          <div className="bg-gray-900 rounded-2xl p-8 max-w-4xl mx-auto border border-gray-700">
            <blockquote className="text-xl md:text-2xl font-medium italic mb-4">
              "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
            </blockquote>
            <cite className="text-gray-400 font-semibold">
              - Teja Undavalli, Founder, AMBY
            </cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyAmby;
