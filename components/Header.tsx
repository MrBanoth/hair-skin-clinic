"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Phone, MapPin } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" }
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-lg">
        <nav className="container mx-auto px-4" aria-label="Main navigation">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center" aria-label="Hair & Skin Clinic Home">
              <div className="w-16 h-16 relative">
                <Image 
                  src="/Logo.png" 
                  alt="Clinic Logo" 
                  fill 
                  className="object-contain"
                  sizes="70px"
                />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-10">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  <Link
                    href={item.href}
                    className={`text-sm font-medium transition-all duration-300 hover:text-rose-500 ${
                      pathname === item.href ? "text-rose-500" : "text-gray-700"
                    }`}
                  >
                    {item.name}
                    <span
                      className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 transition-all duration-300 group-hover:w-full ${
                        pathname === item.href ? "w-full" : ""
                      }`}
                    ></span>
                  </Link>
                </div>
              ))}

              {/* CTA Button */}
              <Link
                href="/book"
                className="bg-rose-500 text-white px-6 py-2 rounded-full hover:bg-rose-600 transition-colors font-medium"
              >
                Book Appointment
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-10 h-10 flex items-center justify-center transition-all duration-300 relative z-50 group"
                aria-label="Toggle menu"
              >
                <div className="w-5 h-4 relative flex flex-col justify-between items-center">
                  <span
                    className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "rotate-45 translate-y-1.5" : ""
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "opacity-0 -translate-x-2" : "opacity-100"
                    }`}
                  />
                  <span
                    className={`block w-5 h-0.5 bg-gray-800 rounded-full transition-all duration-300 ${
                      isOpen ? "-rotate-45 -translate-y-1.5" : ""
                    }`}
                  />
                </div>
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-72 max-w-[90vw] bg-white shadow-2xl z-50 lg:hidden flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="p-4 border-b border-gray-200 flex-shrink-0">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <div className="w-8 h-8 relative">
                <Image 
                  src="/Logo.png" 
                  alt="Clinic Logo" 
                  fill 
                  className="object-contain"
                  sizes="32px"
                />
              </div>
              <span className="text-lg font-playfair font-bold text-black">Clinic</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-gray-500 hover:text-gray-700"
              aria-label="Close menu"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 py-2">
          <nav className="space-y-1 px-2">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 px-3 text-sm font-medium rounded-md transition-colors ${
                    pathname === item.href
                      ? "bg-rose-50 text-rose-600"
                      : "text-gray-700 hover:bg-gray-50 hover:text-rose-600"
                  }`}
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="px-4 py-1 mt-1">
            <div className="flex items-start space-x-2 py-1.5">
              <Phone className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[11px] text-gray-500">Call us at</p>
                <a href="tel:+1234567890" className="text-xs font-medium text-gray-900 hover:text-rose-600">
                  +1 (234) 567-890
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-2 py-1.5">
              <MapPin className="w-3.5 h-3.5 text-rose-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[11px] text-gray-500">Visit us at</p>
                <p className="text-xs font-medium text-gray-900">
                  123 Beauty St, Beverly Hills
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Footer */}
        <div className="border-t border-gray-200 p-4 flex-shrink-0">
          <Link
            href="/book"
            onClick={() => setIsOpen(false)}
            className="w-full bg-gradient-to-r from-rose-500 to-pink-500 text-white py-2.5 px-4 rounded-full font-medium text-center block hover:from-rose-600 hover:to-pink-600 text-sm"
          >
            Book Appointment
          </Link>
          <p className="text-xs text-gray-500 text-center mt-2">
            <span className="block">Mon-Fri: 9AM-7PM</span>
            <span>Sat: 9AM-5PM</span>
          </p>
        </div>
      </div>
    </>
  )
}
