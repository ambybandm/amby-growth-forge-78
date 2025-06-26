
import { Button } from "@/components/ui/button";
import { ArrowLeft, Users, Rocket, Heart, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Careers = () => {
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              Be part of a hungry, results-driven team that's redefining growth marketing
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Why Join Amby */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">Why Join Amby?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-blue-50 p-8 rounded-lg">
                  <Rocket className="h-12 w-12 text-blue-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">High Growth Environment</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We're new, hungry, and growing fast. Join us at the ground floor 
                    and help shape the future of growth marketing.
                  </p>
                </div>
                <div className="bg-green-50 p-8 rounded-lg">
                  <Trophy className="h-12 w-12 text-green-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Results-Focused Culture</h3>
                  <p className="text-gray-700 leading-relaxed">
                    We celebrate wins, learn from failures, and always focus on 
                    delivering real business outcomes for our clients.
                  </p>
                </div>
                <div className="bg-purple-50 p-8 rounded-lg">
                  <Users className="h-12 w-12 text-purple-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Team Collaboration</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Work with passionate, skilled professionals who care about 
                    your growth as much as client success.
                  </p>
                </div>
                <div className="bg-orange-50 p-8 rounded-lg">
                  <Heart className="h-12 w-12 text-orange-600 mb-4" />
                  <h3 className="text-xl font-semibold text-black mb-4">Work That Matters</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Every campaign, every strategy, every client success story 
                    makes a real difference to growing businesses.
                  </p>
                </div>
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">Current Openings</h2>
              <div className="space-y-6">
                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Performance Marketing Specialist</h3>
                      <p className="text-gray-600">Full-time • Remote/Hybrid • Experience: 2-4 years</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white"
                      onClick={() => window.open('mailto:teja@ambymc.com?subject=Application for Performance Marketing Specialist', '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Lead paid advertising campaigns across Meta, Google, and other platforms. 
                    Drive lead generation and revenue growth for our clients.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Meta Ads</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Google Ads</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Analytics</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">CRO</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Content Marketing Manager</h3>
                      <p className="text-gray-600">Full-time • Remote/Hybrid • Experience: 3-5 years</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white"
                      onClick={() => window.open('mailto:teja@ambymc.com?subject=Application for Content Marketing Manager', '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Create compelling content strategies, manage social media growth, and 
                    develop content that drives engagement and conversions.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Content Strategy</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Social Media</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">Copywriting</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Video Content</span>
                  </div>
                </div>

                <div className="bg-white border border-gray-200 p-8 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-black mb-2">Sales Development Representative</h3>
                      <p className="text-gray-600">Full-time • Remote/Hybrid • Experience: 1-3 years</p>
                    </div>
                    <Button 
                      variant="outline" 
                      className="border-black text-black hover:bg-black hover:text-white"
                      onClick={() => window.open('mailto:teja@ambymc.com?subject=Application for Sales Development Representative', '_blank')}
                    >
                      Apply Now
                    </Button>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Drive our revenue generation efforts by converting leads into sales, 
                    conducting discovery calls, and managing the sales funnel.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Sales</span>
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Lead Conversion</span>
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">CRM</span>
                    <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Communication</span>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Apply */}
            <div className="text-center bg-gray-100 p-12 rounded-2xl">
              <h2 className="text-3xl font-bold text-black mb-6">How to Apply</h2>
              <div className="max-w-2xl mx-auto">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Send us your resume, a brief cover letter explaining why you want to join Amby, 
                  and any relevant work samples or portfolio pieces.
                </p>
                <p className="text-gray-600 mb-8">
                  Email us at: <strong>teja@ambymc.com</strong>
                </p>
                <Button 
                  size="lg" 
                  className="bg-black text-white hover:bg-gray-800"
                  onClick={() => window.open('mailto:teja@ambymc.com?subject=Career Inquiry', '_blank')}
                >
                  Get in Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Careers;
