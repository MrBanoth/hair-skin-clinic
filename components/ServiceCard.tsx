import Image from "next/image"
import Link from "next/link"
import { Star, Clock, DollarSign } from "lucide-react"
import { Service } from "@/data/services"

interface ServiceCardProps {
  service: Service
  className?: string
  hideImageText?: boolean
}

export default function ServiceCard({ service, className = '', hideImageText = false }: ServiceCardProps) {
  return (
    <div className={`flex flex-col bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group ${className}`}>
      <div className="relative h-56 overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {!hideImageText && (
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <h3 className="text-xl font-heading font-medium">{service.title}</h3>
            <p className="text-sm font-sans text-white/90 line-clamp-2 leading-relaxed">{service.description}</p>
          </div>
        )}
        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-heading font-medium text-gray-900 dark:text-white mb-3">{service.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 flex-grow font-sans leading-relaxed">{service.description}</p>
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
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-sans text-gray-600 dark:text-gray-300">{service.rating.toFixed(1)}</span>
          </div>
        </div>
        <Link
          href={`/services/${service.id}`}
          className="w-full bg-rose-500 text-white py-2 px-4 rounded-2xl hover:bg-rose-600 transition-colors text-center block font-heading"
        >
          Learn More
        </Link>
      </div>
    </div>
  )
}
