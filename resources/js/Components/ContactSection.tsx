import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Phone, Mail, Send, CheckCircle, AlertCircle } from 'lucide-react'
import axios from 'axios'

export default function ContactSection() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    address: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  useEffect(() => {
    // 1. Load Leaflet CSS jika belum ada
    const cssId = 'leaflet-css'
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link')
      link.id = cssId
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // 2. Load Leaflet JS
    const jsId = 'leaflet-js'
    const initMap = () => {
      const L = (window as any).L
      if (!L || !mapContainerRef.current || mapRef.current) return

      // Inisialisasi peta berpusat di Kantor Pusat NEXA Semarang
      const nexaOfficeCoords: [number, number] = [-7.026848, 110.428359]
      const map = L.map(mapContainerRef.current, {
        center: nexaOfficeCoords,
        zoom: 15,
        zoomControl: true
      })
      mapRef.current = map

      // OpenStreetMap Tile Layer
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      }).addTo(map)

      // Tambahkan Pin Marker Kantor NEXA
      const marker = L.marker(nexaOfficeCoords).addTo(map)
      marker.bindPopup(`
        <div class="p-1 font-sans text-center">
          <b class="text-[#0B1E3D] text-sm">PT Internet Mulia Untuk Negeri</b>
          <p class="text-xs text-gray-500 mt-1">Head Office (NEXA)</p>
        </div>
      `).openPopup()
    }

    if (!(window as any).L) {
      const script = document.createElement('script')
      script.id = jsId
      script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
      script.async = true
      script.onload = initMap
      document.head.appendChild(script)
    } else {
      initMap()
    }
  }, [])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    
    // Validasi
    if (!formData.name.trim() || !formData.company.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.address.trim() || !formData.message.trim()) {
      setErrorMsg('Semua kolom wajib diisi.')
      return
    }

    setIsSubmitting(true)

    axios.post('/contact-send', formData)
      .then(response => {
        setIsSubmitting(false)
        setShowSuccess(true)
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          address: '',
          message: ''
        })
        
        // Auto close success alert after 5 seconds
        setTimeout(() => setShowSuccess(false), 5000)
      })
      .catch(error => {
        setIsSubmitting(false)
        setErrorMsg(error.response?.data?.message || 'Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.')
      })
  }

  return (
    <section id="contact" className="py-24 bg-white border-t border-gray-100 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Header (Matching Image 2) */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">Contact</span>
          <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
            Kontak Kami
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Guna memenuhi kebutuhan Anda, Nexa hadir di beberapa kota besar di Indonesia.
            Untuk Informasi lebih lanjut, silakan menghubungi kontak di bawah ini.
          </p>
          <div className="w-12 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
        </div>

        {/* 2. Three Columns Info (Matching Image 2) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Head Office */}
          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl flex-shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-navy text-lg font-heading">Head Office</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Jalan Jangli Dalam No 29 J<br />
                Jatingaleh, Kec. Candisari,<br />
                Kota Semarang, Jawa Tengah 50254
              </p>
            </div>
          </div>

          {/* Call Us */}
          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl flex-shrink-0">
              <Phone className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-navy text-lg font-heading">Call Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Call. <a href="tel:0248509595" className="hover:text-orange-500 transition-colors">024-850-9595</a><br />
                Phone. <a href="tel:+628112971000" className="hover:text-orange-500 transition-colors">+62 811-2971-000</a>
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="flex items-start gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-md transition-all duration-300">
            <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl flex-shrink-0">
              <Mail className="w-6 h-6" />
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-navy text-lg font-heading">Email Us</h3>
              <p className="text-sm text-gray-500 leading-relaxed font-sans">
                Email. <a href="mailto:info@nexa.net.id" className="hover:text-orange-500 transition-colors">info@nexa.net.id</a>
              </p>
            </div>
          </div>
        </div>

        {/* 3. Interactive Form & Map Container (Matching Image 3) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Left Column: Form Card */}
          <div className="bg-gray-50 rounded-3xl p-8 sm:p-10 border border-gray-100 flex flex-col justify-between">
            <h3 className="text-xl font-bold font-heading text-navy mb-8">Kirim Pesan Ke Nexa</h3>

            {errorMsg && (
              <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-start gap-2.5 text-red-600 text-sm">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {showSuccess && (
              <div className="mb-6 p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-xl flex items-start gap-2.5 text-emerald-600 text-sm">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                <span>Pesan Anda telah berhasil terkirim! Tim kami akan segera merespons.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                  />
                </div>

                {/* Company Name */}
                <div className="space-y-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Company Name *</label>
                  <input 
                    type="text" 
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    placeholder="Your Company"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Email */}
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email to reach you"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Telp No. *</label>
                  <input 
                    type="tel" 
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Your Phone Number"
                    className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                  />
                </div>
              </div>

              {/* Address */}
              <div className="space-y-1.5">
                <label htmlFor="address" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Address *</label>
                <input 
                  type="text" 
                  id="address"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Your Address"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-600 uppercase tracking-wider">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your needs!"
                  className="w-full px-4 py-3 bg-white rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all resize-none"
                />
              </div>

              {/* Submit Button (Matching Image 3) */}
              <div className="pt-2">
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="px-10 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-150 disabled:opacity-50 flex items-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Submit
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right Column: Google Maps Simulation using Leaflet (Matching Image 3) */}
          <div className="relative rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[400px] lg:min-h-full">
            <div 
              ref={mapContainerRef} 
              className="w-full h-full min-h-[400px] lg:h-full z-10" 
            />
          </div>

        </div>

      </div>
    </section>
  )
}
