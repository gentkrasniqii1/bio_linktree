
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface SearchFilterProps {
  searchTerm: string;
  onSearchChange: (term: string) => void;
  resultsCount: number;
}

export const SearchFilter = ({ searchTerm, onSearchChange, resultsCount }: SearchFilterProps) => {
  const clearSearch = () => onSearchChange("");

  return (
    <div className="relative mb-6 animate-slide-up" style={{ animationDelay: "0.3s" }}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <Input
          type="text"
          placeholder="Search links..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10 pr-10 bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder:text-gray-400 focus:border-white/40 focus:ring-2 focus:ring-purple-500/20"
        />
        {searchTerm && (
          <Button
            variant="ghost"
            size="icon"
            onClick={clearSearch}
            className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        )}
      </div>
      {searchTerm && (
        <p className="text-gray-400 text-sm mt-2">
          {resultsCount} result{resultsCount !== 1 ? 's' : ''} found
        </p>
      )}
    </div>
  );
};
