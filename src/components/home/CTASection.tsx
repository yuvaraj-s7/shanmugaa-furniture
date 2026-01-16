import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="bg-primary rounded-3xl p-12 md:p-16 text-center shadow-elegant relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full translate-x-1/3 translate-y-1/3" />
          
          <div className="relative">
            <span className="text-gold font-medium tracking-widest text-sm uppercase">
              Ready to Transform Your Space?
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mt-4 mb-6">
              Let's Create Your Dream Home
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Visit our showroom or get in touch with our design experts for personalized recommendations and exclusive offers.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Contact Us
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="tel:+919876543210">
                <Button
                  variant="heroOutline"
                  size="xl"
                  className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
