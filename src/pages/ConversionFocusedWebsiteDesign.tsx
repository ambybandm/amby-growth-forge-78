
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
              Conversion-Focused Website Design
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Complete website redesign and content strategy that drove 340% more conversions
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
            
            {/* Challenge Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">The Challenge</h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                A B2B software company came to us with a beautiful website that wasn't converting. 
                Despite significant traffic and positive feedback on design, their conversion rate 
                was stuck at 1.2%. The website looked great but failed to guide visitors toward 
                taking action. They needed an end-to-end redesign focused on conversion optimization.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-black mb-2">Key Problems Identified:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Beautiful design but poor conversion rate (1.2%)</li>
                  <li>• Unclear value proposition and messaging hierarchy</li>
                  <li>• No clear user journey or conversion funnel</li>
                  <li>• Poor mobile experience and slow loading times</li>
                  <li>• Weak calls-to-action and trust signals</li>
                </ul>
              </div>
            </div>

            {/* Strategy Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Design & Content Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Monitor className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">UX/UI Redesign</h3>
                  <p className="text-gray-600">Conversion-focused layout and user experience</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Mobile Optimization</h3>
                  <p className="text-gray-600">Mobile-first approach with responsive design</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Performance</h3>
                  <p className="text-gray-600">Speed optimization and technical improvements</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">Comprehensive Approach:</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>• <strong>Content Strategy:</strong> Complete rewrite of all website copy</li>
                    <li>• <strong>Visual Hierarchy:</strong> Clear information architecture and flow</li>
                    <li>• <strong>Trust Building:</strong> Added testimonials, case studies, and social proof</li>
                    <li>• <strong>CTA Optimization:</strong> Strategic placement of conversion elements</li>
                    <li>• <strong>Technical SEO:</strong> Improved site speed and search visibility</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Process Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Process</h2>
              <div className="space-y-6">
                <div className="flex items-start bg-white p-6 rounded-lg border border-gray-200">
                  <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">1</div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Discovery & Analysis</h3>
                    <p className="text-gray-700">Comprehensive audit of existing site, user behavior analysis, and competitor research</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-6 rounded-lg border border-gray-200">
                  <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">2</div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Strategy Development</h3>
                    <p className="text-gray-700">Created user personas, conversion funnel mapping, and content strategy</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-6 rounded-lg border border-gray-200">
                  <div className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">3</div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Design & Development</h3>
                    <p className="text-gray-700">Wireframing, design mockups, and responsive development with performance optimization</p>
                  </div>
                </div>
                <div className="flex items-start bg-white p-6 rounded-lg border border-gray-200">
                  <div className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 flex-shrink-0 font-bold">4</div>
                  <div>
                    <h3 className="font-semibold text-black mb-2">Testing & Optimization</h3>
                    <p className="text-gray-700">A/B testing of key elements, performance monitoring, and continuous optimization</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">5.4%</div>
                  <p className="text-gray-700">New conversion rate</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">350%</div>
                  <p className="text-gray-700">Increase in conversions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">78%</div>
                  <p className="text-gray-700">Faster page load speed</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">92%</div>
                  <p className="text-gray-700">Mobile performance score</p>
                </div>
                <div className="bg-teal-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-teal-600 mb-2">45%</div>
                  <p className="text-gray-700">Reduction in bounce rate</p>
                </div>
                <div className="bg-pink-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-pink-600 mb-2">168%</div>
                  <p className="text-gray-700">Increase in page views</p>
                </div>
              </div>
              <div className="bg-green-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Business Impact:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Monthly qualified leads increased by 420%</li>
                  <li>• Sales qualified leads up by 380%</li>
                  <li>• Cost per acquisition reduced by 65%</li>
                  <li>• Average deal size increased by 23%</li>
                  <li>• Customer acquisition cycle shortened by 31%</li>
                </ul>
              </div>
            </div>

            {/* Key Elements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Design Elements That Worked</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-indigo-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Above-the-fold clarity:</strong> Clear value proposition and primary CTA visible immediately</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Social proof placement:</strong> Strategic use of testimonials and logos at key decision points</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Progressive disclosure:</strong> Information revealed in digestible chunks to maintain engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-indigo-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span><strong>Friction reduction:</strong> Simplified forms and streamlined conversion process</span>
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
