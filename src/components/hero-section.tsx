"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap, Palette } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="py-12 px-4 sm:px-6 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero Title */}
        <div className="mb-8">
          <Badge variant="secondary" className="mb-4 px-3 py-1">
            <Sparkles className="h-3 w-3 mr-1" />
            1000+ Icons Available
          </Badge>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            Beautiful Icons for
            <br />
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Your Projects
            </span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and customize thousands of high-quality icons. Perfect for web, mobile, and desktop applications.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Lightning Fast</h3>
              <p className="text-sm text-muted-foreground">
                Instant search and filtering across thousands of icons
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Palette className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fully Customizable</h3>
              <p className="text-sm text-muted-foreground">
                Change colors, sizes, and styles to match your design
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-background/50 backdrop-blur">
            <CardContent className="p-6 text-center">
              <div className="h-12 w-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Carefully crafted icons that work perfectly at any size
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}