import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, ArrowRight } from "lucide-react"

type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  readTime: string
  image: string
  category: string
}

const blogPosts: BlogPost[] = [
  {
    id: 'summer-skin-care',
    title: 'Essential Summer Skin Care Routine',
    excerpt: 'Discover the best practices to protect and nourish your skin during the hot summer months.',
    date: 'June 15, 2024',
    readTime: '5 min read',
    image: '/blog/summer-skin-care.jpg',
    category: 'Skin Care'
  },
  {
    id: 'hair-loss-solutions',
    title: 'Effective Hair Loss Solutions',
    excerpt: 'Learn about the latest treatments and solutions for hair loss and thinning hair.',
    date: 'June 5, 2024',
    readTime: '7 min read',
    image: '/blog/hair-loss-solutions.jpg',
    category: 'Hair Care'
  },
  {
    id: 'anti-aging-tips',
    title: 'Anti-Aging: Prevention & Treatment',
    excerpt: 'Expert tips and treatments to maintain youthful, radiant skin at any age.',
    date: 'May 28, 2024',
    readTime: '6 min read',
    image: '/blog/anti-aging-tips.jpg',
    category: 'Skin Care'
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-4">
            Beauty <span className="text-rose-500">Blog</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Expert advice, tips, and insights on hair care, skin treatments, and beauty trends.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article key={post.id} className="group">
                <div className="overflow-hidden rounded-2xl mb-4">
                  <div className="relative h-60">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 right-4 bg-rose-500 text-white text-xs font-medium px-3 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 space-x-4 mb-3">
                  <span className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1.5" />
                    {post.date}
                  </span>
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1.5" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="text-xl font-medium text-gray-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
                  <Link href={`/blog/${post.id}`}>
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{post.excerpt}</p>
                <Link 
                  href={`/blog/${post.id}`}
                  className="inline-flex items-center text-rose-500 hover:text-rose-600 dark:text-rose-400 dark:hover:text-rose-300 font-medium transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
