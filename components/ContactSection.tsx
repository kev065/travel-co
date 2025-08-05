"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react"

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setContactForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Contact form submitted:", contactForm)
    // Handle form submission
  }

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our services? Ready to plan your Kenya adventure? We're here to help you every step of
            the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">📍</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Office Address</h4>
                  <p className="text-gray-600">
                    Westlands, Nairobi
                    <br />
                    Kenya, East Africa
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Phone Numbers</h4>
                  <p className="text-gray-600">
                    Main: +254 700 123 456
                    <br />
                    WhatsApp: +254 700 123 456
                    <br />
                    Emergency: +254 700 123 457
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">✉️</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Email Addresses</h4>
                  <p className="text-gray-600">
                    General: info@nairobiexplorer.com
                    <br />
                    Bookings: bookings@nairobiexplorer.com
                    <br />
                    Support: support@nairobiexplorer.com
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-orange-100 p-3 rounded-lg mr-4">
                  <span className="text-2xl">🕒</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 6:00 PM
                    <br />
                    Saturday: 9:00 AM - 4:00 PM
                    <br />
                    Sunday: Emergency calls only
                    <br />
                    <span className="text-orange-600 font-medium">24/7 Emergency Support</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gradient-to-r from-orange-50 to-amber-50 rounded-lg">
              <h4 className="font-bold text-gray-800 mb-3">Quick Contact Options</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://wa.me/254700123456"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition-colors"
                >
                  WhatsApp Chat
                </a>
                <a
                  href="tel:+254700123456"
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                >
                  Call Now
                </a>
                <a
                  href="mailto:info@nairobiexplorer.com"
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600 transition-colors"
                >
                  Send Email
                </a>
              </div>
            </div>
          </div>

          <Card className="shadow-xl">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Your full name"
                    value={contactForm.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="your@email.com"
                    value={contactForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    type="tel"
                    placeholder="+254 700 000 000"
                    value={contactForm.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                  />
                  <Input
                    placeholder="subject"
                    value={contactForm.subject}
                    onChange={(e) => handleInputChange("subject", e.target.value)}
                    required
                  />
                </div>

                <Textarea
                  placeholder="Tell us how we can help you..."
                  value={contactForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  minRows={5}
                  required
                />

                <Button type="submit" color="warning" size="lg" className="w-full font-semibold">
                  Send Message
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-red-800 mb-4">Our Location</h3>
                  <div className="aspect-video relative rounded-lg overflow-hidden border border-red-200">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d127642.85009570113!2d36.70985642590741!3d-1.2694564875703658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x182f1737ef4da2a5%3A0x5d20e0b7035bd71e!2sBaraza%20Media%20Lab%202nd%20floor%2C%20Keystone%20Park%20at%2095%20Riverside!3m2!1d-1.2694577999999999!2d36.7922584!5e0!3m2!1sen!2ske!4v1754424094694!5m2!1sen!2ske"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                  </div>
                </div>
      </div>
    </section>
  )
}
