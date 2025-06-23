import Link from "next/link"

export default function CTA() {
  return (
    <section className="py-16 lg:py-24 bg-rose-400 overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-5xl font-playfair font-light text-white">
            Not Sure Which Treatment is Right for You?
          </h2>
          <p className="text-xl text-rose-100 leading-relaxed">
            Book a complimentary consultation with our experts. We'll assess your needs and create a personalized treatment plan to help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-500 font-medium rounded-2xl hover:bg-gray-100 transition-colors"
            >
              Book Free Consultation
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-2xl hover:bg-white/10 transition-colors"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
