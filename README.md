# ArcunIcons - Beautiful Free Icon Library

A modern, lightweight icon library website built with Next.js 15, TypeScript, and Tailwind CSS. Featuring dark mode support, categorized icons, and easy copy-to-clipboard functionality.

![ArcunIcons](https://img.shields.io/badge/ArcunIcons-v1.0-blue)
![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.0-blue)

## ✨ Features

- 🎨 **Modern Design** - Clean, professional interface with smooth animations
- 🌙 **Dark Mode** - Full dark mode support with next-themes
- 📱 **Responsive** - Works perfectly on all devices
- 🔍 **Search & Filter** - Easy icon discovery with search and category filters
- 📋 **Copy to Clipboard** - One-click copying of icon components
- 🏷️ **Categorized Icons** - Organized by use case (Social, Auth, UI, Navigation, etc.)
- ⚡ **Fast & Lightweight** - Optimized for performance
- 🎭 **Floating Animations** - Beautiful floating icon animations on hero section
- 💡 **Tooltips** - Helpful tooltips for better user experience

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ or Bun
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/arcun-icons.git
cd arcun-icons
```

2. Install dependencies:
```bash
bun install
# or
npm install
```

3. Start the development server:
```bash
bun run dev
# or
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4.0
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Theme**: next-themes
- **Fonts**: Space Grotesk, DM Sans

## 📂 Project Structure

```
src/
├── app/
│   ├── globals.css          # Global styles and themes
│   ├── layout.tsx           # Root layout with theme provider
│   └── page.tsx             # Main homepage
├── components/
│   ├── ui/                  # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── tooltip.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── dropdown-menu.tsx
│   ├── floating-icon.tsx    # Animated floating icons
│   ├── header.tsx           # Navigation header
│   ├── hero-section.tsx     # Hero section with animations
│   ├── icon-library.tsx     # Main icon showcase
│   ├── footer.tsx           # Footer component
│   ├── mode-toggle.tsx      # Dark/light mode toggle
│   └── theme-provider.tsx   # Theme context provider
└── lib/
    └── utils.ts             # Utility functions
```

## 🎨 Icon Categories

The icon library is organized into the following categories:

- **Social & Communication** - Social media, messaging, communication
- **Authentication & Security** - Login, security, user management
- **User Interface** - Common UI elements, navigation, controls
- **Navigation & Arrows** - Directional arrows, chevrons, navigation
- **Media & Files** - File types, media controls, documents
- **System & Tools** - Development, technical, system tools

## 🔧 Development

### Available Scripts

- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server

### Adding New Icons

1. Import the icon from Lucide React in `icon-library.tsx`
2. Add it to the appropriate category object
3. The icon will automatically appear in the UI with copy functionality

### Customizing Themes

Modify the CSS variables in `globals.css` to customize the color scheme:

```css
:root {
  --primary: oklch(0.21 0.006 285.885);
  --secondary: oklch(0.967 0.001 286.375);
  /* ... other variables */
}
```

## 🎯 Usage

Users can:

1. **Browse Icons** - Explore categorized icon collections
2. **Search** - Find specific icons using the search bar
3. **Filter** - Filter by category for focused browsing
4. **Copy Components** - Click any icon to copy its React component code
5. **Dark Mode** - Toggle between light and dark themes

### Example Icon Usage

When you click an icon, it copies code like this:

```jsx
<Heart className="w-6 h-6" />
```

## 📱 Responsive Design

The website is fully responsive and optimized for:

- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🌙 Dark Mode

Built-in dark mode support using next-themes with:

- System preference detection
- Manual toggle
- Smooth transitions
- Persistent user choice

## 🚀 Performance

- ⚡ Next.js 15 App Router for optimal performance
- 🎨 Tailwind CSS for minimal bundle size
- 📦 Component lazy loading
- 🖼️ Optimized animations and transitions

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub
- Contact us at [support@arcunicons.com](mailto:support@arcunicons.com)
- Join our Discord community

## 🙏 Acknowledgments

- [Lucide](https://lucide.dev/) for the beautiful icon set
- [shadcn/ui](https://ui.shadcn.com/) for the UI components
- [Next.js](https://nextjs.org/) team for the amazing framework
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS

---

Made with ❤️ by the Arcun team
