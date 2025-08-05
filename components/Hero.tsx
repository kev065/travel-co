"use client"

import { useEffect, useRef } from "react"
import { Button } from "@nextui-org/react"
import Link from "next/link"
import Image from "next/image"
import { gsap } from "gsap"

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const buttonsRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const scrollIndicatorRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Set initial states
      gsap.set([titleRef.current, subtitleRef.current, buttonsRef.current, statsRef.current], {
        opacity: 0,
        y: 50,
      })
      gsap.set(scrollIndicatorRef.current, { opacity: 0, y: 20 })
      gsap.set(overlayRef.current, { opacity: 0 })

      // Create timeline for hero animations
      const tl = gsap.timeline({ delay: 0.5 })

      // Animate overlay fade in
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      })

      // Animate title with typewriter effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.5",
        )
        .to(
          buttonsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.3",
        )
        .to(
          statsRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.2",
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.1",
        )

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        ease: "power2.inOut",
        yoyo: true,
        repeat: -1,
      })

      // Parallax effect for background
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      })

      // Stats counter animation
      const statNumbers = document.querySelectorAll(".stat-number")
      statNumbers.forEach((stat) => {
        const finalValue = Number.parseInt(stat.textContent || "0")
        gsap.fromTo(
          stat,
          { textContent: 0 },
          {
            textContent: finalValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 1 },
            scrollTrigger: {
              trigger: stat,
              start: "top 80%",
            },
          },
        )
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax */}
      <div className="absolute inset-0 z-0">
        {/* <div className="hero-bg absolute inset-0 scale-110">
          <Image
            src="/placeholder.svg?height=1200&width=1920&text=Maasai+Mara+Safari+Sunset"
            alt="Maasai Mara Safari Landscape"
            fill
            className="object-cover"
            priority
          />
        </div> */}

        {/* Enhanced Gradient Overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/50 to-teal-800/60"
        />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </div>

      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <h1 ref={titleRef} className="text-6xl md:text-8xl font-bold mb-6 text-shadow-lg">
          Discover
          <span className="block bg-gradient-to-r from-amber-300 via-orange-400 to-pink-400 bg-clip-text text-transparent animate-pulse-slow">
            Wild Kenya
          </span>
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-3xl mb-8 text-shadow max-w-4xl mx-auto leading-relaxed">
          Embark on extraordinary safaris, explore vibrant cultures, and create unforgettable memories in the heart of
          East Africa
        </p>

        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
          <Button
            as={Link}
            href="/booking"
            size="lg"
            className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white font-bold text-lg px-10 py-4 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            🦁 Start Your Safari
          </Button>

          <Button
            as={Link}
            href="/services"
            size="lg"
            variant="bordered"
            className="font-bold text-lg px-10 py-4 rounded-full text-white border-2 border-white/80 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
          >
            🌍 Explore Services
          </Button>
        </div>

        <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-8">
          <div className="glass-card rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="stat-number text-4xl font-bold mb-2 text-amber-300">500</h3>
            <p className="text-lg text-gray-200">Happy Travelers</p>
            <div className="text-2xl mt-2">😊</div>
          </div>
          <div className="glass-card rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="stat-number text-4xl font-bold mb-2 text-emerald-300">50</h3>
            <p className="text-lg text-gray-200">Destinations</p>
            <div className="text-2xl mt-2">📍</div>
          </div>
          <div className="glass-card rounded-2xl p-8 backdrop-blur-md bg-white/10 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <h3 className="text-4xl font-bold mb-2 text-blue-300">24/7</h3>
            <p className="text-lg text-gray-200">Support</p>
            <div className="text-2xl mt-2">🛡️</div>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col items-center">
          <p className="text-white/80 text-sm mb-2 font-medium">Scroll to explore</p>
          <div className="w-8 h-12 border-2 border-white/60 rounded-full flex justify-center relative overflow-hidden">
            <div className="w-1 h-3 bg-gradient-to-b from-amber-400 to-orange-500 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Safari Animals Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/30 to-transparent">
        <div className="absolute bottom-4 left-10 text-6xl opacity-30 animate-pulse">🦁</div>
        <div className="absolute bottom-8 right-20 text-4xl opacity-40 animate-pulse" style={{ animationDelay: "1s" }}>
          🐘
        </div>
        <div className="absolute bottom-6 left-1/3 text-5xl opacity-25 animate-pulse" style={{ animationDelay: "2s" }}>
          🦒
        </div>
        <div
          className="absolute bottom-10 right-1/3 text-3xl opacity-35 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        >
          🦓
        </div>
      </div>
    </section>
  )
}
