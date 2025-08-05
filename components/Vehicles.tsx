"use client"

import { useState } from "react"
import { Card, CardBody, Button, Chip } from "@nextui-org/react"
import Image from "next/image"

export default function Vehicles() {
  const [selectedFilter, setSelectedFilter] = useState("All")

  const vehicles = [
    {
      name: "Toyota Land Cruiser",
      type: "SUV",
      seats: 7,
      image: "/landcruiser.webp",
      features: ["4x4", "AC", "WiFi", "GPS"],
      price: "From $80/day",
      category: "Safari",
    },
    {
      name: "Nissan Caravan",
      type: "Van",
      seats: 14,
      image: "/nissan-caravan.jpg",
      features: ["AC", "WiFi", "Comfortable Seats"],
      price: "From $60/day",
      category: "Group",
    },
    {
      name: "Mercedes E-Class",
      type: "Sedan",
      seats: 4,
      image: "/mercedes-e.jpg",
      features: ["Luxury", "AC", "WiFi", "Leather Seats"],
      price: "From $100/day",
      category: "Executive",
    },
    {
      name: "Nissan Patrol",
      type: "SUV",
      seats: 7,
      image: "/nissan-patrol.jpg",
      features: ["4x4", "AC", "GPS", "Roof Rack"],
      price: "From $75/day",
      category: "Safari",
    },
    {
      name: "Toyota Prado",
      type: "SUV",
      seats: 7,
      image: "/toyota-prado.jpg",
      features: ["4x4", "AC", "WiFi", "Sunroof"],
      price: "From $85/day",
      category: "Safari",
    },
    {
      name: "Toyota Corolla",
      type: "Sedan",
      seats: 4,
      image: "/corolla.webp",
      features: ["AC", "GPS", "Fuel Efficient"],
      price: "From $35/day",
      category: "Economy",
    },
  ]

  const filters = ["All", "Safari", "Executive", "Group", "Economy"]

  const filteredVehicles =
    selectedFilter === "All" ? vehicles : vehicles.filter((vehicle) => vehicle.category === selectedFilter)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Vehicle Fleet</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Choose from our diverse fleet of well-maintained vehicles, perfect for any occasion from safari adventures
            to business meetings.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={selectedFilter === filter ? "solid" : "bordered"}
                color={selectedFilter === filter ? "warning" : "default"}
                onPress={() => setSelectedFilter(filter)}
                className="font-medium"
              >
                {filter}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <Image src={vehicle.image || "/placeholder.svg"} alt={vehicle.name} fill className="object-cover" />
                <Chip color="warning" variant="solid" className="absolute top-4 right-4 font-semibold">
                  {vehicle.seats} Seats
                </Chip>
              </div>
              <CardBody className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-gray-800">{vehicle.name}</h3>
                  <Chip size="sm" variant="flat" color="primary">
                    {vehicle.type}
                  </Chip>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {vehicle.features.map((feature, idx) => (
                    <Chip key={idx} size="sm" variant="flat" color="default">
                      {feature}
                    </Chip>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-orange-600">{vehicle.price}</span>
                  <Button color="warning" variant="solid" className="font-semibold" onPress={() => {}}>
                    Get Quote
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
