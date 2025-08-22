"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Copy, Check } from "lucide-react"
import { IconData } from "@/lib/icons"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

interface IconGridProps {
  icons: IconData[]
  searchQuery: string
  selectedCategory: string | null
}

function IconCard({ icon }: { icon: IconData }) {
  const router = useRouter()
  const [copied, setCopied] = useState(false)
  const [carouselApi, setCarouselApi] = useState<any>(null)
  const IconComponent = icon.component

  const handleIconClick = () => {
    router.push(`/icon/${encodeURIComponent(icon.name.toLowerCase())}`)
  }

  const handleCopyClick = async (e: React.MouseEvent) => {
    e.stopPropagation()
    
    const componentCode = `<${icon.name} className="w-4 h-4" />`
    
    try {
      await navigator.clipboard.writeText(componentCode)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const handlePrevClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    carouselApi?.scrollPrev()
  }

  const handleNextClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    carouselApi?.scrollNext()
  }

  // Generate icon variants based on icon properties
  const getIconVariants = () => {
    const variants: Array<{
      id: string
      label: string
      iconClass: string
      colorClass: string
      bgClass: string
      customColor?: string
    }> = [
      {
        id: 'light',
        label: 'Light',
        iconClass: 'w-6 h-6',
        colorClass: '',
        bgClass: 'bg-card'
      },
      {
        id: 'dark',
        label: 'Dark',
        iconClass: 'w-6 h-6',
        colorClass: 'text-background',
        bgClass: 'bg-foreground'
      }
    ]

    // Add colored variant if the icon supports it
    if (icon.hasColorVariant && icon.colorHex) {
      variants.splice(1, 0, {
        id: 'colored',
        label: 'Colored',
        iconClass: 'w-6 h-6',
        colorClass: '',
        bgClass: 'bg-card',
        customColor: icon.colorHex
      })
    }

    return variants
  }

  const variants = getIconVariants()

  return (
    <Card 
      className="group relative overflow-hidden hover:shadow-md transition-all duration-200 cursor-pointer border border-border bg-card hover:bg-muted/50"
      onClick={handleIconClick}
    >
      <CardContent className="p-4">
        {/* Copy button */}
        <div className="absolute top-2 right-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <Button
            size="sm"
            variant="ghost"
            onClick={handleCopyClick}
            className="h-6 w-6 p-0 hover:bg-background/80"
          >
            {copied ? (
              <Check className="h-3 w-3 text-green-600" />
            ) : (
              <Copy className="h-3 w-3" />
            )}
          </Button>
        </div>

        {/* Icon Carousel - covers the entire card content area */}
        <Carousel 
          className="w-full h-full" 
          opts={{ align: "start", loop: true }}
          setApi={setCarouselApi}
        >
          <CarouselContent>
            {variants.map((variant, index) => (
              <CarouselItem key={variant.id}>
                <div className="flex flex-col items-center gap-3 h-full">
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg transition-colors duration-200 ${variant.bgClass}`}>
                    <IconComponent 
                      className={`${variant.iconClass} ${variant.colorClass}`}
                      style={variant.customColor ? { color: variant.customColor } : undefined}
                    />
                  </div>
                  
                  {/* Icon name */}
                  <h3 className="font-medium text-sm text-center">
                    {icon.name}
                  </h3>

                  {/* Variant indicator dots */}
                  <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {variants.map((_, dotIndex) => (
                      <div 
                        key={dotIndex} 
                        className={`w-1 h-1 rounded-full transition-colors ${
                          dotIndex === index ? 'bg-primary' : 'bg-muted-foreground/40'
                        }`} 
                      />
                    ))}
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
          {/* Custom navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute -left-2 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handlePrevClick}
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            className="absolute -right-2 top-1/2 -translate-y-1/2 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity z-10"
            onClick={handleNextClick}
          >
            <svg className="h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </Carousel>
      </CardContent>
    </Card>
  )
}

export default function IconGrid({ icons, searchQuery, selectedCategory }: IconGridProps) {
  return (
    <div className="w-full">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">
              {searchQuery ? `Search: "${searchQuery}"` : 
               selectedCategory ? `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)} Icons` : 
               'All Icons'}
            </h1>
            <p className="text-muted-foreground mt-2">
              {searchQuery ? `${icons.length} icons found` :
               selectedCategory ? `Browse ${icons.length} icons in this category` :
               `${icons.length} beautifully crafted icons with multiple variants`}
            </p>
          </div>
          <Badge variant="secondary" className="px-3 py-1">
            {icons.length}
          </Badge>
        </div>
      </div>

      {/* No results message */}
      {icons.length === 0 && (
        <div className="text-center py-16">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-muted rounded-lg flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
          <h3 className="text-xl font-semibold mb-2">No icons found</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            {searchQuery 
              ? `No icons match "${searchQuery}". Try different search terms.` 
              : "No icons match the selected category."}
          </p>
          <Button variant="outline" onClick={() => window.location.href = '/'}>
            View All Icons
          </Button>
        </div>
      )}

      {/* Icon Grid */}
      {icons.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
          {icons.map((icon) => (
            <IconCard key={icon.name} icon={icon} />
          ))}
        </div>
      )}
    </div>
  )
}