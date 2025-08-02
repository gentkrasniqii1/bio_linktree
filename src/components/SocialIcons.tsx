
import { Mail, Facebook, Instagram, Github, Linkedin } from "lucide-react";

const socialLinks = [
  {
    icon: Mail,
    href: "mailto:gentkrass21@gmail.com",
    label: "Email",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-950/20"
  },
  {
    icon: Facebook,
    href: "https://www.facebook.com/share/15qinm18A8/?mibextid=wwXIfr",
    label: "Facebook",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/20"
  },
  {
    icon: Instagram,
    href: "https://www.instagram.com/gentkrasniqii_?igsh=OTZlMHlmaWV4cTEx&utm_source=qr",
    label: "Instagram",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50 dark:hover:bg-pink-950/20"
  },
  {
    icon: Github,
    href: "https://github.com/gentkrasniqii1",
    label: "GitHub",
    color: "hover:text-gray-800 dark:hover:text-gray-200",
    bgColor: "hover:bg-gray-50 dark:hover:bg-gray-950/20"
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/gent-krasniqi-19736a355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    label: "LinkedIn",
    color: "hover:text-blue-700",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-950/20"
  }
];

export const SocialIcons = () => {
  return (
    <div className="flex justify-center gap-4 mb-12 animate-professional-fade-in" style={{ animationDelay: "0.2s" }}>
      {socialLinks.map((social, index) => (
        <a
          key={index}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`group relative p-4 rounded-2xl card-professional ${social.color} ${social.bgColor} icon-professional hover-lift`}
          aria-label={social.label}
          style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
        >
          <social.icon size={24} className="relative z-10 text-professional-secondary group-hover:scale-110 transition-all duration-300" />
          
          {/* Professional Hover Effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </a>
      ))}
      
      {/* Professional TikTok Icon */}
      <a
        href="https://www.tiktok.com/@gentkrasniqii_?_t=ZM-8xt50WYUJrq&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative p-4 rounded-2xl card-professional hover:text-pink-600 hover:bg-pink-50 dark:hover:bg-pink-950/20 icon-professional hover-lift"
        aria-label="TikTok"
        style={{ animationDelay: "0.8s" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="relative z-10 text-professional-secondary group-hover:scale-110 transition-all duration-300">
          <path d="M19.321 5.562a5.124 5.124 0 0 1-.443-.258 6.228 6.228 0 0 1-1.137-.966c-.849-.849-1.204-1.864-1.204-2.338V2h-3.861v14.447c0 .3-.1.6-.3.822a2.91 2.91 0 0 1-4.106.3 2.91 2.91 0 0 1 .3-4.106c.2-.2.5-.3.822-.3V9.302a6.77 6.77 0 0 0-.822.1 6.77 6.77 0 0 0-4.544 6.447 6.77 6.77 0 0 0 6.77 6.77 6.77 6.77 0 0 0 6.77-6.77V8.487a9.865 9.865 0 0 0 5.755 1.83V6.456c-.6 0-1.167-.134-1.668-.348a5.124 5.124 0 0 1-.332-.546Z"/>
        </svg>
        
        {/* Professional Hover Effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-pink-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </a>
    </div>
  );
};
