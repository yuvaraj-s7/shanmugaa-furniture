import { Truck, Shield, Headphones, Award } from "lucide-react";
import { useTranslation } from "react-i18next";

const features = [
  {
    icon: Truck,
    titleKey: "features.freeDelivery",
    descKey: "features.freeDeliveryDesc",
  },
  {
    icon: Shield,
    titleKey: "features.warranty",
    descKey: "features.warrantyDesc",
  },
  {
    icon: Headphones,
    titleKey: "features.support",
    descKey: "features.supportDesc",
  },
  {
    icon: Award,
    titleKey: "features.quality",
    descKey: "features.qualityDesc",
  },
];

const FeaturesSection = () => {
  const { t } = useTranslation();
  
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
                {t(feature.titleKey)}
              </h3>
              <p className="text-primary-foreground/70 text-sm">
                {t(feature.descKey)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
