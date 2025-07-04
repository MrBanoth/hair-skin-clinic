"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const heroSlides = [
  {
    title: "Transform Your Beauty",
    description:
      "Experience luxury hair and skin treatments with our expert team and state-of-the-art technology. Your journey to radiant beauty starts.",
    image: "/homepage/img1.jpg",
    cta: "Book Free Consultation",
    ctaSecondary: "View Services",
  },
  {
    title: "Radiant Skin Awaits",
    description:
      "Discover personalized skin treatments designed to reveal your most beautiful, healthy skin. From HydraFacials to chemical peels.",
    image: "/homepage/img2.webp",
    cta: "Skin Treatments",
    ctaSecondary: "Book Now",
  },
  {
    title: "Hair Care Excellence",
    description:
      "Restore and enhance your hair with our advanced treatments. PRP therapy, laser hair removal, and scalp solutions.",
    image: "/homepage/img3.jpg",
    cta: "Hair Services",
    ctaSecondary: "Consult Now",
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 6000)
    return () => clearInterval(intervalId)
  }, [])

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slides */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ${
            index === currentSlide ? "opacity-100 scale-100" : "opacity-0 scale-105"
          }`}
        >
          <Image
            src={slide.image || "/placeholder.svg"}
            alt={slide.title}
            fill
            className="object-cover w-full h-full"
            priority={index === 0}
            sizes="100vw"
            quality={90}
            style={{
              objectPosition: "center center"
            }}
          />
          {/* Base overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/30" />
          
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
          
          {/* Top and bottom gradients */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/50 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.4)]" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center pt-16 md:pt-0">
        <div className="container mx-auto px-6 sm:px-8 md:px-4 w-full">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6">
            <div className="space-y-6 sm:space-y-8 text-white flex flex-col items-center justify-center py-8 sm:py-12">
              {/* Main Title */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-medium leading-tight text-center">
                {currentSlideData.title.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={index === currentSlideData.title.split(" ").length - 1 ? "text-rose-400" : ""}
                  >
                    {word}{" "}
                  </span>
                ))}
              </h1>

              {/* Description */}
              <p className="text-lg sm:text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed font-sans">
                {currentSlideData.description}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-8 sm:mt-12">
                <Link
                  href="/book"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white rounded-full text-base font-heading font-medium shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  {currentSlideData.cta}
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white bg-black/30 hover:bg-white/10 rounded-full text-sm font-heading font-medium transition-all duration-300"
                >
                  {currentSlideData.ctaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
