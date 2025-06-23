import Link from "next/link"
import type { Metadata } from "next"
import { Clock, Sparkles, Award, Scissors, Droplets, ChevronRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Services - Luxe Hair & Skin Clinic",
  description: "Discover our premium hair and skin treatments for your beauty needs.",
  openGraph: {
    title: "Services - Luxe Hair & Skin Clinic",
    description: "Premium aesthetic treatments for hair and skin",
    images: ["/images/services-hero.jpg"],
  },
}

const services = [
  {
    category: "Facial Treatments",
    icon: Sparkles,
    gradient: "from-rose-400 to-pink-400",
    treatments: [
      { 
        name: "HydraFacial MD", 
        price: "$150", 
        duration: "45 min",
        description: "Deep cleansing, exfoliation, and hydration for glowing skin"
      },
      { 
        name: "Chemical Peels", 
        price: "$120", 
        duration: "30 min",
        description: "Customized peels for smoother, brighter skin"
      },
      { 
        name: "Microneedling", 
        price: "$300", 
        duration: "60 min",
        description: "Stimulates collagen for firmer, younger-looking skin"
      },
    ],
  },
  {
    category: "Laser Treatments",
    icon: Award,
    gradient: "from-purple-400 to-indigo-400",
    treatments: [
      { 
        name: "Laser Hair Removal", 
        price: "From $100", 
        duration: "30 min",
        description: "Permanent reduction for all skin types"
      },
      { 
        name: "Skin Rejuvenation", 
        price: "$250", 
        duration: "45 min",
        description: "Reduces signs of aging and sun damage"
      },
      { 
        name: "Tattoo Removal", 
        price: "$200", 
        duration: "30 min",
        description: "Advanced laser technology for tattoo removal"
      },
    ],
  },
  {
    category: "Hair Services",
    icon: Scissors,
    gradient: "from-amber-400 to-orange-400",
    treatments: [
      { 
        name: "Haircuts & Styling", 
        price: "$60+", 
        duration: "60 min",
        description: "Professional cuts and styling for all hair types"
      },
      { 
        name: "Hair Coloring", 
        price: "$100+", 
        duration: "120 min",
        description: "Custom color services with premium products"
      },
      { 
        name: "Hair Treatments", 
        price: "$80", 
        duration: "45 min",
        description: "Repair and nourish damaged hair"
      },
    ],
  },
  {
    category: "Body Treatments",
    icon: Droplets,
    gradient: "from-cyan-400 to-blue-400",
    treatments: [
      { 
        name: "Body Contouring", 
        price: "$200", 
        duration: "60 min",
        description: "Sculpt and tone your body"
      },
      { 
        name: "Cellulite Reduction", 
        price: "$180", 
        duration: "45 min",
        description: "Smoother, firmer skin"
      },
      { 
        name: "Body Wraps", 
        price: "$120", 
        duration: "45 min",
        description: "Detoxify and hydrate your skin"
      },
    ],
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-4">
              Our <span className="text-rose-500">Services</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Experience premium aesthetic treatments tailored to enhance your natural beauty. 
              Our expert team uses the latest technology to deliver exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`h-2 bg-gradient-to-r ${service.gradient}`}></div>
                <div className="p-6">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className={`p-2 rounded-lg bg-gradient-to-br ${service.gradient} text-white`}>
                      <service.icon className="w-6 h-6" />
                    </div>
                    <h2 className="text-2xl font-playfair font-light text-gray-900 dark:text-white">
                      {service.category}
                    </h2>
                  </div>
                  
                  <ul className="space-y-4 mb-8">
                    {service.treatments.map((treatment, i) => (
                      <li key={i} className="group-hover:bg-gray-50 dark:group-hover:bg-gray-800/50 p-3 rounded-lg transition-colors">
                        <div className="flex justify-between items-start">
                          <div className="flex-1">
                            <h3 className="font-medium text-gray-900 dark:text-white">{treatment.name}</h3>
                            <p className="text-sm text-gray-600 dark:text-gray-400">{treatment.description}</p>
                          </div>
                          <div className="flex items-center space-x-3 ml-4">
                            <span className="text-sm font-medium text-rose-500 whitespace-nowrap">{treatment.price}</span>
                            <div className="flex items-center text-xs text-gray-500">
                              <Clock className="w-3 h-3 mr-1" />
                              {treatment.duration}
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    href="/book"
                    className="group flex items-center justify-center space-x-2 text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 font-medium transition-colors"
                  >
                    <span>Book Now</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-rose-500 to-pink-500 text-white pt-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-playfair font-light mb-6">
              Ready to Begin Your Beauty Journey?
            </h2>
            <p className="text-lg text-rose-100 mb-8">
              Schedule a consultation with our experts to create a personalized treatment plan
              that helps you look and feel your absolute best.
            </p>
            <Link
              href="/book"
              className="inline-flex items-center justify-center bg-white text-rose-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors shadow-lg hover:shadow-xl"
            >
              Book Your Appointment
              <ChevronRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
