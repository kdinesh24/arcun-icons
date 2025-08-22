import {
  // Social & Communication
  Github,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
  MessageSquare,
  Mail,
  Phone,
  MessageCircle,
  Send,
  Share2,
  Link,
  Globe,
  
  // Development & Tools
  Code,
  Terminal,
  GitBranch,
  Database,
  Server,
  Cloud,
  Package,
  Bug,
  Zap,
  Cpu,
  HardDrive,
  Wifi,
  
  // Design & Creative
  Palette,
  Brush,
  Scissors,
  Crop,
  Move,
  Layers,
  Image,
  Camera,
  Video,
  Music,
  
  // Files & Folders
  File,
  FileText,
  Folder,
  FolderOpen,
  Archive,
  Download,
  Upload,
  
  // UI & Navigation
  Home,
  Menu,
  X,
  Plus,
  Minus,
  Search,
  Filter,
  Settings,
  Edit,
  Trash2,
  Save,
  Copy,
  Check,
  
  // Arrows & Directions
  ArrowUp,
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  
  // Authentication & Security
  User,
  Users,
  UserPlus,
  Lock,
  Unlock,
  Shield,
  Key,
  Eye,
  EyeOff,
  LogIn,
  LogOut,
  
  // Status & Alerts
  AlertCircle,
  Info,
  CheckCircle,
  XCircle,
  HelpCircle,
  Bell,
  
  // Business & Finance
  ShoppingCart,
  CreditCard,
  DollarSign,
  TrendingUp,
  BarChart,
  Trophy,
  
  // Utilities & Devices
  Monitor,
  Smartphone,
  Laptop,
  Battery,
  Power,
  
} from "lucide-react"

export interface IconData {
  name: string
  component: React.ComponentType<any>
  category: string
  description: string
  tags: string[]
  hasColorVariant?: boolean
  colorHex?: string
}

export const iconCategories = {
  social: {
    title: "Social & Communication",
    description: "Social media platforms, messaging, and communication tools",
    color: "bg-blue-500",
    icons: ["Github", "Twitter", "Instagram", "Facebook", "Linkedin", "Youtube", "Discord", "Mail", "Phone", "MessageCircle"]
  },
  development: {
    title: "Development & Tools", 
    description: "Programming, development tools, and technical icons",
    color: "bg-green-500",
    icons: ["Code", "Terminal", "GitBranch", "Database", "Server", "Cloud", "Package", "Bug", "Zap", "Wifi"]
  },
  design: {
    title: "Design & Creative",
    description: "Design tools, creative assets, and media icons",
    color: "bg-purple-500",
    icons: ["Palette", "Brush", "Camera", "Image", "Video", "Music", "Scissors", "Crop", "Layers", "Move"]
  },
  files: {
    title: "Files & Documents",
    description: "File types, folders, and document management", 
    color: "bg-orange-500",
    icons: ["File", "FileText", "Folder", "FolderOpen", "Download", "Upload", "Archive", "Copy", "Save"]
  },
  ui: {
    title: "User Interface",
    description: "Common UI elements and interface controls",
    color: "bg-indigo-500",
    icons: ["Home", "Menu", "Search", "Settings", "Edit", "Trash2", "Plus", "Minus", "X", "Check", "Filter"]
  },
  navigation: {
    title: "Navigation & Arrows",
    description: "Directional arrows, chevrons, and navigation elements",
    color: "bg-teal-500",
    icons: ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "ChevronUp", "ChevronDown", "ChevronLeft", "ChevronRight"]
  },
  auth: {
    title: "Authentication & Security",
    description: "User management, security, and authentication",
    color: "bg-red-500",
    icons: ["User", "Users", "UserPlus", "Lock", "Unlock", "Shield", "Key", "Eye", "EyeOff", "LogIn", "LogOut"]
  },
  status: {
    title: "Status & Alerts", 
    description: "Status indicators, alerts, and notifications",
    color: "bg-yellow-500",
    icons: ["AlertCircle", "Info", "CheckCircle", "XCircle", "Bell", "HelpCircle"]
  },
  business: {
    title: "Business & Finance",
    description: "E-commerce, business, and financial icons",
    color: "bg-emerald-500",
    icons: ["ShoppingCart", "CreditCard", "DollarSign", "TrendingUp", "BarChart", "Trophy"]
  },
  utility: {
    title: "Utilities & Devices",
    description: "Devices, utilities, and system icons", 
    color: "bg-gray-500",
    icons: ["Monitor", "Smartphone", "Laptop", "Battery", "Power"]
  }
}

