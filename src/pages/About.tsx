import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useTranslation } from "react-i18next";
import { Award, Users, Clock, Heart } from "lucide-react";
import categoryLiving from "@/assets/category-living.jpg";

const stats = [
  { icon: Award, value: "38+", label: "Years of Excellence" },
  { icon: Users, value: "50,000+", label: "Happy Customers" },
  { icon: Clock, value: "1,000+", label: "Designs Created" },
  { icon: Heart, value: "100%", label: "Satisfaction Rate" },
];

const About = () => {
  const { t } = useTranslation();
  
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              {t('about.title')}
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              {t('about.subtitle')}
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <span className="text-gold font-medium tracking-widest text-sm uppercase">
                  Our Story
                </span>
                <h2 className="font-display text-4xl font-bold text-foreground mt-2 mb-6">
                  A Legacy of Craftsmanship
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 1985 by Master Craftsman Shanmugam, Sri Shanmugaa Furniture 
                    began as a small workshop in Chennai with a simple vision: to create 
                    furniture that combines traditional craftsmanship with modern elegance.
                  </p>
                  <p>
                    Over three decades later, we have grown into one of South India's most 
                    trusted furniture brands, serving thousands of families across the country. 
                    Our commitment to quality, attention to detail, and passion for wood 
                    craftsmanship remains unchanged.
                  </p>
                  <p>
                    Every piece of furniture we create tells a story – of skilled artisans 
                    who pour their heart into their work, of carefully selected premium woods, 
                    and of designs that stand the test of time.
                  </p>
                </div>
              </div>
              <div className="relative">
                <img
                  src={categoryLiving}
                  alt="Our Showroom"
                  className="rounded-2xl shadow-elegant w-full"
                />
                <div className="absolute -bottom-6 -left-6 bg-gold text-charcoal p-6 rounded-2xl shadow-elegant">
                  <span className="font-display text-4xl font-bold">38+</span>
                  <p className="text-sm font-medium mt-1">Years of Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-secondary/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gold/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-gold" />
                  </div>
                  <span className="font-display text-3xl md:text-4xl font-bold text-foreground">
                    {stat.value}
                  </span>
                  <p className="text-muted-foreground mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <span className="text-gold font-medium tracking-widest text-sm uppercase">
                What We Believe
              </span>
              <h2 className="font-display text-4xl font-bold text-foreground mt-2">
                Our Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Quality First",
                  description: "We never compromise on materials or craftsmanship. Every piece is built to last generations.",
                },
                {
                  title: "Customer Focused",
                  description: "Your satisfaction is our priority. We work closely with you to bring your vision to life.",
                },
                {
                  title: "Sustainable Practice",
                  description: "We source our wood responsibly and use eco-friendly finishes to protect our environment.",
                },
              ].map((value, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-8 shadow-card text-center hover:shadow-elegant transition-shadow"
                >
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="font-display text-xl font-bold text-gold">{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
