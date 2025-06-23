'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowLeft, Loader2 } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { galleryCategories, galleryItems } from '@/data/gallery'
import BeforeAfterCard from '@/components/BeforeAfterCard'

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  // Filter gallery items based on active category
  const filteredItems = activeCategory === 'all' 
    ? galleryItems 
    : (galleryItems || []).filter(item => item?.category === activeCategory)

  // Get the active category title for display
  const activeCategoryData = galleryCategories.find(cat => cat.id === activeCategory) || galleryCategories[0]
  const activeTitle = activeCategory === 'all' 
    ? 'Our Gallery' 
    : (activeCategoryData?.title || 'Gallery')

  // Handle category change with smooth scroll and loading state
  const handleCategoryChange = (categoryId: string) => {
    // Only proceed if we're on the client side
    if (typeof window === 'undefined') return;
    
    setIsLoading(true)
    setActiveCategory(categoryId)
    
    // Simulate loading for better UX
    setTimeout(() => {
      setIsLoading(false)
      // Smooth scroll to gallery section
      const gallerySection = document.getElementById('gallery-grid')
      if (gallerySection) {
        window.scrollTo({
          top: gallerySection.offsetTop - 100,
          behavior: 'smooth'
        })
      }
    }, 300)
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <div className="relative bg-gray-900 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/gallery/cover-image.jpeg"
            alt="Gallery Background"
            fill
            className="object-cover object-center"
            priority
            quality={100}
          />
          {/* Base overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/40" />
          
          {/* Gradient overlays for depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/15 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/5 to-transparent" />
          
          {/* Top and bottom gradients */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-black/60 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/60 to-transparent" />
          
          {/* Subtle vignette effect */}
          <div className="absolute inset-0 shadow-[inset_0_0_120px_rgba(0,0,0,0.6)]" />
        </div>

        {/* Back Button */}
        <div className="relative z-10 border-b border-white/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center space-x-4">
              <Link
                href="/"
                className="inline-flex items-center text-white/80 hover:text-white transition-colors text-sm group"
              >
                <ArrowLeft className="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-x-0.5" />
                Back to Home
              </Link>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 py-16 sm:py-20 md:py-32 lg:py-40">
          <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
            <div className="max-w-3xl mx-auto">
              <h1 className="text-3xl xs:text-4xl md:text-5xl font-bold text-white mb-4 xs:mb-6">
                Transformations That Inspire
              </h1>
              <p className="text-base xs:text-lg text-white/90 mb-6 xs:mb-8 max-w-2xl mx-auto px-2">
                Real results from real clients. Browse through our collection of before and after photos to see the difference our treatments can make.
              </p>
              <div className="flex flex-wrap justify-center gap-2 xs:gap-3 mt-6 xs:mt-8">
                <button
                  onClick={() => handleCategoryChange('all')}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeCategory === 'all'
                      ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                      : 'bg-white/10 text-white/90 hover:bg-white/20 hover:border-white/20 border border-transparent'
                  }`}
                >
                  All Categories
                </button>
                {galleryCategories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeCategory === category.id
                        ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30'
                        : 'bg-white/10 text-white/90 hover:bg-white/20 hover:border-white/20 border border-transparent'
                    }`}
                  >
                    {category.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid Section */}
      <section id="gallery-grid" className="py-8 sm:py-12 lg:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 max-w-7xl">
          {/* Active Category Title */}
          <div className="text-center mb-8 sm:mb-12 px-2">
            <h2 className="text-2xl xs:text-3xl md:text-4xl font-playfair font-light text-gray-900 dark:text-white mb-2 xs:mb-3">
              {activeTitle}
            </h2>
            <p className="text-sm xs:text-base text-gray-600 dark:text-gray-300 px-2">
              {activeCategory === 'all' 
                ? 'Browse through our complete collection of before and after photos.'
                : `Showing results for ${activeCategoryData?.title.toLowerCase()}`}
            </p>
          </div>

          {/* Loading State */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Loader2 className="w-10 h-10 text-rose-500 animate-spin" />
            </div>
          ) : (
            // Gallery Grid
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 w-full">
              {filteredItems.length > 0 ? (
                filteredItems.map((item) => {
                  const category = galleryCategories.find(cat => cat.id === item.category)?.title || ''
                  return (
                    <div key={item.id} className="w-full max-w-xs mx-auto sm:max-w-none">
                      <BeforeAfterCard
                        beforeImage={item.beforeImage}
                        afterImage={item.afterImage}
                        title={item.title}
                        category={category}
                        beforeLabel={item.beforeLabel}
                        afterLabel={item.afterLabel}
                        className="w-full h-[280px] xs:h-[300px] sm:h-[280px] md:h-[320px] lg:h-[280px] xl:h-[260px]"
                      />
                    </div>
                  )
                })
              ) : (
                <div className="col-span-full text-center py-12 sm:py-16 px-4">
                  <div className="text-gray-400 dark:text-gray-500 mb-4">
                    <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-base xs:text-lg font-medium text-gray-700 dark:text-gray-300">No results found</h3>
                  <p className="text-sm xs:text-base text-gray-500 dark:text-gray-400 mt-1">We couldn't find any items in this category.</p>
                  <button
                    onClick={() => handleCategoryChange('all')}
                    className="mt-3 xs:mt-4 inline-flex items-center px-3 xs:px-4 py-1.5 xs:py-2 border border-transparent text-xs xs:text-sm font-medium rounded-md shadow-sm text-white bg-rose-500 hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-colors"
                  >
                    View All Categories
                  </button>
                </div>
              )}
            </div>
          )}
          
          {/* View More Button (if needed) */}
          {!isLoading && filteredItems.length > 0 && (
            <div className="text-center mt-12">
              <button 
                onClick={() => {
                  // TODO: Implement load more functionality
                  alert('Load more functionality will be implemented here');
                }}
                className="inline-flex items-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-sm font-medium rounded-full text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500 transition-all"
              >
                Load More
                <svg className="ml-2 -mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
