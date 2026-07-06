export default function Hero() {
  return (
    <section 
      className="relative w-full py-16 lg:py-20 overflow-hidden bg-cover bg-[center_right] sm:bg-center mt-14 flex items-center min-h-[400px] lg:min-h-[500px]" 
      style={{ backgroundImage: "url('/images/home-hero-bg.png')" }}
    >
      {/* Solid white cover on the left to ensure text readability */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[46%] bg-white z-0" />
      {/* Rectangular gradient overlay fading to transparent on the right (Gradasi Persegi Panjang) */}
      <div className="hidden md:block absolute inset-y-0 left-[46%] w-[18%] bg-gradient-to-r from-white to-transparent z-0" />

      {/* Blue diagonal accent wave in the bottom-right corner (z-index adjusted to sit on background) */}
      <div className="absolute bottom-0 right-0 w-[45%] h-[75%] bg-gradient-to-tr from-cyan-400 via-blue-500 to-[#1B365D] z-0 [clip-path:polygon(100%_0,100%_100%,0_100%)] hidden md:block opacity-90" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text and CTA Buttons */}
          <div className="lg:col-span-7 space-y-6 text-left max-w-xl lg:max-w-2xl pl-2 md:pl-6">
            <h1 className="text-5xl sm:text-6xl md:text-7.5xl font-black font-heading tracking-tight leading-none">
              <span className="text-orange-500 block">Next Level</span>
              <span className="text-[#1E1B4B] block mt-2">Experience</span>
            </h1>
            <p className="text-lg sm:text-xl font-bold text-navy max-w-lg leading-relaxed font-sans">
              Kami tidak hanya penyedia tetapi juga teman dalam semua masalah
            </p>
            
            {/* CTA Buttons */}
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#layanan" 
                className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Jelajahi Layanan
              </a>
              <a 
                href="#contact" 
                className="px-8 py-4 bg-navy hover:bg-[#1B365D] text-white font-sans font-bold rounded-2xl active:scale-[0.98] transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
          
          {/* Empty spacer to show right background illustration */}
          <div className="hidden md:block md:col-span-5" />

        </div>
      </div>
    </section>
  )
}
