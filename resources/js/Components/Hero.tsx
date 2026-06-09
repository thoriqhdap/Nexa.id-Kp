import { ArrowRight, Wifi, Cloud, Bot, Cpu, Code, Database } from 'lucide-react'

export default function Hero() {
  const services = [
    { icon: Wifi, text: 'Internet' },
    { icon: Cloud, text: 'Cloud' },
    { icon: Bot, text: 'AI' },
    { icon: Cpu, text: 'IoT' },
    { icon: Code, text: 'Software' },
    { icon: Database, text: 'Data Center' },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1E3D] via-[#1B365D] to-[#0891B2]">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.4\'%3E%3Ccircle cx=\'7\' cy=\'7\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'}}
        />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-cyan-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
              <span className="text-white text-sm font-medium">Solusi Digital Terpercaya</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-orange-400">TRANSFORMASIKAN</span>
              <br />
              <span className="text-white">PERTUMBUHAN BISNIS</span>
              <br />
              <span className="text-white">ANDA BERSAMA <span className="text-cyan-400">NEXA!</span></span>
            </h1>

            {/* Description */}
            <p className="text-white/80 text-lg leading-relaxed max-w-lg">
              Siap membantu memberikan solusi kebutuhan teknologi mulai dari Internet, Cloud Computing, Artificial Intelligence, Internet of Things (IoT), Software, Apps, layanan konsultasi IT, dsb.
            </p>

            {/* Services Pills */}
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 hover:bg-white/20 transition-all"
                >
                  <service.icon className="w-4 h-4 text-cyan-400" />
                  <span className="text-white text-sm font-medium">{service.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white border border-white/40 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-[#0B1E3D] transition-all group"
              >
                Let's Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="hidden lg:grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <p className="text-white/80 text-sm">Uptime Guarantee</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all mt-8">
                <div className="text-4xl font-bold text-orange-400 mb-2">24/7</div>
                <p className="text-white/80 text-sm">Customer Support</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <p className="text-white/80 text-sm">Kota Coverage</p>
              </div>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all">
                <div className="text-4xl font-bold text-cyan-400 mb-2">10+</div>
                <p className="text-white/80 text-sm">Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  )
}
