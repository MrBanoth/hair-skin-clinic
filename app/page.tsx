import Hero from "@/components/Hero"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import Stats from "@/components/Stats"
import CTA from "@/components/CTA"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <Stats />
      <Testimonials />
      <CTA />
    </main>
  )
}
