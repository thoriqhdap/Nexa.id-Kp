import Navbar from '@/Components/Navbar'
import Hero from '@/Components/Hero'
import ServicesSection from '@/Components/ServicesSection'
import WhyNexa from '@/Components/WhyNexa'
import NexaInNumbers from '@/Components/NexaInNumbers'
import CompanyManagement from '@/Components/CompanyManagement'
import NexaCoverage from '@/Components/NexaCoverage'
import About from '@/Components/About'
import FiberOpticCTA from '@/Components/FiberOpticCTA'
import BrandSection from '@/Components/BrandSection'
import Testimonials from '@/Components/Testimonials'
import ContactSection from '@/Components/ContactSection'
import Footer from '@/Components/Footer'
import FloatingButtons from '@/Components/FloatingButtons'
import { Head } from '@inertiajs/react'

export default function Welcome() {
    return (
        <>
            <Head title="NEXA - Solusi Digital Terpercaya" />
            <main className="min-h-screen bg-white">
                <Navbar />
                <Hero />
                <ServicesSection />
                <WhyNexa />
                <NexaInNumbers />
                <CompanyManagement />
                <NexaCoverage />
                <About />
                <FiberOpticCTA />
                <BrandSection />
                <Testimonials />
                <ContactSection />
                <Footer />
                <FloatingButtons />
            </main>
        </>
    )
}
