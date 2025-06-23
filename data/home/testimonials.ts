export interface Testimonial {
  name: string;
  image: string;
  rating: number;
  text: string;
  treatment: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4,
    text: "The HydraFacial treatment was absolutely amazing! My skin has never looked better. The staff is professional and the clinic is beautiful.",
    treatment: "HydraFacial MD",
  },
  {
    name: "Michael Chen",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Excellent laser hair removal service. The results exceeded my expectations and the process was comfortable throughout.",
    treatment: "Laser Hair Removal",
  },
  {
    name: "Emma Rodriguez",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "The PRP hair therapy has transformed my hair! I can see significant improvement in thickness and growth. Highly recommend!",
    treatment: "PRP Hair Therapy",
  },
  {
    name: "David Wilson",
    image: "/placeholder.svg?height=100&width=100",
    rating: 5,
    text: "Professional service from start to finish. The chemical peel gave me the glowing skin I've always wanted.",
    treatment: "Chemical Peel",
  },
]
