import Navbar from "@/components/Navbar"
import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Vehicles from "@/components/Vehicles"
import BookingSection from "@/components/BookingSection"
import PartnerSection from "@/components/PartnerSection"
import Destinations from "@/components/Destinations"
import Testimonials from "@/components/Testimonials"
import WhyChooseUs from "@/components/WhyChooseUs"
import ContactSection from "@/components/ContactSection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <Vehicles />
      <BookingSection />
      <PartnerSection />
      <Destinations />
      <Testimonials />
      <WhyChooseUs />
      <ContactSection />
      <Footer />
    </main>
  )
}
