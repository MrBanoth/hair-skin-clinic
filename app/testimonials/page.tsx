'use client'

import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

type Testimonial = {
  id: number
  name: string
  role: string
  image: string
  rating: number
  content: string
  treatment: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Hair Treatment Patient",
    image: "/testimonials/person1.jpg",
    rating: 5,
    content: "The hair treatment I received was exceptional. My hair has never felt healthier, and the staff made me feel comfortable throughout the entire process.",
    treatment: "Hair PRP Therapy"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Skin Care Patient",
    image: "/testimonials/person2.jpg",
    rating: 5,
    content: "Outstanding results from my skin rejuvenation treatment. The difference is night and day, and I've received so many compliments on my glowing skin.",
    treatment: "Laser Skin Rejuvenation"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Laser Hair Removal",
    image: "/testimonials/person3.jpg",
    rating: 4,
    content: "The laser hair removal process was virtually painless, and the results are better than I expected. The staff is professional and knowledgeable.",
    treatment: "Full Body Laser"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Acne Treatment",
    image: "/testimonials/person4.jpg",
    rating: 5,
    content: "After struggling with acne for years, the treatment plan they created for me has completely transformed my skin. I couldn't be happier with the results.",
    treatment: "Acne Clear Program"
  },
  {
    id: 5,
    name: "Priya Patel",
    role: "Anti-Aging Treatment",
    image: "/testimonials/person5.jpg",
    rating: 5,
    content: "The anti-aging treatments have taken years off my appearance. The staff is incredibly attentive and made sure I was comfortable throughout each session.",
    treatment: "Anti-Aging Facial"
  },
]

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeFilter, setActiveFilter] = useState<string>('all')

  const filteredTestimonials = activeFilter === 'all' 
    ? testimonials 
    : testimonials.filter(t => t.treatment.toLowerCase().includes(activeFilter.toLowerCase()))

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredTestimonials.length - 1 ? 0 : prevIndex + 1
    )
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? filteredTestimonials.length - 1 : prevIndex - 1
    )
  }

  const treatmentTypes = ['all', 'hair', 'skin', 'laser', 'acne', 'anti-aging']

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-16 lg:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-3xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-4">
            Patient <span className="text-rose-500">Testimonials</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Hear what our patients have to say about their experiences and results.
          </p>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {treatmentTypes.map((type) => (
              <button
                key={type}
                onClick={() => {
                  setActiveFilter(type)
                  setCurrentIndex(0)
                }}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeFilter === type
                    ? 'bg-rose-500 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
              </button>
            ))}
          </div>

          {/* Testimonial Cards */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTestimonials.map((testimonial, index) => (
                <div 
                  key={testimonial.id}
                  className={`bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 transition-all duration-300 ${
                    index === currentIndex ? 'ring-2 ring-rose-500 scale-105' : 'opacity-90 hover:opacity-100'
                  }`}
                >
                  <div className="flex items-center mb-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-rose-500">{testimonial.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < testimonial.rating 
                            ? 'text-yellow-400 fill-current' 
                            : 'text-gray-300 dark:text-gray-600'
                        }`} 
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">&ldquo;{testimonial.content}&rdquo;</p>
                  
                  <div className="text-sm text-rose-500 font-medium">
                    {testimonial.treatment}
                  </div>
                </div>
              )).slice(currentIndex, currentIndex + 3)}
            </div>

            {filteredTestimonials.length > 0 && (
              <>
                <button
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-rose-500 hover:bg-rose-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-white dark:bg-gray-800 shadow-lg flex items-center justify-center text-rose-500 hover:bg-rose-50 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}
          </div>

          {/* View All Button */}
          <div className="text-center mt-12">
            <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-rose-500 hover:bg-rose-600 transition-colors">
              Share Your Experience
            </button>
          </div>
        </div>
      </section>
    </main>
  )
}
