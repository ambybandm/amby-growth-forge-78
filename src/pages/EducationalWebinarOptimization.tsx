
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
              How we transformed a low-converting educational webinar into a high-performing sales machine
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
                CodeBegun, an online coding bootcamp, was struggling with their educational webinars. 
                Despite high attendance rates, conversion to paid courses was disappointingly low at just 2.3%. 
                They needed a complete webinar overhaul to turn their educational content into a powerful sales tool.
              </p>
              <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-500">
                <h3 className="font-semibold text-black mb-2">Initial Problems:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Low conversion rate of 2.3% from webinar to sales</li>
                  <li>• High drop-off rates during webinar sessions</li>
                  <li>• Weak call-to-action and follow-up sequences</li>
                  <li>• Lack of structured sales process within educational content</li>
                </ul>
              </div>
            </div>

            {/* Strategy Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Our Optimization Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Play className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Content Restructure</h3>
                  <p className="text-gray-600">Redesigned webinar flow with strategic sales moments</p>
                </div>
                <div className="text-center">
                  <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Engagement Tactics</h3>
                  <p className="text-gray-600">Interactive elements to maintain audience attention</p>
                </div>
                <div className="text-center">
                  <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-black mb-2">Follow-up System</h3>
                  <p className="text-gray-600">Automated nurture sequences for non-immediate buyers</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-black mb-4">Key Changes Implemented:</h3>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <ul className="text-gray-700 space-y-3">
                    <li>• Restructured webinar with the "Problem-Agitation-Solution" framework</li>
                    <li>• Added interactive polls and Q&A sessions to boost engagement</li>
                    <li>• Created urgency with limited-time offers and bonuses</li>
                    <li>• Developed a 7-day email follow-up sequence for attendees</li>
                    <li>• Integrated social proof and success stories throughout</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Results Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">The Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-blue-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">18.5%</div>
                  <p className="text-gray-700">Final conversion rate</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-green-600 mb-2">705%</div>
                  <p className="text-gray-700">Improvement in conversions</p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-purple-600 mb-2">4</div>
                  <p className="text-gray-700">Full batches closed</p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg text-center">
                  <div className="text-4xl font-bold text-orange-600 mb-2">1.5</div>
                  <p className="text-gray-700">Months to close batches</p>
                </div>
              </div>
              <div className="bg-green-100 p-8 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-4">Additional Achievements:</h3>
                <ul className="text-gray-700 space-y-2">
                  <li>• Generated leads at 1/4th of market average cost</li>
                  <li>• Acquired customers at 1/5th of market average cost</li>
                  <li>• 92% attendee retention rate throughout webinar</li>
                  <li>• 34% increase in post-webinar email engagement</li>
                </ul>
              </div>
            </div>

            {/* Key Learnings */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-6">Key Learnings</h2>
              <div className="bg-gray-50 p-8 rounded-lg">
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Educational content can be powerful sales tool when structured correctly</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Interactive elements significantly improve webinar engagement and retention</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Follow-up sequences are crucial for converting hesitant prospects</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-green-500 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    <span>Social proof and urgency create powerful psychological triggers for action</span>
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
                onClick={() => window.open('https://calendly.com/ambymarcom/30min', '_blank')}
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
