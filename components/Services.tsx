"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, Clock, DollarSign } from "lucide-react"
import { services } from "@/data/services"
import { homeServices } from "@/data/home"

export default function Services() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const carouselRef = useRef<HTMLDivElement>(null)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(services.length / 3))
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += carouselRef.current.offsetWidth
    }
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(services.length / 3)) % Math.ceil(services.length / 3))
    if (carouselRef.current) {
      carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth
    }
  }


  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-medium text-gray-900 mb-4">
            {homeServices.title.split(' ')[0]} <span className="text-rose-500">{homeServices.title.split(' ').slice(1).join(' ')}</span>
          </h2>
          <div className="w-20 h-1 bg-rose-500 mx-auto mb-6"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto font-sans">
            {homeServices.subtitle}
          </p>
        </div>

        {/* Services Carousel */}
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-8 scroll-smooth -mx-4 px-4"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              scrollBehavior: "smooth"
            }}
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 sm:w-80 bg-gray-50 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 snap-start group border border-gray-100"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    priority={index < 3} // Load first 3 images with priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/40" />
                  <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
                  <div className="absolute top-4 left-4 z-10">
                    <span className="bg-rose-500 text-white px-3 py-1 rounded-2xl text-sm font-heading font-medium">
                      {service.category}
                    </span>
                  </div>
                </div>
                <div className="p-5 sm:p-6">
                  <h3 className="text-xl font-heading font-medium text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2 font-sans">{service.description}</p>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4 text-rose-500" />
                        <span className="text-rose-500 font-heading font-medium">{service.price}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-500 text-sm font-sans">{service.duration}</span>
                      </div>
                    </div>
                  </div>
                  <Link
                    href={`/services/${service.id}`}
                    className="w-full bg-rose-500 text-white py-2 px-4 rounded-2xl hover:bg-rose-600 transition-colors text-center block font-heading font-medium"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 font-heading"
            aria-label="Previous services"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-colors z-10 font-heading"
            aria-label="Next services"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>

        {/* Carousel Indicators */}
        <div className="flex justify-center mt-10 space-x-2">
          {Array.from({ length: Math.ceil(services.length / 3) }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? "bg-rose-500" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* View All Services Button */}
        <div className="text-center mt-14">
          <Link
            href={homeServices.cta.link}
            className="inline-flex items-center px-8 py-3.5 border-2 border-rose-500 text-rose-500 font-heading font-medium rounded-2xl hover:bg-rose-500 hover:text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
          >
            {homeServices.cta.text}
          </Link>
        </div>
      </div>
    </section>
  )
}
