interface Director {
  id: number
  name: string
  role: string
  photo: string
  hasGradientFooter?: boolean
}

export default function CompanyManagement() {
  const directors: Director[] = [
    {
      id: 1,
      name: 'Priyo Suyono',
      role: 'Presiden Direktur',
      photo: '/images/profile-priyo.png',
      hasGradientFooter: true,
    },
    {
      id: 2,
      name: 'Adhi Darminto',
      role: 'Direktur',
      photo: '/images/profile-adhi.png',
      hasGradientFooter: true,
    },
    {
      id: 3,
      name: 'Budiyanto',
      role: 'Direktur Teknis',
      photo: '/images/profile-budiyanto.png',
      hasGradientFooter: true,
    },
  ]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider block mb-2">Perusahaan</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-navy">
            Manajemen
          </h2>
        </div>

        {/* Directors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {directors.map((director) => (
            <div 
              key={director.id} 
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 flex flex-col group"
            >
              
              {/* Image Container with Blue Geometric Abstract Overlay */}
              <div className="relative aspect-[4/5] bg-gradient-to-br from-[#061425] via-[#1B365D] to-[#00B4D8] overflow-hidden">
                {/* Geometric overlays simulating the mockup background */}
                <div className="absolute inset-0 bg-navy opacity-30 mix-blend-multiply z-0"></div>
                <div 
                  className="absolute inset-0 opacity-40 mix-blend-screen z-0 bg-cover bg-center"
                  style={{
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M54 48L30 24L6 48H54Z\' fill=\'%2300B4D8\' fill-opacity=\'0.2\'/%3E%3C/svg%3E")',
                  }}
                />
                
                {/* Secondary abstract gradient overlay */}
                <div className="absolute -top-12 -left-12 w-48 h-48 bg-cyan-400/25 rounded-full blur-2xl transform rotate-45 z-0" />
                <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-navy-light/45 rounded-full blur-2xl transform rotate-45 z-0" />

                {/* Director Photo headshot */}
                <img 
                  src={director.photo} 
                  alt={director.name} 
                  className="absolute inset-0 w-full h-full object-cover object-bottom z-10 transition-all duration-500 scale-[1.12] translate-y-[8%] group-hover:scale-[1.18] group-hover:translate-y-[6%]" 
                />
              </div>

              {/* Text Info Footer Section */}
              <div className={`p-6 flex-grow flex flex-col justify-center border-t border-gray-100/60 ${
                director.hasGradientFooter 
                  ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white border-t-0 shadow-inner' 
                  : 'bg-white text-navy'
              }`}>
                <h3 className={`text-xl font-bold font-heading mb-1 ${
                  director.hasGradientFooter ? 'text-white' : 'text-navy'
                }`}>
                  {director.name}
                </h3>
                <div className={`h-px w-full my-3 ${
                  director.hasGradientFooter ? 'bg-white/20' : 'bg-gray-100'
                }`} />
                <p className={`text-sm font-medium ${
                  director.hasGradientFooter ? 'text-white/80' : 'text-gray-500'
                }`}>
                  {director.role}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
