import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">{t('footer.brandName')}</h3>
            <p className="text-primary-foreground/80 text-sm leading-relaxed mb-6">
              {t('footer.description')}
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-gold transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-gold transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3">
              {["Home", "Products", "Gallery", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {t(`nav.${link.toLowerCase()}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t('footer.categories')}</h4>
            <ul className="space-y-3">
              {["Living Room", "Bedroom", "Dining Room", "Office", "Outdoor"].map((category) => (
                <li key={category}>
                  <Link
                    to={`/products?category=${category.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-foreground/80 hover:text-gold transition-colors text-sm"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">{t('footer.contactUs')}</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 mt-0.5 text-gold" />
                <span className="text-primary-foreground/80 text-sm">
                  {t('footer.address')}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gold" />
                <span className="text-primary-foreground/80 text-sm">{t('footer.phone')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gold" />
                <span className="text-primary-foreground/80 text-sm">{t('footer.email')}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-gold" />
                <span className="text-primary-foreground/80 text-sm">{t('footer.hours')}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            {t('footer.copyright', { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
