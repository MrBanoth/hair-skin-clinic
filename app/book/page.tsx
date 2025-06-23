import type { Metadata } from "next"
import BookingForm from "@/components/BookingForm"

export const metadata: Metadata = {
  title: "Book Appointment - Luxe Hair & Skin Clinic",
  description:
    "Book your appointment at Luxe Hair & Skin Clinic. Choose from our range of premium hair and skin treatments.",
  openGraph: {
    title: "Book Appointment - Luxe Hair & Skin Clinic",
    description: "Book your appointment at Luxe Hair & Skin Clinic.",
    images: ["/images/booking-hero.jpg"],
  },
}

export default function Book() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative pt-10 pb-16 lg:pb-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-6">
            Book Your <span className="text-rose-500 font-medium">Appointment</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-light">
            Schedule your consultation or treatment with our expert team. We&apos;ll help you choose the perfect service for
            your needs.
          </p>
        </div>
      </section>

      {/* Booking Form Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <BookingForm />
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-4">
              What to <span className="text-rose-500 font-medium">Expect</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "1",
                title: "Consultation",
                description:
                  "We'll discuss your goals and assess your skin/hair condition to create a personalized treatment plan.",
              },
              {
                step: "2",
                title: "Treatment",
                description:
                  "Relax while our expert team performs your chosen treatment using state-of-the-art equipment.",
              },
              {
                step: "3",
                title: "Follow-up",
                description: "We'll provide aftercare instructions and schedule follow-up appointments as needed.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-rose-500 text-white rounded-full flex items-center justify-center text-xl font-medium mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
