import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-living-room.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Luxurious furniture showroom"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-20">
        <div className="max-w-2xl">
          <span className="inline-block text-gold font-medium tracking-widest text-sm uppercase mb-4 animate-fade-in">
            Crafting Elegance Since 1985
          </span>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Furniture That Tells Your Story
          </h1>
          <p className="text-cream/90 text-lg md:text-xl leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Discover our exquisite collection of handcrafted furniture, where timeless elegance meets modern comfort. Each piece is a masterpiece.
          </p>
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/products">
              <Button variant="hero" size="xl">
                Explore Collection
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/gallery">
              <Button variant="heroOutline" size="xl">
                View Gallery
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-8 h-12 border-2 border-cream/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-cream/70 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
