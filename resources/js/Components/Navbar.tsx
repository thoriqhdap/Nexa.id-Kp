import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = {
    perusahaan: ['Tentang Nexa', 'Visi Misi', 'Struktur Organisasi', 'Penghargaan'],
    layanan: ['Internet Solution', 'Application Development', 'Cloud Services', 'System Integration', 'Managed Services'],
    bantuan: ['Pusat Bantuan', 'FAQ', 'Hubungi Kami', 'Layanan Pelanggan'],
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center">
              <div className="relative w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">N</span>
              </div>
              <span className={`ml-3 text-2xl font-bold font-heading ${isScrolled ? 'text-navy' : 'text-white'}`}>
                NEXA
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Perusahaan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('perusahaan')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-navy' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Perusahaan</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'perusahaan' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {navLinks.perusahaan.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Layanan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('layanan')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-navy' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Layanan</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'layanan' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {navLinks.layanan.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Bantuan Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('bantuan')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button
                className={`flex items-center space-x-1 font-medium transition-colors ${
                  isScrolled ? 'text-gray-700 hover:text-navy' : 'text-white hover:text-cyan-400'
                }`}
              >
                <span>Bantuan</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {openDropdown === 'bantuan' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-100 py-2 z-50">
                  {navLinks.bantuan.map((item) => (
                    <a
                      key={item}
                      href="#"
                      className="block px-4 py-2 text-gray-700 hover:bg-cyan-50 hover:text-cyan-600 transition-colors"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <a
              href="#contact"
              className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                isScrolled
                  ? 'bg-navy text-white hover:bg-blue-800'
                  : 'bg-cyan-400 text-navy hover:bg-cyan-300'
              }`}
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg ${
              isScrolled ? 'text-navy' : 'text-white'
            }`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100">
          <div className="px-4 py-4 space-y-2">
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase px-2">Perusahaan</p>
              {navLinks.perusahaan.map((item) => (
                <a key={item} href="#" className="block px-2 py-2 text-gray-700 hover:text-cyan-600">
                  {item}
                </a>
              ))}
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase px-2">Layanan</p>
              {navLinks.layanan.map((item) => (
                <a key={item} href="#" className="block px-2 py-2 text-gray-700 hover:text-cyan-600">
                  {item}
                </a>
              ))}
            </div>
            <div className="py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase px-2">Bantuan</p>
              {navLinks.bantuan.map((item) => (
                <a key={item} href="#" className="block px-2 py-2 text-gray-700 hover:text-cyan-600">
                  {item}
                </a>
              ))}
            </div>
            <a href="#contact" className="block w-full text-center bg-navy text-white px-6 py-3 rounded-full font-semibold mt-4">
              Hubungi Kami
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