export const allIcons: IconData[] = [
  // Social & Communication (with color variants)
  { name: "Github", component: Github, category: "social", description: "GitHub social platform", tags: ["github", "git", "social", "code", "repository"], hasColorVariant: false },
  { name: "Twitter", component: Twitter, category: "social", description: "Twitter social platform", tags: ["twitter", "social", "tweet", "x"], hasColorVariant: true, colorHex: "#1DA1F2" },
  { name: "Instagram", component: Instagram, category: "social", description: "Instagram photo sharing", tags: ["instagram", "social", "photo", "camera"], hasColorVariant: true, colorHex: "#E4405F" },
  { name: "Facebook", component: Facebook, category: "social", description: "Facebook social network", tags: ["facebook", "social", "meta"], hasColorVariant: true, colorHex: "#1877F2" },
  { name: "Linkedin", component: Linkedin, category: "social", description: "LinkedIn professional network", tags: ["linkedin", "professional", "business", "career"], hasColorVariant: true, colorHex: "#0A66C2" },
  { name: "Youtube", component: Youtube, category: "social", description: "YouTube video platform", tags: ["youtube", "video", "streaming", "google"], hasColorVariant: true, colorHex: "#FF0000" },
  { name: "Discord", component: MessageSquare, category: "social", description: "Discord chat platform", tags: ["discord", "chat", "gaming", "voice"], hasColorVariant: true, colorHex: "#5865F2" },
  { name: "Mail", component: Mail, category: "social", description: "Email communication", tags: ["email", "mail", "message", "communication"], hasColorVariant: true, colorHex: "#EA4335" },
  { name: "Phone", component: Phone, category: "social", description: "Phone call", tags: ["phone", "call", "telephone", "communication"], hasColorVariant: true, colorHex: "#34A853" },
  { name: "MessageCircle", component: MessageCircle, category: "social", description: "Message chat", tags: ["message", "chat", "communication", "talk"], hasColorVariant: true, colorHex: "#25D366" },
  
  // Development & Tools
  { name: "Code", component: Code, category: "development", description: "Programming code", tags: ["code", "programming", "development", "script"], hasColorVariant: false },
  { name: "Terminal", component: Terminal, category: "development", description: "Command line terminal", tags: ["terminal", "command", "cli", "shell"], hasColorVariant: false },
  { name: "GitBranch", component: GitBranch, category: "development", description: "Git branch", tags: ["git", "branch", "version", "control"], hasColorVariant: false },
  { name: "Database", component: Database, category: "development", description: "Database storage", tags: ["database", "storage", "data", "sql"], hasColorVariant: false },
  { name: "Server", component: Server, category: "development", description: "Server infrastructure", tags: ["server", "hosting", "infrastructure", "backend"], hasColorVariant: false },
  { name: "Cloud", component: Cloud, category: "development", description: "Cloud computing", tags: ["cloud", "aws", "azure", "hosting"], hasColorVariant: true, colorHex: "#4285F4" },
  { name: "Package", component: Package, category: "development", description: "Package management", tags: ["package", "npm", "dependency", "module"], hasColorVariant: false },
  { name: "Bug", component: Bug, category: "development", description: "Bug tracking", tags: ["bug", "error", "debugging", "issue"], hasColorVariant: false },
  { name: "Zap", component: Zap, category: "development", description: "Performance optimization", tags: ["performance", "speed", "optimization", "fast"], hasColorVariant: true, colorHex: "#FFEB3B" },
  { name: "Wifi", component: Wifi, category: "development", description: "Network connection", tags: ["wifi", "network", "internet", "connection"], hasColorVariant: false },
  
  // Design & Creative
  { name: "Palette", component: Palette, category: "design", description: "Color palette", tags: ["palette", "color", "design", "art"], hasColorVariant: true, colorHex: "#FF6B6B" },
  { name: "Brush", component: Brush, category: "design", description: "Paint brush", tags: ["brush", "paint", "art", "design"], hasColorVariant: true, colorHex: "#4ECDC4" },
  { name: "Camera", component: Camera, category: "design", description: "Camera photography", tags: ["camera", "photo", "photography", "image"], hasColorVariant: false },
  { name: "Image", component: Image, category: "design", description: "Image file", tags: ["image", "picture", "photo", "graphic"], hasColorVariant: false },
  { name: "Video", component: Video, category: "design", description: "Video file", tags: ["video", "movie", "film", "media"], hasColorVariant: true, colorHex: "#FF6B6B" },
  { name: "Music", component: Music, category: "design", description: "Music audio", tags: ["music", "audio", "sound", "song"], hasColorVariant: true, colorHex: "#1DB954" },
  { name: "Scissors", component: Scissors, category: "design", description: "Cut tool", tags: ["scissors", "cut", "trim", "edit"], hasColorVariant: false },
  { name: "Crop", component: Crop, category: "design", description: "Crop image", tags: ["crop", "resize", "edit", "image"], hasColorVariant: false },
  { name: "Layers", component: Layers, category: "design", description: "Design layers", tags: ["layers", "design", "stack", "organize"], hasColorVariant: false },
  { name: "Move", component: Move, category: "design", description: "Move tool", tags: ["move", "drag", "position", "transform"], hasColorVariant: false },
  
  // Files & Documents
  { name: "File", component: File, category: "files", description: "Generic file", tags: ["file", "document", "data", "storage"], hasColorVariant: false },
  { name: "FileText", component: FileText, category: "files", description: "Text document", tags: ["text", "document", "file", "content"], hasColorVariant: false },
  { name: "Folder", component: Folder, category: "files", description: "Folder directory", tags: ["folder", "directory", "organize", "storage"], hasColorVariant: false },
  { name: "FolderOpen", component: FolderOpen, category: "files", description: "Open folder", tags: ["folder", "open", "directory", "access"], hasColorVariant: false },
  { name: "Download", component: Download, category: "files", description: "Download file", tags: ["download", "save", "import", "get"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "Upload", component: Upload, category: "files", description: "Upload file", tags: ["upload", "import", "send", "share"], hasColorVariant: true, colorHex: "#2196F3" },
  { name: "Archive", component: Archive, category: "files", description: "Archive compressed", tags: ["archive", "zip", "compress", "backup"], hasColorVariant: false },
  { name: "Copy", component: Copy, category: "files", description: "Copy duplicate", tags: ["copy", "duplicate", "clone", "backup"], hasColorVariant: false },
  { name: "Save", component: Save, category: "files", description: "Save file", tags: ["save", "store", "keep", "backup"], hasColorVariant: false },
  
  // UI & Interface
  { name: "Home", component: Home, category: "ui", description: "Home page", tags: ["home", "house", "main", "dashboard"], hasColorVariant: false },
  { name: "Menu", component: Menu, category: "ui", description: "Menu navigation", tags: ["menu", "navigation", "hamburger", "options"], hasColorVariant: false },
  { name: "Search", component: Search, category: "ui", description: "Search function", tags: ["search", "find", "lookup", "filter"], hasColorVariant: false },
  { name: "Settings", component: Settings, category: "ui", description: "Settings configuration", tags: ["settings", "config", "preferences", "options"], hasColorVariant: false },
  { name: "Edit", component: Edit, category: "ui", description: "Edit modify", tags: ["edit", "modify", "change", "update"], hasColorVariant: false },
  { name: "Trash2", component: Trash2, category: "ui", description: "Delete remove", tags: ["delete", "remove", "trash", "bin"], hasColorVariant: false },
  { name: "Plus", component: Plus, category: "ui", description: "Add create", tags: ["add", "create", "new", "plus"], hasColorVariant: false },
  { name: "Minus", component: Minus, category: "ui", description: "Remove subtract", tags: ["minus", "subtract", "remove", "reduce"], hasColorVariant: false },
  { name: "X", component: X, category: "ui", description: "Close cancel", tags: ["close", "cancel", "remove", "exit"], hasColorVariant: false },
  { name: "Check", component: Check, category: "ui", description: "Confirm success", tags: ["check", "confirm", "success", "done"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "Filter", component: Filter, category: "ui", description: "Filter content", tags: ["filter", "sort", "organize", "search"], hasColorVariant: false },
  
  // Navigation & Arrows
  { name: "ArrowUp", component: ArrowUp, category: "navigation", description: "Arrow up direction", tags: ["arrow", "up", "direction", "navigation"], hasColorVariant: false },
  { name: "ArrowDown", component: ArrowDown, category: "navigation", description: "Arrow down direction", tags: ["arrow", "down", "direction", "navigation"], hasColorVariant: false },
  { name: "ArrowLeft", component: ArrowLeft, category: "navigation", description: "Arrow left direction", tags: ["arrow", "left", "back", "previous"], hasColorVariant: false },
  { name: "ArrowRight", component: ArrowRight, category: "navigation", description: "Arrow right direction", tags: ["arrow", "right", "forward", "next"], hasColorVariant: false },
  { name: "ChevronUp", component: ChevronUp, category: "navigation", description: "Chevron up", tags: ["chevron", "up", "expand", "navigation"], hasColorVariant: false },
  { name: "ChevronDown", component: ChevronDown, category: "navigation", description: "Chevron down", tags: ["chevron", "down", "collapse", "navigation"], hasColorVariant: false },
  { name: "ChevronLeft", component: ChevronLeft, category: "navigation", description: "Chevron left", tags: ["chevron", "left", "back", "previous"], hasColorVariant: false },
  { name: "ChevronRight", component: ChevronRight, category: "navigation", description: "Chevron right", tags: ["chevron", "right", "forward", "next"], hasColorVariant: false },
  
  // Authentication & Security
  { name: "User", component: User, category: "auth", description: "User profile", tags: ["user", "profile", "person", "account"], hasColorVariant: false },
  { name: "Users", component: Users, category: "auth", description: "Multiple users", tags: ["users", "group", "team", "people"], hasColorVariant: false },
  { name: "UserPlus", component: UserPlus, category: "auth", description: "Add user", tags: ["user", "add", "new", "invite"], hasColorVariant: false },
  { name: "Lock", component: Lock, category: "auth", description: "Locked secure", tags: ["lock", "secure", "private", "protected"], hasColorVariant: false },
  { name: "Unlock", component: Unlock, category: "auth", description: "Unlocked open", tags: ["unlock", "open", "access", "available"], hasColorVariant: false },
  { name: "Shield", component: Shield, category: "auth", description: "Security protection", tags: ["shield", "security", "protection", "defense"], hasColorVariant: false },
  { name: "Key", component: Key, category: "auth", description: "Access key", tags: ["key", "access", "password", "authentication"], hasColorVariant: false },
  { name: "Eye", component: Eye, category: "auth", description: "View visible", tags: ["eye", "view", "visible", "show"], hasColorVariant: false },
  { name: "EyeOff", component: EyeOff, category: "auth", description: "Hide invisible", tags: ["hide", "invisible", "private", "hidden"], hasColorVariant: false },
  { name: "LogIn", component: LogIn, category: "auth", description: "Login sign in", tags: ["login", "signin", "enter", "access"], hasColorVariant: false },
  { name: "LogOut", component: LogOut, category: "auth", description: "Logout sign out", tags: ["logout", "signout", "exit", "leave"], hasColorVariant: false },
  
  // Status & Alerts
  { name: "AlertCircle", component: AlertCircle, category: "status", description: "Alert warning", tags: ["alert", "warning", "caution", "notice"], hasColorVariant: true, colorHex: "#FF9800" },
  { name: "Info", component: Info, category: "status", description: "Information", tags: ["info", "information", "help", "details"], hasColorVariant: true, colorHex: "#2196F3" },
  { name: "CheckCircle", component: CheckCircle, category: "status", description: "Success check", tags: ["success", "check", "complete", "done"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "XCircle", component: XCircle, category: "status", description: "Error cancel", tags: ["error", "cancel", "fail", "wrong"], hasColorVariant: true, colorHex: "#F44336" },
  { name: "Bell", component: Bell, category: "status", description: "Notification bell", tags: ["notification", "bell", "alert", "message"], hasColorVariant: true, colorHex: "#FF9800" },
  { name: "HelpCircle", component: HelpCircle, category: "status", description: "Help question", tags: ["help", "question", "support", "info"], hasColorVariant: true, colorHex: "#9C27B0" },
  
  // Business & Finance
  { name: "ShoppingCart", component: ShoppingCart, category: "business", description: "Shopping cart", tags: ["cart", "shopping", "buy", "purchase"], hasColorVariant: true, colorHex: "#FF9800" },
  { name: "CreditCard", component: CreditCard, category: "business", description: "Credit card payment", tags: ["payment", "card", "credit", "money"], hasColorVariant: false },
  { name: "DollarSign", component: DollarSign, category: "business", description: "Dollar currency", tags: ["dollar", "money", "currency", "price"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "TrendingUp", component: TrendingUp, category: "business", description: "Trending up growth", tags: ["growth", "increase", "trending", "success"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "BarChart", component: BarChart, category: "business", description: "Bar chart analytics", tags: ["chart", "analytics", "data", "statistics"], hasColorVariant: false },
  { name: "Trophy", component: Trophy, category: "business", description: "Trophy achievement", tags: ["trophy", "award", "achievement", "winner"], hasColorVariant: true, colorHex: "#FFD700" },
  
  // Utilities & Devices
  { name: "Monitor", component: Monitor, category: "utility", description: "Computer monitor", tags: ["monitor", "screen", "display", "computer"], hasColorVariant: false },
  { name: "Smartphone", component: Smartphone, category: "utility", description: "Mobile phone", tags: ["phone", "mobile", "smartphone", "device"], hasColorVariant: false },
  { name: "Laptop", component: Laptop, category: "utility", description: "Laptop computer", tags: ["laptop", "computer", "portable", "device"], hasColorVariant: false },
  { name: "Battery", component: Battery, category: "utility", description: "Battery power", tags: ["battery", "power", "energy", "charge"], hasColorVariant: true, colorHex: "#4CAF50" },
  { name: "Power", component: Power, category: "utility", description: "Power button", tags: ["power", "on", "off", "start"], hasColorVariant: false },
]

export function getIconsByCategory(category: string): IconData[] {
  return allIcons.filter(icon => icon.category === category)
}

export function searchIcons(query: string): IconData[] {
  if (!query.trim()) return allIcons
  
  const lowercaseQuery = query.toLowerCase()
  return allIcons.filter(icon => 
    icon.name.toLowerCase().includes(lowercaseQuery) ||
    icon.description.toLowerCase().includes(lowercaseQuery) ||
    icon.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  )
}

export function getIconByName(name: string): IconData | undefined {
  return allIcons.find(icon => icon.name.toLowerCase() === name.toLowerCase())
}