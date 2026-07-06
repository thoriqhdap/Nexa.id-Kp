import { useState, useEffect } from 'react'
import { ArrowUp, MessageCircle } from 'lucide-react'

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <>
      <button
        onClick={scrollToTop}
        className={`fixed bottom-24 right-6 w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-orange-400 hover:scale-110 z-50 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
          }`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </button>

      <a
        href="https://wa.me/628112971000"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-[#1565C0] rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:bg-blue-500 hover:scale-110 z-50"
        aria-label="Chat with customer care"
      >
        <MessageCircle className="w-7 h-7 text-white" />
      </a>
    </>
  )
}
