import { Link } from '@inertiajs/react'
import { ArrowRight } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      logoText: 'tel',
      textColor: 'text-orange-500',
      description: 'Internet untuk bisnis & seluruh kebutuhan Anda.',
      href: '/nexatel'
    },
    {
      logoText: 'apps',
      textColor: 'text-red-600',
      description: 'Selaraskan tujuan Anda bersama kami! Situs Web, Aplikasi Web, Aplikasi Seluler, dan Agensi Pengembangan.',
      href: '/nexa-apps'
    },
    {
      logoText: 'data',
      textColor: 'text-blue-600',
      description: 'Membuat masa depan perusahaan Anda siap dengan layanan DCaaS dan data center.',
      href: '/nexa-data'
    },
    {
      logoText: 'digital',
      textColor: 'text-pink-600',
      description: 'Manajemen Media Sosial, Perencanaan Media, Whatsapp, Mesin Siaran Email & SMS, Identitas Merek, Desain Grafis.',
      href: '/nexa-digital'
    },
    {
      logoText: 'solutions',
      textColor: 'text-blue-600',
      description: 'Layanan terkelola dengan perkembangan terbaru & solusi hemat biaya.',
      href: '/nexa-solutions'
    }
  ]

  return (
    <section id="layanan" className="py-24 bg-gradient-to-b from-[#0B1E3D] via-[#1E3A8A] to-white relative overflow-hidden">
      {/* Curved background elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Card Container */}
        <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 md:p-12 lg:p-16 border border-gray-100 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            
            {services.map((service, index) => (
              <div key={index} className="flex flex-col items-center text-center space-y-5 group">
                {/* Logo Combination */}
                <div className="flex flex-col items-center">
                  <img 
                    src="/images/logo.png" 
                    alt="Nexa Logo" 
                    className="h-10 w-auto object-contain"
                  />
                  <span className={`text-sm font-black uppercase tracking-wider -mt-1 ${service.textColor}`}>
                    {service.logoText}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed max-w-xs font-sans font-medium h-12 flex items-center justify-center">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <Link 
                  href={service.href}
                  className="inline-flex items-center gap-2 text-sm font-bold text-gray-800 hover:text-cyan-600 transition-colors group-hover:translate-x-1 duration-300"
                >
                  <ArrowRight className="w-4 h-4 text-gray-900 group-hover:text-cyan-600 transition-colors" />
                  <span>Learn More</span>
                </Link>
              </div>
            ))}

            {/* Accent callout text in the empty grid cell */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-1 py-4">
              <p className="text-2xl lg:text-3xl font-black text-orange-500 tracking-tight leading-none">
                Koneksi yang
              </p>
              <p className="text-2xl lg:text-3xl font-black text-orange-500 tracking-tight leading-none">
                melampaui
              </p>
              <p className="text-2xl lg:text-3xl font-black text-navy tracking-tight leading-none">
                segalanya.
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
