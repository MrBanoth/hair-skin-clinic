export type GalleryCategory = {
  id: string
  title: string
  image: string
  count: number
}

export const galleryCategories: GalleryCategory[] = [
  {
    id: 'hair-treatment',
    title: 'Hair Transformations',
    image: '/gallery/hair-treatments.jpg',
    count: 24,
  },
  {
    id: 'skin-treatments',
    title: 'Skin Rejuvenation',
    image: '/gallery/skin-treatments.jpg',
    count: 18,
  },
  {
    id: 'anti-aging',
    title: 'Anti-Aging Results',
    image: '/gallery/anti-aging.jpg',
    count: 15,
  },
  {
    id: 'laser-hair-removal',
    title: 'Laser Hair Removal',
    image: '/gallery/laser-hair-removal.jpg',
    count: 12,
  },
  {
    id: 'prp-therapy',
    title: 'PRP Therapy',
    image: '/gallery/prp-therapy.jpg',
    count: 9,
  },
  {
    id: 'chemical-peels',
    title: 'Chemical Peels',
    image: '/gallery/chemical-peels.jpg',
    count: 11,
  },
]

export interface GalleryItem {
  id: string
  title: string
  category: string
  beforeImage: string
  afterImage: string
  description?: string
  date?: string
  tags?: string[]
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'hair-1',
    title: 'Hair Regrowth Treatment',
    category: 'hair-treatments',
    beforeImage: '/gallery/before/hair-1.jpg',
    afterImage: '/gallery/after/hair-1.jpg',
    description: '6 months of intensive hair regrowth treatment',
    date: '2023-03-15',
    tags: ['PRP', 'Hair Growth', 'Thinning Hair']
  },
  {
    id: 'skin-1',
    title: 'Acne Scar Treatment',
    category: 'skin-treatments',
    beforeImage: '/gallery/before/skin-1.jpg',
    afterImage: '/gallery/after/skin-1.jpg',
    description: 'Microdermabrasion and laser treatment for acne scars',
    date: '2023-04-22',
    tags: ['Acne', 'Scarring', 'Laser']
  },
  {
    id: 'anti-aging-1',
    title: 'Anti-Aging Treatment',
    category: 'anti-aging',
    beforeImage: '/gallery/before/anti-aging-1.jpg',
    afterImage: '/gallery/after/anti-aging-1.jpg',
    description: '12 weeks of anti-aging treatment',
    date: '2023-05-10',
    tags: ['Wrinkles', 'Fine Lines', 'Rejuvenation']
  },
  // Add more gallery items as needed
]
