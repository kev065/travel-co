import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import BookingSection from "@/components/BookingSection"

export const metadata = {
  title: "Book Your Trip - Nairobi Travel Explorer",
  description:
    "Book your Kenya safari, airport transfer, city tour, or car rental with Nairobi Travel Explorer. Easy online booking with instant confirmation.",
}

export default function BookingPage() {
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Adventure</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Start planning your unforgettable Kenya experience. Fill out our booking form and we'll create a customized
            itinerary just for you.
          </p>
        </div>
      </section>

      <BookingSection />
      <Footer />
    </main>
  )
}
