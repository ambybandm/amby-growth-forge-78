
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, TrendingUp, Edit, Target, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HighConvertingCopywriting = () => {
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
      <section className="py-20 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              High Converting Copywriting
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How strategic copywriting transformed a struggling landing page into a conversion powerhouse
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>January 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>7 min read</span>
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
                A fintech startup approached us with a critical problem: their landing page was getting 
                decent traffic but converting at a dismal 0.8%. Despite having a great product and 
                competitive pricing, their messaging wasn't resonating with their target audience. 
                They needed copywriting that would speak directly to their customers' pain points and drive action.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-black mb-2">Initial Issues:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Conversion rate stuck at 0.8%</li>
                  <li>• Generic messaging that didn't address specific pain points</li>
                  <li>• Weak value proposition and unclear benefits</li>
                  <li>• Multiple conflicting calls-to-action</li>
                  <li>• No emotional connection with the audience</li>
                </ul>
              </div>
            </div>

            {/* Strategy Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Copywriting Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Audience Research</h3>
                  <p className="text-gray-600">Deep dive into customer pain points and motivations</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Edit className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Message Crafting</h3>
                  <p className="text-gray-600">Compelling headlines and benefit-focused copy</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">CTA Optimization</h3>
                  <p className="text-gray-600">Clear, action-oriented calls-to-action</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">Copywriting Framework Applied:</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>• <strong>Attention:</strong> Powerful headline addressing the #1 customer pain point</li>
                    <li>• <strong>Interest:</strong> Benefit-focused subheadings and social proof</li>
                    <li>• <strong>Desire:</strong> Emotional triggers and transformation stories</li>
                    <li>• <strong>Action:</strong> Single, clear call-to-action with urgency</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Before vs After */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Before vs After</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-red-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-4">❌ Before (Generic)</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">"Advanced Financial Solutions for Modern Businesses"</p>
                    <p className="text-sm">Generic headline that could apply to any fintech company</p>
                    <hr className="my-3" />
                    <p>"Our platform offers comprehensive financial tools..."</p>
                    <p className="text-sm">Feature-focused instead of benefit-focused</p>
                  </div>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-4">✅ After (Specific)</h3>
                  <div className="space-y-3 text-gray-700">
                    <p className="font-medium">"Stop Losing $10K+ Monthly to Manual Invoice Processing"</p>
                    <p className="text-sm">Specific pain point with quantified loss</p>
                    <hr className="my-3" />
                    <p>"Save 15+ hours weekly and eliminate 90% of processing errors..."</p>
                    <p className="text-sm">Clear benefits with specific numbers</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">12.3%</div>
                  <p className="text-gray-700">New conversion rate</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">1,437%</div>
                  <p className="text-gray-700">Improvement in conversions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">68%</div>
                  <p className="text-gray-700">Reduction in bounce rate</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">4.2x</div>
                  <p className="text-gray-700">Increase in page engagement</p>
                </div>
              </div>
              <div className="bg-green-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Additional Improvements:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Average time on page increased by 156%</li>
                  <li>• Email sign-ups increased by 289%</li>
                  <li>• Cost per acquisition decreased by 73%</li>
                  <li>• Customer lifetime value increased by 45%</li>
                </ul>
              </div>
            </div>

            {/* Key Principles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Copywriting Principles</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Specificity beats generality:</strong> Specific numbers and details are more persuasive than vague claims</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Benefits over features:</strong> People buy results, not features</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Emotional connection:</strong> Address pain points and desired outcomes</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-purple-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Single focus:</strong> One clear message and one primary call-to-action</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-black text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Need high-converting copy?</h3>
              <p className="text-gray-300 mb-6">
                Let's transform your messaging into a powerful conversion tool
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

export default HighConvertingCopywriting;
