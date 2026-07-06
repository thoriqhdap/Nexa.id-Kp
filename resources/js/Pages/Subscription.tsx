import React, { useState } from 'react'
import { Head } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { CheckCircle, AlertCircle, Sparkles, Send } from 'lucide-react'
import axios from 'axios'

export default function Subscription() {
  const [formData, setFormData] = useState({
    package: 'Dedicated Internet',
    name: '',
    phone: '',
    email: '',
    address: '',
    city: 'Semarang'
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setErrorMsg('')
    
    // Validasi dasar
    if (!formData.name.trim()) {
      setErrorMsg('Nama lengkap wajib diisi.')
      return
    }
    if (!formData.phone.trim()) {
      setErrorMsg('Nomor telepon wajib diisi.')
      return
    }
    if (!formData.email.trim()) {
      setErrorMsg('Email wajib diisi.')
      return
    }
    if (!formData.address.trim()) {
      setErrorMsg('Alamat lengkap wajib diisi.')
      return
    }

    setIsSubmitting(true)

    axios.post('/subscription-send', formData)
      .then(response => {
        setIsSubmitting(false)
        setShowSuccessModal(true)
        setFormData({
          package: 'Dedicated Internet',
          name: '',
          phone: '',
          email: '',
          address: '',
          city: 'Semarang'
        })
      })
      .catch(error => {
        setIsSubmitting(false)
        setErrorMsg(error.response?.data?.message || 'Terjadi kesalahan saat memproses pendaftaran. Silakan coba lagi.')
      })
  }

  return (
    <>
      <Head title="Langganan Sekarang - Mulailah Berlangganan Layanan Bersama Nexa" />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
        {/* 1. Sticky Navbar */}
        <Navbar />

        {/* 2. Hero Section */}
        <section className="relative w-full bg-white pt-24 lg:pt-32 pb-20 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Side */}
              <div className="space-y-5 text-left">
                <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">
                  Langganan Sekarang
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading text-navy leading-tight tracking-tight">
                  Mulailah berlangganan layanan bersama Nexa
                </h1>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-md">
                  Pilih paket terbaik untuk kebutuhan bisnis atau personal Anda, dan nikmati konektivitas super cepat dan dukungan teknis 24/7.
                </p>
              </div>

              {/* Right Side - Hero Image */}
              <div className="relative flex justify-center lg:justify-end items-center">
                <div className="absolute w-[300px] h-[300px] bg-gradient-to-tr from-blue-500/10 to-orange-500/10 rounded-full blur-3xl -z-10" />
                <div className="relative w-full max-w-[420px] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white p-4">
                  <img 
                    src="/images/subscription-hero.png" 
                    alt="Customer smiling and showing ok gesture" 
                    className="w-full h-auto rounded-2xl object-cover aspect-[4/3] scale-x-[-1]"
                  />
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* 3. Subscription Form Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 relative overflow-hidden">
              <div className="absolute left-0 top-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 to-amber-500" />
              
              <div className="mb-10 text-center space-y-2">
                <h2 className="text-2xl font-black text-navy font-heading">Formulir Registrasi Langganan</h2>
                <p className="text-xs sm:text-sm text-gray-400">Lengkapi data diri Anda di bawah ini untuk memulai.</p>
              </div>

              {errorMsg && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl flex items-start gap-2.5 text-red-600 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* 1. Pilihan Paket */}
                <div className="space-y-2">
                  <label htmlFor="package" className="block text-sm font-bold text-navy font-heading">Pilihan Paket Layanan</label>
                  <select 
                    id="package"
                    name="package"
                    value={formData.package}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                  >
                    <option value="Dedicated Internet">Dedicated Internet</option>
                    <option value="Broadband Bisnis">Broadband Bisnis (Nexatel)</option>
                    <option value="Managed Cloud Server">Managed Cloud Server (Nexa Data)</option>
                    <option value="IT Managed Solutions">IT Managed Solutions (Nexa Solutions)</option>
                    <option value="Creative Ads & Social Media">Creative Ads & Social Media (Nexa Digital)</option>
                  </select>
                </div>

                {/* Grid Input */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 2. Nama Lengkap */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-navy font-heading">Nama Lengkap</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Masukkan nama lengkap"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* 3. Nomor Telepon */}
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-navy font-heading">Nomor Telepon</label>
                    <input 
                      type="tel" 
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="Contoh: 081234567890"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                    />
                  </div>
                </div>

                {/* Grid Input 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* 4. Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="block text-sm font-bold text-navy font-heading">Alamat Email</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Contoh: info@perusahaan.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                    />
                  </div>

                  {/* 5. Kota */}
                  <div className="space-y-2">
                    <label htmlFor="city" className="block text-sm font-bold text-navy font-heading">Kota Domisili</label>
                    <select
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all"
                    >
                      <option value="Semarang">Semarang</option>
                      <option value="Surakarta">Surakarta</option>
                      <option value="Yogyakarta">Yogyakarta</option>
                      <option value="Surabaya">Surabaya</option>
                      <option value="Malang">Malang</option>
                      <option value="Denpasar">Denpasar / Bali</option>
                      <option value="Kudus">Kudus</option>
                      <option value="Magelang">Magelang</option>
                    </select>
                  </div>
                </div>

                {/* 6. Alamat Lengkap */}
                <div className="space-y-2">
                  <label htmlFor="address" className="block text-sm font-bold text-navy font-heading">Alamat Lengkap</label>
                  <textarea 
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    rows={4}
                    placeholder="Masukkan alamat lengkap pengiriman atau instalasi layanan"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-orange-500 focus:ring focus:ring-orange-500/20 outline-none text-sm transition-all resize-none"
                  />
                </div>

                {/* Tombol Submit */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 font-sans font-bold text-white px-8 py-4.5 rounded-2xl bg-navy bg-[#0B1E3D] hover:bg-[#122C54] shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Memproses Pendaftaran...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Daftar Sekarang
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </section>

        {/* 4. Footer */}
        <Footer />

        {/* 5. Success Modal */}
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300">
            <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center space-y-5 border border-gray-100 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
              <div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10 text-emerald-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-navy font-heading">Pendaftaran Sukses!</h3>
                <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">
                  Terima kasih telah mendaftar. Email konfirmasi pendaftaran otomatis telah dikirimkan ke alamat email Anda. Tim sales kami akan segera menghubungi Anda.
                </p>
              </div>
              <button 
                onClick={() => setShowSuccessModal(false)}
                className="w-full py-3 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold rounded-xl shadow-lg shadow-orange-500/20 active:scale-95 transition-all duration-150"
              >
                Tutup
              </button>
            </div>
          </div>
        )}

      </main>
    </>
  )
}
