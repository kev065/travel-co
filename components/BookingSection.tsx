"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardBody, Button, Input, Textarea } from "@nextui-org/react"

export default function BookingSection() {
  const [formData, setFormData] = useState({
    pickupDate: "",
    returnDate: "",
    pickupLocation: "",
    dropoffLocation: "",
    serviceType: "",
    vehicleType: "",
    passengers: "",
    specialRequests: "",
  })

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Booking submitted:", formData)
  }

  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Book Your Journey</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to explore Kenya? Fill out our booking form and we'll get back to you with a customized quote within
            24 hours.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="shadow-2xl">
            <CardBody className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Pickup Date</label>
                    <Input
                      type="date"
                      value={formData.pickupDate}
                      onChange={(e) => handleInputChange("pickupDate", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Return Date</label>
                    <Input
                      type="date"
                      value={formData.returnDate}
                      onChange={(e) => handleInputChange("returnDate", e.target.value)}
                      required
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    placeholder="Pickup Location"
                    value={formData.pickupLocation}
                    onChange={(e) => handleInputChange("pickupLocation", e.target.value)}
                    required
                  />
                  <Input
                    placeholder="Drop-off Location"
                    value={formData.dropoffLocation}
                    onChange={(e) => handleInputChange("dropoffLocation", e.target.value)}
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Service Type</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.serviceType}
                      onChange={(e) => handleInputChange("serviceType", e.target.value)}
                      required
                    >
                      <option value="">Select Service</option>
                      <option value="safari">Safari Tour</option>
                      <option value="airport">Airport Transfer</option>
                      <option value="city">City Tour</option>
                      <option value="rental">Car Rental</option>
                      <option value="corporate">Corporate Travel</option>
                      <option value="hiking">Mountain Hiking</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Vehicle Type</label>
                    <select
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                      value={formData.vehicleType}
                      onChange={(e) => handleInputChange("vehicleType", e.target.value)}
                      required
                    >
                      <option value="">Select Vehicle</option>
                      <option value="suv">SUV (4x4)</option>
                      <option value="van">Van (Group)</option>
                      <option value="sedan">Sedan (Executive)</option>
                      <option value="economy">Economy Car</option>
                    </select>
                  </div>

                  <Input
                    type="number"
                    placeholder="Number of Passengers"
                    min="1"
                    max="14"
                    value={formData.passengers}
                    onChange={(e) => handleInputChange("passengers", e.target.value)}
                    required
                  />
                </div>

                <Textarea
                  placeholder="Special Requests or Additional Information"
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange("specialRequests", e.target.value)}
                  minRows={3}
                />

                <div className="text-center">
                  <Button type="submit" color="warning" size="lg" className="font-semibold px-12 py-3">
                    Get Quote & Book Now
                  </Button>
                  <p className="text-sm text-gray-600 mt-4">We'll respond within 24 hours with your customized quote</p>
                </div>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  )
}
