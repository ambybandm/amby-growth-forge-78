
import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Rocket, Users, Globe } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurMission = () => {
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
              Our Mission
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Empowering businesses to achieve sustainable growth through strategic marketing and genuine results
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Mission Statement */}
            <div className="text-center mb-16">
              <div className="bg-black text-white p-12 rounded-2xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  "To be the missing team behind every business's growth story"
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed">
                  We exist to bridge the gap between marketing efforts and real business outcomes. 
                  Our mission is to deliver leads that convert, strategies that work, and growth that lasts.
                </p>
              </div>
            </div>

            {/* What This Means */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">What This Means</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <Target className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Results-Driven Approach</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't believe in vanity metrics. Every campaign, every strategy, 
                    every piece of content is designed with one goal in mind: driving real, 
                    measurable business results that impact your bottom line.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <Rocket className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Full-Funnel Ownership</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We don't just generate leads and walk away. We own the entire customer 
                    journey from first touchpoint to final sale, ensuring every step is 
                    optimized for maximum conversion and growth.
                  </p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Partnership Mindset</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're not just another agency. We become an extension of your team, 
                    understanding your business intimately and working as partners 
                    towards shared growth objectives.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg">
                  <Globe className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Sustainable Growth</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We build marketing systems that work in the long term. Our strategies 
                    create compound growth effects that continue to deliver value 
                    long after our initial implementation.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Promise */}
            <div className="text-center bg-gray-100 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">Our Promise</h2>
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  When you work with Amby, you're not just getting marketing services. 
                  You're getting a dedicated growth partner who is as invested in your 
                  success as you are.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We promise to deliver transparent results, honest communication, 
                  and relentless focus on what truly matters: growing your business 
                  in a sustainable, scalable way.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;
