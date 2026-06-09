import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Budi Santoso',
    role: 'CEO, PT Maju Bersama',
    quote: 'Nexa telah membantu kami meningkatkan infrastruktur IT dengan solusi yang reliable. Layanan fiber optic mereka sangat stabil dan customer support nya responsif.',
    featured: false,
  },
  {
    name: 'Sarah Wijaya',
    role: 'IT Director, Bank Nusantara',
    quote: 'Kami sudah menggunakan layanan Nexa selama 5 tahun dan sangat puas dengan kualitas dan konsistensi layanan mereka. Sangat direkomendasikan untuk enterprise.',
    featured: true,
  },
  {
    name: 'Ahmad Rizki',
    role: 'COO, Logistik Indonesia',
    quote: 'Dengan Managed Services dari Nexa, operasional IT kami berjalan lebih efisien. Tim mereka profesional dan selalu siap membantu kapan saja.',
    featured: false,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-wider">Testimoni</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B1E3D] mt-4">
            Apa Kata Mereka Tentang <span className="text-orange-500">NEXA</span>?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`relative p-8 rounded-2xl transition-all duration-300 ${
                testimonial.featured
                  ? 'bg-[#0B1E3D] text-white md:-mt-8 md:mb-8 shadow-2xl'
                  : 'bg-white border border-gray-100 shadow-lg hover:shadow-xl'
              }`}
            >
              <div className="absolute -top-4 left-8">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${testimonial.featured ? 'bg-orange-500' : 'bg-cyan-400'}`}>
                  <Quote className={`w-5 h-5 ${testimonial.featured ? 'text-white' : 'text-[#0B1E3D]'}`} />
                </div>
              </div>
              <div className="pt-4">
                <p className={`text-lg leading-relaxed mb-6 ${testimonial.featured ? 'text-white/90' : 'text-gray-600'}`}>
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg ${testimonial.featured ? 'bg-orange-500 text-white' : 'bg-[#0B1E3D] text-white'}`}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className={`font-semibold ${testimonial.featured ? 'text-white' : 'text-[#0B1E3D]'}`}>{testimonial.name}</p>
                    <p className={`text-sm ${testimonial.featured ? 'text-white/70' : 'text-gray-500'}`}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
