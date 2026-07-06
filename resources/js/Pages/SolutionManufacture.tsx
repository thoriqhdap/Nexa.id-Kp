import React from 'react'
import { Head, Link } from '@inertiajs/react'
import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import { 
  Factory, 
  Settings, 
  MapPin, 
  Wrench, 
  HardDrive, 
  Cpu, 
  Wifi, 
  Activity,
  Building,
  GraduationCap,
  Hotel,
  Briefcase,
  ChevronRight,
  MessageCircle
} from 'lucide-react'

// ==========================================
// DATA DUMMY
// ==========================================

interface Product {
  id: number
  name: string
  icon: React.ElementType
}

const PRODUCTS_DATA: Product[] = [
  { id: 1, name: 'Industrial IoT (IIoT)', icon: Cpu },
  { id: 2, name: 'Supply Chain ERP', icon: Settings },
  { id: 3, name: 'Smart Asset Tracking', icon: MapPin },
  { id: 4, name: 'Machine Predictive Maintenance', icon: Wrench },
  { id: 5, name: 'Warehouse Management System', icon: HardDrive },
  { id: 6, name: 'SCADA Automation Systems', icon: Activity },
  { id: 7, name: 'Factory Infrastructure WiFi', icon: Wifi },
  { id: 8, name: 'Safety Monitoring Systems', icon: Factory },
]

interface OtherSolution {
  id: number
  name: string
  icon: React.ElementType
  href: string
  isActive?: boolean
}

const OTHER_SOLUTIONS: OtherSolution[] = [
  { id: 1, name: 'Pemerintah', icon: Building, href: '/solution/government' },
  { id: 2, name: 'Pendidikan', icon: GraduationCap, href: '/solution/education' },
  { id: 3, name: 'Perhotelan', icon: Hotel, href: '/solution/hospitality' },
  { id: 4, name: 'Manufaktur', icon: Factory, href: '/solution/manufacture', isActive: true },
  { id: 5, name: 'Perusahaan', icon: Briefcase, href: '/solution/corporate' },
]

// ==========================================
// SUB-KOMPONEN: ProductCard
// ==========================================
interface ProductCardProps {
  name: string
  icon: React.ElementType
}

function ProductCard({ name, icon: Icon }: ProductCardProps) {
  return (
    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-md hover:scale-[1.01] transition-all duration-300 flex flex-col items-center text-center group cursor-pointer">
      <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-orange-100 transition-colors duration-300">
        <Icon className="w-8 h-8 text-orange-500 stroke-[1.5]" />
      </div>
      <h3 className="text-[15px] font-bold text-navy tracking-tight group-hover:text-orange-500 transition-colors duration-300">
        {name}
      </h3>
    </div>
  )
}

