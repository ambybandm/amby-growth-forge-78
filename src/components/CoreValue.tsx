
const CoreValue = () => {
  return (
    <section className="bg-black text-white py-20 md:py-24 text-center font-lexend">
      <div className="container mx-auto px-5 max-w-4xl">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-12">
          Our Core Value
        </h2>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-5">
          We don't chase money — <span className="text-white font-semibold">we back real value</span>.
        </p>
        
        <p className="text-xl md:text-2xl leading-relaxed text-gray-300 mb-12">
          We only partner with firms that genuinely offer value.
        </p>

        <div className="mt-12">
          <p className="text-lg font-normal text-gray-400 mb-4">
            That's why, out of 10 coffee meetings, we say yes to only 2.
          </p>
          
          <div className="flex justify-center gap-2.5 flex-wrap">
            {[...Array(10)].map((_, i) => (
              <span
                key={i}
                className={`text-3xl ${
                  i < 2 ? 'opacity-100' : 'opacity-30'
                }`}
              >
                ☕
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValue;
