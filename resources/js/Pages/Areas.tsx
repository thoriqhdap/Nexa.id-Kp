import React, { useEffect, useRef, useState } from 'react'
import { Head } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { Phone, MapPin, Maximize, Map, Image } from 'lucide-react'

// ==========================================
// DATA DUMMY
// ==========================================
interface CoverageCity {
  name: string
  lat: number
  lng: number
  radius: number
  phone: string
  address: string
}

const CITIES_DATA: CoverageCity[] = [
  { name: "Semarang", lat: -7.005, lng: 110.418, radius: 18000, phone: "024-76430000", address: "Jl. Pemuda No. 150, Sekayu, Semarang Tengah, Kota Semarang" },
  { name: "Surakarta / Solo", lat: -7.575, lng: 110.827, radius: 12000, phone: "0271-7463000", address: "Jl. Slamet Riyadi No. 280, Solo" },
  { name: "Yogyakarta", lat: -7.797, lng: 110.370, radius: 16000, phone: "0274-5012000", address: "Jl. Jend. Sudirman No. 45, Yogyakarta" },
  { name: "Magelang", lat: -7.470, lng: 110.218, radius: 8000, phone: "0293-313000", address: "Jl. Tidar No. 12, Magelang" },
  { name: "Salatiga", lat: -7.331, lng: 110.508, radius: 6000, phone: "0298-3430000", address: "Jl. Diponegoro No. 88, Salatiga" },
  { name: "Kudus", lat: -6.804, lng: 110.840, radius: 7000, phone: "0291-4250000", address: "Jl. Jend. A. Yani No. 50, Kudus" },
  { name: "Surabaya", lat: -7.257, lng: 112.752, radius: 20000, phone: "031-99002000", address: "Jl. Basuki Rahmat No. 122, Surabaya" },
  { name: "Malang", lat: -7.983, lng: 112.621, radius: 14000, phone: "0341-3010000", address: "Jl. Ijen No. 10, Malang" },
  { name: "Gresik", lat: -7.156, lng: 112.655, radius: 8000, phone: "031-3990000", address: "Jl. Veteran No. 45, Gresik" },
  { name: "Banyuwangi", lat: -8.219, lng: 114.369, radius: 9000, phone: "0333-3380000", address: "Jl. S. Parman No. 25, Banyuwangi" },
  { name: "Denpasar / Bali", lat: -8.650, lng: 115.216, radius: 15000, phone: "0361-9003000", address: "Jl. Sunset Road No. 99, Kuta, Bali" },
]

