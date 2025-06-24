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

import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What hair treatments do you offer?",
    answer: "We offer a wide range of hair treatments including PRP therapy, hair transplants, laser hair growth treatments, scalp treatments, and customized hair care solutions tailored to your specific needs.",
  },
  {
    question: "How do I know which skin treatment is right for me?",
    answer: "During your initial consultation, our dermatologists will analyze your skin type, concerns, and medical history to recommend personalized treatments such as chemical peels, laser therapy, microdermabrasion, or customized facials.",
  },
  {
    question: "Is laser hair removal safe for all skin types?",
    answer: "Yes, our advanced laser technology is safe for all skin types. We use different laser systems to accommodate various skin tones and hair colors, ensuring safe and effective treatment for everyone.",
  },
  {
    question: "How many sessions will I need for optimal results?",
    answer: "The number of sessions varies depending on the treatment and individual factors. Most hair removal treatments require 6-8 sessions, while skin treatments may need 4-6 sessions for optimal results. Our specialists will create a personalized treatment plan during your consultation.",
  },
  {
    question: "What's the downtime after cosmetic procedures?",
    answer: "Downtime varies by procedure. Non-invasive treatments like facials typically have no downtime, while procedures like chemical peels or laser treatments may require 1-3 days of recovery. Our team will provide detailed aftercare instructions specific to your treatment.",
  },
  {
    question: "Do you offer solutions for hair loss?",
    answer: "Yes, we provide comprehensive hair loss solutions including PRP therapy, low-level laser therapy, topical treatments, and hair transplant procedures. Our specialists will diagnose the cause of your hair loss and recommend the most effective treatment plan.",
  },
  {
    question: "How should I prepare for my first appointment?",
    answer: "Please arrive with clean skin, avoid sun exposure 48 hours before your appointment, bring a list of current medications, and arrive 15 minutes early to complete any necessary paperwork. For specific treatments, we may provide additional preparation instructions.",
  },
  {
    question: "What's the difference between medical and cosmetic dermatology?",
    answer: "Medical dermatology focuses on diagnosing and treating skin conditions like acne, eczema, and skin cancer, while cosmetic dermatology enhances appearance through treatments like Botox, fillers, and laser procedures. Our clinic offers both services.",
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl lg:text-6xl font-heading font-medium text-gray-900 dark:text-white">
              Contact <span className="text-rose-500">Us</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
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
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8">
            {/* Contact Form - First on mobile, right on desktop */}
            <div className="lg:order-2 bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg h-full">
              <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-8">
                Send us a Message
              </h2>
              <div className="w-full">
                <ContactForm />
              </div>
            </div>

            {/* Location & Directions - Second on mobile, left on desktop */}
            <div className="lg:order-1 bg-white dark:bg-gray-900 rounded-2xl p-6 lg:p-8 shadow-lg h-full">
              <div>
                <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-8">
                  Visit Our Clinic
                </h2>

                {/* Map Placeholder */}
                <div className="bg-gray-200 dark:bg-gray-700 rounded-2xl h-64 w-full flex items-center justify-center mb-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20"></div>
                  <div className="text-center z-10 p-4">
                    <MapPin className="w-12 h-12 text-rose-500 mx-auto mb-4" />
                    <p className="text-gray-600 dark:text-gray-400 font-heading font-medium">Interactive Map</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 font-sans">123 Beauty Boulevard, Beverly Hills</p>
                  </div>
                </div>

                {/* Directions */}
                <div className="space-y-6">
                  <h3 className="text-xl font-heading font-medium text-gray-900 dark:text-white mb-2">How to Get Here</h3>
                  <div className="space-y-4">
                    {directions.map((direction, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-5 hover:shadow-md transition-shadow w-full">
                        <div className="flex items-start space-x-4">
                          <div className="w-10 h-10 bg-rose-100 dark:bg-rose-900/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                            <direction.icon className="w-5 h-5 text-rose-500" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-heading font-medium text-gray-900 dark:text-white mb-1.5">{direction.title}</h4>
                            <p className="text-gray-600 dark:text-gray-300 text-sm mb-2.5 font-sans">{direction.description}</p>
                            <ul className="space-y-1.5">
                              {direction.details.map((detail, idx) => (
                                <li key={idx} className="text-sm text-gray-500 dark:text-gray-400 flex items-start font-sans">
                                  <span className="inline-block w-1.5 h-1.5 bg-rose-500 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                                  <span className="flex-1">{detail}</span>
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
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-heading font-medium text-gray-900 dark:text-white mb-6">
              Frequently Asked <span className="text-rose-500">Questions</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find answers to common questions about our services, policies, and procedures.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion.Root 
              type="single" 
              collapsible 
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <Accordion.Item 
                  key={index} 
                  value={`item-${index}`}
                  className="group overflow-hidden rounded-2xl bg-gray-50 dark:bg-gray-800 hover:shadow-lg transition-all"
                >
                  <Accordion.Header className="w-full">
                    <Accordion.Trigger 
                      className="flex w-full items-center justify-between p-6 text-left text-lg font-heading font-medium text-gray-900 dark:text-white hover:text-rose-500 dark:hover:text-rose-400 transition-colors"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown 
                        className="h-5 w-5 text-rose-500 transition-transform duration-200 group-data-[state=open]:rotate-180" 
                        aria-hidden 
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-300 font-sans">
                      {faq.answer}
                    </div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 dark:text-gray-300 mb-4 font-sans">Don&apos;t see your question answered?</p>
            <a
              href="mailto:info@luxeclinic.com"
              className="inline-flex items-center px-8 py-3 bg-rose-500 text-white font-heading font-medium rounded-2xl hover:bg-rose-600 transition-colors shadow-lg hover:shadow-xl"
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
            <h2 className="text-3xl lg:text-5xl font-heading font-medium text-white">Need Immediate Assistance?</h2>
            <p className="text-xl text-rose-100 leading-relaxed font-sans">
              For urgent matters or post-treatment concerns, our emergency line is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15551234568"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-500 font-heading font-medium rounded-2xl hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-2" />
                Emergency: (555) 123-4568
              </a>
              <a
                href="mailto:emergency@luxeclinic.com"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-heading font-medium rounded-2xl hover:bg-white/10 transition-colors"
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
