
import { ExternalLink, Zap, Code, Rocket, BookOpen, Video, Smartphone, Cpu, Globe, Brain, Layers, Palette, Wrench, Bot, FolderOpen, Newspaper, Database, Terminal, Settings, Shield, Cloud, FileText, Monitor, Search, Package, GitBranch, Hash, Lightbulb, Star, Briefcase, Award, TrendingUp, Users, MessageSquare, Play, Podcast, Rss } from "lucide-react";
import { useState } from "react";
import { SearchFilter } from "./SearchFilter";

// Type declarations for global analytics functions
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    plausible?: (event: string, options?: { props?: Record<string, any> }) => void;
  }
}

const linkData = [
  // Programming Tools & Tech Recommendations
  {
    title: "VS Code Extensions Pack",
    description: "Essential extensions for modern development",
    icon: Code,
    href: "https://marketplace.visualstudio.com/items?itemName=ms-vscode.vscode-typescript-next",
    gradient: "from-blue-500 to-purple-600",
    category: "productivity"
  },
  {
    title: "Postman API Testing",
    description: "Complete API development environment",
    icon: Zap,
    href: "https://www.postman.com/",
    gradient: "from-orange-500 to-red-600",
    category: "dev-tools"
  },
  {
    title: "Figma Design Tool",
    description: "Collaborative interface design platform",
    icon: Palette,
    href: "https://www.figma.com/",
    gradient: "from-pink-500 to-violet-600",
    category: "productivity"
  },
  {
    title: "Docker Desktop",
    description: "Containerization platform for developers",
    icon: Package,
    href: "https://www.docker.com/products/docker-desktop/",
    gradient: "from-blue-400 to-blue-600",
    category: "dev-tools"
  },
  {
    title: "Insomnia REST Client",
    description: "Powerful HTTP and GraphQL tool",
    icon: Zap,
    href: "https://insomnia.rest/",
    gradient: "from-purple-500 to-pink-600",
    category: "dev-tools"
  },
  {
    title: "MongoDB Compass",
    description: "GUI for MongoDB database management",
    icon: Database,
    href: "https://www.mongodb.com/products/compass",
    gradient: "from-green-500 to-emerald-600",
    category: "dev-tools"
  },
  {
    title: "TablePlus",
    description: "Modern database management tool",
    icon: Database,
    href: "https://tableplus.com/",
    gradient: "from-cyan-500 to-blue-600",
    category: "dev-tools"
  },
  {
    title: "Oh My Zsh",
    description: "Framework for managing Zsh configuration",
    icon: Terminal,
    href: "https://ohmyz.sh/",
    gradient: "from-gray-500 to-gray-700",
    category: "productivity"
  },
  {
    title: "iTerm2",
    description: "Terminal emulator for macOS",
    icon: Terminal,
    href: "https://iterm2.com/",
    gradient: "from-black to-gray-600",
    category: "productivity"
  },
  {
    title: "React Developer Tools",
    description: "Browser extension for React debugging",
    icon: Wrench,
    href: "https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi",
    gradient: "from-cyan-500 to-blue-600",
    category: "frameworks"
  },
  {
    title: "Vue.js Devtools",
    description: "Browser devtools extension for Vue.js",
    icon: Wrench,
    href: "https://devtools.vuejs.org/",
    gradient: "from-green-400 to-green-600",
    category: "frameworks"
  },
  {
    title: "Redux DevTools",
    description: "Time-travel debugging for Redux",
    icon: Settings,
    href: "https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd",
    gradient: "from-purple-500 to-indigo-600",
    category: "frameworks"
  },
  {
    title: "ESLint",
    description: "JavaScript linting utility",
    icon: Shield,
    href: "https://eslint.org/",
    gradient: "from-blue-500 to-purple-600",
    category: "dev-tools"
  },
  {
    title: "Prettier",
    description: "Opinionated code formatter",
    icon: Palette,
    href: "https://prettier.io/",
    gradient: "from-pink-400 to-red-500",
    category: "dev-tools"
  },
  
  // AI Tools for Developers
  {
    title: "GitHub Copilot",
    description: "AI-powered code completion tool",
    icon: Bot,
    href: "https://github.com/features/copilot",
    gradient: "from-green-500 to-blue-600",
    category: "ai-tools"
  },
  {
    title: "ChatGPT for Coding",
    description: "AI assistant for code writing and debugging",
    icon: Brain,
    href: "https://chat.openai.com/",
    gradient: "from-emerald-500 to-teal-600",
    category: "ai-tools"
  },
  {
    title: "Claude AI by Anthropic",
    description: "Advanced AI for complex coding tasks",
    icon: Cpu,
    href: "https://claude.ai/",
    gradient: "from-violet-500 to-purple-600",
    category: "ai-tools"
  },
  {
    title: "GitHub Copilot Chat",
    description: "Conversational AI coding assistant",
    icon: Bot,
    href: "https://github.com/features/copilot",
    gradient: "from-blue-500 to-indigo-600",
    category: "ai-tools"
  },
  {
    title: "Tabnine AI Autocomplete",
    description: "AI code completion for all languages",
    icon: Rocket,
    href: "https://www.tabnine.com/",
    gradient: "from-red-500 to-pink-600",
    category: "ai-tools"
  },
  {
    title: "Cursor AI Code Editor",
    description: "AI-powered code editor with chat",
    icon: Code,
    href: "https://cursor.sh/",
    gradient: "from-yellow-500 to-orange-600",
    category: "ai-tools"
  },
  {
    title: "Codeium",
    description: "Free AI-powered code acceleration toolkit",
    icon: Zap,
    href: "https://codeium.com/",
    gradient: "from-blue-400 to-cyan-500",
    category: "ai-tools"
  },
  {
    title: "Replit Ghostwriter",
    description: "AI pair programmer in your browser",
    icon: Brain,
    href: "https://replit.com/ai",
    gradient: "from-orange-400 to-red-500",
    category: "ai-tools"
  },
  {
    title: "Amazon CodeWhisperer",
    description: "AI coding companion by AWS",
    icon: Cloud,
    href: "https://aws.amazon.com/codewhisperer/",
    gradient: "from-orange-500 to-yellow-600",
    category: "ai-tools"
  },
  {
    title: "Codex by OpenAI",
    description: "AI system that translates natural language to code",
    icon: FileText,
    href: "https://openai.com/blog/openai-codex/",
    gradient: "from-green-400 to-blue-500",
    category: "ai-tools"
  },
  {
    title: "Sourcegraph Cody",
    description: "AI coding assistant that knows your codebase",
    icon: Search,
    href: "https://sourcegraph.com/cody",
    gradient: "from-purple-400 to-pink-500",
    category: "ai-tools"
  },
  {
    title: "Phind",
    description: "AI search engine for developers",
    icon: Search,
    href: "https://www.phind.com/",
    gradient: "from-indigo-500 to-purple-600",
    category: "ai-tools"
  },
  
  // Projects & Portfolio
  {
    title: "E-Commerce Platform",
    description: "Full-stack React & Node.js application with payment integration",
    icon: Globe,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-teal-500 to-cyan-600",
    category: "projects"
  },
  {
    title: "AI Task Manager",
    description: "Smart productivity app with AI-powered task suggestions",
    icon: Brain,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-purple-500 to-pink-600",
    category: "projects"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with data visualization using React & D3",
    icon: Layers,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-blue-500 to-teal-600",
    category: "projects"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React, Tailwind & Framer Motion",
    icon: FolderOpen,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-indigo-500 to-purple-600",
    category: "projects"
  },
  {
    title: "Chat Application",
    description: "Real-time messaging app with Socket.io and MongoDB",
    icon: MessageSquare,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-green-500 to-blue-600",
    category: "projects"
  },
  {
    title: "Expense Tracker",
    description: "Personal finance management app with data analytics",
    icon: TrendingUp,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-emerald-500 to-teal-600",
    category: "projects"
  },
  {
    title: "Social Media Dashboard",
    description: "Analytics dashboard for multiple social platforms",
    icon: Users,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-pink-500 to-rose-600",
    category: "projects"
  },
  {
    title: "Code Editor",
    description: "Web-based code editor with syntax highlighting",
    icon: Code,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-gray-600 to-gray-800",
    category: "projects"
  },
  {
    title: "Recipe Finder",
    description: "Recipe discovery app with API integration and favorites",
    icon: Search,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-orange-500 to-red-600",
    category: "projects"
  },
  {
    title: "Workout Tracker",
    description: "Fitness tracking app with progress visualization",
    icon: Award,
    href: "https://github.com/gentkrasniqii1",
    gradient: "from-cyan-500 to-blue-600",
    category: "projects"
  },
  
  // Tech & Programming News
  {
    title: "Dev.to Community",
    description: "Latest programming articles and tutorials from developers",
    icon: Newspaper,
    href: "https://dev.to/",
    gradient: "from-green-500 to-emerald-600",
    category: "news"
  },
  {
    title: "Hacker News",
    description: "Tech news and startup discussions from Y Combinator",
    icon: BookOpen,
    href: "https://news.ycombinator.com/",
    gradient: "from-orange-500 to-red-600",
    category: "news"
  },
  {
    title: "GitHub Trending",
    description: "Discover trending open source projects daily",
    icon: GitBranch,
    href: "https://github.com/trending",
    gradient: "from-gray-600 to-gray-800",
    category: "news"
  },
  {
    title: "TechCrunch",
    description: "Latest technology and startup news worldwide",
    icon: Newspaper,
    href: "https://techcrunch.com/",
    gradient: "from-blue-500 to-purple-600",
    category: "news"
  },
  {
    title: "Stack Overflow Blog",
    description: "Insights and articles from the developer community",
    icon: Hash,
    href: "https://stackoverflow.blog/",
    gradient: "from-orange-400 to-orange-600",
    category: "news"
  },
  {
    title: "CSS-Tricks",
    description: "Web design and development articles and tutorials",
    icon: Palette,
    href: "https://css-tricks.com/",
    gradient: "from-pink-500 to-red-600",
    category: "news"
  },
  {
    title: "Smashing Magazine",
    description: "Web design and development magazine",
    icon: Monitor,
    href: "https://www.smashingmagazine.com/",
    gradient: "from-red-500 to-pink-600",
    category: "news"
  },
  {
    title: "Ars Technica",
    description: "Technology news, analysis, and reviews",
    icon: Cpu,
    href: "https://arstechnica.com/",
    gradient: "from-indigo-500 to-blue-600",
    category: "news"
  },
  {
    title: "The Verge",
    description: "Technology, science, art, and culture news",
    icon: Lightbulb,
    href: "https://www.theverge.com/",
    gradient: "from-purple-500 to-indigo-600",
    category: "news"
  },
  {
    title: "Wired",
    description: "Technology, business, culture, and science news",
    icon: Globe,
    href: "https://www.wired.com/",
    gradient: "from-black to-gray-700",
    category: "news"
  },
  {
    title: "Product Hunt",
    description: "Discover new tech products launched daily",
    icon: Star,
    href: "https://www.producthunt.com/",
    gradient: "from-orange-400 to-red-500",
    category: "news"
  },
  {
    title: "Indie Hackers",
    description: "Community for indie entrepreneurs and makers",
    icon: Briefcase,
    href: "https://www.indiehackers.com/",
    gradient: "from-blue-400 to-indigo-500",
    category: "news"
  },
  {
    title: "CodePen Blog",
    description: "Front-end development inspiration and tutorials",
    icon: Code,
    href: "https://blog.codepen.io/",
    gradient: "from-green-400 to-teal-500",
    category: "news"
  },
  {
    title: "A List Apart",
    description: "Web design, development, and content strategy",
    icon: FileText,
    href: "https://alistapart.com/",
    gradient: "from-red-400 to-pink-500",
    category: "news"
  },
  {
    title: "JavaScript Weekly",
    description: "Weekly JavaScript news and articles roundup",
    icon: Rss,
    href: "https://javascriptweekly.com/",
    gradient: "from-yellow-500 to-orange-500",
    category: "news"
  },
  {
    title: "React Newsletter",
    description: "Weekly React.js news and tutorials",
    icon: Rss,
    href: "https://reactnewsletter.com/",
    gradient: "from-cyan-400 to-blue-500",
    category: "news"
  }
];

