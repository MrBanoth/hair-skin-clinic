import Link from "next/link"
import { notFound } from "next/navigation"
import { services } from "@/data/services"
import ServiceCard from "@/components/ServiceCard"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  // Decode the URL-encoded slug and convert to proper case
  const decodedSlug = decodeURIComponent(params.slug);
  const categoryName = decodedSlug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');

  // Get all services in this category
  let categoryServices = services.filter(service => 
    service.category.toLowerCase() === categoryName.toLowerCase() ||
    service.category.toLowerCase().includes(categoryName.toLowerCase())
  )

  // For Hair & Scalp Care, show specific services and add new ones
  if (categoryName.toLowerCase() === 'hair & scalp care') {
    categoryServices = [
      {
        id: 'prp-hair-therapy',
        title: 'PRP Hair Therapy',
        description: 'Stimulate natural hair growth with platelet-rich plasma for thicker, fuller hair.',
        longDescription: 'PRP (Platelet-Rich Plasma) Hair Therapy is a revolutionary treatment that uses your own blood\'s growth factors to stimulate hair follicles and promote natural hair growth. This non-surgical procedure is ideal for those experiencing hair thinning or early-stage hair loss.',
        image: '/homepage/our premium services/PRP-Hair-Therapy.jpg',
        price: 'From $500',
        duration: '90 min',
        category: 'Hair & Scalp Care',
        rating: 4.7,
        popular: true,
        benefits: [
          'Stimulates natural hair growth',
          'Uses your own blood plasma',
          'Minimally invasive',
          'No synthetic chemicals or drugs',
          'Improves hair thickness and density',
          'Suitable for both men and women'
        ],
        faqs: [
          {
            question: 'How soon will I see results?',
            answer: 'Most clients notice improvement in hair texture and thickness within 2-3 months, with optimal results visible after 6-12 months.'
          },
          {
            question: 'How many treatments are recommended?',
            answer: 'We typically recommend 3-4 initial treatments spaced 4-6 weeks apart, followed by maintenance treatments every 6-12 months.'
          }
        ]
      },
      {
        id: 'scalp-micropigmentation',
        title: 'Scalp Micropigmentation',
        description: 'A non-surgical treatment that replicates the appearance of hair follicles on the scalp.',
        longDescription: 'Scalp Micropigmentation is an advanced cosmetic procedure that uses micro-needles to deposit pigment into the scalp, creating the appearance of tiny hair follicles. This treatment is excellent for those with thinning hair or receding hairlines, providing the look of a closely shaved head or adding density to thinning areas.',
        image: '/homepage/our premium services/scalp-micropigmentation.jpg',
        price: 'From $400',
        duration: '120 min',
        category: 'Hair & Scalp Care',
        rating: 4.8,
        popular: true,
        benefits: [
          'Non-surgical hair loss solution',
          'Immediate results',
          'Low maintenance',
          'Suitable for men and women',
          'Natural-looking hair density',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How long does the treatment last?',
            answer: 'Results typically last 3-5 years before requiring a touch-up. The pigment will naturally fade over time.'
          },
          {
            question: 'Is the treatment painful?',
            answer: 'Most clients experience minimal discomfort, similar to a light scratching sensation. We can apply a topical anesthetic to minimize any discomfort.'
          }
        ]
      },
      {
        id: 'laser-hair-therapy',
        title: 'Laser Hair Therapy',
        description: 'Low-level laser therapy to stimulate hair growth and improve hair health.',
        longDescription: 'Laser Hair Therapy uses safe, low-level laser light to stimulate cellular activity in hair follicles, promoting hair growth and improving the health of existing hair. This FDA-cleared treatment is painless and suitable for both men and women experiencing hair thinning or loss.',
        image: '/homepage/our premium services/laser-hair-therapy.jpg',
        price: 'From $150',
        duration: '30 min',
        category: 'Hair & Scalp Care',
        rating: 4.6,
        popular: false,
        benefits: [
          'Stimulates hair follicles',
          'Increases blood circulation to the scalp',
          'Reduces hair shedding',
          'Improves hair shaft strength',
          'Safe and painless treatment',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How many treatments will I need?',
            answer: 'We recommend 2-3 treatments per week for the first 4-6 months, followed by maintenance sessions once every 1-2 months.'
          },
          {
            question: 'When will I see results?',
            answer: 'Most clients notice reduced hair shedding within 4-8 weeks, with visible hair growth typically seen after 12-16 weeks of consistent treatment.'
          }
        ]
      },
      {
        id: 'scalp-detox',
        title: 'Scalp Detox Treatment',
        description: 'Deep cleansing treatment to remove buildup and promote a healthy scalp environment.',
        longDescription: 'Our Scalp Detox Treatment is a deep-cleansing service that removes product buildup, excess oil, and environmental toxins from the scalp. This treatment helps to balance oil production, soothe irritation, and create the optimal environment for healthy hair growth.',
        image: '/homepage/our premium services/scalp-detox.jpg',
        price: 'From $90',
        duration: '60 min',
        category: 'Hair & Scalp Care',
        rating: 4.5,
        popular: false,
        benefits: [
          'Removes product buildup and impurities',
          'Reduces scalp irritation and flaking',
          'Balances oil production',
          'Improves hair texture and shine',
          'Promotes healthier hair growth',
          'Suitable for all hair types'
        ],
        faqs: [
          {
            question: 'How often should I get a scalp detox?',
            answer: 'We recommend a scalp detox every 4-6 weeks, or more frequently if you use a lot of styling products or have an oily scalp.'
          },
          {
            question: 'Will this treatment make my hair greasy?',
            answer: 'No, the treatment actually helps balance oil production. Your hair may feel lighter and cleaner after the treatment.'
          }
        ]
      },
      {
        id: 'keratin-treatment',
        title: 'Keratin Smoothing Treatment',
        description: 'Professional smoothing treatment to reduce frizz and enhance shine.',
        longDescription: 'Our Keratin Smoothing Treatment infuses the hair with keratin protein to smooth the cuticle, reduce frizz, and add incredible shine. This treatment is perfect for those with curly, frizzy, or unmanageable hair who want smoother, more manageable locks with less styling time.',
        image: '/homepage/our premium services/keratin-treatment.jpg',
        price: 'From $250',
        duration: '120-180 min',
        category: 'Hair & Scalp Care',
        rating: 4.8,
        popular: true,
        benefits: [
          'Reduces frizz and curl up to 80%',
          'Makes hair more manageable',
          'Adds incredible shine',
          'Lasts 3-5 months',
          'Safe for color-treated hair',
          'Reduces styling time'
        ],
        faqs: [
          {
            question: 'How long does the treatment last?',
            answer: 'Results typically last 3-5 months, depending on your hair type and how often you wash it.'
          },
          {
            question: 'Can I wash my hair after the treatment?',
            answer: 'You should wait 48-72 hours before washing your hair to allow the treatment to fully set. We also recommend using sulfate-free shampoo to extend the life of the treatment.'
          }
        ]
      },
      {
        id: 'scalp-microneedling',
        title: 'Scalp Microneedling',
        description: 'Stimulate hair growth and improve scalp health with microneedling therapy.',
        longDescription: 'Scalp Microneedling is a minimally invasive treatment that creates controlled micro-injuries in the scalp to stimulate the body\'s natural healing response and promote hair growth. This treatment enhances the absorption of topical treatments and can be combined with PRP for even better results.',
        image: '/homepage/our premium services/scalp-microneedling.jpg',
        price: 'From $350',
        duration: '90 min',
        category: 'Hair & Scalp Care',
        rating: 4.7,
        popular: false,
        benefits: [
          'Stimulates hair follicles',
          'Increases blood circulation',
          'Enhances product absorption',
          'Reduces inflammation',
          'Improves scalp health',
          'Can be combined with PRP'
        ],
        faqs: [
          {
            question: 'How many treatments will I need?',
            answer: 'We recommend a series of 3-6 treatments spaced 4-6 weeks apart for optimal results.'
          },
          {
            question: 'Is there any downtime?',
            answer: 'You may experience mild redness or tenderness for 24-48 hours after treatment. Most clients can return to their normal activities immediately.'
          }
        ]
      }
    ];
  }
  // For Facial Treatments, show only specific services and add new ones
  else if (categoryName.toLowerCase() === 'facial treatments') {
    categoryServices = [
      {
        id: 'microdermabrasion',
        title: 'Microdermabrasion',
        description: 'Gentle exfoliation to reveal brighter, smoother skin with improved texture and tone.',
        longDescription: 'Microdermabrasion is a non-invasive exfoliation treatment that uses fine crystals or a diamond-tipped wand to gently remove the outer layer of dead skin cells, revealing smoother, more radiant skin. This treatment helps reduce the appearance of fine lines, wrinkles, acne scars, and sun damage while improving skin texture and tone.',
        image: '/homepage/our premium services/microdermabrasion.jpg',
        price: 'From $120',
        duration: '45 min',
        category: 'Facial Treatments',
        rating: 4.7,
        popular: true,
        benefits: [
          'Reduces fine lines and wrinkles',
          'Improves skin texture and tone',
          'Minimizes pores',
          'Reduces hyperpigmentation',
          'Stimulates collagen production',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How many treatments will I need?',
            answer: 'For best results, we recommend a series of 5-6 treatments spaced 2-3 weeks apart, followed by monthly maintenance sessions.'
          },
          {
            question: 'Is there any downtime?',
            answer: 'No, there is no downtime. Your skin may be slightly pink immediately after treatment but this typically subsides within a few hours.'
          }
        ]
      },
      {
        id: 'dermaplaning',
        title: 'Dermaplaning',
        description: 'Safe and effective exfoliation that removes dead skin cells and peach fuzz for a radiant glow.',
        longDescription: 'Dermaplaning is a manual exfoliation treatment that uses a surgical scalpel to gently remove the top layer of dead skin cells and vellus hair (peach fuzz). This treatment leaves skin looking brighter, feeling smoother, and better able to absorb skincare products. It\'s particularly effective for those with dry skin or dull complexion.',
        image: '/homepage/our premium services/dermaplaning.jpg',
        price: 'From $110',
        duration: '45 min',
        category: 'Facial Treatments',
        rating: 4.8,
        popular: true,
        benefits: [
          'Removes dead skin cells and peach fuzz',
          'Enhances product absorption',
          'Creates smoother makeup application',
          'Reduces the appearance of fine lines',
          'Safe for all skin types',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How often should I get dermaplaning?',
            answer: 'We recommend dermaplaning every 3-4 weeks to maintain results, as this is the skin\'s natural regeneration cycle.'
          },
          {
            question: 'Will the hair grow back thicker?',
            answer: 'No, the hair will grow back at the same texture and color. The treatment does not alter hair growth.'
          }
        ]
      },
      {
        id: 'oxygen-facial',
        title: 'Oxygen Facial',
        description: 'Revitalize and hydrate your skin with pressurized oxygen and nourishing serums.',
        longDescription: 'The Oxygen Facial is a non-invasive treatment that delivers a powerful blend of oxygen, vitamins, and nutrients directly into the skin. This treatment helps to hydrate, brighten, and rejuvenate the skin while stimulating collagen production and improving skin elasticity. It\'s perfect for all skin types, including sensitive skin.',
        image: '/homepage/our premium services/oxygen-facial.jpg',
        price: 'From $140',
        duration: '60 min',
        category: 'Facial Treatments',
        rating: 4.6,
        popular: false,
        benefits: [
          'Deeply hydrates the skin',
          'Reduces fine lines and wrinkles',
          'Improves skin elasticity',
          'Brightens dull complexion',
          'Reduces redness and inflammation',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How often should I get an Oxygen Facial?',
            answer: 'For optimal results, we recommend a series of 3-4 treatments spaced 2 weeks apart, followed by monthly maintenance sessions.'
          },
          {
            question: 'Is there any discomfort?',
            answer: 'The treatment is completely painless and relaxing. Most clients describe it as feeling like a cool breeze on the skin.'
          }
        ]
      },
      {
        id: 'led-light-therapy',
        title: 'LED Light Therapy',
        description: 'Harness the power of light to address various skin concerns and promote healing.',
        longDescription: 'LED Light Therapy uses different wavelengths of light to target specific skin concerns. Blue light kills acne-causing bacteria, red light reduces inflammation and stimulates collagen production, while near-infrared light promotes healing and reduces inflammation. This treatment is safe for all skin types and requires no downtime.',
        image: '/homepage/our premium services/led-therapy.jpg',
        price: 'From $90',
        duration: '30 min',
        category: 'Facial Treatments',
        rating: 4.5,
        popular: true,
        benefits: [
          'Reduces acne and inflammation',
          'Stimulates collagen production',
          'Improves skin tone and texture',
          'Speeds up wound healing',
          'Reduces redness and rosacea',
          'No downtime or side effects'
        ],
        faqs: [
          {
            question: 'How many treatments will I need?',
            answer: 'For acne, we recommend 2-3 treatments per week for 4 weeks. For anti-aging, 1-2 treatments per week for 6-8 weeks is recommended.'
          },
          {
            question: 'Is LED therapy safe?',
            answer: 'Yes, LED therapy is FDA-cleared and completely safe for all skin types with no harmful UV rays.'
          }
        ]
      },
      {
        id: 'microneedling',
        title: 'Microneedling',
        description: 'Stimulate collagen production and improve skin texture with this minimally invasive treatment.',
        longDescription: 'Microneedling uses fine needles to create controlled micro-injuries in the skin, triggering the body\'s natural healing process and stimulating collagen and elastin production. This treatment is effective for reducing the appearance of acne scars, fine lines, wrinkles, and improving overall skin texture and tone.',
        image: '/homepage/our premium services/microneedling.jpg',
        price: 'From $300',
        duration: '60-90 min',
        category: 'Facial Treatments',
        rating: 4.8,
        popular: true,
        benefits: [
          'Reduces acne scars and stretch marks',
          'Minimizes pores',
          'Improves skin texture and tone',
          'Reduces fine lines and wrinkles',
          'Enhances product absorption',
          'Suitable for all skin types'
        ],
        faqs: [
          {
            question: 'How many treatments will I need?',
            answer: 'Most clients see optimal results after 3-6 treatments spaced 4-6 weeks apart, with continued improvement over several months.'
          },
          {
            question: 'Is there any downtime?',
            answer: 'You may experience redness and mild swelling for 24-48 hours. Your skin will be more sensitive to the sun, so proper sun protection is essential.'
          }
        ]
      },
      {
        id: 'enzyme-peel',
        title: 'Enzyme Peel',
        description: 'Gentle exfoliation using natural fruit enzymes to reveal brighter, smoother skin.',
        longDescription: 'Enzyme peels use natural fruit enzymes to gently dissolve dead skin cells and unclog pores without the irritation that can come from chemical peels. This treatment is ideal for sensitive skin types and provides a gentle yet effective exfoliation that leaves skin looking refreshed and radiant.',
        image: '/homepage/our premium services/enzyme-peel.jpg',
        price: 'From $95',
        duration: '45 min',
        category: 'Facial Treatments',
        rating: 4.4,
        popular: false,
        benefits: [
          'Gentle enough for sensitive skin',
          'Brightens dull complexion',
          'Improves skin texture',
          'Reduces hyperpigmentation',
          'Minimizes appearance of pores',
          'No downtime required'
        ],
        faqs: [
          {
            question: 'How often should I get an enzyme peel?',
            answer: 'For best results, we recommend every 2-4 weeks, depending on your skin type and concerns.'
          },
          {
            question: 'Will it make my skin peel?',
            answer: 'Enzyme peels are much gentler than chemical peels and typically don\'t cause visible peeling, though some mild flaking may occur.'
          }
        ]
      }
    ];
  }

  if (categoryServices.length === 0) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 bg-gradient-to-br from-rose-50 to-pink-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl text-center">
          <h1 className="text-4xl lg:text-5xl font-playfair font-light text-gray-900 dark:text-white mb-4">
            {categoryName}
          </h1>
          <div className="w-24 h-1 bg-rose-500 mx-auto mb-6"></div>
          <p className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore our comprehensive range of {categoryName.toLowerCase()} services
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            {categoryServices.map((service) => (
              <ServiceCard 
                key={service.id} 
                service={service} 
                className="h-full"
                hidePopularBadge={true}
                hideImageText={true}
              />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center px-6 py-3 rounded-full text-sm font-medium text-rose-600 dark:text-rose-400 hover:text-rose-700 dark:hover:text-rose-300 transition-colors group"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-4 w-4 mr-2 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
              Back to All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export async function generateStaticParams() {
  // Generate static paths for all categories
  const categories = [...new Set(services.map(service => service.category))]
  
  return categories.map(category => ({
    slug: category.toLowerCase().replace(/\s+/g, '-')
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  // Decode the URL-encoded slug and convert to proper case
  const categoryName = decodeURIComponent(params.slug)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
  
  return {
    title: `${categoryName} - Luxe Hair & Skin Clinic`,
    description: `Explore our ${categoryName.toLowerCase()} services. Professional treatments for your hair and skin care needs.`,
  }
}

// ... (rest of the code remains the same)
