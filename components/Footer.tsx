"use client"

import type React from "react"

import { Input, Button } from "@nextui-org/react"
import Link from "next/link"
import { useState } from "react"

export default function Footer() {
  const [email, setEmail] = useState("")

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Newsletter signup:", email)
    setEmail("")
    // Handle newsletter signup
  }

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-orange-400 mb-6">Nairobi Explorer</h3>
            <p className="text-gray-300 mb-6">
              Your trusted partner for unforgettable Kenya adventures. From safaris to city tours, we make every journey
              memorable.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <span className="text-2xl">📘</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <span className="text-2xl">📷</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <span className="text-2xl">🐦</span>
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition-colors">
                <span className="text-2xl">💼</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-orange-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/booking" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Book Now
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-orange-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <span className="text-gray-300">Safari Tours</span>
              </li>
              <li>
                <span className="text-gray-300">Airport Transfers</span>
              </li>
              <li>
                <span className="text-gray-300">City Tours</span>
              </li>
              <li>
                <span className="text-gray-300">Car Rentals</span>
              </li>
              <li>
                <span className="text-gray-300">Corporate Travel</span>
              </li>
              <li>
                <span className="text-gray-300">Mountain Hiking</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4">Subscribe to get travel tips and exclusive offers.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-gray-800"
              />
              <Button type="submit" color="warning" className="w-full font-semibold">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 mb-4 md:mb-0">
              <p>&copy; 2024 Nairobi Explorer. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <Link href="/privacy" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-300 hover:text-orange-400 transition-colors text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
