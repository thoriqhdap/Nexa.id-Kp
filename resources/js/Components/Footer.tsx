import { Phone, Mail, MapPin, Shield, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  const cities = ['Yogyakarta', 'Jakarta', 'Semarang', 'Solo', 'Tegal', 'Bandung', 'Surabaya', 'Malang']

  return (
    <footer className="bg-[#0B1E3D] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <span className="text-[#0B1E3D] text-2xl font-bold">N</span>
              </div>
              <span className="text-2xl font-bold">NEXA</span>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              PT Media Sarana Data (Nexa) - Solusi digital terpercaya untuk bisnis Anda di Indonesia.
            </p>
            <div className="flex items-center space-x-3 bg-white/10 p-3 rounded-lg">
              <Shield className="w-8 h-8 text-cyan-400" />
              <div>
                <p className="text-xs text-white/50">Sertifikasi</p>
                <p className="text-sm font-semibold">ISO 27001:2013</p>
              </div>
            </div>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-400 transition-colors">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Kontak */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontak</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-white/90">+62 274 123 456</p>
                  <p className="text-white/50 text-sm">WhatsApp Available</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-white/90">info@nexa.id</p>
                  <p className="text-white/50 text-sm">sales@nexa.id</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-cyan-400 mt-1" />
                <div>
                  <p className="text-white/90">Yogyakarta, Indonesia</p>
                  <p className="text-white/50 text-sm">Kantor Pusat</p>
                </div>
              </div>
            </div>
          </div>

          {/* Column 3: Link */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Link Informasi</h3>
            <ul className="space-y-3">
              {['Tentang Nexa', 'Layanan', 'Karir', 'Blog', 'FAQ', 'Kebijakan Privasi', 'Syarat & Ketentuan'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-white/70 hover:text-cyan-400 transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Coverage */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Area Coverage</h3>
            <div className="flex flex-wrap gap-2">
              {cities.map((city) => (
                <span key={city} className="px-3 py-1 bg-white/10 rounded-full text-sm text-white/70 hover:bg-white/20 transition-colors">
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#061425] py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/50">
            <p>© 2026 PT Media Sarana Data (Nexa). All rights reserved.</p>
            <div className="flex space-x-6 mt-2 md:mt-0">
              <a href="#" className="hover:text-cyan-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