// ==========================================
// MAIN COMPONENT: SolutionManufacture
// ==========================================
export default function SolutionManufacture() {
  return (
    <>
      <Head title="Solusi Manufaktur - IoT Industri & Otomasi Pabrik Cerdas" />

      <main className="min-h-screen bg-white text-gray-900 font-sans selection:bg-orange-500 selection:text-white">
        {/* 1. Header Sticky Navbar */}
        <Navbar />

        {/* 2. Hero Solution Section */}
        <section 
          className="relative w-full py-20 lg:py-32 overflow-hidden bg-cover bg-center mt-14 flex items-center min-h-[400px] sm:min-h-[480px] md:min-h-[540px] lg:min-h-[600px]" 
          style={{ backgroundImage: "url('/images/solution-manufacture.png')" }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">

              {/* Left Column: Text */}
              <div className="md:col-span-7 space-y-4 text-left max-w-xl lg:max-w-2xl">
                <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">
                  SOLUSI MANUFAKTUR
                </span>
                <h1 className="text-5xl sm:text-6xl font-black font-heading leading-tight tracking-tight">
                  <span className="text-orange-500 block">Solusi:</span>
                  <span className="text-teal-800 block">Manufaktur</span>
                </h1>
                <p className="text-lg font-medium text-white leading-relaxed max-w-md">
                  Penerapan Industrial IoT (IIoT), manajemen pergudangan otomatis, dan jaringan handal area pabrik Anda.
                </p>
                <div className="pt-4">
                  <a 
                    href="#products" 
                    className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-sans font-bold rounded-2xl shadow-xl shadow-orange-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                  >
                    Lihat Produk Kami
                    <ChevronRight className="w-5 h-5" />
                  </a>
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

        {/* 3. ProductGrid Section */}
        <section id="products" className="py-24 bg-[#F8F9FA] border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Header */}
            <div className="text-center mb-16 space-y-3">
              <span className="text-orange-500 font-extrabold text-sm uppercase tracking-wider block">Solusi</span>
              <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
                Produk Kami
              </h2>
              <p className="text-gray-500 text-sm max-w-md mx-auto">
                Beberapa produk untuk solusi Manufacture antara lain:
              </p>
              <div className="w-16 h-1 bg-orange-500 mx-auto rounded-full mt-2" />
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {PRODUCTS_DATA.map((product) => (
                <ProductCard 
                  key={product.id}
                  name={product.name}
                  icon={product.icon}
                />
              ))}
            </div>

          </div>
        </section>

        {/* 4. MidBanner Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-navy bg-[#115E59] rounded-3xl p-10 md:p-16 text-white shadow-2xl relative overflow-hidden border border-white/5">
              <div className="absolute right-0 top-0 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl -z-10" />
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
                {/* Left Side */}
                <h3 className="text-2xl sm:text-3xl font-black font-heading leading-snug max-w-md text-left">
                  Transformasi manufaktur cerdas menuju efisiensi Industri 4.0.
                </h3>
                {/* Right Side */}
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-left lg:border-l lg:border-white/10 lg:pl-10">
                  Mengembangkan sistem monitoring mesin preventif (*predictive maintenance*), asset tracking real-time, serta arsitektur otomasi SCADA.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. OtherSolutions Section */}
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            
            <h2 className="text-3xl font-bold font-heading text-navy mb-12">
              Solusi Lain
            </h2>

            {/* 5 cards inline */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
              {OTHER_SOLUTIONS.map((solution) => {
                const Icon = solution.icon
                return (
                  <Link 
                    key={solution.id} 
                    href={solution.href}
                    className={`bg-white rounded-2xl p-6 border transition-all duration-300 flex flex-col items-center text-center cursor-pointer group ${
                      solution.isActive 
                        ? 'border-orange-500 shadow-md scale-[1.03]' 
                        : 'border-gray-100 shadow-sm hover:border-orange-200 hover:shadow-md'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors ${
                      solution.isActive ? 'bg-orange-500 text-white' : 'bg-orange-50 text-orange-500 group-hover:bg-orange-100'
                    }`}>
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-sm font-bold text-navy group-hover:text-orange-500 transition-colors">
                      {solution.name}
                    </span>
                  </Link>
                )
              })}
            </div>

          </div>
        </section>

        {/* 6. BottomCTA Section */}
        <section className="py-24 bg-gradient-to-r from-teal-600 via-teal-700 to-navy text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#ffffff0a_0%,transparent_60%)]" />
          
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
            <h2 className="text-4xl md:text-5xl font-black font-heading tracking-tight uppercase">
              TERTARIK UNTUK MENCOBA ?
            </h2>
            <p className="text-teal-100 text-sm max-w-md mx-auto leading-relaxed">
              Diskusikan implementasi Industrial IoT dan digitalisasi operasional pabrik Anda bersama tim konsultan ahli manufaktur kami.
            </p>
            <div className="pt-4">
              <a 
                href="https://wa.me/628112971000" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-sans font-bold text-white px-10 py-4.5 rounded-2xl bg-orange-500 hover:bg-orange-600 shadow-xl shadow-orange-500/25 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* 7. Footer */}
        <Footer />
      </main>
    </>
  )
}
