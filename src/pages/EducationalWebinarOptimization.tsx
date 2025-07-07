
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, TrendingUp, Users, Play, BarChart3 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EducationalWebinarOptimization = () => {
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
      <section className="py-20 bg-gradient-to-r from-green-50 to-teal-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              EdTech Sales Webinar Optimized  
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How we transformed NxtWave Intensive's declining webinar conversions into a high-performing sales system
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>February 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Challenge Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                NxtWave Intensive was experiencing a decline in sales conversions through their webinars. 
                Despite efforts to segment leads and create targeted content, the conversion rates weren't 
                meeting expectations and the decision-making process was getting complicated.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Key Issues Identified:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Decline in sales conversions through webinars</li>
                  <li>• Leads were segmented with certain assumptions, but found varying triggers and barriers within each segment</li>
                  <li>• Webinars were overloaded with information, complicating decision-making</li>
                  <li>• Disconnect between webinar content and actual decision-makers</li>
                </ul>
              </div>
            </div>

            {/* Approach Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Approach</h2>
              <div className="bg-gray-50 p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold text-black mb-4">Strategic Approach:</h3>
                <p className="text-gray-700">
                  Re-segmented the audience based on specific barriers and triggers, enabling more precise content and CTA tailoring.
                </p>
              </div>
            </div>

            {/* Execution Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Execution</h2>
              <div className="space-y-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Phase 1: Content Optimization</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Redesigned the webinar content, flow, and CTA for one segment</li>
                    <li>• Tested it on previously lost leads</li>
                    <li>• Fine-tuned product positioning to meet audience needs</li>
                    <li>• Removed unnecessary information for clarity</li>
                  </ul>
                  <div className="mt-4 p-4 bg-gray-50 rounded">
                    <p className="text-gray-700 italic">Despite a positive response, conversion rates did not significantly improve initially.</p>
                  </div>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Phase 2: Decision-Maker Focus</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Further interactions with students revealed a crucial insight: for many in this segment, the decision-makers were not just the students themselves</li>
                    <li>• Revised the CTA to involve the decision-makers directly after the webinar</li>
                    <li>• Clearly communicated the product's value to the actual decision-makers</li>
                  </ul>
                  <div className="mt-4 p-4 bg-black text-white rounded">
                    <p className="italic">This adjustment proved to be a game-changer. Conversions began to increase with a noticeable rise in leads re-engaging post-webinar.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-black mb-2">Significant</div>
                  <p className="text-gray-700">Improvement in conversion rate</p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-black mb-2">Deep</div>
                  <p className="text-gray-700">Understanding of user behavior gained</p>
                </div>
              </div>
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Key Achievement:</h3>
                <p className="text-gray-300">
                  My major achievement was gaining a deep understanding of our users, allowing me to contribute 
                  and suggest improvements to other teams' initiatives based on these insights.
                </p>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Learnings</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Understanding the actual decision-makers is crucial for webinar success</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Audience segmentation based on barriers and triggers is more effective than demographic segmentation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Information overload can complicate decision-making - clarity is key</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Direct communication with decision-makers post-webinar can significantly improve conversions</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-black text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Want to optimize your webinars?</h3>
              <p className="text-gray-300 mb-6">
                Let's transform your educational content into a high-converting sales machine
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

export default EducationalWebinarOptimization;
