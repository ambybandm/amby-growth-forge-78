
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
      title: "We're new so hungry",
      description: "We're not riding on legacy — we're earning our name by delivering real outcomes, faster with our expertise",
      color: "text-white"
    }
  ];

  const highlights = [
    { number: "9", text: "years of industry experience" },
    { number: "4X", text: "Revenue growth" },
    { number: "1/5th", text: "Cost per acquisition" },
    { number: "1 Lakh+", text: "Quality leads generated" },
    { number: "1200+", text: "Creatives delivered" }
  ];

  return (
    <section className="py-20 bg-black text-white font-lexend relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Why Amby?
          </h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-gray-300">
              Our expertise
            </h3>
          </div>
          
          {/* Number Highlights */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
              {highlights.map((highlight, index) => (
                <div key={index} className="text-center p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{highlight.number}</div>
                  <div className="text-gray-300 text-sm md:text-base leading-tight">{highlight.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300 h-full">
                <div className="flex items-start mb-4">
                  <div className="p-3 bg-white/20 rounded-xl mr-4 group-hover:bg-white/30 transition-colors duration-300">
                    <reason.icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-gray-200 transition-colors duration-300">
                      {reason.title}
                    </h3>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed pl-14">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyAmby;
