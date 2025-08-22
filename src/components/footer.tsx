export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-2">
            ArcunIcons
          </h3>
          <p className="text-muted-foreground mb-4">
            Beautiful, customizable icons powered by Lucide React
          </p>
          <div className="flex justify-center space-x-6 text-sm text-muted-foreground">
            <span>Free to use</span>
            <span>•</span>
            <span>Open source</span>
            <span>•</span>
            <span>MIT License</span>
          </div>
        </div>
      </div>
    </footer>
  )
}