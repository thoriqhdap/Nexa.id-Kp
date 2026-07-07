import { useState, useEffect } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from '@inertiajs/react'

// Platform-independent Indonesian flag component
const IndonesiaFlag = () => (
  <div className="inline-flex flex-col w-5 h-3.5 border border-gray-200 rounded-sm overflow-hidden flex-shrink-0">
    <div className="bg-[#FF0000] h-1/2 w-full" />
    <div className="bg-white h-1/2 w-full" />
  </div>
)

// Platform-independent UK (English) flag SVG component
const UKFlag = () => (
  <svg className="w-5 h-3.5 border border-gray-200 rounded-sm flex-shrink-0" viewBox="0 0 60 30" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="60" height="30" fill="#012169"/>
    <path d="M0 0L60 30M60 0L0 30" stroke="#FFFFFF" strokeWidth="6"/>
    <path d="M0 0L60 30M60 0L0 30" stroke="#C8102E" strokeWidth="4"/>
    <path d="M30 0V30M0 15H60" stroke="#FFFFFF" strokeWidth="10"/>
    <path d="M30 0V30M0 15H60" stroke="#C8102E" strokeWidth="6"/>
  </svg>
)

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<'company' | 'service' | 'solution' | 'support' | null>(null)
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false)
  const [currentLang, setCurrentLang] = useState<'id' | 'en'>('id')

  useEffect(() => {
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    }
    const trans = getCookie('googtrans');
    if (trans && trans.includes('/en')) {
      setCurrentLang('en');
    } else {
      setCurrentLang('id');
    }
  }, [])

  const changeLanguage = (lang: 'id' | 'en') => {
    document.cookie = `googtrans=/id/${lang}; path=/;`;
    document.cookie = `googtrans=/id/${lang}; path=/; domain=${window.location.hostname}`;
    document.cookie = `googtrans=/id/${lang}; path=/; domain=localhost`;
    window.location.reload();
  }

  const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement | HTMLDivElement>, href: string) => {
    if (href.startsWith('/#') || href.startsWith('#')) {
      const targetId = href.replace('/#', '').replace('#', '');
      const isHomePage = typeof window !== 'undefined' && window.location.pathname === '/';
      
      if (isHomePage) {
        e.preventDefault();
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  interface NavDropdownLink {
    label: string
    href: string
    isRoute?: boolean
  }

  const companyLinks: NavDropdownLink[] = [
    { label: 'About Us', href: '/#about' },
    { label: 'Career', href: '/#career' },
    { label: 'Clients', href: '/#clients' },
    { label: 'Contact', href: '/#contact' },
    { label: 'Privacy Policy', href: '/privacy-policy', isRoute: true },
  ]

  const serviceLinks: NavDropdownLink[] = [
    { label: 'Nexatel', href: '/nexatel', isRoute: true },
    { label: 'Nexa Apps', href: '/nexa-apps', isRoute: true },
    { label: 'Nexa Data', href: '/nexa-data', isRoute: true },
    { label: 'Nexa Digital', href: '/nexa-digital', isRoute: true },
    { label: 'Nexa Solutions', href: '/nexa-solutions', isRoute: true },
  ]

  const solutionLinks: NavDropdownLink[] = [
    { label: 'Corporate', href: '/solution/corporate', isRoute: true },
    { label: 'Education', href: '/solution/education', isRoute: true },
    { label: 'Government', href: '/solution/government', isRoute: true },
    { label: 'Hospitality', href: '/solution/hospitality', isRoute: true },
    { label: 'Manufacture', href: '/solution/manufacture', isRoute: true },
  ]

  const supportLinks: NavDropdownLink[] = [
    { label: 'Areas', href: '/areas', isRoute: true },
    { label: 'Subscription', href: '/subscription', isRoute: true },
  ]

  const navItems = [
    { label: 'Perusahaan', dropdownType: 'company' as const },
    { label: 'Layanan', dropdownType: 'service' as const },
    { label: 'Solusi', dropdownType: 'solution' as const },
    { label: 'Support', dropdownType: 'support' as const },
    { label: 'Berita & Artikel', href: '/berita-artikel', isRoute: true },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* 1. Header Actions / Top Bar (Desktop only) */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm relative z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Left: Logo & Brand */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center group">
                <img 
                  src="/images/logo.png" 
                  alt="NEXA Logo" 
                  className="h-9 md:h-10 w-auto object-contain transition-transform group-hover:scale-105" 
                />
              </Link>
            </div>

            {/* Right Side: Header Actions */}
            <div className="hidden md:flex items-center space-x-6">
              {/* Area Indicator (Boxed Area label, matching Image 1) */}
              <div className="flex items-center gap-3 text-sm font-medium">
                <span className="border border-black rounded px-1.5 py-0.5 text-[#0056b3] font-sans font-medium text-xs">Area</span>
              </div>

              {/* Language Dropdown */}
              <div className="relative">
                <button 
                  onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                  onBlur={() => setTimeout(() => setIsLangDropdownOpen(false), 200)}
                  className="flex items-center gap-2 text-sm text-gray-700 font-medium bg-white border border-gray-200 hover:border-gray-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                >
                  {currentLang === 'id' ? <IndonesiaFlag /> : <UKFlag />}
                  <span>{currentLang === 'id' ? 'Indonesia' : 'English'}</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                {isLangDropdownOpen && (
                  <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-200 rounded-lg shadow-lg py-1 animate-fadeIn z-50">
                    <button 
                      onClick={() => changeLanguage('id')}
                      className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      <IndonesiaFlag />
                      <span>Indonesia</span>
                    </button>
                    <button 
                      onClick={() => changeLanguage('en')}
                      className="flex items-center gap-2 w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 font-medium"
                    >
                      <UKFlag />
                      <span>English</span>
                    </button>
                  </div>
                )}
              </div>

              {/* Gradient Contact Us CTA Button (Matching Image 1) */}
              <a
                href="/#contact"
                className="inline-flex items-center justify-center font-semibold text-white px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-navy hover:shadow-lg hover:shadow-blue-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </div>

            {/* Mobile Menu Button & Language selector */}
            <div className="flex md:hidden items-center gap-3">
              <button 
                onClick={() => changeLanguage(currentLang === 'id' ? 'en' : 'id')}
                className="flex items-center gap-1 bg-gray-50 border border-gray-200 px-2 py-1 rounded-md text-xs font-semibold"
              >
                {currentLang === 'id' ? <IndonesiaFlag /> : <UKFlag />}
                <span>{currentLang === 'id' ? 'ID' : 'EN'}</span>
              </button>
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-1.5 rounded-lg text-navy bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Toggle navigation menu"
              >
                {isMobileMenuOpen ? <X className="w-5.5 h-5.5" /> : <Menu className="w-5.5 h-5.5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar Menu */}
      <nav className={`hidden md:block transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-md border-b border-gray-100' 
          : 'bg-white/80 backdrop-blur-sm border-b border-gray-100'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center h-12">
            <div className="flex items-center space-x-10">
              {navItems.map((item) => {
                if (item.dropdownType) {
                  const isOpen = activeDropdown === item.dropdownType
                  const links = item.dropdownType === 'company' 
                    ? companyLinks 
                    : item.dropdownType === 'service' 
                      ? serviceLinks 
                      : item.dropdownType === 'solution'
                        ? solutionLinks
                        : supportLinks
                  return (
                    <div
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setActiveDropdown(item.dropdownType)}
                      onMouseLeave={() => setActiveDropdown(null)}
                    >
                      <button className="flex items-center gap-1 font-semibold text-sm text-gray-700 hover:text-cyan-600 transition-colors py-3 focus:outline-none">
                        <span>{item.label}</span>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Dropdown Menu with Hover Effect */}
                      <div className={`absolute top-full left-0 w-48 bg-white border border-gray-100 rounded-xl shadow-xl py-2 transition-all duration-300 transform origin-top ${
                        isOpen 
                          ? 'opacity-100 scale-100 pointer-events-auto' 
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}>
                        {links.map((link) => {
                          if (link.isRoute) {
                            return (
                              <Link
                                key={link.label}
                                href={link.href}
                                className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium"
                              >
                                {link.label}
                              </Link>
                            )
                          }
                          return (
                            <a
                              key={link.label}
                              href={link.href}
                              onClick={(e) => handleAnchorClick(e, link.href)}
                              className="block px-4 py-2.5 text-sm text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors font-medium"
                            >
                              {link.label}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )
                }

                if (item.isRoute) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="font-semibold text-sm text-gray-700 hover:text-cyan-600 transition-colors py-3"
                    >
                      {item.label}
                    </Link>
                  )
                }

                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleAnchorClick(e, item.href || '')}
                    className="font-semibold text-sm text-gray-700 hover:text-cyan-600 transition-colors py-3"
                  >
                    {item.label}
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* 3. Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => {
              if (item.dropdownType) {
                 const links = item.dropdownType === 'company' 
                  ? companyLinks 
                  : item.dropdownType === 'service' 
                    ? serviceLinks 
                    : item.dropdownType === 'solution'
                      ? solutionLinks
                      : supportLinks
                return (
                  <div key={item.label} className="border-b border-gray-50 pb-2">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">{item.label}</p>
                    <div className="grid grid-cols-2 gap-2 pl-2">
                      {links.map((link) => {
                        if (link.isRoute) {
                          return (
                            <Link
                              key={link.label}
                              href={link.href}
                              onClick={() => setIsMobileMenuOpen(false)}
                              className="block py-1.5 text-sm text-gray-600 hover:text-cyan-600 font-medium"
                            >
                              {link.label}
                            </Link>
                          )
                        }
                        return (
                          <a
                            key={link.label}
                            href={link.href}
                            onClick={(e) => {
                              setIsMobileMenuOpen(false)
                              handleAnchorClick(e, link.href)
                            }}
                            className="block py-1.5 text-sm text-gray-600 hover:text-cyan-600 font-medium"
                          >
                            {link.label}
                          </a>
                        )
                      })}
                    </div>
                  </div>
                )
              }
              if (item.isRoute) {
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-base font-semibold text-gray-700 border-b border-gray-50"
                  >
                    {item.label}
                  </Link>
                )
              }
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    setIsMobileMenuOpen(false)
                    handleAnchorClick(e, item.href || '')
                  }}
                  className="block py-2 text-base font-semibold text-gray-700 border-b border-gray-50"
                >
                  {item.label}
                </a>
              )
            })}
            <div className="pt-2 flex flex-col gap-3">
              <div className="flex flex-col gap-2 bg-gray-50 p-3 rounded-lg">
                <span className="text-xs text-gray-500 font-medium text-left">Pilih Bahasa / Select Language:</span>
                <div className="flex gap-2">
                  <button 
                    onClick={() => changeLanguage('id')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-semibold border ${
                      currentLang === 'id' 
                        ? 'bg-white border-orange-500 text-orange-500 shadow-sm' 
                        : 'bg-transparent border-gray-200 text-gray-700'
                    }`}
                  >
                    <IndonesiaFlag />
                    <span>Indonesia</span>
                  </button>
                  <button 
                    onClick={() => changeLanguage('en')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-sm font-semibold border ${
                      currentLang === 'en' 
                        ? 'bg-white border-orange-500 text-orange-500 shadow-sm' 
                        : 'bg-transparent border-gray-200 text-gray-700'
                    }`}
                  >
                    <UKFlag />
                    <span>English</span>
                  </button>
                </div>
              </div>
              <a
                href="/#contact"
                onClick={(e) => {
                  setIsMobileMenuOpen(false)
                  handleAnchorClick(e, '/#contact')
                }}
                className="w-full text-center py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-cyan-400 via-blue-500 to-navy shadow-md shadow-blue-500/10"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
