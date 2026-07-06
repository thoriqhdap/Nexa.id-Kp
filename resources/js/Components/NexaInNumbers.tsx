import { Globe, Users, Handshake, Cog } from 'lucide-react'

export default function NexaInNumbers() {
  const stats = [
    {
      id: 1,
      icon: Globe,
      title: '10+ Tahun',
      subtitle: 'Pengalaman',
    },
    {
      id: 2,
      icon: Users,
      title: '2500+ Klien',
      subtitle: 'Korporat',
    },
    {
      id: 3,
      icon: Handshake,
      title: '500+ Klien',
      subtitle: 'Residensial',
    },
    {
      id: 4,
      icon: Cog,
      title: 'Layanan 24/7',
      subtitle: 'Lengkap',
    },
  ]

  return (
    <section className="bg-gray-100/80 py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider block mb-2">Perusahaan</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-navy">
            Nexa dalam Angka
          </h2>
        </div>

        {/* Timeline Infographic Container */}
        <div className="relative mt-20">
          
          {/* Connecting Line (Desktop Only: lg and above) */}
          <div className="hidden lg:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-gray-200 z-0">
            {/* Dotted border overlay if desired, or simple thin line */}
            <div className="absolute inset-0 border-t-2 border-dashed border-gray-300"></div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6 relative z-10">
            {stats.map((stat, index) => (
              <div key={stat.id} className="flex flex-col items-center group">
                
                {/* 1. Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-white shadow-md flex items-center justify-center border border-gray-100 mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg relative">
                  <stat.icon className="w-10 h-10 text-orange-500 stroke-[1.5]" />
                </div>

                {/* 2. Orange Connector Dot on Desktop */}
                <div className="hidden lg:flex items-center justify-center relative w-full h-8 mb-6">
                  {/* Outer Pulsing Ring */}
                  <div className="absolute w-5 h-5 rounded-full bg-orange-500/20 animate-ping"></div>
                  {/* Solid Inner Dot */}
                  <div className="absolute w-3.5 h-3.5 rounded-full bg-orange-500 border-2 border-white shadow-sm"></div>
                </div>

                {/* 3. Floating Card Content */}
                <div className="relative w-full max-w-[280px]">
                  {/* Upward Pointer (Desktop Only) */}
                  <div className="hidden lg:block absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100 z-0"></div>

                  {/* Card Panel */}
                  <div className="bg-white border border-gray-100/60 shadow-md rounded-xl p-6 text-center transition-all duration-300 group-hover:shadow-xl group-hover:border-orange-500/20 relative z-10">
                    <p className="text-orange-500 font-bold text-lg md:text-xl font-heading leading-tight">
                      {stat.title}
                      <br />
                      {stat.subtitle}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
