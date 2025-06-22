
const WhyAmby = () => {
  const reasons = [
    {
      title: "Revenue-First, No BS Approach",
      description: "We focus on what truly matters — leads, sales, and growth. No fluff, no vanity metrics"
    },
    {
      title: "Full-Funnel Execution — End to End",
      description: "From strategy to ads to sales calls — we own the entire journey so you don't have to juggle teams."
    },
    {
      title: "Clear Weekly Reporting, No Surprises",
      description: "Stay in the loop with transparent reports that show what's working and what's next."
    },
    {
      title: "We're New, Hungry & Obsessed With Results",
      description: "We're not riding on legacy — we're earning our name by delivering real outcomes, faster"
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-6">
            Why AMBY?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-light">
            We're different because we focus on what matters most
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 mb-20">
          {reasons.map((reason, index) => (
            <div key={index} className="border-b border-gray-200 pb-8 last:border-b-0">
              <h3 className="text-xl font-normal text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed font-light">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto">
          <blockquote className="text-xl md:text-2xl font-light italic mb-6 text-gray-700">
            "It's not about followers, ads, or leads. First, you need a strategy - a clear why and for what."
          </blockquote>
          <cite className="text-gray-500 font-light text-sm">
            — Teja Undavalli, Founder, AMBY
          </cite>
        </div>
      </div>
    </section>
  );
};

export default WhyAmby;
