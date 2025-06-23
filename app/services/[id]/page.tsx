import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Clock, DollarSign, Check, Star } from "lucide-react"
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import BookingForm from "@/components/BookingForm"

export async function generateStaticParams() {
  return services.map((service) => ({
    id: service.id,
  }))
}

export default function ServiceDetailPage({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)

  if (!service) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Back Button */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-4">
            <Link
              href="/services"
              className="inline-flex items-center text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4 mr-1.5" />
              Back to Services
            </Link>
            <span className="text-gray-300 dark:text-gray-600">/</span>
            <Link 
              href="/" 
              className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 xl:gap-16 pt-8 lg:pt-12">
          {/* Left Side - Image and Content */}
          <div className="lg:w-1/2 pt-4">
            <div className="relative h-96 lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30" />
              <div className="absolute top-4 left-4 z-10">
                <span className="bg-rose-500 text-white px-4 py-2 rounded-2xl text-sm font-medium">
                  {service.category}
                </span>
              </div>
              <div className="absolute bottom-4 right-4 bg-black/60 text-white px-3 py-1.5 rounded-full text-sm flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                {service.rating.toFixed(1)}
              </div>
            </div>
            
            {/* Service Details */}
            <div className="mt-8">
              <h1 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-6">
                {service.title}
              </h1>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-xl">
                  <Clock className="w-5 h-5 text-rose-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{service.duration}</span>
                </div>
                <div className="flex items-center bg-gray-50 dark:bg-gray-800 px-4 py-3 rounded-xl">
                  <DollarSign className="w-5 h-5 text-rose-500 mr-2" />
                  <span className="text-gray-700 dark:text-gray-300">{service.price}</span>
                </div>
              </div>
              
              <div className="prose dark:prose-invert max-w-none pb-8">
                <h2 className="text-2xl font-playfair font-light text-gray-900 dark:text-white mb-4">
                  Overview
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {service.longDescription}
                </p>
                
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">Benefits</h3>
                <ul className="space-y-3 mb-8">
                  {service.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          {/* Right Side - Booking Form */}
          <div className="lg:w-1/2 pt-4 lg:pt-0">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
              <div className="p-6">
                <h2 className="text-2xl font-playfair font-light text-gray-900 dark:text-white mb-2">
                  Book Your Session
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Schedule your appointment today. We&#39;ll contact you shortly to confirm.
                </p>
                <div className="bg-rose-50 dark:bg-rose-900/20 p-4 rounded-lg mb-6">
                  <h3 className="font-medium text-gray-900 dark:text-white mb-2">Selected Service</h3>
                  <p className="text-rose-600 dark:text-rose-400">{service.title}</p>
                  <p className="text-gray-600 dark:text-gray-300">Don&#39;t see a time that works for you? Contact us for more availability.</p>
                </div>
                <BookingForm defaultService={service.title} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Booking CTA Section */}
      <section className="py-16 lg:py-24 bg-rose-400 overflow-hidden mt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-white">Ready to Book Your Appointment?</h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              Schedule your consultation today and take the first step towards your beauty transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#booking-form"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-500 font-medium rounded-2xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <Check className="w-5 h-5 mr-2" />
                Book Free Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-2xl hover:bg-white/10 transition-colors"
              >
                <span>Ask Questions</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const service = services.find((s) => s.id === params.id)
  
  if (!service) {
    return {
      title: 'Service Not Found',
      description: 'The requested service could not be found.'
    }
  }

  return {
    title: `${service.title} | Luxe Hair & Skin Clinic`,
    description: service.description,
    openGraph: {
      title: `${service.title} | Luxe Hair & Skin Clinic`,
      description: service.description,
      images: [service.image],
    },
  }
}