export default function Areas() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [activeLayer, setActiveLayer] = useState<'map' | 'satellite'>('map')
  const mapRef = useRef<any>(null)
  const streetLayerRef = useRef<any>(null)
  const satelliteLayerRef = useRef<any>(null)

  useEffect(() => {
    // 1. Load Leaflet CSS
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

      // Inisialisasi map Jawa-Bali
      const map = L.map(mapContainerRef.current, {
        center: [-7.8, 112.0], // Tengah-tengah Jawa-Bali
        zoom: 7,
        zoomControl: true
      })
      mapRef.current = map

      // Street Layer (OpenStreetMap)
      const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      })
      streetLayerRef.current = streetLayer

      // Satellite Layer (Esri ArcGIS World Imagery)
      const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri, Maxar, Earthstar Geographics',
        maxZoom: 19
      })
      satelliteLayerRef.current = satelliteLayer

      // Default load Street Layer
      streetLayer.addTo(map)

      const circleStyle = {
        color: '#cc2200',
        fillColor: '#ff4444',
        fillOpacity: 0.25,
        weight: 2
      }

      // Draw markers and coverage circles
      CITIES_DATA.forEach(city => {
        const markerPopup = `
          <div class="p-1 font-sans">
            <h4 class="font-bold text-sm text-[#0B1E3D]">${city.name}</h4>
            <p class="text-xs text-gray-500 my-1">${city.address}</p>
            <a href="tel:${city.phone}" class="inline-flex items-center gap-1 text-xs font-bold text-orange-500 hover:underline">
              📞 ${city.phone}
            </a>
          </div>
        `

        L.circle([city.lat, city.lng], {
          ...circleStyle,
          radius: city.radius
        }).bindPopup(markerPopup).addTo(map)

        L.circleMarker([city.lat, city.lng], {
          color: '#cc2200',
          fillColor: '#ff4444',
          fillOpacity: 0.9,
          radius: 6,
          weight: 2
        }).bindPopup(markerPopup).addTo(map)
      })
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

  // Fungsi switch Layer
  const handleSwitchLayer = (type: 'map' | 'satellite') => {
    if (!mapRef.current || !streetLayerRef.current || !satelliteLayerRef.current) return

    if (type === 'map') {
      mapRef.current.removeLayer(satelliteLayerRef.current)
      streetLayerRef.current.addTo(mapRef.current)
      setActiveLayer('map')
    } else {
      mapRef.current.removeLayer(streetLayerRef.current)
      satelliteLayerRef.current.addTo(mapRef.current)
      setActiveLayer('satellite')
    }
  }

  // Fungsi toggle Fullscreen
  const toggleFullscreen = () => {
    const el = document.getElementById('areas-map-wrapper')
    if (!el || !mapRef.current) return

    if (!document.fullscreenElement) {
      el.requestFullscreen().then(() => {
        setTimeout(() => mapRef.current.invalidateSize(), 150)
      }).catch(err => {
        console.error("Gagal fullscreen:", err)
      })
    } else {
      document.exitFullscreen().then(() => {
        setTimeout(() => mapRef.current.invalidateSize(), 150)
      }).catch(err => {
        console.error("Gagal exit fullscreen:", err)
      })
    }
  }

  return (
    <>
      <Head title="Areas - Peta Cakupan Jaringan & Kontak Layanan Nexa" />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
        {/* 1. Header sticky navbar */}
        <Navbar />

        {/* 2. Page Header */}
        <section className="pt-24 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
            <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">Areas</span>
            <h1 className="text-4xl md:text-5xl font-black font-heading text-navy">
              Nexa's Coverage
            </h1>
            <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
              Kini Nexa hadir di beberapa kota besar, untuk memenuhi kebutuhan pelanggan tercinta.
              Jika Anda memerlukan informasi lebih lanjut, silakan menghubungi nomor telepon di bawah ini,
              sesuai dengan lokasi tempat tinggal Anda.
            </p>
            <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
          </div>
        </section>

        {/* 3. Interactive Map Section */}
        <section className="pb-24 px-4 sm:px-6 lg:px-8">
          <div 
            id="areas-map-wrapper"
            className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#E2F1F6]"
          >
            {/* Layer Toggle (Top-Left) */}
            <div className="absolute top-4 left-4 z-[1000] bg-white border border-gray-300 rounded-lg flex overflow-hidden shadow-md">
              <button 
                onClick={() => handleSwitchLayer('map')}
                className={`px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 transition-all duration-150 ${
                  activeLayer === 'map' 
                    ? 'bg-white text-navy font-bold shadow-inner' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Map className="w-3.5 h-3.5" />
                Map
              </button>
              <button 
                onClick={() => handleSwitchLayer('satellite')}
                className={`px-4 py-2.5 text-xs font-bold flex items-center gap-1.5 transition-all duration-150 ${
                  activeLayer === 'satellite' 
                    ? 'bg-white text-navy font-bold shadow-inner' 
                    : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
                }`}
              >
                <Image className="w-3.5 h-3.5" />
                Satellite
              </button>
            </div>

            {/* Fullscreen Button (Top-Right) */}
            <button 
              onClick={toggleFullscreen}
              className="absolute top-4 right-4 z-[1000] p-2.5 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 shadow-md transition-colors"
              title="Fullscreen"
            >
              <Maximize className="w-4 h-4" />
            </button>

            {/* Map Container */}
            <div 
              ref={mapContainerRef} 
              className="w-full h-[480px] z-10" 
            />
          </div>
        </section>

        {/* 4. Contact Grid Section */}
        <section className="py-16 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold font-heading text-navy">Daftar Kontak Cabang Nexa</h2>
              <p className="text-sm text-gray-500 mt-2">Hubungi kantor kami terdekat dari lokasi Anda untuk penanganan cepat.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {CITIES_DATA.map((city) => (
                <div key={city.name} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-orange-500">
                      <MapPin className="w-5 h-5 stroke-[2]" />
                      <h3 className="font-bold text-navy text-lg">{city.name}</h3>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed font-sans min-h-[40px]">{city.address}</p>
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-50">
                    <a 
                      href={`tel:${city.phone}`}
                      className="inline-flex items-center gap-2 font-bold text-sm text-orange-500 hover:text-orange-600 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                      {city.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Footer */}
        <Footer />
      </main>
    </>
  )
}
