import { ArrowLeft, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/20">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="w-20 h-20 bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 border border-border/50">
          <Search className="w-10 h-10 text-muted-foreground" />
        </div>
        
        <h1 className="text-2xl font-bold mb-2">Icon Not Found</h1>
        <p className="text-muted-foreground mb-6">
          The icon you're looking for doesn't exist or may have been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/">
            <Button className="rounded-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Icons
            </Button>
          </Link>
          <Link href="/?q=">
            <Button variant="outline" className="rounded-full">
              <Search className="w-4 h-4 mr-2" />
              Search Icons
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}