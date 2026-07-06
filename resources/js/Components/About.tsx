'use client'

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Tentang Kami</span>
              <h2 className="text-4xl md:text-5xl font-bold font-heading text-navy">
                Build something <span className="text-orange-500">great</span>
              </h2>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              <strong className="text-navy">PT Media Sarana Data (Nexa)</strong> adalah perusahaan teknologi informasi yang bergerak di bidang solusi internet, cloud computing, AI, IoT, dan pengembangan software untuk bisnis di Indonesia.
            </p>
            
            <p className="text-gray-600 leading-relaxed">
              Dengan pengalaman lebih dari satu dekade, kami berkomitmen untuk memberikan layanan berkualitas tinggi dan inovatif yang membantu bisnis Anda bertransformasi di era digital.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="p-6 bg-navy/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500 mb-2">10+</div>
                <p className="text-gray-600 text-sm">Tahun Pengalaman</p>
              </div>
              <div className="p-6 bg-navy/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <p className="text-gray-600 text-sm">Klien Korporat</p>
              </div>
              <div className="p-6 bg-navy/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500 mb-2">100+</div>
                <p className="text-gray-600 text-sm">Kota Coverage</p>
              </div>
              <div className="p-6 bg-navy/5 rounded-xl">
                <div className="text-3xl font-bold text-orange-500 mb-2">24/7</div>
                <p className="text-gray-600 text-sm">Customer Support</p>
              </div>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative">
            {/* Large Circle */}
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-orange-500 rounded-full opacity-20 animate-pulse-slow"></div>
              <div className="absolute inset-4 bg-white rounded-full shadow-2xl flex items-center justify-center">
                <div className="w-32 h-32 bg-navy rounded-full flex items-center justify-center">
                  <span className="text-white text-4xl font-bold">N</span>
                </div>
              </div>
              
              {/* Orbiting Icons */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-float">
                <span className="text-navy text-xl">☁</span>
              </div>
              <div className="absolute top-1/2 -right-4 -translate-y-1/2 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <span className="text-white text-xl">🌐</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-navy rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                <span className="text-white text-xl">⚡</span>
              </div>
              <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-12 h-12 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg animate-float" style={{ animationDelay: '0.5s' }}>
                <span className="text-navy text-xl">🔒</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visi Misi Section */}
        <div className="mt-24 space-y-16">
          {/* Dark Navy Info Card */}
          <div className="bg-[#0B1E3D] rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden text-white">
            <div className="absolute right-0 bottom-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
            <div className="grid md:grid-cols-5 gap-8 items-center relative z-10">
              <div className="md:col-span-2">
                <h3 className="text-xl sm:text-2xl font-black font-heading leading-snug">
                  Nexa sebagai perusahaan berkembang yang bergerak dibidang teknologi informasi
                </h3>
              </div>
              <div className="md:col-span-3 text-gray-300 text-sm sm:text-base leading-relaxed">
                <p>
                  Mengembangkan bisnis Anda, memberikan solusi yang sesuai dan menghadirkan layanan untuk bisnis Anda dengan teknologi generasi terbaru.
                </p>
              </div>
            </div>
          </div>

          {/* Visi Kami & Misi Kami Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 max-w-5xl mx-auto pt-4">
            {/* Visi Kami */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-black font-heading text-orange-500">
                Visi Kami
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                Nexa sebagai market leader One Stop Solution ICT Service Provider dengan mengedepankan kepuasan pelanggan.
              </p>
            </div>

            {/* Misi Kami */}
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-black font-heading text-orange-500">
                Misi Kami
              </h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-sm mx-auto">
                Memperluas infrastruktur, mengadopsi teknologi terbaru, menjadikan pelanggan sebagai partner perusahaan dan terus melakukan inovasi.
              </p>
            </div>
          </div>
        </div>

        {/* YouTube Explainer Video Section */}
        <div className="mt-28 space-y-8">
          <div className="text-center space-y-3">
            <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">Video Profil</span>
            <h2 className="text-3xl md:text-4xl font-black font-heading text-navy">
              Nexa - Next Level Experience
            </h2>
            <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
          </div>

          <div className="max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-black relative aspect-video">
            <iframe 
              src="https://www.youtube.com/embed/-dhjSMCLdv4" 
              title="Nexa - Next Level Experience [Explainer]" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              allowFullScreen 
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
