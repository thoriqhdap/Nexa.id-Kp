import React from 'react'

export default function BrandSection() {
  return (
    <>
      {/* 1. Our Valued Customers Section */}
      <section className="bg-gray-50 py-20 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4 mb-12">
          <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
            Our Valued Customers
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed max-w-3xl mx-auto font-sans font-medium">
            Kami sangat beruntung dan bangga membentuk kemitraan yang baik dengan pelanggan. Nexa telah dipercaya untuk melayani dan hadir untuk selalu membantu kelancaran sistem kerja mereka.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">
          <img 
            src="/images/home-valued-customers.png" 
            alt="Our Valued Customers - Partners & Clients grid" 
            className="w-full h-auto object-contain rounded-3xl"
          />
        </div>
      </section>

      {/* 2. Our Partners Section */}
      <section className="bg-white py-20 flex justify-center">
        <div className="max-w-7xl w-full px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-black font-heading text-navy">
              Our Partners
            </h2>
          </div>
          <div className="flex justify-center">
            <img 
              src="/images/home-partners.png" 
              alt="Our Partners list grid" 
              className="w-full h-auto object-contain rounded-3xl"
            />
          </div>
        </div>
      </section>
    </>
  )
}
