import Image from "next/image"
import type { Metadata } from "next"
import { Award, Users, Clock, Heart, Shield, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us - Luxe Hair & Skin Clinic",
  description:
    "Learn about our expert team and state-of-the-art treatments at Luxe Hair & Skin Clinic. Premium skincare and hair care services with 15+ years of experience.",
  openGraph: {
    title: "About Us - Luxe Hair & Skin Clinic",
    description: "Learn about our expert team and state-of-the-art treatments at Luxe Hair & Skin Clinic.",
    images: ["/images/about-hero.jpg"],
  },
}

const teamMembers = [
  {
    name: "Dr. Sarah Johnson",
    role: "Lead Dermatologist & Founder",
    image: "/aboutuspage/doctors-image/Dr. Sarah Johnson.avif",
    credentials: "MD, Board Certified Dermatologist",
    experience: "15+ years",
    specialties: ["Medical Dermatology", "Cosmetic Procedures", "Anti-Aging Treatments"],
    bio: "Dr. Johnson founded Luxe Clinic with a vision to provide world-class aesthetic treatments in a luxurious, comfortable environment.",
  },
  {
    name: "Dr. Michael Chen",
    role: "Aesthetic Specialist",
    image: "/aboutuspage/doctors-image/Dr. Michael Chen.jpg",
    credentials: "MD, Cosmetic Surgery Fellowship",
    experience: "12+ years",
    specialties: ["Laser Treatments", "Injectable Fillers", "Skin Resurfacing"],
    bio: "Dr. Chen specializes in non-invasive cosmetic procedures and has trained with leading experts in aesthetic medicine.",
  },
  {
    name: "Emma Rodriguez",
    role: "Senior Master Aesthetician",
    image: "/aboutuspage/doctors-image/Emma Rodriguez.jpg",
    credentials: "Licensed Master Aesthetician, CIDESCO Certified",
    experience: "10+ years",
    specialties: ["Advanced Facials", "Chemical Peels", "Skin Analysis"],
    bio: "Emma brings extensive experience in advanced skincare treatments and personalized skin care regimens.",
  },
  {
    name: "Dr. Lisa Thompson",
    role: "Hair Restoration Specialist",
    image: "/aboutuspage/doctors-image/Dr. Lisa Thompson.jpg",
    credentials: "MD, Trichology Certification",
    experience: "8+ years",
    specialties: ["PRP Hair Therapy", "Hair Transplantation", "Scalp Treatments"],
    bio: "Dr. Thompson is a leading expert in hair restoration and scalp health, helping clients regain confidence.",
  },
  {
    name: "James Wilson",
    role: "Laser Technician",
    image: "/aboutuspage/doctors-image/James Wilson.jpg",
    credentials: "Certified Laser Specialist",
    experience: "7+ years",
    specialties: ["Laser Hair Removal", "IPL Treatments", "Laser Safety"],
    bio: "James ensures safe and effective laser treatments with his extensive training and attention to detail.",
  },
  {
    name: "Maria Garcia",
    role: "Client Care Coordinator",
    image: "/aboutuspage/doctors-image/Maria Garcia.jpg",
    credentials: "Healthcare Administration",
    experience: "5+ years",
    specialties: ["Client Relations", "Treatment Planning", "Aftercare Support"],
    bio: "Maria ensures every client receives personalized attention and comprehensive care throughout their journey.",
  },
]

const achievements = [
  { icon: Award, title: "Best Aesthetic Clinic 2023", description: "Beverly Hills Beauty Awards" },
  { icon: Users, title: "5000+ Happy Clients", description: "Satisfied customers since 2008" },
  { icon: Clock, title: "15+ Years Experience", description: "Trusted expertise in beauty" },
  { icon: Heart, title: "98% Client Satisfaction", description: "Exceptional service rating" },
]

const values = [
  {
    icon: Shield,
    title: "Safety First",
    description: "We prioritize your safety with FDA-approved treatments and sterile procedures.",
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We strive for perfection in every treatment and service we provide.",
    color: "text-rose-600 dark:text-rose-400",
  },
  {
    icon: Heart,
    title: "Personalized Care",
    description: "Every treatment plan is customized to your unique needs and goals.",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Users,
    title: "Client-Centered",
    description: "Your comfort, satisfaction, and results are our top priorities.",
    color: "text-green-600 dark:text-green-400",
  },
]

