import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import {
  ChevronRight,
  Sparkles,
  BarChart3,
  MessageCircle,
  Award
} from 'lucide-react'

// ==========================================
// DATA DUMMY
// ==========================================
const ACCORDION_DATA = [
  {
    id: 1,
    title: 'Social Media Management',
    content: 'Jasa pengelolaan akun Instagram, TikTok, LinkedIn, dan Facebook secara komprehensif, mulai dari riset konten, copywriting, desain grafis, hingga penjadwalan posting harian.'
  },
  {
    id: 2,
    title: 'Search Engine Optimization (SEO)',
    content: 'Optimasi website bisnis Anda agar berada di halaman pertama Google secara organik untuk meningkatkan kunjungan calon pelanggan tanpa harus terus membayar iklan.'
  },
  {
    id: 3,
    title: 'Digital Advertising (Meta & Google Ads)',
    content: 'Kampanye iklan berbayar tertarget menggunakan Instagram Ads, Facebook Ads, TikTok Ads, dan Google Search Ads untuk menghasilkan prospek (leads) dan konversi penjualan instan.'
  },
  {
    id: 4,
    title: 'Creative Content & Video Production',
    content: 'Produksi video pendek kreatif (Reels & TikTok), photoshoot produk katalog profesional, pembuatan website landing page promo, serta jasa penulisan naskah iklan menarik.'
  }
]

export default function NexaDigital() {
  const [openId, setOpenId] = useState<number | null>(1)

  return (
    <>
      <Head title="Nexa Digital - Agency Digital Marketing & Social Media Management Kreatif" />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
        {/* 1. Header */}
        <Navbar />

        {/* 2. Hero Section */}
        <section 
          className="relative w-full py-20 lg:py-32 overflow-hidden bg-cover bg-center mt-14 flex items-center min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px]" 
          style={{ backgroundImage: "url('/images/nexa-digital-hero-bg.png')" }}
        >
          {/* Solid white cover to block 100% of the baked-in screenshot text */}
          <div className="absolute inset-y-0 left-0 w-full md:w-[46%] bg-white z-0" />
          <div className="hidden md:block absolute inset-y-0 left-[46%] w-[14%] bg-gradient-to-r from-white to-transparent z-0" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Dynamic responsive text */}
              <div className="md:col-span-7 space-y-6 text-left max-w-xl lg:max-w-2xl">
                <span className="bg-pink-600/10 text-pink-600 font-sans font-bold text-xs px-3 py-1 rounded-full uppercase tracking-wider inline-block">
                  NEXA DIGITAL MARKETING
                </span>
                <h1 className="text-5xl sm:text-6xl font-black font-heading text-pink-600 tracking-tight leading-none">
                  Nexa Digital
                </h1>
                <p className="text-lg sm:text-xl font-bold text-navy leading-relaxed max-w-lg font-sans">
                  Tangani semuanya di bawah satu atap. Jaga kreasinya, konsep, produksi, dan periklanan. kampanye Anda dengan mudah.
                </p>
                <div className="pt-4 flex flex-wrap gap-4">
                  <a 
                    href="#solutions" 
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-pink-600 hover:bg-pink-700 text-white font-sans font-bold rounded-2xl shadow-xl shadow-pink-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Pelajari Layanan
                  </a>
                  <a 
                    href="https://wa.me/628112971000" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-navy hover:bg-[#1B365D] text-white font-sans font-bold rounded-2xl active:scale-[0.98] transition-all duration-300"
                  >
                    Konsultasi Kreatif
                  </a>
                </div>
              </div>
              
              {/* Empty spacer to show right background illustration */}
              <div className="hidden md:block md:col-span-5" />

            </div>
          </div>
        </section>

        {/* 3. Service Features */}
        <section className="py-24 bg-gray-50 border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="mb-16 space-y-3">
              <span className="text-orange-600 font-extrabold text-sm uppercase tracking-wider block">Solusi Pemasaran</span>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
                Mengapa Memilih Kami?
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-left space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-4 bg-orange-50 rounded-2xl inline-block text-orange-600">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">Kreatif & Berdampak</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Penyusunan konsep konten yang segar, unik, aesthetic, serta relevan untuk memperkuat ikatan emosional konsumen dengan merek Anda.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-left space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-4 bg-orange-50 rounded-2xl inline-block text-orange-600">
                  <BarChart3 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">Keputusan Berbasis Data</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Pengukuran analitis yang transparan untuk setiap klik iklan, sehingga alokasi anggaran pemasaran Anda memberikan keuntungan (ROI) yang terukur.</p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.01] transition-all duration-300 text-left space-y-4 relative overflow-hidden group">
                <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-orange-500 scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                <div className="p-4 bg-orange-50 rounded-2xl inline-block text-orange-600">
                  <Award className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-navy font-heading">Tim Spesialis Bersertifikat</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Akun Anda dikelola oleh Copywriter, Graphic Designer, Video Editor, serta Traffic Optimizer berpengalaman dan bersertifikat resmi.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Product Services Accordion */}
        <section id="solutions" className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-3">
              <span className="text-orange-600 font-extrabold text-sm uppercase tracking-wider block">Produk Kreatif</span>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
                Layanan Digital Kami
              </h2>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
            </div>

            <div className="space-y-4">
              {ACCORDION_DATA.map((item) => (
                <div key={item.id} className="bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => setOpenId(openId === item.id ? null : item.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50/50 transition-colors"
                  >
                    <span className="text-[17px] font-bold text-navy font-heading">{item.title}</span>
                    <div className={`p-1.5 rounded-xl border border-gray-200 transition-transform duration-300 ${openId === item.id ? 'rotate-90 bg-orange-50 border-orange-200 text-orange-600' : 'text-gray-400'}`}>
                      <ChevronRight className="w-5 h-5" />
                    </div>
                  </button>
                  <div className={`transition-all duration-300 ease-in-out ${openId === item.id ? 'max-h-[300px] border-t border-gray-50' : 'max-h-0'} overflow-hidden`}>
                    <div className="p-6 bg-gray-50/30 text-gray-500 text-sm leading-relaxed">{item.content}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="py-24 bg-gray-50 relative overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-heading text-navy">
              INGIN JANGKAU LEBIH BANYAK PELANGGAN?
            </h2>
            <p className="text-gray-500 text-sm max-w-md mx-auto">
              Mari diskusikan produk bisnis Anda bersama Social Media Specialist kami secara gratis untuk merancang konsep feed & video iklan yang menarik.
            </p>
            <div className="pt-4">
              <a
                href="https://wa.me/628112971000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-sans font-bold text-white px-8 py-4.5 rounded-2xl bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/25 hover:scale-[1.02] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Hubungi Marketing Specialist
              </a>
            </div>
          </div>
        </section>

        {/* 6. Footer */}
        <Footer />

        {/* 7. Floating WhatsApp */}
        <a
          href="https://wa.me/628112971000"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BA5A] hover:scale-110 active:scale-95 transition-all duration-300 group flex items-center justify-center animate-bounce"
          title="Hubungi kami via WhatsApp"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366]/40 animate-ping group-hover:hidden" />
          <MessageCircle className="w-7 h-7 relative z-10" fill="currentColor" />
        </a>
      </main>
    </>
  )
}
