import { Truck, Shield, Headphones, Award } from "lucide-react";

const features = [
  {
    icon: Truck,
    title: "Free Delivery",
    description: "Free shipping on orders above ₹50,000 within India.",
  },
  {
    icon: Shield,
    title: "10 Year Warranty",
    description: "All our furniture comes with a comprehensive warranty.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Our expert team is always ready to assist you.",
  },
  {
    icon: Award,
    title: "Premium Quality",
    description: "Handcrafted with the finest materials and care.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-gold/30 transition-colors">
                <feature.icon className="h-8 w-8 text-gold" />
              </div>
              <h3 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
