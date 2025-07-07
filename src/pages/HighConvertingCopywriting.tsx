
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
              A showcase of our copywriting work across various campaigns and projects
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
            
            {/* Copywriting Showcase */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Copywriting Work</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Below are examples of copywriting work we've created across various campaigns, platforms, and industries. 
                Each piece is crafted to drive engagement, conversions, and results for our clients.
              </p>
              
              {/* Copywriting Samples Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Ad Copy Sample 1</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "Tired of losing potential customers while they wait for your slow website to load? 
                    Our 3-second optimization guarantees 40% more conversions. See results in 7 days or get your money back."
                  </div>
                  <span className="text-xs text-gray-500">E-commerce optimization campaign</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Email Subject Line</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "Sarah, your competitors just gained 3,847 new customers this month"
                  </div>
                  <span className="text-xs text-gray-500">B2B software campaign</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Landing Page Headline</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "Stop Burning $50K+ Monthly on Ads That Don't Convert"
                  </div>
                  <span className="text-xs text-gray-500">Digital marketing agency</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Social Media Post</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "3 AM breakthrough: I just discovered why 90% of startups fail in their first year. 
                    It's not funding. It's not team. It's not product. It's this one thing nobody talks about..."
                  </div>
                  <span className="text-xs text-gray-500">Business coaching campaign</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Sales Page CTA</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "Claim Your Revenue Rescue Plan (47 spots left this month)"
                  </div>
                  <span className="text-xs text-gray-500">Business consulting service</span>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h3 className="font-semibold text-black mb-3">Video Script Opening</h3>
                  <div className="bg-gray-50 p-4 rounded text-sm text-gray-700 mb-4">
                    "If you're spending more than 2 hours daily on social media content creation, 
                    you're doing it wrong. Here's how we create 30 days of content in 2 hours..."
                  </div>
                  <span className="text-xs text-gray-500">Content creation tool</span>
                </div>
              </div>

              {/* Copywriting Stats */}
              <div className="bg-black text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6 text-center">Our Copywriting Results</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">400%+</div>
                    <p className="text-gray-300">Average conversion increase</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <p className="text-gray-300">Campaigns optimized</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">85%</div>
                    <p className="text-gray-300">Client retention rate</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Copywriting Principles */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Copywriting Principles</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Specificity beats generality:</strong> Concrete numbers and details are more persuasive than vague claims</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Benefits over features:</strong> People buy outcomes, not specifications</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Emotional connection:</strong> Address pain points and desired transformations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Single focus:</strong> One clear message with one primary call-to-action</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Urgency and scarcity:</strong> Create genuine reasons for immediate action</span>
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
