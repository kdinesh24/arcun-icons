import IconDetailPage from "@/components/icon-detail-page"
import { getIconByName } from "@/lib/icons"
import { notFound } from "next/navigation"

interface PageProps {
  params: Promise<{
    name: string
  }>
}

export default async function IconPage({ params }: PageProps) {
  const { name } = await params
  const iconName = decodeURIComponent(name)
  const iconData = getIconByName(iconName)

  if (!iconData) {
    notFound()
  }

  return <IconDetailPage iconName={iconData.name} />
}

export async function generateMetadata({ params }: PageProps) {
  const { name } = await params
  const iconName = decodeURIComponent(name)
  const iconData = getIconByName(iconName)

  if (!iconData) {
    return {
      title: 'Icon Not Found | ArcunIcons',
      description: 'The requested icon could not be found.',
    }
  }

  return {
    title: `${iconData.name} Icon | ArcunIcons`,
    description: `${iconData.description}. Download and use the ${iconData.name} icon in your React projects with Lucide React.`,
    keywords: [iconData.name, ...iconData.tags, 'icon', 'lucide', 'react', 'component'].join(', '),
  }
}