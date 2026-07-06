'use client'

import { Zap, Shield, Phone } from 'lucide-react'

export default function FiberOpticCTA() {
  return (
    <section id="career" className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/fiber-bg.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-navy/90"></div>
      </div>

      {/* Decorative Gradient */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Speed Badge */}
          <div className="inline-flex items-center space-x-2 bg-cyan-400/20 backdrop-blur-sm px-6 py-3 rounded-full border border-cyan-400/30">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span className="text-white font-semibold">Kecepatan hingga 1 Gbps</span>
          </div>

          {/* Main Content */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading text-white leading-tight">
            Koneksi Fiber Optic
            <br />
            <span className="text-cyan-400">Tercepat & Terstabil</span>
          </h2>

          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Rasakan kecepatan internet fiber optic hingga 1 Gbps dengan koneksi yang stabil dan latency rendah untuk bisnis Anda. Dukung operasional perusahaan Anda dengan infrastruktur jaringan terbaik.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 py-6">
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-white text-sm">Keamanan Terjamin</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
              <Zap className="w-5 h-5 text-orange-500" />
              <span className="text-white text-sm">Latency Rendah</span>
            </div>
            <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-5 py-3 rounded-full">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-white text-sm">99.9% Uptime</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <a
              href="#contact"
              className="inline-flex items-center justify-center border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-navy transition-all group"
            >
              <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
              Kontak Kami
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
