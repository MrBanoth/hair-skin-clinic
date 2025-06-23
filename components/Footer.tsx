import Link from "next/link"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200">
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 relative">
                <Image 
                  src="/Logo.png" 
                  alt="Clinic Logo" 
                  fill 
                  className="object-contain"
                  sizes="80px"
                />
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Transform your beauty with our premium hair and skin treatments. Expert care, state-of-the-art technology,
              and personalized service.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-rose-500 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-medium mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "/about" },
                { name: "Services", href: "/services" },
                { name: "Contact", href: "/contact" },
                { name: "Book Appointment", href: "/book" },
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-rose-500 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-medium mb-6">Our Services</h3>
            <ul className="space-y-3">
              {[
                "HydraFacial MD",
                "Laser Hair Removal",
                "PRP Hair Therapy",
                "Chemical Peels",
                "IPL Photofacial",
                "Scalp Treatments",
              ].map((service) => (
                <li key={service}>
                  <Link href="/services" className="text-gray-400 hover:text-rose-500 transition-colors">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-medium mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  123 Beauty Boulevard
                  <br />
                  Beverly Hills, CA 90210
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a href="tel:+15551234567" className="text-gray-400 hover:text-rose-500 transition-colors">
                  (555) 123-4567
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-rose-500 flex-shrink-0" />
                <a href="mailto:info@luxeclinic.com" className="text-gray-400 hover:text-rose-500 transition-colors">
                  info@luxeclinic.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-rose-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  Mon-Fri: 9:00 AM - 7:00 PM
                  <br />
                  Sat: 9:00 AM - 5:00 PM
                  <br />
                  Sun: Closed
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Luxe Hair & Skin Clinic. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="#" className="text-gray-400 hover:text-rose-500 text-sm transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
