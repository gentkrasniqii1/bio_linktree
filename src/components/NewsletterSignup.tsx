
import { Mail, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert([
          { email: email }
        ]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: "Already subscribed!",
            description: "This email is already subscribed to our newsletter.",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: "Success!",
          description: "You've been subscribed to our newsletter.",
        });
        setEmail("");
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="mt-12 animate-professional-slide-up" style={{ animationDelay: "0.6s" }}>
      <div className="card-professional p-8 hover-lift">
        {/* Professional Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-xl bg-gradient-to-br from-primary to-purple-600 text-primary-foreground shadow-lg glow-primary">
            <Mail className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-professional-primary font-display font-semibold text-xl">Stay Updated</h3>
            <p className="text-professional-muted text-sm">Join our tech community</p>
          </div>
        </div>
        
        {/* Professional Description */}
        <p className="text-professional-secondary text-base leading-relaxed mb-6">
          Get weekly insights on AI tools, programming resources, and the latest tech innovations delivered directly to your inbox.
        </p>
        
        {/* Professional Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="input-professional pl-12 h-12 text-base"
              required
            />
            <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-professional-muted" />
          </div>
          
          <Button
            type="submit"
            disabled={isLoading}
            className="btn-professional w-full h-12 text-base font-semibold shadow-lg glow-primary"
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 border-2 border-primary-foreground/20 border-t-primary-foreground rounded-full animate-spin"></div>
                Subscribing...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                Subscribe to Newsletter
              </div>
            )}
          </Button>
        </form>
        
        {/* Professional Trust Indicators */}
        <div className="mt-6 pt-6 border-t border-border/50">
          <div className="flex items-center justify-center gap-6 text-xs text-professional-muted">
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>No spam</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Weekly updates</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Unsubscribe anytime</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