export const LinkButtons = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredLinks = linkData.filter(link =>
    link.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    link.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleLinkClick = (href: string, title: string) => {
    // Analytics tracking with proper type checking
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'outbound_link',
        event_label: title,
        value: 1
      });
    }
    
    // Plausible analytics with proper type checking
    if (typeof window !== 'undefined' && window.plausible) {
      window.plausible('Link Click', { props: { link: title } });
    }
    
    window.open(href, '_blank', 'noopener,noreferrer');
  };

  // Group links by category for better organization
  const categories = {
    'productivity': '🚀 Programming Tools & Tech Recommendations',
    'dev-tools': '🔧 Development Tools', 
    'frameworks': '⚛️ Frameworks & Extensions',
    'ai-tools': '🤖 AI Tools for Developers',
    'projects': '🧪 My Projects & Portfolio',
    'news': '📢 Tech & Programming News'
  };

  const groupedLinks = Object.entries(categories).map(([key, label]) => ({
    category: key,
    label,
    links: filteredLinks.filter(link => link.category === key)
  })).filter(group => group.links.length > 0);

  return (
    <div className="space-y-8">
      <SearchFilter
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        resultsCount={filteredLinks.length}
      />
      
      {groupedLinks.map((group, groupIndex) => (
        <div key={group.category} className="space-y-4">
          {/* Enhanced Section Headers */}
          <div className="relative">
            <h3 className="text-primary-enhanced text-xl font-bold px-2 font-display tracking-tight">
              {group.label}
            </h3>
            <div className="divider-subtle mt-2"></div>
          </div>
          
          {group.links.map((link, index) => (
            <div
              key={`${group.category}-${index}`}
              className="animate-slide-up"
              style={{ animationDelay: `${(groupIndex * 0.1 + index * 0.05) + 0.2}s` }}
            >
              <button
                onClick={() => handleLinkClick(link.href, link.title)}
                className="group relative block w-full p-5 card-glass rounded-2xl focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-400"
              >
                <div className="flex items-center gap-5">
                  {/* Enhanced Icon Container */}
                  <div className={`relative p-3 rounded-xl bg-gradient-to-br ${link.gradient} text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 icon-hover`}>
                    <link.icon size={22} className="relative z-10" />
                    
                    {/* Icon Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${link.gradient} rounded-xl blur-sm opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>
                  </div>
                  
                  {/* Enhanced Text Content */}
                  <div className="flex-1 text-left space-y-1">
                    <h4 className="text-primary-enhanced text-sm font-semibold leading-tight group-hover:text-white transition-colors duration-300 font-display tracking-tight">
                      {link.title}
                    </h4>
                    <p className="text-muted-enhanced text-xs group-hover:text-secondary-enhanced transition-colors duration-300 leading-relaxed">
                      {link.description}
                    </p>
                  </div>
                  
                  {/* Enhanced External Link Icon */}
                  <ExternalLink 
                    size={18} 
                    className="text-muted-enhanced group-hover:text-primary-enhanced transition-all duration-300 group-hover:translate-x-1 icon-hover" 
                  />
                </div>
                
                {/* Enhanced Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-r ${link.gradient} opacity-0 group-hover:opacity-[0.03] rounded-2xl transition-opacity duration-300`}></div>
                
                {/* Enhanced Shimmer Effect */}
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                </div>
              </button>
            </div>
          ))}
        </div>
      ))}
      
      {/* Enhanced No Results State */}
      {filteredLinks.length === 0 && searchTerm && (
        <div className="text-center py-12 card-glass rounded-2xl">
          <div className="text-muted-enhanced space-y-3">
            <p className="text-lg font-medium">No links found matching "{searchTerm}"</p>
            <p className="text-sm">Try searching for tools, AI, projects, or news</p>
          </div>
        </div>
      )}
    </div>
  );
};
