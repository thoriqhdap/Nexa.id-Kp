import { Globe, Rocket, Cloud, Network, Settings, Code } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Globe,
      title: 'Internet For Business',
      description: 'Koneksi internet dedicated berkecepatan tinggi untuk kebutuhan bisnis Anda.',
    },
    {
      icon: Rocket,
      title: 'Internet For Home',
      description: 'Layanan internet rumahan dengan kecepatan dan stabilitas terbaik.',
    },
    {
      icon: Settings,
      title: 'Manage Service & IT Consultant',
      description: 'Layanan manajemen IT profesional dan konsultasi teknologi terpercaya.',
    },
    {
      icon: Code,
      title: 'Application Development',
      description: 'Pengembangan aplikasi custom sesuai kebutuhan bisnis Anda.',
    },
    {
      icon: Network,
      title: 'System Integration',
      description: 'Integrasi sistem yang seamless untuk efisiensi operasional bisnis.',
    },
  ]

  return (
    <section id="layanan" className="py-20 bg-gradient-to-br from-[#0B1E3D] via-[#1565C0] to-[#1B365D] relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-cyan-400/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-4 gap-8 items-start">
          {/* Left Text */}
          <div className="lg:col-span-1 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-orange-400 leading-tight">
              Layanan Kami
            </h2>
            <p className="text-white/70 leading-relaxed text-sm">
              NEXA menyediakan berbagai macam layanan terbaik yang disesuaikan kebutuhan dengan fitur lengkap untuk meningkatkan efisiensi operasional bisnis Anda.
            </p>
          </div>

          {/* Services Grid */}
          <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 hover:border-white/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-cyan-400/20 transition-colors">
                  <service.icon className="w-8 h-8 text-white group-hover:text-cyan-400 transition-colors" strokeWidth={1.5} />
                </div>
                <h3 className="text-white font-semibold text-sm leading-tight">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
