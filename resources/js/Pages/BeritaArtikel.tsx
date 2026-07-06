import React, { useState } from 'react'
import { Head, Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import FloatingButtons from '@/Components/FloatingButtons'
import { 
  Calendar, 
  User, 
  ArrowRight, 
  Search, 
  ChevronRight,
  TrendingUp,
  Tag
} from 'lucide-react'

// ==========================================
// DATA DUMMY ARTIKEL & BERITA
// ==========================================
interface Article {
  id: number
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  image: string
  readTime: string
}

const ARTICLES_DATA: Article[] = [
  {
    id: 1,
    title: 'Home of Sound Jadi Panggung Peluncuran TitanHome, Layanan Internet Rumah Terbaru dari NEXA',
    category: 'NEXA EVENT',
    excerpt: 'Semarang, 22 Juni 2026 — NEXA, perusahaan Internet & Digital Solutions Provider terkemuka di Jawa Tengah, akan menggelar Home of Sound: The Grand Launch of TitanHome pada Minggu, 21 Juni 2026 di Parking Area Marina Convention Center Semarang.',
    date: '23 Juni 2026',
    author: 'Nexa Admin',
    image: '/images/news-home-of-sound.png',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Clash of Titans: Turnamen Padel Corporate Pertama di Indonesia, NEXA Hadirkan Experience Sportainment Berkelas Menuju Grand Launch TitanHome',
    category: 'NEXA & TITANHOME EVENT',
    excerpt: 'Semarang, 10 April 2026 — NEXA kembali menghadirkan terobosan dengan menggelar Corporate Padel Tournament: Clash of Titans, sebuah turnamen padel antar corporate yang menjadi bagian dari rangkaian menyambut Grand Launch TitanHome.',
    date: '16 April 2026',
    author: 'Nexa IT',
    image: '/images/news-clash-of-titans.png',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'Setelah ISO 9001, NEXA Tahun Ini Kembali Raih ISO 27001, Bukti Komitmen Terhadap Kualitas Keamanan Informasi',
    category: 'NEXA ACHIEVEMENTS',
    excerpt: 'Semarang, 2026 — Sebagai wujud komitmen tinggi dalam menjaga kualitas sistem manajemen keamanan informasi pelanggan, NEXA berhasil meraih sertifikasi internasional ISO/IEC 27001.',
    date: '24 Mei 2026',
    author: 'Nexa Security',
    image: '/images/news-iso-certification.jpg',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'Nexa Corporate Break 9 Ball Tournament: Turnamen Biliar Corporate Pertama dan Terbesar di Jawa Tengah Sukses Digelar',
    category: 'NEXA EVENT',
    excerpt: 'Semarang, 2026 — Turnamen biliar antar korporasi \'Nexa Corporate Break 9 Ball Tournament\' sukses diselenggarakan dengan meriah dan diikuti oleh puluhan perusahaan ternama di Jawa Tengah.',
    date: '12 Juni 2026',
    author: 'Nexa Event Organizer',
    image: '/images/news-corporate-break.png',
    readTime: '5 min read'
  }
]

const POPULAR_TAGS = ['TitanHome', 'Clash of Titans', 'Padel Tournament', 'ISO 27001', 'Corporate Break', 'Nexa Event', 'Biliar']

export default function BeritaArtikel() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Semua')

  const categories = ['Semua', 'NEXA EVENT', 'NEXA & TITANHOME EVENT', 'NEXA ACHIEVEMENTS']

  const filteredArticles = ARTICLES_DATA.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'Semua' || article.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <>
      <Head title="Berita & Artikel - Informasi & Edukasi Digital Terkini | NEXA" />

      <main className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-cyan-500 selection:text-white">
        {/* 1. Header Sticky Navbar */}
        <Navbar />

        {/* 2. Hero Section */}
        <section 
          className="relative w-full py-24 lg:py-36 overflow-hidden bg-cover bg-center mt-14 flex items-center min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px]" 
          style={{ backgroundImage: "url('/images/news-hero-bg.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Text Content with Frosted Glass Blur Card */}
              <div className="md:col-span-7 relative z-10 max-w-xl lg:max-w-2xl">
                <div className="bg-white/40 backdrop-blur-md border border-white/20 p-8 sm:p-10 rounded-3xl shadow-xl space-y-4">
                  <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">
                    BERITA & ARTIKEL
                  </span>
                  <h1 className="text-5xl sm:text-6xl font-black font-heading leading-none tracking-tight">
                    <span className="text-orange-500 block">Berita</span>
                    <span className="text-navy block">& Artikel</span>
                  </h1>
                  <p className="text-xl font-medium text-black leading-relaxed max-w-md">
                    Semakin banyak Anda membaca, semakin Anda tahu.
                  </p>
                </div>
              </div>

              {/* Empty spacer to show right background illustration */}
              <div className="hidden md:block md:col-span-5" />

            </div>
          </div>

          {/* Background Aksen SVG Gelombang */}
          <div className="absolute bottom-0 left-0 right-0 pointer-events-none w-full z-0 overflow-hidden">
            <svg 
              viewBox="0 0 1440 120" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-auto translate-y-2 scale-y-[1.1]"
            >
              <path 
                d="M0,64L80,74.7C160,85,320,107,480,112C640,117,800,107,960,90.7C1120,75,1280,53,1360,42.7L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" 
                fill="#F8F9FA" 
              />
            </svg>
          </div>
        </section>

        {/* 3. Main Articles & Sidebar Section */}
        <section className="py-20 bg-[#F8F9FA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-2.5 mb-12 justify-center">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                    selectedCategory === cat
                      ? 'bg-orange-500 text-white shadow-md shadow-orange-500/20'
                      : 'bg-white hover:bg-gray-100 text-navy border border-gray-100'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              
              {/* Left Column: Articles Grid */}
              <div className="lg:col-span-8 space-y-8">
                {filteredArticles.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredArticles.map((article) => (
                      <article 
                        key={article.id} 
                        className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between"
                      >
                        <div>
                          {/* Image wrapper */}
                          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                            <img 
                              src={article.image} 
                              alt={article.title} 
                              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <span className="absolute top-4 left-4 bg-orange-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full">
                              {article.category}
                            </span>
                          </div>

                          {/* Content */}
                          <div className="p-6 space-y-4">
                            <div className="flex items-center gap-4 text-gray-400 text-xs font-semibold">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5" />
                                {article.date}
                              </span>
                              <span>•</span>
                              <span>{article.readTime}</span>
                            </div>
                            <h3 className="text-lg font-bold text-navy leading-snug font-heading hover:text-orange-500 transition-colors">
                              <a href="#">{article.title}</a>
                            </h3>
                            <p className="text-gray-500 text-sm leading-relaxed">
                              {article.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Read More Link */}
                        <div className="p-6 pt-0 border-t border-gray-50 flex items-center justify-between">
                          <span className="flex items-center gap-1 text-xs font-semibold text-gray-400">
                            <User className="w-3.5 h-3.5" />
                            {article.author}
                          </span>
                          <a 
                            href="#" 
                            className="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:text-orange-600 group"
                          >
                            Baca Selengkapnya
                            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                          </a>
                        </div>
                      </article>
                    ))}
                  </div>
                ) : (
                  <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 shadow-sm space-y-4">
                    <p className="text-gray-500 font-medium">Tidak ada artikel yang cocok dengan pencarian Anda.</p>
                    <button 
                      onClick={() => { setSearchTerm(''); setSelectedCategory('Semua'); }}
                      className="px-6 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs rounded-xl transition-all"
                    >
                      Reset Filter
                    </button>
                  </div>
                )}
              </div>

              {/* Right Column: Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                
                {/* Sidebar Card: Search */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <h4 className="text-md font-bold text-navy font-heading border-b border-gray-50 pb-3 flex items-center gap-2">
                    <Search className="w-4 h-4 text-orange-500" />
                    Pencarian Artikel
                  </h4>
                  <div className="relative">
                    <input 
                      type="text" 
                      placeholder="Cari kata kunci..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-2xl text-sm focus:outline-none focus:border-orange-500 transition-colors"
                    />
                    <Search className="absolute right-3.5 top-3.5 w-4 h-4 text-gray-400" />
                  </div>
                </div>

                {/* Sidebar Card: Trending Topics */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <h4 className="text-md font-bold text-navy font-heading border-b border-gray-50 pb-3 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-orange-500" />
                    Artikel Populer
                  </h4>
                  <div className="space-y-4">
                    {ARTICLES_DATA.slice(0, 3).map((art) => (
                      <div key={art.id} className="flex gap-3 group cursor-pointer">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 flex-shrink-0">
                          <img src={art.image} alt={art.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </div>
                        <div className="space-y-1">
                          <span className="text-[10px] font-bold text-orange-500 uppercase tracking-wider">{art.category}</span>
                          <h5 className="text-xs font-bold text-navy line-clamp-2 leading-snug group-hover:text-orange-500 transition-colors">
                            {art.title}
                          </h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sidebar Card: Popular Tags */}
                <div className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm space-y-4">
                  <h4 className="text-md font-bold text-navy font-heading border-b border-gray-50 pb-3 flex items-center gap-2">
                    <Tag className="w-4 h-4 text-orange-500" />
                    Tag Populer
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {POPULAR_TAGS.map((tag) => (
                      <button 
                        key={tag}
                        onClick={() => setSearchTerm(tag)}
                        className="px-3 py-1.5 bg-gray-50 hover:bg-gray-100 border border-gray-100 rounded-xl text-[11px] font-semibold text-gray-500 transition-all"
                      >
                        #{tag}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 4. Footer & Floating Buttons */}
        <Footer />
        <FloatingButtons />
      </main>
    </>
  )
}
