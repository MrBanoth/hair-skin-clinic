import type { Metadata } from "next"
import ContactForm from "@/components/ContactForm"
import { MapPin, Phone, Mail, Car, Bus, Train } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us - Luxe Hair & Skin Clinic",
  description:
    "Get in touch with Luxe Hair & Skin Clinic. Visit our Beverly Hills location, call us, or send us a message for appointments and inquiries.",
  openGraph: {
    title: "Contact Us - Luxe Hair & Skin Clinic",
    description: "Get in touch with Luxe Hair & Skin Clinic for appointments and inquiries.",
    images: ["/images/contact-hero.jpg"],
  },
}

// Contact methods moved to their usage location

const directions = [
  {
    icon: Car,
    title: "By Car",
    description: "Valet parking available. Street parking on Beauty Boulevard and adjacent streets.",
    details: ["Valet service: $15", "Street parking: $2/hour", "Nearby garage: Beverly Center"],
  },
  {
    icon: Bus,
    title: "By Public Transit",
    description: "Multiple bus lines serve the Beverly Hills area with stops near our clinic.",
    details: ["Metro Bus Line 20", "Metro Bus Line 720", "Big Blue Bus Line 5"],
  },
  {
    icon: Train,
    title: "By Metro",
    description: "Take the Metro Purple Line to Wilshire/Western, then transfer to bus.",
    details: ["Purple Line to Wilshire/Western", "Transfer to Bus 20", "5-minute walk from stop"],
  },
]

const faqs = [
  {
    question: "Do you offer free consultations?",
    answer:
      "Yes! We offer complimentary consultations for all new clients to discuss your goals and create a personalized treatment plan.",
  },
  {
    question: "What should I expect during my first visit?",
    answer:
      "Your first visit includes a comprehensive consultation, skin analysis, medical history review, and discussion of treatment options tailored to your needs.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We accept insurance for medical dermatology services. Cosmetic treatments are typically not covered by insurance, but we offer flexible payment plans.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "We recommend booking 1-2 weeks in advance for regular treatments. Popular services and weekend appointments may require more advance notice.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require 24-hour notice for cancellations. Same-day cancellations may incur a fee. We understand emergencies happen and handle each case individually.",
  },
  {
    question: "Do you offer package deals?",
    answer:
      "Yes! We offer treatment packages and membership programs that provide significant savings for multiple sessions or combined treatments.",
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-playfair font-light text-gray-900 dark:text-white">
              Contact <span className="text-rose-500">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
              We&apos;d love to hear from you. Get in touch with our team for appointments, consultations, or any questions
              about our premium beauty services.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      {/* <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-4">
              Get In <span className="text-rose-500">Touch</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're here to help and answer any questions you might have. Reach out to us through any of these channels.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Phone,
                title: "Phone",
                primary: "(555) 123-4567",
                secondary: "Emergency: (555) 123-4568",
                description: "Call us for immediate assistance or to book appointments",
                color: "bg-rose-100 text-rose-600 dark:bg-rose-900/20 dark:text-rose-400"
              },
              // Add other contact methods here
            ].map((method, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
              >
                <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mb-6`}>
                  <method.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">{method.title}</h3>
                <div className="space-y-1.5 mb-4">
                  <p className="font-medium text-gray-900 dark:text-white">{method.primary}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">{method.secondary}</p>
                </div>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5">{method.description}</p>
                <a 
                  href={method.button.href}
                  className="inline-flex items-center text-sm font-medium text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 transition-colors"
                >
                  {method.button.text}
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Main Contact Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Location & Directions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-8">
                  Visit Our Clinic
                </h2>

                {/* Map Placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20"></div>
                  <div className="text-center z-10">
                    <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">123 Beauty Boulevard, Beverly Hills</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-medium text-gray-900 dark:text-white">How to Get Here</h3>
                  {directions.map((direction, index) => (
                    <div key={index} className="bg-white dark:bg-gray-900 rounded-xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                          <direction.icon className="w-6 h-6 text-rose-500" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium text-gray-900 dark:text-white mb-2">{direction.title}</h4>
                          <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">{direction.description}</p>
                          <ul className="space-y-1">
                            {direction.details.map((detail, idx) => (
                              <li key={idx} className="text-xs text-gray-500 dark:text-gray-400 flex items-center">
                                <div className="w-1 h-1 bg-rose-500 rounded-full mr-2"></div>
                                {detail}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="text-rose-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, policies, and procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-3">{faq.question}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4">Don&apos;t see your question answered?</p>
            <a
              href="mailto:info@luxeclinic.com"
              className="inline-flex items-center px-8 py-3 bg-rose-500 text-white font-medium rounded-2xl hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
            >
              Email Us Your Question
            </a>
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 lg:py-24 bg-rose-400 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-white">Need Immediate Assistance?</h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              For urgent matters or post-treatment concerns, our emergency line is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234568"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-500 font-medium rounded-2xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (555) 123-4568
              </a>
              <a
                href="mailto:emergency@luxeclinic.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-2xl hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5 mr-2" />
                Emergency Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
