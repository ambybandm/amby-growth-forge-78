
import { Card, CardContent } from "@/components/ui/card";

const CoreValue = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6">
              Our Core Value
            </h2>
            <div className="w-24 h-1 bg-black mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">💎</span>
                </div>
                <p className="text-lg md:text-xl text-black font-semibold leading-relaxed">
                  We don't chase money — we back real value.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white text-2xl font-bold">🤝</span>
                </div>
                <p className="text-lg md:text-xl text-black font-semibold leading-relaxed">
                  We only partner with firms that genuinely offer value.
                </p>
              </CardContent>
            </Card>
          </div>
          
          <div className="text-center">
            <Card className="border-2 border-black bg-black text-white max-w-4xl mx-auto">
              <CardContent className="p-8 md:p-12">
                <div className="flex items-center justify-center mb-6">
                  <div className="flex space-x-2">
                    {[...Array(10)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < 2 ? 'bg-green-400' : 'bg-gray-400'
                        }`}
                      ></div>
                    ))}
                  </div>
                </div>
                <p className="text-xl md:text-2xl lg:text-3xl font-bold">
                  That's why, out of 10 coffee meetings, we say yes to only 2
                </p>
                <div className="mt-6 text-sm md:text-base text-gray-300">
                  <span className="text-green-400 font-semibold">2 Selected</span> • <span className="text-gray-400">8 Declined</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
