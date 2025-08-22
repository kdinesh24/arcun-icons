"use client"

import Link from "next/link"
import { iconCategories } from "@/lib/icons"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft } from "lucide-react"

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-6"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Icons
          </Link>
          <h1 className="text-3xl font-bold tracking-tight mb-2">Categories</h1>
          <p className="text-muted-foreground">
            Browse icons organized by category
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Object.entries(iconCategories).map(([key, category]) => (
            <Link key={key} href={`/?category=${key}`}>
              <Card className="h-full transition-all duration-200 hover:shadow-md cursor-pointer group border border-border">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="group-hover:text-foreground transition-colors text-base">
                      {category.title}
                    </CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {category.icons.length}
                    </Badge>
                  </div>
                  <CardDescription className="text-sm">
                    {category.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {/* Preview icons */}
                  <div className="flex gap-2">
                    {category.icons.slice(0, 3).map((iconName) => (
                      <div 
                        key={iconName}
                        className="w-8 h-8 bg-muted rounded-md flex items-center justify-center group-hover:bg-muted/70 transition-colors"
                      >
                        <div className="text-xs text-muted-foreground font-mono">
                          {iconName.slice(0, 2).toUpperCase()}
                        </div>
                      </div>
                    ))}
                    {category.icons.length > 3 && (
                      <div className="w-8 h-8 bg-muted rounded-md flex items-center justify-center">
                        <span className="text-xs text-muted-foreground">+{category.icons.length - 3}</span>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-6 px-4 py-3 bg-muted/50 rounded-lg">
            <div>
              <div className="text-xl font-bold">{Object.keys(iconCategories).length}</div>
              <div className="text-xs text-muted-foreground">Categories</div>
            </div>
            <div className="w-px h-6 bg-border"></div>
            <div>
              <div className="text-xl font-bold">
                {Object.values(iconCategories).reduce((total, cat) => total + cat.icons.length, 0)}
              </div>
              <div className="text-xs text-muted-foreground">Total Icons</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}