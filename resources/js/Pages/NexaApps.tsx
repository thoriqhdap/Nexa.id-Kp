import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import {
  ChevronRight,
  AppWindow,
  Cpu,
  RefreshCw,
  MessageCircle
} from 'lucide-react'

// ==========================================
// TIPE & INTERFACE
// ==========================================
interface Portfolio {
  id: number
  title: string
  category: string
  image: string
}

interface AccordionItemProps {
  id: number
  title: string
  content: string
  isOpen: boolean
  onToggle: () => void
}

// ==========================================
// DUMMY DATA
// ==========================================
const PORTFOLIO_DATA: Portfolio[] = [
  {
    id: 1,
    title: 'Nexa Card',
    category: 'Aplikasi Mobile & Pembayaran',
    image: '/images/portfolio-nexacard.png'
  },
  {
    id: 2,
    title: 'Perkasa Telkomselindo',
    category: 'Dashboard & Sistem Manajemen Web',
    image: '/images/portfolio-perkasa.png'
  },
  {
    id: 3,
    title: 'Signa',
    category: 'Platform Bisnis Digital B2B',
    image: '/images/portfolio-signa.png'
  }
]

const ACCORDION_DATA = [
  {
    id: 1,
    title: 'Custom Software Development Services',
    content: 'Kami membangun perangkat lunak kustom yang disesuaikan secara khusus dengan alur kerja dan kebutuhan bisnis Anda untuk mencapai efisiensi maksimal.'
  },
  {
    id: 2,
    title: 'Web Design & Development',
    content: 'Pembuatan website korporat dan e-commerce yang modern, berkecepatan tinggi, aman, SEO-friendly, serta sepenuhnya responsif di semua perangkat.'
  },
  {
    id: 3,
    title: 'Mobile Application Development',
    content: 'Pengembangan aplikasi mobile native (iOS & Android) maupun hybrid (Flutter/React Native) dengan antarmuka yang intuitif dan performa responsif.'
  },
  {
    id: 4,
    title: 'API Development Services',
    content: 'Jasa pembuatan web service dan API yang aman, andal, serta terstruktur dengan baik untuk menghubungkan berbagai platform bisnis Anda.'
  },
  {
    id: 5,
    title: 'Payment Integration',
    content: 'Integrasi sistem pembayaran online (Payment Gateway seperti Midtrans, Xendit) secara aman ke platform toko online atau aplikasi bisnis Anda.'
  },
  {
    id: 6,
    title: 'Startup Development',
    content: 'Membantu startup merancang, memvalidasi produk minimum layak jual (MVP), hingga membangun teknologi siap rilis secara cepat dan terarah.'
  },
  {
    id: 7,
    title: 'IT Staffing',
    content: 'Menyediakan tenaga ahli IT profesional (Developer, Designer, QA, Project Manager) berkualitas tinggi untuk menunjang kebutuhan tim internal Anda.'
  }
]

// ==========================================
// DUMMY FLAG FOR AREA


