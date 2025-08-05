"use client"

import { Card, CardBody, Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export default function Services() {
  const services = [
    {
      title: "Safari Tours",
      description: "Experience Kenya's wildlife in Maasai Mara, Amboseli, and Tsavo National Parks with expert guides.",
      image: "/placeholder.svg?height=300&width=400&text=Safari+Wildlife+Tour",
      features: ["Professional Guide", "Game Drives", "Photography Support", "Lunch Included"],
    },
    {
      title: "Airport Transfers",
      description: "Reliable and comfortable transfers to and from Jomo Kenyatta International Airport.",
      image: "/placeholder.svg?height=300&width=400&text=Airport+Transfer+Service",
      features: ["24/7 Service", "Flight Tracking", "Meet & Greet", "Fixed Rates"],
    },
    {
      title: "City Tours",
      description: "Discover Nairobi's rich culture, history, and modern attractions with our guided city tours.",
      image: "/placeholder.svg?height=300&width=400&text=Nairobi+City+Tour",
      features: ["Cultural Sites", "Historical Tours", "Shopping Centers", "Local Cuisine"],
    },
    {
      title: "Car Rentals",
      description: "Rent from our fleet of well-maintained vehicles for your personal or business needs.",
      image: "/placeholder.svg?height=300&width=400&text=Car+Rental+Fleet",
      features: ["Insurance Included", "GPS Navigation", "Fuel Efficient", "Flexible Terms"],
    },
    {
      title: "Corporate Travel",
      description: "Professional transportation solutions for business meetings, conferences, and events.",
      image: "/placeholder.svg?height=300&width=400&text=Corporate+Travel+Service",
      features: ["Executive Vehicles", "Professional Drivers", "Flexible Scheduling", "Corporate Rates"],
    },
    {
      title: "Mountain Hikes",
      description: "Guided hiking adventures to Mount Kenya, Aberdares, and other scenic mountain ranges.",
      image: "/placeholder.svg?height=300&width=400&text=Mountain+Hiking+Adventure",
      features: ["Experienced Guides", "Safety Equipment", "Camping Gear", "Route Planning"],
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Premium Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From thrilling safaris to comfortable city transfers, we offer comprehensive travel solutions tailored to
            your needs across Kenya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <CardBody className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  as={Link}
                  href="/booking"
                  color="warning"
                  variant="solid"
                  className="w-full font-semibold"
                  onPress={() => console.log("Book Now pressed")}
                >
                  Book Now
                </Button>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
