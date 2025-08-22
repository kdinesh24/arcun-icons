import type React from "react"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
})

export const metadata = {
  title: 'ArcunIcons - Beautiful Free Icon Library',
  description: 'Discover hundreds of beautiful, free icons for your projects. Easy to use React components with copy-paste functionality.',
  keywords: 'icons, react icons, lucide icons, free icons, svg icons, ui icons, design icons',
  authors: [{ name: 'Arcun Team' }],
  creator: 'Arcun Team',
  publisher: 'ArcunIcons',
  openGraph: {
    title: 'ArcunIcons - Beautiful Free Icon Library',
    description: 'Discover hundreds of beautiful, free icons for your projects. Easy to use React components with copy-paste functionality.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ArcunIcons - Beautiful Free Icon Library',
    description: 'Discover hundreds of beautiful, free icons for your projects. Easy to use React components with copy-paste functionality.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} antialiased`} suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
