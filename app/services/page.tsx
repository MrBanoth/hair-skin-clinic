import Link from "next/link"
import type { Metadata } from "next"
import { Award, Shield, Sparkles } from "lucide-react"
import { services } from "@/data/services"
import ServiceCard from "@/components/ServiceCard"

export const metadata: Metadata = {
  title: "Our Services - Luxe Hair & Skin Clinic",
  description: "Discover our comprehensive range of premium hair and skin treatments. From HydraFacials to laser therapy, PRP treatments, and more.",
  openGraph: {
    title: "Our Services - Luxe Hair & Skin Clinic",
    description: "Discover our comprehensive range of premium hair and skin treatments.",
    images: ["/images/services-hero.jpg"],
  },
}

// Get all available services
const allServices = [...services];

// Category metadata with icons and colors
const categoryMetadata = [
  {
    name: "Facial Treatments",
    description: "Rejuvenate and refresh your skin with our advanced facial treatments",
    icon: Sparkles,
    color: "from-rose-500 to-pink-500",
    services: [
      'Chemical Peels',
      'IPL Photofacial',
      'HydraFacial MD'
    ]
  },
  {
    name: "Hair & Scalp Care",
    description: "Specialized treatments for hair restoration and scalp health",
    icon: Shield,
    color: "from-purple-500 to-indigo-500",
    services: [
      'PRP Hair Therapy',
      'Scalp Treatments',
      'Laser Hair Removal'
    ]
  }
];

// Group services by category
const serviceCategories = allServices.reduce((acc: Record<string, typeof services>, service) => {
  const category = categoryMetadata.find(cat => cat.services.includes(service.title));
  if (category) {
    if (!acc[category.name]) {
      acc[category.name] = [];
    }
    acc[category.name].push(service);
  }
  return acc;
}, {} as Record<string, typeof services>);

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-6">
            Our <span className="text-rose-500">Services</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our comprehensive range of advanced treatments designed to enhance your natural beauty and confidence.
          </p>
        </div>
      </section>

      {/* Services by Category */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          {categoryMetadata.map((category, index) => {
            const categoryServices = serviceCategories[category.name] || [];
            if (categoryServices.length === 0) return null;
            
            return (
              <div key={category.name} className={`${index > 0 ? 'mt-24' : ''}`}>
                <div className="text-center mb-12 max-w-4xl mx-auto">
                  <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-4">
                    {category.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300">
                    {category.description}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-[1600px] mx-auto">
                  {categoryServices.map((service) => (
                    <ServiceCard 
                      key={service.id} 
                      service={service} 
                    />
                  ))}
                </div>
                <div className="text-center mt-12">
                  <Link 
                    href={`/services/category/${encodeURIComponent(category.name.toLowerCase().replace(/\s+/g, '-'))}`}
                    className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors group"
                  >
                    <span>View all {category.name}</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-playfair font-light text-gray-900 dark:text-white mb-6">
            Ready to Book Your Appointment?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-rose-500 text-white font-medium rounded-lg hover:bg-rose-600 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section> */}
    </main>
  );
}
