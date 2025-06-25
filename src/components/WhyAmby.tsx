
import { Rocket, Settings, BarChart3, Flame } from "lucide-react";

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
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
      </div>
    </section>
  );
};

export default WhyAmby;
