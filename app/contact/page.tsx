import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import ContactSection from "@/components/ContactSection"

export const metadata = {
  title: "Contact Us - Nairobi Travel Explorer",
  description:
    "Get in touch with Nairobi Travel Explorer for bookings, inquiries, and travel planning assistance. Available 24/7 for your convenience.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Ready to start your Kenya adventure? We're here to help you plan the perfect trip with personalized service
            and expert guidance.
          </p>
        </div>
      </section>

      <ContactSection />
      <Footer />
    </main>
  )
}
