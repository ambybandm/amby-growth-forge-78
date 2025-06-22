
const Success = () => {
  const highlights = [
    {
      number: "4",
      text: "Full Batches Admissions Closed in just 1.5 months"
    },
    {
      number: "1/5th",
      text: "Acquired Customers at 1/5th of market avg cost"
    },
    {
      number: "1/4th",
      text: "Generated leads at 1/4th of market avg cost"
    }
  ];

  const caseStudies = [
    "Successful campaigns across multiple languages",
    "Sales webinar optimised - edtech",
    "Copywriting success",
    "Websites optimised for conversions"
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">
            Success with Amby
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            Real results for real businesses
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-16 border border-gray-200 p-8">
            <div className="mb-8">
              <span className="text-xs uppercase tracking-wide text-gray-500 mb-2 block">
                Recent Project
              </span>
              <h3 className="text-2xl font-light text-gray-900">CodeBegun</h3>
            </div>
            
            <div className="mb-12">
              <h4 className="text-lg font-normal text-gray-900 mb-4">Service Provided:</h4>
              <p className="text-gray-600 leading-relaxed font-light">
                Offered revenue generation service • Generated leads • Conducted webinars • Handled sales • Delivered revenues
              </p>
            </div>

            <div>
              <h4 className="text-lg font-normal text-gray-900 mb-8">Key Highlights:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {highlights.map((highlight, index) => (
                  <div key={index} className="text-center border-r border-gray-200 last:border-r-0 pr-8 last:pr-0">
                    <div className="text-3xl font-light text-gray-900 mb-3">
                      {highlight.number}
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed font-light">
                      {highlight.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-light text-gray-900 mb-8">Case Studies</h4>
            <div className="space-y-4">
              {caseStudies.map((study, index) => (
                <div key={index} className="flex items-center py-3 border-b border-gray-100 last:border-b-0">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-gray-700 font-light">{study}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Success;
