
import { QrCode, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

export const QRCodeDisplay = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const { toast } = useToast();
  
  // Get the current URL and ensure it's the full URL
  const currentUrl = window.location.href;
  const qrApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(currentUrl)}&format=png&ecc=M`;

  const downloadQR = async () => {
    try {
      const response = await fetch(qrApiUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = 'gent-krasniqi-portfolio-qr.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
      
      toast({
        title: "QR Code Downloaded",
        description: "QR code has been saved to your device.",
      });
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "Unable to download QR code. Please try again.",
        variant: "destructive",
      });
    }
  };

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(currentUrl);
      toast({
        title: "Link Copied",
        description: "Portfolio link copied to clipboard.",
      });
    } catch (error) {
      console.error('Copy error:', error);
      toast({
        title: "Copy Failed",
        description: "Unable to copy link. Please try again.",
        variant: "destructive",
      });
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  return (
    <div className="mt-8 animate-slide-up" style={{ animationDelay: "0.7s" }}>
      <div className="bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 p-6 shadow-glass text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <QrCode className="h-5 w-5 text-purple-400" />
          <h3 className="text-white font-semibold font-display">Share My Portfolio</h3>
        </div>
        
        <div className="bg-white rounded-xl p-4 inline-block mb-4 relative">
          {!imageLoaded && !imageError && (
            <div className="w-36 h-36 mx-auto bg-gray-100 rounded-lg flex items-center justify-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
            </div>
          )}
          
          {imageError && (
            <div className="w-36 h-36 mx-auto bg-gray-100 rounded-lg flex flex-col items-center justify-center text-gray-500">
              <QrCode className="h-8 w-8 mb-2" />
              <span className="text-xs">QR Code Error</span>
            </div>
          )}
          
          <img
            src={qrApiUrl}
            alt="QR Code for Gent Krasniqi's Portfolio"
            className={`w-36 h-36 mx-auto ${imageLoaded ? 'block' : 'hidden'}`}
            loading="lazy"
            onLoad={handleImageLoad}
            onError={handleImageError}
          />
        </div>
        
        <p className="text-white/70 text-sm mb-4">
          Scan this QR code with your camera to visit my portfolio
        </p>
        
        <div className="flex gap-2 justify-center">
          <Button
            onClick={downloadQR}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </Button>
          
          <Button
            onClick={copyLink}
            variant="outline"
            size="sm"
            className="border-white/20 text-white hover:bg-white/10"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            Copy Link
          </Button>
        </div>
      </div>
    </div>
  );
};
