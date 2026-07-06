import React, { useEffect, useRef, useState } from 'react'

export default function NexaCoverage() {
  const mapContainerRef = useRef<HTMLDivElement>(null)
  const [activeLayer, setActiveLayer] = useState<'map' | 'satellite'>('map')
  const mapRef = useRef<any>(null)
  const streetLayerRef = useRef<any>(null)
  const satelliteLayerRef = useRef<any>(null)

  useEffect(() => {
    // 1. Tambahkan Leaflet CSS ke Head jika belum ada
    const cssId = 'leaflet-css'
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link')
      link.id = cssId
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    // 2. Load Leaflet JS secara dinamis untuk menghindari SSR error di Next.js
    const jsId = 'leaflet-js'
    const initMap = () => {
      const L = (window as any).L
      if (!L || !mapContainerRef.current || mapRef.current) return

      // Inisialisasi Map (pusat di koordinat Jawa Tengah/Jawa Timur)
      const map = L.map(mapContainerRef.current, {
        center: [-7.3, 110.5],
        zoom: 8,
        zoomControl: true
      })
      mapRef.current = map

      // Street Layer (OpenStreetMap) - Gratis tanpa API key!
      const streetLayer = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
        maxZoom: 19
      })
      streetLayerRef.current = streetLayer

      // Satellite Layer (Esri ArcGIS World Imagery) - Gratis tanpa API key!
      const satelliteLayer = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
        attribution: '© Esri, Maxar, Earthstar Geographics',
        maxZoom: 19
      })
      satelliteLayerRef.current = satelliteLayer

      // Default load Street Layer
      streetLayer.addTo(map)

      // Daftar kota cakupan layanan NEXA (sesuai file nexa-coverage-map.html)
      const coverageAreas = [
        { name: "Semarang", lat: -7.005, lng: 110.418, radius: 18000 },
        { name: "Surakarta / Solo", lat: -7.575, lng: 110.827, radius: 12000 },
        { name: "Yogyakarta", lat: -7.797, lng: 110.370, radius: 16000 },
        { name: "Magelang", lat: -7.470, lng: 110.218, radius: 8000 },
        { name: "Salatiga", lat: -7.331, lng: 110.508, radius: 6000 },
        { name: "Klaten", lat: -7.706, lng: 110.604, radius: 7000 },
        { name: "Surabaya", lat: -7.257, lng: 112.752, radius: 20000 },
        { name: "Malang", lat: -7.983, lng: 112.621, radius: 14000 },
        { name: "Kudus", lat: -6.804, lng: 110.840, radius: 7000 },
        { name: "Demak", lat: -6.895, lng: 110.640, radius: 6000 },
        { name: "Banyuwangi", lat: -8.219, lng: 114.369, radius: 9000 },
        { name: "Denpasar / Bali", lat: -8.650, lng: 115.216, radius: 15000 },
        { name: "Gresik", lat: -7.156, lng: 112.655, radius: 8000 },
      ]

      const circleStyle = {
        color: '#cc2200',
        fillColor: '#ff4444',
        fillOpacity: 0.25,
        weight: 2
      }

      // Gambar area cakupan (lingkaran merah) dan penanda titik di peta
      coverageAreas.forEach(area => {
        L.circle([area.lat, area.lng], {
          ...circleStyle,
          radius: area.radius
        }).bindPopup(`<b>${area.name}</b><br>Area Layanan NEXA`).addTo(map)

        L.circleMarker([area.lat, area.lng], {
          color: '#cc2200',
          fillColor: '#ff4444',
          fillOpacity: 0.9,
          radius: 6,
          weight: 2
        }).addTo(map)
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

    // Cleanup saat komponen dibongkar (unmounted)
    return () => {
      if (mapRef.current) {
        mapRef.current.remove()
        mapRef.current = null
      }
    }
  }, [])

  // Fungsi ganti layer Map ke Satellite dan sebaliknya
  const handleSwitchLayer = (type: 'map' | 'satellite') => {
    const L = (window as any).L
    if (!L || !mapRef.current) return

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
    const el = document.getElementById('map-wrapper')
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
    <section id="coverage" className="py-24 bg-white relative z-30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header */}
        <div className="mb-10 max-w-3xl mx-auto space-y-4">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider block">Wilayah Layanan</span>
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-navy">
            Cakupan Area Nexa
          </h2>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Kini Nexa hadir di beberapa kota besar, untuk memenuhi kebutuhan pelanggan tercinta.
            Jika Anda memerlukan informasi lebih lanjut, silakan menghubungi nomor telepon di bawah ini,
            sesuai dengan lokasi tempat tinggal Anda.
          </p>
        </div>

        {/* Map Wrapper (Leaflet Container matching the original HTML design) */}
        <div 
          id="map-wrapper" 
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border border-gray-200 bg-[#E2F1F6]"
        >
          {/* Layer Toggle Buttons */}
          <div className="absolute top-3 left-3 z-[1000] bg-white border border-gray-300 rounded-lg flex overflow-hidden shadow-md">
            <button 
              onClick={() => handleSwitchLayer('map')}
              className={`px-4 py-2 text-xs font-semibold transition-all duration-150 ${
                activeLayer === 'map' 
                  ? 'bg-white text-navy font-bold shadow-inner' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Peta
            </button>
            <button 
              onClick={() => handleSwitchLayer('satellite')}
              className={`px-4 py-2 text-xs font-semibold transition-all duration-150 ${
                activeLayer === 'satellite' 
                  ? 'bg-white text-navy font-bold shadow-inner' 
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              Satelit
            </button>
          </div>

          {/* Fullscreen Button */}
          <button 
            onClick={toggleFullscreen}
            className="absolute top-3 right-3 z-[1000] bg-white border border-gray-300 rounded-lg w-9 h-9 flex items-center justify-center cursor-pointer hover:bg-gray-50 shadow-md transition-colors"
            title="Fullscreen"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#333" strokeWidth="2.5">
              <polyline points="15 3 21 3 21 9"></polyline>
              <polyline points="9 21 3 21 3 15"></polyline>
              <line x1="21" y1="3" x2="14" y2="10"></line>
              <line x1="3" y1="21" x2="10" y2="14"></line>
            </svg>
          </button>

          {/* Leaflet Map Div */}
          <div 
            ref={mapContainerRef} 
            className="w-full h-[480px] z-10" 
            style={{ minHeight: '480px' }}
          />
        </div>

      </div>
    </section>
  )
}
