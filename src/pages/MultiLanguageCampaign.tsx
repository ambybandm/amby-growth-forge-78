
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, TrendingUp, Users, Target } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MultiLanguageCampaign = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white font-lexend">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              onClick={() => navigate('/')}
              className="flex items-center text-gray-600 hover:text-black"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
            <img 
              src="/lovable-uploads/e1768634-31db-4374-a138-5b36403ead96.png" 
              alt="Amby" 
              className="h-8 w-auto"
            />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Successful Campaign Across Multiple Languages
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How we helped NxtWave (Top ed-tech firm) scale their digital marketing across multiple regional languages
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>March 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Project Overview */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Project Overview</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Digital marketing is a key lead generation channel at NxtWave (Top ed-tech firm). 
                Previous ad types and messaging were not yielding desired results. The ask was to 
                lower CPL by acquiring qualified leads across multiple regional languages.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">The Challenge:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Previous ad campaigns were not delivering desired results</li>
                  <li>• High cost per lead (CPL) across different regional markets</li>
                  <li>• Need to create culturally relevant content in multiple languages</li>
                  <li>• Requirement to acquire qualified leads efficiently</li>
                </ul>
              </div>
            </div>

            {/* Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Approach</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Deep Understanding</h3>
                  <p className="text-gray-600">Understood the deepest desires that the product satisfies</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Product Awareness</h3>
                  <p className="text-gray-600">Assessed the prospects' product awareness levels</p>
                </div>
                <div className="text-center">
                  <div className="bg-gray-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-black" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Competitive Analysis</h3>
                  <p className="text-gray-600">Analyzed product competitors thoroughly</p>
                </div>
              </div>
            </div>

            {/* Execution Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Execution</h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">User Interaction</h3>
                  <p className="text-gray-700">Spoke with over 100 NxtWave's prospects and competitors' customers to understand their pain points and motivations.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Market Research</h3>
                  <p className="text-gray-700">Analyzed multiple competitors' offerings and user behavior patterns across different regional markets.</p>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Creatives Development</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Produced 3 video ads in 3 days</li>
                    <li>• Handled scripting, video direction, in-house casting and production</li>
                    <li>• Shot on iPhone to capture an authentic, non-traditional ad feel</li>
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Digital Marketing Campaign</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Collaborated with performance marketer to run and monitor the campaign daily</li>
                    <li>• Crafted ad copies and precisely targeted audiences</li>
                    <li>• Optimized campaigns across multiple regional languages</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Results</h2>
              <div className="bg-black text-white p-8 rounded-lg text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Campaign got replicated and achieved results across multiple languages by producing leads at optimal costs</h3>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Languages Covered:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-700">
                  <span className="bg-white p-3 rounded text-center">Telugu</span>
                  <span className="bg-white p-3 rounded text-center">Hindi</span>
                  <span className="bg-white p-3 rounded text-center">Tamil</span>
                  <span className="bg-white p-3 rounded text-center">Kannada</span>
                  <span className="bg-white p-3 rounded text-center">Marathi</span>
                  <span className="bg-white p-3 rounded text-center">Malayalam</span>
                </div>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Takeaways</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Deep user research is essential - speaking with 100+ prospects provided invaluable insights</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Authentic, non-traditional ad approaches can be more effective than polished productions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Scalable creative frameworks allow successful replication across multiple languages</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Understanding product awareness levels helps in crafting targeted messaging</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-black text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to scale globally?</h3>
              <p className="text-gray-300 mb-6">
                Let's discuss how we can help you reach international markets effectively
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => window.open('https://calendly.com/ambymarketing/30min', '_blank')}
              >
                Book a consultation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiLanguageCampaign;
