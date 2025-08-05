"use client"

import { Card, CardBody } from "@nextui-org/react"
import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "United States",
      avatar: "/sarah.jpg",
      rating: 5,
      text: "Our safari experience with Nairobi Explorer was absolutely incredible! The guide was knowledgeable, the vehicle was comfortable, and we saw all the Big Five. Highly recommended!",
      trip: "Maasai Mara Safari",
    },
    {
      name: "James Mitchell",
      location: "United Kingdom",
      avatar: "/james.jpg",
      rating: 5,
      text: "Professional service from start to finish. The airport transfer was punctual, and the city tour showed us the best of Nairobi. Will definitely use their services again.",
      trip: "Airport Transfer & City Tour",
    },
    {
      name: "Maria Rodriguez",
      location: "Spain",
      avatar: "/maria.jpg",
      rating: 5,
      text: "The Mount Kenya hiking expedition was challenging but rewarding. Our guide ensured our safety throughout, and the views were breathtaking. An unforgettable experience!",
      trip: "Mount Kenya Hiking",
    },
    {
      name: "David Chen",
      location: "Singapore",
      avatar: "/chen.jpg",
      rating: 5,
      text: "Excellent corporate travel service. They handled all our transportation needs for the conference seamlessly. Professional drivers and luxury vehicles.",
      trip: "Corporate Travel",
    },
    {
      name: "Emma Thompson",
      location: "Australia",
      avatar: "/emma.jpg",
      rating: 5,
      text: "The car rental service was fantastic. Clean, well-maintained vehicle with GPS and all amenities. Made our self-drive safari adventure perfect!",
      trip: "Car Rental Service",
    },
    {
      name: "Ahmed Hassan",
      location: "UAE",
      avatar: "/ahmed.jpg",
      rating: 5,
      text: "Outstanding service! The team went above and beyond to customize our family safari. The kids loved every moment, and we felt safe throughout the journey.",
      trip: "Family Safari Package",
    },
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">What Our Travelers Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers have to say about their experiences
            with Nairobi Explorer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 bg-white">
              <CardBody className="p-6">
                <div className="flex items-center mb-4">
                  <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                    <Image
                      src={testimonial.avatar || "/placeholder.svg"}
                      alt={`${testimonial.name} profile picture`}
                      fill
                      className="rounded-full object-cover border-2 border-orange-200"
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600 mb-1">{testimonial.location}</p>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-lg">
                          ★
                        </span>
                      ))}
                      <span className="ml-2 text-sm text-gray-500">({testimonial.rating}/5)</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4 italic leading-relaxed">"{testimonial.text}"</p>

                <div className="bg-gradient-to-r from-orange-100 to-amber-100 rounded-lg p-3 border-l-4 border-orange-400">
                  <p className="text-sm font-semibold text-orange-800">
                    <span className="text-orange-600">🎯 Trip:</span> {testimonial.trip}
                  </p>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-2xl mx-auto border border-orange-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Join Our Happy Travelers</h3>
            <p className="text-gray-600 mb-6">
              Over 500+ satisfied customers have experienced Kenya with us. Your adventure awaits!
            </p>
            <div className="flex justify-center space-x-8 text-center">
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-sm text-gray-600 font-medium">Happy Customers</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                <div className="text-3xl font-bold text-orange-600">4.9</div>
                <div className="text-sm text-gray-600 font-medium">Average Rating</div>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-lg p-4 border border-orange-200">
                <div className="text-3xl font-bold text-orange-600">98%</div>
                <div className="text-sm text-gray-600 font-medium">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
