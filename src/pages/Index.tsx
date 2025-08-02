
import { ProfileSection } from "@/components/ProfileSection";
import { SocialIcons } from "@/components/SocialIcons";
import { LinkButtons } from "@/components/LinkButtons";
import { ThemeToggle } from "@/components/ThemeToggle";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { QRCodeDisplay } from "@/components/QRCode";

const Index = () => {
  return (
    <div className="min-h-screen bg-professional relative overflow-hidden">
      {/* Professional Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-purple-500/5 to-pink-500/5"></div>
      
      {/* Professional Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-3/4 left-1/3 w-48 h-48 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "4s" }}></div>
      </div>
      
      {/* Main Content Container */}
      <div className="relative z-10">
        <ThemeToggle />
        
        <div className="max-w-2xl mx-auto px-6 py-12">
          {/* Professional Animation Container */}
          <div className="space-y-12">
            <ProfileSection />
            <SocialIcons />
            <LinkButtons />
            <NewsletterSignup />
            <QRCodeDisplay />
          </div>
        </div>
      </div>
      
      {/* Professional Footer */}
      <footer className="relative z-10 mt-20 border-t border-border/50">
        <div className="max-w-2xl mx-auto px-6 py-8">
          <div className="text-center space-y-4">
            <div className="divider-professional w-24 mx-auto"></div>
            <p className="text-professional-muted text-sm">
              Built with ❤️ using React, TypeScript & Tailwind CSS
            </p>
            <p className="text-professional-muted text-xs">
              © 2024 Gent Krasniqi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
      
      {/* Analytics Scripts */}
      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Professional Analytics Integration
            // (function(){var d=document,g=d.createElement('script'),s=d.getElementsByTagName('script')[0];g.type='text/javascript';g.defer=true;g.async=true;g.src='https://plausible.io/js/script.js';g.setAttribute('data-domain','your-domain.com');s.parentNode.insertBefore(g,s);})();
          `
        }}
      />
    </div>
  );
};

export default Index;
