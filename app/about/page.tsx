import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export const metadata = {
  title: "About Us - Nairobi Travel Explorer",
  description:
    "Learn about Nairobi Travel Explorer, Kenya's premier travel company offering safari tours, car rentals, and comprehensive travel services.",
}

export default function AboutPage() {
  const team = [
    {
      name: "Samuel Kiprotich",
      role: "Founder & CEO",
      image: "/placeholder.svg?height=300&width=300&text=Samuel+CEO",
      bio: "With over 15 years in Kenya's tourism industry, Samuel founded Nairobi Explorer to share his passion for Kenya's natural beauty and rich culture.",
    },
    {
      name: "Grace Wanjiku",
      role: "Operations Manager",
      image: "/placeholder.svg?height=300&width=300&text=Grace+Manager",
      bio: "Grace ensures smooth operations and exceptional customer service. Her attention to detail makes every journey memorable.",
    },
    {
      name: "David Mwangi",
      role: "Lead Safari Guide",
      image: "/placeholder.svg?height=300&width=300&text=David+Guide",
      bio: "A certified wildlife guide with 12 years of experience, David's knowledge of Kenya's wildlife is unmatched.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Nairobi Explorer</h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto">
            Your trusted partner in discovering the magic of Kenya through authentic experiences and exceptional
            service.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                Founded in 2015 by Samuel Kiprotich, Nairobi Explorer began as a small family business with a simple
                mission: to share the incredible beauty and rich culture of Kenya with travelers from around the world.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                What started with a single safari vehicle has grown into Kenya's most trusted travel company, serving
                over 500 satisfied customers annually. We've maintained our commitment to personalized service while
                expanding our fleet and services.
              </p>
              <p className="text-lg text-gray-600">
                Today, we're proud to offer comprehensive travel solutions that showcase the best of Kenya while
                supporting local communities and conservation efforts.
              </p>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=600&text=Our+Story+Kenya+Safari"
                alt="Our Story"
                width={600}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-8">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our passionate team of travel experts, guides, and support staff are dedicated to making your Kenya
              experience unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {team.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-xl transition-shadow">
                <CardBody className="p-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-semibold mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </CardBody>
              </Card>
            ))}
          </div>

          <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-6">Our Mission & Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="text-4xl mb-4">🌍</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
                <p className="text-gray-600">
                  We're committed to responsible tourism that protects Kenya's natural heritage for future generations.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Community</h3>
                <p className="text-gray-600">
                  Supporting local communities through employment, partnerships, and cultural exchange programs.
                </p>
              </div>
              <div>
                <div className="text-4xl mb-4">⭐</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-600">
                  Delivering exceptional service and authentic experiences that exceed our customers' expectations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
