"use client"

import { Card, CardBody } from "@nextui-org/react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: "🛡️",
      title: "Safety First",
      description:
        "All our drivers are licensed professionals with extensive safety training and clean driving records.",
    },
    {
      icon: "🚗",
      title: "Premium Vehicles",
      description: "Well-maintained, clean vehicles equipped with modern amenities and safety features.",
    },
    {
      icon: "📞",
      title: "24/7 Support",
      description: "Round-the-clock customer support to assist you before, during, and after your journey.",
    },
    {
      icon: "🎯",
      title: "Custom Packages",
      description: "Tailored travel solutions designed to meet your specific needs and preferences.",
    },
    {
      icon: "💰",
      title: "Competitive Pricing",
      description: "Transparent, fair pricing with no hidden costs. Best value for premium services.",
    },
    {
      icon: "🌟",
      title: "Local Expertise",
      description: "Deep knowledge of Kenya's destinations, culture, and hidden gems from local experts.",
    },
    {
      icon: "📋",
      title: "Full Insurance",
      description: "Comprehensive insurance coverage for all our vehicles and passengers for peace of mind.",
    },
    {
      icon: "⚡",
      title: "Quick Response",
      description: "Fast booking confirmation and immediate response to all your travel inquiries.",
    },
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Nairobi Explorer?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're committed to providing exceptional travel experiences with the highest standards of safety, comfort,
            and customer service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-gray-800 border border-gray-700 hover:border-orange-500 transition-colors duration-300"
            >
              <CardBody className="p-6 text-center">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-orange-600 to-amber-600 rounded-2xl p-8 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience Kenya?</h3>
          <p className="text-xl text-orange-100 mb-6 max-w-2xl mx-auto">
            Join hundreds of satisfied travelers who have discovered the beauty of Kenya with us. Your adventure starts
            with a single click.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/booking"
              className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Book Your Trip Now
            </a>
            <a
              href="tel:+254700123456"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Call Us: +254 700 123 456
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
