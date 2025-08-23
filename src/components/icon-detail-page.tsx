"use client"

import { useState, useCallback, useEffect } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Copy, Check, Download, Palette } from "lucide-react"
import Link from "next/link"
import { getIconByName } from "@/lib/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { ModeToggle } from "@/components/mode-toggle"

interface IconDetailPageProps {
  iconName: string
}

interface CustomColor {
  r: number
  g: number
  b: number
  hex: string
}

export default function IconDetailPage({ iconName }: IconDetailPageProps) {
  const router = useRouter()
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const [iconSize, setIconSize] = useState<number>(24)
  const [isInverted, setIsInverted] = useState(false)
  const [customColor, setCustomColor] = useState<CustomColor>({ r: 255, g: 255, b: 255, hex: '#ffffff' })
  const [useCustomColor, setUseCustomColor] = useState(false)
  
  // Set default color based on theme
  useEffect(() => {
    const isDarkMode = document.documentElement.classList.contains('dark')
    if (isDarkMode) {
      setCustomColor({ r: 0, g: 0, b: 0, hex: '#000000' })
    } else {
      setCustomColor({ r: 255, g: 255, b: 255, hex: '#ffffff' })
    }
    setUseCustomColor(true)
  }, [])
  
  const iconData = getIconByName(iconName)
  
  if (!iconData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Icon not found</h1>
          <Button
            variant="outline"
            onClick={() => router.push('/')}
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all icons
          </Button>
        </div>
      </div>
    )
  }

  const IconComponent = iconData.component

  const rgbToHex = useCallback((r: number, g: number, b: number) => {
    return "#" + [r, g, b].map(x => {
      const hex = x.toString(16)
      return hex.length === 1 ? "0" + hex : hex
    }).join("")
  }, [])

  const hexToRgb = useCallback((hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null
  }, [])

  const updateCustomColor = useCallback((updates: Partial<CustomColor>) => {
    setCustomColor(prev => {
      const newColor = { ...prev, ...updates }
      if ('r' in updates || 'g' in updates || 'b' in updates) {
        newColor.hex = rgbToHex(newColor.r, newColor.g, newColor.b)
      }
      if ('hex' in updates && updates.hex) {
        const rgb = hexToRgb(updates.hex)
        if (rgb) {
          newColor.r = rgb.r
          newColor.g = rgb.g
          newColor.b = rgb.b
        }
      }
      return newColor
    })
  }, [rgbToHex, hexToRgb])

  const getCurrentBackground = () => {
    return {
      color: customColor.hex,
      value: '',
      name: 'Custom'
    }
  }

  const handleCopy = async (text: string, key: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedStates(prev => ({ ...prev, [key]: true }))
      setTimeout(() => {
        setCopiedStates(prev => ({ ...prev, [key]: false }))
      }, 1500)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const importCode = `import { ${iconData.name} } from 'arcun-icons'`
  const usageCode = `<${iconData.name} className="w-4 h-4" />`

  const getMainIconProps = () => {
    let iconColor = ''
    const sizeMap = {
      16: 'w-4 h-4',
      20: 'w-5 h-5', 
      24: 'w-6 h-6',
      28: 'w-7 h-7',
      32: 'w-8 h-8',
      36: 'w-9 h-9',
      40: 'w-10 h-10',
      44: 'w-11 h-11',
      48: 'w-12 h-12'
    }
    let iconClass = sizeMap[iconSize as keyof typeof sizeMap] || 'w-6 h-6'
    
    if (isInverted) {
      iconColor = 'text-background'
    }
    
    const currentBg = getCurrentBackground()
    let bgStyle = {}
    if (useCustomColor) {
      bgStyle = { backgroundColor: currentBg.color }
    }
    
    let bgClass = isInverted ? 'bg-foreground' : (useCustomColor ? '' : 'bg-muted')
    
    return {
      className: `${iconClass} ${iconColor}`,
      containerClass: `flex items-center justify-center w-16 h-16 rounded-lg border ${bgClass}`,
      containerStyle: useCustomColor && !isInverted ? bgStyle : undefined,
      iconStyle: undefined
    }
  }

  const CodeBlock = ({ code, copyKey }: { code: string; copyKey: string }) => (
    <div className="relative group">
      <pre className="bg-muted border rounded-md p-3 text-sm overflow-x-auto">
        <code className="text-foreground">{code}</code>
      </pre>
      <Button
        size="sm"
        variant="ghost"
        onClick={() => handleCopy(code, copyKey)}
        className="absolute top-2 right-2 h-6 w-6 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copiedStates[copyKey] ? (
          <Check className="w-3 h-3 text-green-600" />
        ) : (
          <Copy className="w-3 h-3" />
        )}
      </Button>
    </div>
  )

  const mainIconProps = getMainIconProps()

  return (
    <div className="min-h-screen bg-background">
      {/* Header - Made sticky */}
      <div className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <Button
              variant="ghost"
              onClick={() => router.push('/')}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all icons
            </Button>
            
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
              
              {/* Theme Toggle */}
              <div className="flex items-center">
                <ModeToggle />
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="flex items-center justify-center w-16 h-16 rounded-lg border bg-muted">
              <IconComponent className="w-6 h-6" />
            </div>
            
            <div>
              <h1 className="text-2xl font-bold tracking-tight">
                {iconData.name}
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="space-y-6">
          
          {/* Installation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="npm" className="w-full">
                <TabsList className="w-fit">
                  <TabsTrigger value="npm">npm</TabsTrigger>
                  <TabsTrigger value="pnpm">pnpm</TabsTrigger>
                  <TabsTrigger value="yarn">yarn</TabsTrigger>
                  <TabsTrigger value="bun">bun</TabsTrigger>
                </TabsList>
                <TabsContent value="npm" className="mt-4">
                  <div className="relative group">
                    <pre className="bg-muted border rounded-md p-4 text-sm overflow-x-auto">
                      <code className="text-foreground">npm install arcun-icons</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy("npm install arcun-icons", "npm")}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedStates["npm"] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="pnpm" className="mt-4">
                  <div className="relative group">
                    <pre className="bg-muted border rounded-md p-4 text-sm overflow-x-auto">
                      <code className="text-foreground">pnpm add arcun-icons</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy("pnpm add arcun-icons", "pnpm")}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedStates["pnpm"] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="yarn" className="mt-4">
                  <div className="relative group">
                    <pre className="bg-muted border rounded-md p-4 text-sm overflow-x-auto">
                      <code className="text-foreground">yarn add arcun-icons</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy("yarn add arcun-icons", "yarn")}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedStates["yarn"] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
                <TabsContent value="bun" className="mt-4">
                  <div className="relative group">
                    <pre className="bg-muted border rounded-md p-4 text-sm overflow-x-auto">
                      <code className="text-foreground">bun add arcun-icons</code>
                    </pre>
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy("bun add arcun-icons", "bun")}
                      className="absolute top-2 right-2 h-8 w-8 p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      {copiedStates["bun"] ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>

          {/* Usage */}
          <Card>
            <CardHeader>
              <CardTitle>Usage</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Import</h3>
                <CodeBlock code={importCode} copyKey="import" />
              </div>

              <div>
                <h3 className="font-medium mb-2">Component</h3>
                <CodeBlock code={usageCode} copyKey="usage" />
              </div>
            </CardContent>
          </Card>

          {/* Background Colors & Icon Display Options */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Background Colors */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Background Color
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="p-6 rounded-xl bg-muted border border-border">
                  {/* Color Preview and Hex Input */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-xl border-2 border-border shadow-lg flex-shrink-0"
                      style={{ backgroundColor: customColor.hex }}
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <Input
                          type="text"
                          value={customColor.hex.toUpperCase()}
                          onChange={(e) => {
                            updateCustomColor({ hex: e.target.value })
                            setUseCustomColor(true)
                          }}
                          className="font-mono text-lg font-semibold bg-background border-border"
                          placeholder="#FFFFFF"
                        />
                        <span className="text-sm text-muted-foreground bg-white dark:bg-muted px-3 py-2 rounded-lg border border-border">RGB</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* RGB Input Fields */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">R</label>
                      <Input
                        type="number"
                        min="0"
                        max="255"
                        value={customColor.r}
                        onChange={(e) => {
                          updateCustomColor({ r: parseInt(e.target.value) || 0 })
                          setUseCustomColor(true)
                        }}
                        className="text-center bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">G</label>
                      <Input
                        type="number"
                        min="0"
                        max="255"
                        value={customColor.g}
                        onChange={(e) => {
                          updateCustomColor({ g: parseInt(e.target.value) || 0 })
                          setUseCustomColor(true)
                        }}
                        className="text-center bg-background border-border"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-muted-foreground mb-2 block">B</label>
                      <Input
                        type="number"
                        min="0"
                        max="255"
                        value={customColor.b}
                        onChange={(e) => {
                          updateCustomColor({ b: parseInt(e.target.value) || 0 })
                          setUseCustomColor(true)
                        }}
                        className="text-center bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  {/* RGB Sliders */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Red</span>
                        <span className="font-mono text-muted-foreground">{customColor.r}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={customColor.r}
                        onChange={(e) => {
                          updateCustomColor({ r: parseInt(e.target.value) })
                          setUseCustomColor(true)
                        }}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, rgb(0, ${customColor.g}, ${customColor.b}), rgb(255, ${customColor.g}, ${customColor.b}))`
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Green</span>
                        <span className="font-mono text-muted-foreground">{customColor.g}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={customColor.g}
                        onChange={(e) => {
                          updateCustomColor({ g: parseInt(e.target.value) })
                          setUseCustomColor(true)
                        }}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, rgb(${customColor.r}, 0, ${customColor.b}), rgb(${customColor.r}, 255, ${customColor.b}))`
                        }}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Blue</span>
                        <span className="font-mono text-muted-foreground">{customColor.b}</span>
                      </div>
                      <input
                        type="range"
                        min="0"
                        max="255"
                        value={customColor.b}
                        onChange={(e) => {
                          updateCustomColor({ b: parseInt(e.target.value) })
                          setUseCustomColor(true)
                        }}
                        className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                        style={{
                          background: `linear-gradient(to right, rgb(${customColor.r}, ${customColor.g}, 0), rgb(${customColor.r}, ${customColor.g}, 255))`
                        }}
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Icon Display Options */}
            <Card>
              <CardHeader>
                <CardTitle>Icon Display Options</CardTitle>
              </CardHeader>
              <CardContent>
                {/* Icon Preview */}
                <div className="mb-6">
                  <h3 className="font-medium mb-3">Preview</h3>
                  <div className="flex items-center justify-center p-8 border rounded-lg" style={{ backgroundColor: customColor.hex }}>
                    <IconComponent 
                      className={`${iconSize <= 24 ? 'w-6 h-6' : iconSize <= 32 ? 'w-8 h-8' : iconSize <= 48 ? 'w-12 h-12' : 'w-16 h-16'} ${isInverted ? 'text-white' : 'text-current'}`}
                      style={{ 
                        width: `${iconSize}px`, 
                        height: `${iconSize}px`,
                        color: isInverted ? '#ffffff' : 'currentColor'
                      }}
                    />
                  </div>
                </div>
                
                <div className="space-y-6">
                  {/* Size */}
                  <div>
                    <h3 className="font-medium mb-3">Size (px)</h3>
                    <Input
                      type="number"
                      min="12"
                      max="96"
                      value={iconSize}
                      onChange={(e) => setIconSize(parseInt(e.target.value) || 24)}
                      className="w-full"
                      placeholder="24"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      Enter size between 12-96 pixels
                    </p>
                  </div>

                  {/* Style */}
                  <div>
                    <h3 className="font-medium mb-3">Style</h3>
                    <Button
                      variant={isInverted ? 'default' : 'outline'}
                      onClick={() => setIsInverted(!isInverted)}
                      className="w-full"
                    >
                      {isInverted ? 'Inverted (Active)' : 'Normal'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}