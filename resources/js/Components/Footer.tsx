import * as React from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

export default function Footer() {
  const cities = [
    'JAKARTA',
    'SEMARANG',
    'YOGYAKARTA',
    'SOLO',
    'SALATIGA',
    'MAGELANG',
    'PURWOKERTO',
    'SURABAYA',
    'BALI',
    'MATARAM'
  ]

  return (
    <footer id="contact" className="bg-[#F8F9FA] text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        {/* Main Content Row */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 pb-10">
          
          {/* Left Side: Cities Bulleted List */}
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs sm:text-sm font-bold font-heading text-gray-600 uppercase tracking-wide">
              {cities.map((city, index) => (
                <div key={city} className="flex items-center">
                  <span>{city}</span>
                  {index < cities.length - 1 && (
                    <span className="ml-2.5 text-gray-400 font-normal select-none">•</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Social Media Channels */}
          <div className="flex flex-col items-start lg:items-end gap-3 flex-shrink-0">
            <span className="text-sm font-semibold text-gray-400">Temukan kami di</span>
            
            {/* Social Icons (Black/Navy rounded blocks matching mockup) */}
            <div className="flex items-center gap-3">
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-black text-white hover:bg-orange-500 rounded-lg flex items-center justify-center transition-colors shadow-sm"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="border-t border-gray-200" />

        {/* Bottom Row: Copyright Statement */}
        <div className="pt-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-2">
          <p className="text-xs sm:text-sm text-gray-400 font-medium">
            @ Copyright 2026 PT Internet Mulia Untuk Negeri. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}
