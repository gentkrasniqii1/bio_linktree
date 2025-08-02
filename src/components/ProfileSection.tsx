
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export const ProfileSection = () => {
  return (
    <div className="text-center mb-16 space-y-8">
      {/* Professional Avatar Section */}
      <div className="relative inline-block">
        <div className="relative group">
          {/* Main Avatar with Professional Styling */}
          <Avatar className="w-32 h-32 mx-auto ring-4 ring-primary/20 ring-offset-4 ring-offset-background transition-all duration-500 group-hover:ring-primary/40 group-hover:scale-105">
            <AvatarImage 
              src="/lovable-uploads/b68fc57f-483e-4cee-b055-76e8611d119f.png" 
              alt="Gent Krasniqi Profile Picture" 
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <AvatarFallback className="bg-gradient-to-br from-primary to-purple-600 text-primary-foreground text-3xl font-bold">
              GK
            </AvatarFallback>
          </Avatar>
          
          {/* Professional Glow Ring Animation */}
          <div className="absolute -inset-3 bg-gradient-to-r from-primary via-purple-500 to-pink-500 rounded-full blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse"></div>
          
          {/* Professional Accent Ring */}
          <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-purple-500/30 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
        </div>
      </div>
      
      {/* Professional Name Typography */}
      <div className="space-y-6">
        <h1 className="text-professional-primary font-display font-bold tracking-tight text-5xl md:text-6xl lg:text-7xl hover:text-gradient-professional transition-all duration-500 cursor-default">
          GENT KRASNIQI
        </h1>
        
        {/* Professional Subtitle Section */}
        <div className="space-y-4 max-w-md mx-auto">
          <p className="text-professional-secondary text-xl md:text-2xl font-medium leading-relaxed">
            Developer & Tech Enthusiast
          </p>
          
          {/* Professional Divider */}
          <div className="divider-professional mx-auto w-32 my-6"></div>
          
          {/* Professional Description */}
          <p className="text-professional-muted text-base md:text-lg leading-relaxed font-medium">
            Programming Tools • AI Resources • Tech Innovation
          </p>
        </div>
      </div>
      
      {/* Professional Status Badge */}
      <div className="inline-flex items-center gap-2 card-professional px-4 py-2 hover-lift">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse glow-accent"></div>
        <span className="text-professional-secondary text-sm font-medium">Available for Projects</span>
      </div>
    </div>
  );
};
