import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardBody, Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export const metadata = {
  title: "Our Services - Nairobi Travel Explorer",
  description:
    "Comprehensive travel services in Kenya including safari tours, airport transfers, car rentals, and corporate travel solutions.",
}

export default function ServicesPage() {
  const services = [
    {
      title: "Safari Tours",
      description:
        "Experience Kenya's incredible wildlife with our expertly guided safari tours to world-famous national parks and reserves.",
      image: "/safari1.jpg",
      features: [
        "Professional wildlife guides",
        "Comfortable 4x4 safari vehicles",
        "All park entrance fees included",
        "Photography assistance",
        "Cultural village visits",
        "Flexible itineraries",
      ],
      packages: [
        { name: "Maasai Mara Safari", duration: "3 Days", price: "From $450" },
        { name: "Amboseli & Tsavo", duration: "5 Days", price: "From $750" },
        { name: "Big Five Safari", duration: "7 Days", price: "From $1,200" },
      ],
    },
    {
      title: "Airport Transfers",
      description:
        "Reliable, comfortable, and punctual airport transfer services available 24/7 for all major airports in Kenya.",
      image: "/safari2.jpg",
      features: [
        "24/7 availability",
        "Flight tracking system",
        "Meet and greet service",
        "Fixed transparent pricing",
        "Professional drivers",
        "Luxury vehicle options",
      ],
      packages: [
        { name: "JKIA to City Center", duration: "45 mins", price: "From $25" },
        { name: "Wilson Airport Transfer", duration: "30 mins", price: "From $20" },
        { name: "Mombasa Airport", duration: "1 hour", price: "From $30" },
      ],
    },
    {
      title: "City Tours",
      description:
        "Discover Nairobi's rich history, vibrant culture, and modern attractions with our comprehensive city tour packages.",
      image: "/safari3.jpg",
      features: [
        "Expert local guides",
        "Historical site visits",
        "Cultural experiences",
        "Shopping center tours",
        "Local cuisine tasting",
        "Photography opportunities",
      ],
      packages: [
        { name: "Half Day City Tour", duration: "4 Hours", price: "From $35" },
        { name: "Full Day Experience", duration: "8 Hours", price: "From $65" },
        { name: "Cultural Heritage Tour", duration: "6 Hours", price: "From $55" },
      ],
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Premium Services</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Comprehensive travel solutions designed to make your Kenya experience unforgettable, safe, and comfortable.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          {services.map((service, index) => (
            <div
              key={index}
              className={`mb-20 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""} lg:flex lg:items-center lg:gap-12`}
            >
              <div className="lg:w-1/2 mb-8 lg:mb-0">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  width={600}
                  height={400}
                  className="rounded-lg shadow-xl"
                />
              </div>

              <div className="lg:w-1/2">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">{service.title}</h2>
                <p className="text-xl text-gray-600 mb-8">{service.description}</p>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Features Included:</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center">
                        <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">Popular Packages:</h3>
                  <div className="space-y-4">
                    {service.packages.map((pkg, idx) => (
                      <Card key={idx} className="border border-orange-200">
                        <CardBody className="p-4">
                          <div className="flex justify-between items-center">
                            <div>
                              <h4 className="font-semibold text-gray-800">{pkg.name}</h4>
                              <p className="text-sm text-gray-600">{pkg.duration}</p>
                            </div>
                            <div className="text-right">
                              <p className="font-bold text-orange-600">{pkg.price}</p>
                            </div>
                          </div>
                        </CardBody>
                      </Card>
                    ))}
                  </div>
                </div>

                <Button as={Link} href="/booking" color="warning" size="lg" className="font-semibold px-8">
                  Book {service.title}
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  )
}
