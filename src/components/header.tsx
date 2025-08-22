"use client"

import { useState } from "react"
import { Search, X, Grid3X3 } from "lucide-react"
import Link from "next/link"
import { iconCategories } from "@/lib/icons"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"

interface HeaderProps {
  onSearch: (query: string) => void
  onCategorySelect: (category: string | null) => void
  selectedCategory: string | null
  searchQuery: string
}

export default function Header({ 
  onSearch, 
  onCategorySelect, 
  selectedCategory, 
  searchQuery 
}: HeaderProps) {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery)

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value
    setLocalSearchQuery(query)
    onSearch(query)
  }

  const clearSearch = () => {
    setLocalSearchQuery('')
    onSearch('')
  }

  const clearCategory = () => {
    onCategorySelect(null)
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Navigation Bar */}
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center">
              <Grid3X3 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="text-xl font-bold">ArcunIcons</span>
          </Link>

          {/* Center Search Bar */}
          <div className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <input
                type="text"
                placeholder="Search icons..."
                value={localSearchQuery}
                onChange={handleSearchChange}
                className="w-full pl-10 pr-10 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none text-sm placeholder:text-muted-foreground"
              />
              {localSearchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Right side navigation and theme toggle */}
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-6">
              <Link 
                href="/" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/categories" 
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Categories
              </Link>
            </nav>
            
            {/* Enhanced Theme Toggle */}
            <div className="flex items-center">
              <ModeToggle />
            </div>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="md:hidden pb-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <input
              type="text"
              placeholder="Search icons..."
              value={localSearchQuery}
              onChange={handleSearchChange}
              className="w-full pl-10 pr-10 py-2 bg-background border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent outline-none text-sm placeholder:text-muted-foreground"
            />
            {localSearchQuery && (
              <button
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        {/* Quick Categories - Only show when not searching */}
        {!searchQuery && (
          <div className="pb-4">
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                variant={!selectedCategory ? "default" : "outline"}
                size="sm"
                onClick={() => onCategorySelect(null)}
                className="text-xs"
              >
                All
              </Button>
              
              {Object.entries(iconCategories).slice(0, 6).map(([key, category]) => (
                <Button
                  key={key}
                  variant={selectedCategory === key ? "default" : "outline"}
                  size="sm"
                  onClick={() => onCategorySelect(key)}
                  className="text-xs"
                >
                  {category.title}
                </Button>
              ))}
              
              <Link href="/categories">
                <Button variant="ghost" size="sm" className="text-xs">
                  More →
                </Button>
              </Link>
            </div>
          </div>
        )}

        {/* Active filters display */}
        {(selectedCategory || searchQuery) && (
          <div className="pb-4">
            <div className="flex items-center justify-center gap-2 flex-wrap">
              <span className="text-xs text-muted-foreground">Filters:</span>
              {searchQuery && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-primary/10 text-primary text-xs rounded-md">
                  "{searchQuery}"
                  <button onClick={clearSearch} className="text-primary hover:text-primary/80">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="inline-flex items-center gap-1 px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                  {iconCategories[selectedCategory as keyof typeof iconCategories]?.title}
                  <button onClick={clearCategory} className="text-secondary-foreground hover:text-secondary-foreground/80">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}