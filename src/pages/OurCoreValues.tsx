
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Shield, Zap, Target, Users, Trophy } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OurCoreValues = () => {
  const navigate = useNavigate();

  const values = [
    {
      icon: Target,
      title: "Results Over Everything",
      description: "We measure our success by your growth. Every decision, every strategy, every campaign is evaluated through the lens of real business outcomes.",
      color: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    {
      icon: Shield,
      title: "Radical Transparency",
      description: "No hidden metrics, no sugar-coating, no excuses. We share everything - the good, the bad, and what we're doing to fix it.",
      color: "bg-green-50",
      iconColor: "text-green-600"
    },
    {
      icon: Heart,
      title: "Genuine Care",
      description: "Your business success is our success. We care about your growth as much as you do, and that genuine care shows in everything we do.",
      color: "bg-red-50",
      iconColor: "text-red-600"
    },
    {
      icon: Zap,
      title: "Speed & Agility",
      description: "Markets move fast, and so do we. We adapt quickly, test rapidly, and implement changes at the speed of business.",
      color: "bg-yellow-50",
      iconColor: "text-yellow-600"
    },
    {
      icon: Users,
      title: "Partnership Mentality",
      description: "We're not vendors, we're partners. We think like owners, act like team members, and commit like it's our own business.",
      color: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: Trophy,
      title: "Excellence Without Ego",
      description: "We strive for excellence in everything we do, but we stay humble. Our work speaks louder than our words.",
      color: "bg-orange-50",
      iconColor: "text-orange-600"
    }
  ];

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
              Our Core Values
            </h1>
            <p className="text-xl text-gray-700 mb-8">
              The principles that guide every decision we make and every relationship we build
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Introduction */}
            <div className="text-center mb-16">
              <div className="max-w-3xl mx-auto">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our values aren't just words on a wall. They're the foundation of how we operate, 
                  the criteria for every decision we make, and the promise of what you can expect 
                  when you work with us.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {values.map((value, index) => (
                <div key={index} className={`${value.color} p-8 rounded-2xl hover:shadow-lg transition-shadow duration-300`}>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-6">
                      <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center">
                        <value.icon className={`h-8 w-8 ${value.iconColor}`} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-black mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* How We Live These Values */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">How We Live These Values</h2>
              <div className="bg-gray-100 p-12 rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">In Our Work</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Weekly transparent reporting on all metrics</li>
                      <li>• Results-based pricing and performance guarantees</li>
                      <li>• Rapid testing and optimization cycles</li>
                      <li>• Direct access to senior team members</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-4">In Our Relationships</h3>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Honest feedback, even when it's difficult</li>
                      <li>• Proactive communication about challenges</li>
                      <li>• Collaborative planning and strategy sessions</li>
                      <li>• Long-term partnership thinking</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="text-center bg-black text-white p-12 rounded-2xl">
              <h2 className="text-3xl font-bold mb-6">Experience Our Values in Action</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Ready to work with a team that truly lives by their values? 
                Let's discuss how our principles can drive your growth.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-black hover:bg-gray-200"
                onClick={() => window.open('https://calendly.com/ambymarketing/30min', '_blank')}
              >
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurCoreValues;
