"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react"

export default function PartnerSection() {
  const [partnerForm, setPartnerForm] = useState({
    companyName: "",
    contactPerson: "",
    email: "",
    phone: "",
    businessType: "",
    fleetSize: "",
    message: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setPartnerForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Partner application submitted:", partnerForm)
    // Handle form submission
  }

  const benefits = [
    "Access to our customer network",
    "Marketing and promotional support",
    "Flexible commission structure",
    "Professional booking platform",
    "Quality assurance standards",
    "24/7 technical support",
  ]

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Partner With Us</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Join our network of trusted travel partners and grow your business with access to more customers and premium
            support services.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-orange-400">Why Partner With Nairobi Explorer?</h3>

            <div className="space-y-6 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-4 flex-shrink-0"></div>
                  <span className="text-lg text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-orange-600 to-amber-600 rounded-lg p-6">
              <h4 className="text-xl font-bold mb-2">Ready to Get Started?</h4>
              <p className="text-orange-100 mb-4">
                Fill out the partnership form and our team will contact you within 48 hours to discuss the next steps.
              </p>
              <div className="flex items-center space-x-4">
                <span className="text-2xl">📞</span>
                <div>
                  <p className="font-semibold">Call us directly</p>
                  <p className="text-orange-100">+254 700 123 456</p>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-white text-gray-800">
            <CardBody className="p-8">
              <h3 className="text-2xl font-bold mb-6 text-center">Partnership Application</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <Input
                  placeholder="Your company name"
                  value={partnerForm.companyName}
                  onChange={(e) => handleInputChange("companyName", e.target.value)}
                  required
                />

                <Input
                  placeholder="contact person"
                  value={partnerForm.contactPerson}
                  onChange={(e) => handleInputChange("contactPerson", e.target.value)}
                  required
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    placeholder="Email address"
                    value={partnerForm.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Phone Number"
                    value={partnerForm.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Type</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={partnerForm.businessType}
                      onChange={(e) => handleInputChange("businessType", e.target.value)}
                      required
                    >
                      <option value="">Select Type</option>
                      <option value="car-rental">Car Rental Company</option>
                      <option value="tour-operator">Tour Operator</option>
                      <option value="hotel">Hotel/Lodge</option>
                      <option value="transport">Transport Company</option>
                      <option value="individual">Individual Driver</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <Input
                    placeholder="fleet size"
                    value={partnerForm.fleetSize}
                    onChange={(e) => handleInputChange("fleetSize", e.target.value)}
                    required
                  />
                </div>

                <Textarea
                  placeholder="Brief description of your services, experience, and what you can offer..."
                  value={partnerForm.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  minRows={4}
                  required
                />

                <Button type="submit" color="warning" size="lg" className="w-full font-semibold">
                  Submit Partnership Application
                </Button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}
