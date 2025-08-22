"use client"

import { Suspense } from "react"
import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import IconGrid from "@/components/icon-grid"
import Footer from "@/components/footer"
import { allIcons, searchIcons, getIconsByCategory } from "@/lib/icons"

function HomePageContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')
  const [selectedCategory, setSelectedCategory] = useState<string | null>(searchParams.get('category'))
  const [filteredIcons, setFilteredIcons] = useState(allIcons)

  // Update URL when search or category changes
  useEffect(() => {
    const params = new URLSearchParams()
    if (searchQuery) params.set('q', searchQuery)
    if (selectedCategory) params.set('category', selectedCategory)
    
    const newUrl = params.toString() ? `?${params.toString()}` : '/'
    router.replace(newUrl, { scroll: false })
  }, [searchQuery, selectedCategory, router])

  // Filter icons based on search and category
  useEffect(() => {
    let icons = allIcons

    if (searchQuery) {
      icons = searchIcons(searchQuery)
    } else if (selectedCategory) {
      icons = getIconsByCategory(selectedCategory)
    }

    setFilteredIcons(icons)
  }, [searchQuery, selectedCategory])

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    // Clear category when searching
    if (query && selectedCategory) {
      setSelectedCategory(null)
    }
  }

  const handleCategorySelect = (category: string | null) => {
    setSelectedCategory(category)
    // Clear search when selecting category
    if (category && searchQuery) {
      setSearchQuery('')
    }
  }

  // Show hero section only when no search/category is active
  const showHero = false

  return (
    <div className="min-h-screen bg-background">
      <Header 
        onSearch={handleSearch}
        onCategorySelect={handleCategorySelect}
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
      
      {showHero && <HeroSection />}
      
      <main className={`max-w-7xl mx-auto px-4 sm:px-6 py-8`}>
        <IconGrid 
          icons={filteredIcons}
          searchQuery={searchQuery}
          selectedCategory={selectedCategory}
        />
      </main>
      
      <Footer />
    </div>
  )
}

export default function HomePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading icons...</p>
        </div>
      </div>
    }>
      <HomePageContent />
    </Suspense>
  )
}