// ==========================================
// SUB-KOMPONEN HERO
// ==========================================
function HeroSection() {
  return (
    <section 
      className="relative w-full py-20 lg:py-32 overflow-hidden bg-cover bg-center mt-14 flex items-center min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px]" 
      style={{ backgroundImage: "url('/images/nexa-apps-hero-bg.png')" }}
    >
      {/* Solid white cover to block 100% of the baked-in screenshot text */}
      <div className="absolute inset-y-0 left-0 w-full md:w-[46%] bg-white z-0" />
      <div className="hidden md:block absolute inset-y-0 left-[46%] w-[14%] bg-gradient-to-r from-white to-transparent z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* Dynamic responsive text */}
          <div className="md:col-span-7 space-y-6 text-left max-w-xl lg:max-w-2xl">
            <span className="bg-red-600/10 text-red-600 font-sans font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block">
              NEXA SOFTWARE SOLUTIONS
            </span>
            <h1 className="text-5xl sm:text-6xl font-black font-heading text-red-600 tracking-tight leading-none">
              Nexa Apps
            </h1>
            <p className="text-lg sm:text-xl font-bold text-navy leading-relaxed max-w-lg font-sans">
              Kami dapat merealisasikan yang Anda inginkan dimulai dari perencanaan, proses pengerjaan, uji coba, pemeliharaan hingga pengembangan
            </p>
            <div className="pt-4 flex flex-wrap gap-4">
              <a 
                href="#products" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-sans font-bold rounded-2xl shadow-xl shadow-red-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                Lihat Layanan
              </a>
              <a 
                href="#portfolio" 
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 bg-navy hover:bg-[#1B365D] text-white font-sans font-bold rounded-2xl active:scale-[0.98] transition-all duration-300"
              >
                Portofolio Kami
              </a>
            </div>
          </div>
          
          {/* Empty spacer to show right background illustration */}
          <div className="hidden md:block md:col-span-5" />

        </div>
      </div>
    </section>
  )
}

// ==========================================
// SUB-KOMPONEN SERVICE FEATURES
// ==========================================
function ServiceFeatures() {
  const features = [
    {
      icon: <AppWindow className="w-8 h-8 text-red-600" />,
      title: 'Pengembangan Aplikasi Bisnis',
      desc: 'Membangun aplikasi mobile dan web berorientasi bisnis untuk meningkatkan interaksi pelanggan dan penjualan Anda secara signifikan.'
    },
    {
      icon: <Cpu className="w-8 h-8 text-red-600" />,
      title: 'Pengembangan Software Bisnis',
      desc: 'Perancangan software CRM, ERP, atau sistem inventarisasi internal kustom yang didesain presisi mengikuti standar operasi perusahaan Anda.'
    },
    {
      icon: <RefreshCw className="w-8 h-8 text-red-600" />,
      title: 'Pembaharuan Software',
      desc: 'Modernisasi sistem warisan (legacy) agar kompatibel dengan teknologi modern, lebih cepat, aman, serta siap melayani lonjakan lalu lintas data.'
    }
  ]

  return (
    <section className="py-24 bg-gray-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

        {/* Header */}
        <div className="mb-16 space-y-3">
          <span className="text-red-600 font-extrabold text-sm uppercase tracking-wider block">Nexa Apps</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
            Service Features
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-left space-y-4 relative overflow-hidden group"
            >
              {/* Decorative side accent bar on hover */}
              <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-red-600 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="p-4 bg-red-50 rounded-2xl inline-block">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-navy font-heading">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

// ==========================================
// SUB-KOMPONEN PRODUCT & SERVICES (ACCORDION)
// ==========================================
function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
      >
        <span className="text-[17px] font-bold text-navy font-heading">{title}</span>
        <div className={`p-1.5 rounded-xl border border-gray-200 transition-transform duration-300 ${isOpen ? 'rotate-90 bg-red-50 border-red-200 text-red-600' : 'text-gray-400'}`}>
          <ChevronRight className="w-5 h-5" />
        </div>
      </button>

      {/* Content wrapper with smooth animation */}
      <div
        className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'
          } overflow-hidden`}
      >
        <div className="p-6 bg-gray-50/30 text-gray-500 text-sm leading-relaxed">
          {content}
        </div>
      </div>
    </div>
  )
}

function ProductServices() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-red-600 font-extrabold text-sm uppercase tracking-wider block">Layanan Kami</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
            Product & Services
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Accordion container */}
        <div className="space-y-4">
          {ACCORDION_DATA.map((item) => (
            <AccordionItem
              key={item.id}
              id={item.id}
              title={item.title}
              content={item.content}
              isOpen={openId === item.id}
              onToggle={() => setOpenId(openId === item.id ? null : item.id)}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

// ==========================================
// SUB-KOMPONEN PORTFOLIO
// ==========================================
function PortfolioCard({ title, category, image }: Omit<Portfolio, 'id'>) {
  return (
    <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full group">

      {/* Portfolio Mockup Display */}
      <div className="relative aspect-video w-full overflow-hidden bg-gray-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            // Fallback jika image belum dicopy
            (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=500&auto=format&fit=crop'
          }}
        />
        <div className="absolute top-3 left-3 bg-red-600 text-white font-sans text-xs font-extrabold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
          Featured
        </div>
      </div>

      {/* Description */}
      <div className="p-6 flex-grow flex flex-col justify-between space-y-2.5">
        <div>
          <span className="text-red-500 font-extrabold text-xs uppercase tracking-wide block">
            {category}
          </span>
          <h3 className="text-xl font-bold text-navy font-heading mt-1">
            {title}
          </h3>
        </div>
        <div className="pt-4 border-t border-gray-50 flex items-center justify-between text-navy font-bold text-sm group-hover:text-red-600 transition-colors">
          <span>Lihat Detail Studi Kasus</span>
          <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
        </div>
      </div>

    </div>
  )
}

function Portfolios() {
  return (
    <section id="portfolio" className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <span className="text-red-600 font-extrabold text-sm uppercase tracking-wider block">Portofolio Kami</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
            Portfolios
          </h2>
          <div className="w-16 h-1 bg-red-600 mx-auto rounded-full mt-2" />
        </div>

        {/* Grid List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PORTFOLIO_DATA.map((portfolio) => (
            <PortfolioCard
              key={portfolio.id}
              title={portfolio.title}
              category={portfolio.category}
              image={portfolio.image}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

// ==========================================
// SUB-KOMPONEN CTA SECTION
// ==========================================
function CTASection() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* Overlapping Dark Navy Floating Banner */}
        <div className="bg-navy rounded-3xl px-8 py-10 text-center text-white shadow-2xl max-w-xl mx-auto -mt-16 mb-16 relative z-10 border border-white/5">
          <span className="text-red-500 font-extrabold text-xs uppercase tracking-widest block mb-2">💡 Jangan Khawatir</span>
          <h3 className="text-2xl sm:text-3xl font-bold font-heading">
            Prosesnya gampang kok, jangan khawatir!
          </h3>
          <p className="text-gray-300 text-xs sm:text-sm mt-3 leading-relaxed">
            Tim expert engineer kami akan memandu Anda secara ramah mulai dari konsultasi awal hingga rilis produk.
          </p>
        </div>

        {/* Bottom Headline & Orange Button */}
        <div className="text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-heading text-navy tracking-tight uppercase">
            TERTARIK UNTUK MENCOBA ?
          </h2>
          <p className="text-gray-500 text-sm max-w-md mx-auto">
            Diskusikan ide brilian aplikasi Anda dengan konsultan IT kami sekarang secara gratis.
          </p>
          <div className="pt-4">
            <a
              href="https://wa.me/628112971000"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 font-sans font-bold text-white px-8 py-4.5 rounded-2xl bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
              Hubungi Kami Sekarang
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}


// ==========================================
// FLOATING WHATSAPP BUTTON SUB-KOMPONEN
// ==========================================
function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/628112971000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BA5A] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center animate-bounce"
      title="Hubungi kami via WhatsApp"
    >
      {/* Pulse effect rings */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden" />
      <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" />
    </a>
  )
}

// ==========================================
// INDUK PAGE COMPONENT: NexaApps
// ==========================================
export default function NexaApps() {
  return (
    <>
      <Head title="Nexa Apps - Jasa Pembuatan Aplikasi & Software Kustom Terpercaya" />

      {/* Layout Wrapper */}
      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-red-500 selection:text-white">
        {/* 1. Header & Navigation Bar */}
        <Navbar />

        {/* 2. Hero Section */}
        <HeroSection />

        {/* 3. Service Features Section */}
        <ServiceFeatures />

        {/* 4. Product & Services Section */}
        <ProductServices />

        {/* 5. Portfolios Section */}
        <Portfolios />

        {/* 6. CTA Section */}
        <CTASection />

        {/* 7. Footer */}
        <Footer />

        {/* 8. Floating WhatsApp Action Button */}
        <FloatingWhatsApp />
      </main>
    </>
  )
}
