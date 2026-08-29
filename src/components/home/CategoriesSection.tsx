import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import categoryLiving from "@/assets/category-living.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryOffice from "@/assets/category-office.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";

const categories = [
  { id: "living-room", name: "Living Room", image: categoryLiving, count: 45 },
  { id: "bedroom", name: "Bedroom", image: categoryBedroom, count: 38 },
  { id: "dining-room", name: "Dining Room", image: categoryDining, count: 32 },
  { id: "office", name: "Office", image: categoryOffice, count: 28 },
  { id: "outdoor", name: "Outdoor", image: categoryOutdoor, count: 22 },
];

const CategoriesSection = () => {
  const { t } = useTranslation();
  
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-gold font-medium tracking-widest text-sm uppercase">
            {t('categories.browseBy')}
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2">
            {t('categories.title')}
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            {t('categories.description')}
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card */}
          <Link
            to={`/products?category=${categories[0].id}`}
            className="md:col-span-2 lg:col-span-1 lg:row-span-2 group relative overflow-hidden rounded-2xl shadow-elegant"
          >
            <div className="aspect-square lg:aspect-auto lg:h-full">
              <img
                src={categories[0].image}
                alt={categories[0].name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="text-gold text-sm font-medium">{categories[0].count} {t('categories.products')}</span>
                <h3 className="font-display text-3xl font-bold text-cream mt-1">
                  {categories[0].name}
                </h3>
                <div className="flex items-center gap-2 text-cream/80 mt-4 group-hover:text-gold transition-colors">
                  <span className="text-sm font-medium">{t('categories.explore')}</span>
                  <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </Link>

          {/* Smaller Cards */}
          {categories.slice(1).map((category) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group relative overflow-hidden rounded-2xl shadow-card"
            >
              <div className="aspect-square">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-gold text-xs font-medium">{category.count} {t('categories.products')}</span>
                  <h3 className="font-display text-xl font-bold text-cream mt-1">
                    {category.name}
                  </h3>
                  <div className="flex items-center gap-2 text-cream/80 mt-3 group-hover:text-gold transition-colors">
                    <span className="text-sm font-medium">{t('categories.explore')}</span>
                    <ArrowRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;
