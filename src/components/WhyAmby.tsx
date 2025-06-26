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
    <section className="py-20 bg-gray-900 text-white font-lexend">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Why Amby?
          </h2>
          
          <h3 className="text-2xl font-semibold mb-8">
            Our expertise
          </h3>
          
          {/* Number Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 mb-16">
            {highlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-white mb-2">{highlight.number}</div>
                <div className="text-gray-300 text-sm">{highlight.text}</div>
              </div>
            ))}
          </div>
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
                  <p className="text-gray-300 leading-relaxed whitespace-pre-line">
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