export default function About() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-playfair font-light text-gray-900 dark:text-white">
                  About <span className="text-rose-500">Luxe Clinic</span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                  Where beauty meets science, and luxury meets results.
                </p>
              </div>

              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                Since 2008, Luxe Hair & Skin Clinic has been at the forefront of aesthetic medicine, combining
                cutting-edge technology with personalized care to help our clients achieve their beauty goals. Our team
                of board-certified professionals is dedicated to providing safe, effective, and transformative
                treatments in a luxurious environment.
              </p>

              <div className="grid grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="w-12 h-12 bg-rose-100 dark:bg-rose-900/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <achievement.icon className="w-6 h-6 text-rose-500" />
                    </div>
                    <div>
                      <h3 className="font-medium text-gray-900 dark:text-white text-sm">{achievement.title}</h3>
                      <p className="text-xs text-gray-600 dark:text-gray-400">{achievement.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-md mx-auto lg:mx-0 lg:max-w-none pt-8 lg:pt-12">
              <div className="relative z-10 w-full h-full flex items-center">
                <div className="w-full h-[480px] relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/aboutuspage/cover-image.jpg"
                    alt="Modern clinic interior with luxury amenities"
                    fill
                    className="object-cover object-center"
                    priority
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
              <div className="hidden lg:block absolute -bottom-6 -right-6 w-full h-full bg-gradient-to-br from-rose-500/20 to-pink-500/20 rounded-2xl"></div>
              <div className="hidden lg:block absolute -top-6 -left-6 w-32 h-32 bg-gradient-to-br from-rose-500 to-pink-500 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white">
                Our <span className="text-rose-500">Journey</span>
              </h2>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-200 via-pink-200 to-purple-200 dark:from-rose-900/40 dark:via-pink-900/40 dark:to-purple-900/40 -ml-px"></div>
              
              <div className="relative grid md:grid-cols-3 gap-12">
                {/* 2008 */}
                <div className="relative group">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl z-10 ring-4 ring-white/20 dark:ring-gray-800/50">
                    2008
                  </div>
                  <div className="pt-14 px-6 pb-8 h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 text-center">The Beginning</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      Dr. Sarah Johnson founded Luxe Clinic with a vision to revolutionize aesthetic medicine by combining medical expertise with luxury hospitality.
                    </p>
                  </div>
                </div>

                {/* 2015 */}
                <div className="relative group mt-16 md:mt-24">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl z-10 ring-4 ring-white/20 dark:ring-gray-800/50">
                    2015
                  </div>
                  <div className="pt-14 px-6 pb-8 h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 text-center">Expansion</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      We expanded our services to include advanced hair restoration treatments and welcomed additional specialists to our growing team.
                    </p>
                  </div>
                </div>

                {/* 2024 */}
                <div className="relative group mt-16 md:mt-0">
                  <div className="absolute left-1/2 -translate-x-1/2 -top-6 w-16 h-16 rounded-full bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg transform transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl z-10 ring-4 ring-white/20 dark:ring-gray-800/50">
                    2024
                  </div>
                  <div className="pt-14 px-6 pb-8 h-full bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700">
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3 text-center">Innovation</h3>
                    <p className="text-gray-600 dark:text-gray-300 text-center">
                      Today, we continue to lead with the latest technologies and treatments, having served over 5,000 satisfied clients.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-6">
              Meet Our <span className="text-rose-500">Expert Team</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Our team of certified professionals brings decades of combined experience and a passion for helping you
              achieve your beauty goals.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 relative overflow-hidden">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
                      style={{ objectPosition: member.name === "Dr. Sarah Johnson" ? "center 25%" : "center" }}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-1">{member.name}</h3>
                    <p className="text-rose-500 font-medium mb-2">{member.role}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">{member.credentials}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500">{member.experience} experience</p>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.bio}</p>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">Specialties:</p>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-rose-100 dark:bg-rose-900/20 text-rose-600 dark:text-rose-400 text-xs rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-6">
              Our <span className="text-rose-500">Values</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              These core principles guide everything we do and ensure you receive the highest quality care and service.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {values.map((value, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-16 h-16 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className={`w-12 h-12 ${value.color}`} />
                </div>
                <h3 className="text-xl font-medium text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-rose-400 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-5xl font-playfair font-light text-white">
              Ready to Begin Your Beauty Journey?
            </h2>
            <p className="text-xl text-rose-100 leading-relaxed">
              Experience the Luxe difference with a complimentary consultation. Our experts will create a personalized
              treatment plan just for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-rose-500 font-heading font-medium rounded-2xl hover:bg-gray-100 transition-colors"
              >
                Book Free Consultation
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-heading font-medium rounded-2xl hover:bg-white/10 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
