"use client"

import { Card, CardBody, Button } from "@nextui-org/react"
import Image from "next/image"
import Link from "next/link"

export default function Destinations() {
  const destinations = [
    {
      name: "Maasai Mara",
      description: "Witness the Great Migration and experience Kenya's most famous wildlife reserve.",
      image: "/mara.jpg",
      highlights: ["Great Migration", "Big Five", "Maasai Culture", "Hot Air Balloons"],
      duration: "3-5 Days",
      price: "From $450",
    },
    {
      name: "Amboseli National Park",
      description: "Get up close with elephants against the backdrop of Mount Kilimanjaro.",
      image: "/amboseli.jpg",
      highlights: ["Elephant Herds", "Mt. Kilimanjaro Views", "Maasai Villages", "Bird Watching"],
      duration: "2-3 Days",
      price: "From $320",
    },
    {
      name: "Tsavo National Parks",
      description: "Explore Kenya's largest national park, famous for red elephants and diverse wildlife.",
      image: "/tsavo.jpg",
      highlights: ["Red Elephants", "Mzima Springs", "Rock Climbing", "Diverse Landscapes"],
      duration: "2-4 Days",
      price: "From $280",
    },
    {
      name: "Lake Nakuru",
      description: "Famous for flamingos and rhino sanctuary in the heart of the Rift Valley.",
      image: "/lake-nakuru.jpg",
      highlights: ["Flamingo Flocks", "Rhino Sanctuary", "Rift Valley Views", "Bird Paradise"],
      duration: "1-2 Days",
      price: "From $180",
    },
    {
      name: "Mount Kenya",
      description: "Africa's second-highest peak offering incredible hiking and climbing experiences.",
      image: "/mount-kenya.jpg",
      highlights: ["Mountain Climbing", "Alpine Lakes", "Unique Flora", "Adventure Sports"],
      duration: "4-7 Days",
      price: "From $650",
    },
    {
      name: "Diani Beach",
      description: "Pristine white sand beaches and crystal-clear waters on Kenya's coast.",
      image: "/diani.jpg",
      highlights: ["White Sand Beaches", "Water Sports", "Coral Reefs", "Beach Resorts"],
      duration: "3-7 Days",
      price: "From $200",
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Popular Destinations</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover Kenya's most breathtaking destinations, from world-famous wildlife reserves to pristine beaches and
            majestic mountains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <Card key={index} className="hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.name}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {destination.duration}
                </div>
              </div>

              <CardBody className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-3">{destination.name}</h3>

                <p className="text-gray-600 mb-4">{destination.description}</p>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <div className="flex flex-wrap gap-2">
                    {destination.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{destination.price}</span>
                  <Button as={Link} href="/booking" color="warning" variant="solid" className="font-semibold">
                    Explore Now
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            as={Link}
            href="/services"
            size="lg"
            variant="bordered"
            color="warning"
            className="font-semibold px-8"
          >
            View All Destinations
          </Button>
        </div>
      </div>
    </section>
  )
}
