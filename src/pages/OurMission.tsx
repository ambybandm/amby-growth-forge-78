import { Button } from "@/components/ui/button";
import { ArrowLeft, Target, Rocket, Users, Globe, CheckCircle, Heart } from "lucide-react";
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
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-black mb-8">
              Our Vision
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-black mb-6">
              Building a Brand of Brands
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Opening Statement */}
            <div className="mb-16">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                In today's world, entrepreneurial freedom is at an all-time high. Unlike 10 or 20 years ago, 
                starting a business is more accessible than ever — and that's a beautiful thing. But with that 
                rise comes a new challenge: clutter. Markets are crowded. Products look similar. 
                Services sound the same. And customers? They're overwhelmed, confused, and unsure who to trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                At Amby, we don't believe in promoting just anything. We only partner with brands that 
                genuinely offer value — because in a crowded marketplace, only truth cuts through. 
                We say no more than we say yes. We don't chase hype or hollow offerings. 
                We help genuine value delivers get seen, heard, and chosen — by telling their story 
                with clarity and conviction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We don't see ourselves as a traditional B2B agency. We operate with a Direct-to-Consumer (D2C) 
                mindset — because even if our client is a business, the end goal is always a human well being. 
                And humans want to choose brands that are genuine.
              </p>
            </div>

            {/* Vision Statement */}
            <div className="text-center mb-16">
              <div className="bg-black text-white p-12 rounded-2xl">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  That's our vision:
                </h3>
                <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
                  To become the brand behind the brands people love and trust.
                </p>
              </div>
            </div>

            {/* What This Means to Business */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">What Does It Mean to You as a Business?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-black">We Say No, So You Can Be a Yes</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    We work only with brands that offer real value — which means if we're with you, we believe in you.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Target className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-black">Your Brand Won't Get Lost in the Noise</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    We help you cut through the market clutter with sharp positioning and standout creative that speaks truth.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Rocket className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-black">No Fluff, Just What Works</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    You won't find vanity marketing here. Every idea, asset, and ad is built to move your brand forward.
                  </p>
                </div>
                <div className="bg-gray-50 p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Users className="h-6 w-6 text-black mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-black">Human-First Marketing</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed pl-9">
                    We don't market to businesses — we speak to people. Because your customers are human, not data points.
                  </p>
                </div>
              </div>
            </div>

            {/* What This Means to Consumer */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-black mb-8 text-center">What Does It Mean to You as a Consumer?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-black text-white p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">No More Gimmicks</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-9">
                    The brands we promote don't trick or mislead — they deliver real value, just like they promise.
                  </p>
                </div>
                <div className="bg-black text-white p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Globe className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">Clarity in a Noisy World</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-9">
                    You won't have to second-guess your choices. Our brands are easy to understand and easier to trust.
                  </p>
                </div>
                <div className="bg-black text-white p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <Heart className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">Quality Over Hype</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-9">
                    You'll come across fewer flashy claims and more genuine experiences that live up to what's said.
                  </p>
                </div>
                <div className="bg-black text-white p-8 rounded-lg">
                  <div className="flex items-start mb-4">
                    <CheckCircle className="h-6 w-6 text-white mr-3 mt-1 flex-shrink-0" />
                    <h3 className="text-xl font-semibold text-white">Brands That Respect Your Time</h3>
                  </div>
                  <p className="text-gray-300 leading-relaxed pl-9">
                    We work with businesses that solve real problems — not just ones that want your clicks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurMission;