"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { ArrowLeft, Copy, Check, Download, Package } from "lucide-react"
import { getIconByName } from "@/lib/icons"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface IconDetailPageProps {
  iconName: string
}

type PreviewVariant = 'default' | 'large' | 'colored' | 'inverted'

export default function IconDetailPage({ iconName }: IconDetailPageProps) {
  const router = useRouter()
  const [copiedStates, setCopiedStates] = useState<Record<string, boolean>>({})
  const [selectedVariant, setSelectedVariant] = useState<PreviewVariant>('default')
  
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

  const packageManagers = [
    {
      name: 'npm',
      command: 'npm install arcun-icons',
      icon: Package
    },
    {
      name: 'yarn',
      command: 'yarn add arcun-icons',
      icon: Package
    },
    {
      name: 'pnpm',
      command: 'pnpm add arcun-icons',
      icon: Package
    },
    {
      name: 'bun',
      command: 'bun add arcun-icons',
      icon: Package
    }
  ]

  const importCode = `import { ${iconData.name} } from 'arcun-icons'`
  const usageCode = `<${iconData.name} className="w-4 h-4" />`

  const previewVariants = [
    {
      id: 'default' as PreviewVariant,
      label: 'Default (24px)',
      iconClass: 'w-6 h-6',
      textColorClass: '',
      bgClass: 'bg-card'
    },
    {
      id: 'large' as PreviewVariant,
      label: 'Large (32px)',
      iconClass: 'w-8 h-8',
      textColorClass: '',
      bgClass: 'bg-card'
    },
    {
      id: 'colored' as PreviewVariant,
      label: 'Colored',
      iconClass: 'w-6 h-6',
      textColorClass: 'text-blue-600',
      bgClass: 'bg-card'
    },
    {
      id: 'inverted' as PreviewVariant,
      label: 'Inverted',
      iconClass: 'w-6 h-6',
      textColorClass: 'text-background',
      bgClass: 'bg-foreground'
    }
  ]

  const getMainIconProps = () => {
    const variant = previewVariants.find(v => v.id === selectedVariant)
    return {
      className: `${variant?.iconClass || 'w-8 h-8'} ${variant?.textColorClass || ''}`,
      containerClass: `flex items-center justify-center w-16 h-16 rounded-lg border ${variant?.bgClass || 'bg-muted'}`
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
      {/* Header */}
      <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container max-w-6xl mx-auto px-4 py-6">
          <Button
            variant="ghost"
            onClick={() => router.push('/')}
            className="mb-6 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to all icons
          </Button>
          
          <div className="flex items-start gap-6">
            <div className={mainIconProps.containerClass}>
              <IconComponent className={mainIconProps.className} />
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold tracking-tight mb-2">
                {iconData.name}
              </h1>
              <p className="text-muted-foreground text-lg mb-4">
                {iconData.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {iconData.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container max-w-6xl mx-auto px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-2">
          
          {/* Installation */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="w-5 h-5" />
                Installation
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {packageManagers.map((pm) => (
                <div key={pm.name}>
                  <div className="flex items-center gap-2 mb-2">
                    <pm.icon className="w-4 h-4" />
                    <span className="font-medium">{pm.name}</span>
                  </div>
                  <CodeBlock code={pm.command} copyKey={pm.name} />
                </div>
              ))}
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
        </div>

        {/* Preview */}
        <Card className="mt-6">
          <CardHeader>
            <CardTitle>Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {previewVariants.map((variant) => (
                <button
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                  className={`flex flex-col items-center p-4 border rounded-lg transition-all duration-200 hover:shadow-md ${variant.bgClass} ${
                    selectedVariant === variant.id 
                      ? 'ring-2 ring-primary ring-offset-2 ring-offset-background' 
                      : 'hover:border-primary/50'
                  }`}
                >
                  <IconComponent className={`${variant.iconClass} mb-2 ${variant.textColorClass}`} />
                  <span className={`text-xs ${variant.id === 'inverted' ? 'text-background' : 'text-muted-foreground'}`}>
                    {variant.label}
                  </span>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}