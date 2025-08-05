"use client"

import { Button } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder.svg?height=1080&width=1920&text=Maasai+Mara+Safari+Landscape"
          alt="Maasai Mara Safari Landscape"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow animate-fade-in">
          Explore Kenya's
          <span className="block text-yellow-300">Wild Beauty</span>
        </h1>

        <p className="text-xl md:text-2xl mb-8 text-shadow max-w-2xl mx-auto">
          Experience unforgettable safaris, city tours, and premium travel services across Kenya with our expert guides
          and luxury vehicles.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            as={Link}
            href="/booking"
            size="lg"
            color="warning"
            variant="solid"
            className="font-semibold text-lg px-8 py-3"
          >
            Book Your Adventure
          </Button>

          <Button
            as={Link}
            href="/services"
            size="lg"
            variant="bordered"
            className="font-semibold text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-orange-600"
          >
            Explore Services
          </Button>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-lg">Happy Travelers</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">50+</h3>
            <p className="text-lg">Destinations</p>
          </div>
          <div className="glass-effect rounded-lg p-6">
            <h3 className="text-2xl font-bold mb-2">24/7</h3>
            <p className="text-lg">Support</p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
