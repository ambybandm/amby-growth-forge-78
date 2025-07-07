
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, TrendingUp, Monitor, Smartphone, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ConversionFocusedWebsiteDesign = () => {
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
      <section className="py-20 bg-gradient-to-r from-indigo-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
              Website End-to-End Content Strategy
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              How we transformed NxtWave Intensive's website using our 7D Framework for maximum conversions
            </p>
            <div className="flex items-center justify-center space-x-8 text-gray-600">
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>December 2023</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>9 min read</span>
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
              <h2 className="text-3xl font-bold text-black mb-6">The Project</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                NxtWave Intensive needed a complete website overhaul to improve their conversion rates 
                and better communicate their value proposition. The existing website was product-centric 
                rather than customer-centric, with cluttered information and unclear calls-to-action.
              </p>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-black">
                <h3 className="font-semibold text-black mb-2">Website Comparison:</h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Old website:</strong> <a href="https://www.ccbp.in/intensive" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">https://www.ccbp.in/intensive</a></p>
                  <p><strong>New webpage:</strong> Complete redesign with improved user experience</p>
                </div>
              </div>
            </div>

            {/* 7D Framework */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">7D Framework for a Powerful Website</h2>
              <div className="bg-black text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4 text-center">Our Proven Website Optimization Framework</h3>
                <p className="text-gray-300 text-center">
                  We applied our comprehensive 7D Framework to transform the NxtWave Intensive website 
                  from a product-centric to a customer-centric experience.
                </p>
              </div>
            </div>

            {/* Improvements Made */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Improvements Made</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">✅ New Website Features</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li>• Clear main CTA (Enroll Now) supported by a transitional CTA (Book a Free Demo)</li>
                    <li>• Clear steps to becoming a software engineer are outlined</li>
                    <li>• Customer-centric approach, not product-centric like before</li>
                    <li>• Clutter-free and easy-to-digest information</li>
                    <li>• Clear product USPs prominently displayed</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-black mb-4">🎯 Key Focus Areas</h3>
                  <ul className="text-gray-700 space-y-3">
                    <li>• Simplified user journey and navigation</li>
                    <li>• Stronger value proposition messaging</li>
                    <li>• Enhanced social proof and credibility signals</li>
                    <li>• Mobile-optimized responsive design</li>
                    <li>• Faster loading times and better performance</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Results Achieved</h2>
              <div className="bg-black text-white p-8 rounded-lg text-center mb-8">
                <h3 className="text-2xl font-bold mb-4">Website Transformation Success</h3>
                <p className="text-gray-300">
                  The redesigned website significantly improved user experience and conversion rates, 
                  leading to better business outcomes for NxtWave Intensive.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-black mb-4">Key Metrics Improved</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li>• Conversion rate optimization</li>
                    <li>• User engagement and time on site</li>
                    <li>• Clear user journey and navigation</li>
                    <li>• Mobile responsiveness and performance</li>
                    <li>• Overall user experience enhancement</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold text-black mb-4">Website Links</h3>
                  <div className="space-y-3">
                    <div>
                      <span className="text-sm text-gray-600">Old website:</span>
                      <a href="https://www.ccbp.in/intensive" target="_blank" rel="noopener noreferrer" 
                         className="block text-blue-600 hover:underline break-all">
                        https://www.ccbp.in/intensive
                      </a>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">New webpage design:</span>
                      <p className="text-gray-700">Complete redesign with improved UX/UI</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Learnings</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Customer-centric approach:</strong> Focusing on customer needs rather than product features drives better results</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Clear communication:</strong> Simplified messaging and clutter-free design improves user experience</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Strategic CTAs:</strong> Having both primary and transitional calls-to-action caters to different user readiness levels</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-black rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>User journey mapping:</strong> Clear steps and pathways help users understand the process and take action</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* CTA Section */}
            <div className="text-center bg-black text-white p-12 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Ready to redesign for conversions?</h3>
              <p className="text-gray-300 mb-6">
                Let's transform your website into a high-converting growth engine
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

export default ConversionFocusedWebsiteDesign;
