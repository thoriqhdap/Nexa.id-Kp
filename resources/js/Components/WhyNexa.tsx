import React, { useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'

export default function WhyNexa() {
  const cards = [
    {
      image: 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=600&auto=format&fit=crop',
      text: 'Selalu memberikan layanan terbaik untuk kepuasan Anda'
    },
    {
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      text: 'Sistem yang terintegrasi untuk bisnis Anda'
    },
    {
      image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
      text: 'Dukungan infrastruktur IT terdepan dan aman'
    },
    {
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
      text: 'Kemitraan strategis untuk skala bisnis Anda'
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 2 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= cards.length - 2 ? 0 : prev + 1))
  }

  return (
    <section className="relative w-full overflow-hidden flex flex-col md:flex-row min-h-[450px]">
      {/* Left Column: Navy Blue (approx 40% width on large screens) */}
      <div className="w-full md:w-[40%] bg-[#0B132B] text-white p-12 md:p-16 lg:p-20 flex flex-col justify-between relative z-10">
        <div className="space-y-6">
          <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block font-sans">
            Business
          </span>
          <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight">
            Why Nexa?
          </h2>
          <p className="text-gray-300 text-base md:text-lg leading-relaxed font-sans font-medium max-w-sm">
            Memberikan solusi IT untuk masalah jaringan yang terjadi pada pelanggan.
          </p>
        </div>

        {/* Carousel Navigation Buttons & Try Now */}
        <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <a 
            href="#contact"
            className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl transition-all duration-300 active:scale-[0.97] text-center"
          >
            Try Now
          </a>

          <div className="flex items-center gap-3">
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white"
              aria-label="Previous slide"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 active:scale-95 transition-all text-white"
              aria-label="Next slide"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Right Column: Carousel (60% width on large screens) */}
      <div className="w-full md:w-[60%] bg-[#4B9CD3]/90 relative p-8 md:p-12 lg:p-16 flex items-center overflow-hidden">
        {/* Horizontal sliding container */}
        <div 
          className="flex gap-6 transition-transform duration-500 ease-out w-full"
          style={{ transform: `translateX(-${currentIndex * 52}%)` }}
        >
          {cards.map((card, idx) => (
            <div 
              key={idx}
              className="w-[85%] sm:w-[48%] flex-shrink-0 bg-white rounded-3xl overflow-hidden shadow-xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <img 
                  src={card.image} 
                  alt="Feature detail description" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p className="text-gray-800 font-sans font-bold text-sm leading-snug">
                  {card.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
