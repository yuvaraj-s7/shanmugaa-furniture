import { useState, useMemo } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { products, categories } from "@/data/products";
import { MessageSquare, Star, Filter, X, Search } from "lucide-react";
import { toast } from "sonner";
import categoryLiving from "@/assets/category-living.jpg";
import categoryBedroom from "@/assets/category-bedroom.jpg";
import categoryDining from "@/assets/category-dining.jpg";
import categoryOffice from "@/assets/category-office.jpg";
import categoryOutdoor from "@/assets/category-outdoor.jpg";

const productImages: { [key: string]: string } = {
  "living-room": categoryLiving,
  "bedroom": categoryBedroom,
  "dining-room": categoryDining,
  "office": categoryOffice,
  "outdoor": categoryOutdoor,
};

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "all";
  const [searchQuery, setSearchQuery] = useState("");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200000]);
  const [showFilters, setShowFilters] = useState(false);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = selectedCategory === "all" || product.category === selectedCategory;
      const priceMatch = product.price >= priceRange[0] && product.price <= priceRange[1];
      const searchMatch = searchQuery === "" || 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.material.toLowerCase().includes(searchQuery.toLowerCase());
      return categoryMatch && priceMatch && searchMatch;
    });
  }, [selectedCategory, priceRange, searchQuery]);

  const handleAskForQuote = (product: typeof products[0]) => {
    toast.success(`Quote request submitted for ${product.name}! We'll contact you shortly.`);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
              Our Products
            </h1>
            <p className="text-primary-foreground/80 mt-4 max-w-2xl mx-auto">
              Discover our extensive collection of premium furniture crafted with care and precision.
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Filters Sidebar */}
              <aside className={`lg:w-64 ${showFilters ? "block" : "hidden lg:block"}`}>
                <div className="bg-card rounded-2xl p-6 shadow-card sticky top-24">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display text-lg font-semibold">Filters</h3>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="lg:hidden"
                      onClick={() => setShowFilters(false)}
                    >
                      <X className="h-5 w-5" />
                    </Button>
                  </div>

                  {/* Categories */}
                  <div className="mb-8">
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
                      Categories
                    </h4>
                    <div className="space-y-2">
                      <button
                        onClick={() => setSearchParams({})}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                          selectedCategory === "all"
                            ? "bg-primary text-primary-foreground"
                            : "hover:bg-secondary"
                        }`}
                      >
                        All Products
                      </button>
                      {categories.map((cat) => (
                        <button
                          key={cat.id}
                          onClick={() => setSearchParams({ category: cat.id })}
                          className={`w-full text-left px-4 py-2 rounded-lg transition-colors flex justify-between items-center ${
                            selectedCategory === cat.id
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-secondary"
                          }`}
                        >
                          <span>{cat.name}</span>
                          <span className="text-xs opacity-70">{cat.count}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Price Range */}
                  <div>
                    <h4 className="font-medium text-sm text-muted-foreground uppercase tracking-wider mb-4">
                      Price Range
                    </h4>
                    <div className="space-y-4">
                      <input
                        type="range"
                        min="0"
                        max="200000"
                        step="10000"
                        value={priceRange[1]}
                        onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                        className="w-full accent-gold"
                      />
                      <div className="flex justify-between text-sm text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </aside>

              {/* Products Grid */}
              <div className="flex-1">
                {/* Mobile Filter Button */}
                <div className="lg:hidden mb-6">
                  <Button variant="outline" onClick={() => setShowFilters(true)}>
                    <Filter className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                </div>

                {/* Search Bar */}
                <div className="mb-6">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Search products by name, description, material..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Results Count */}
                <p className="text-muted-foreground mb-6">
                  Showing {filteredProducts.length} products
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      className="group bg-card rounded-2xl overflow-hidden shadow-card hover:shadow-elegant transition-all duration-300"
                    >
                      {/* Image */}
                      <div className="relative aspect-square overflow-hidden">
                        <img
                          src={productImages[product.category] || categoryLiving}
                          alt={product.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                        {product.originalPrice && (
                          <span className="absolute top-4 left-4 bg-gold text-charcoal text-xs font-bold px-3 py-1 rounded-full">
                            {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                          </span>
                        )}
                        <Button
                          variant="hero"
                          size="sm"
                          className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                          onClick={() => handleAskForQuote(product)}
                        >
                          <MessageSquare className="h-4 w-4 mr-2" />
                          Ask for Quote
                        </Button>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <span className="text-gold text-xs font-medium uppercase tracking-wider">
                          {product.category.replace("-", " ")}
                        </span>
                        <Link to={`/products/${product.id}`}>
                          <h3 className="font-display text-lg font-semibold text-foreground mt-1 hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-1 mt-3">
                          <Star className="h-4 w-4 fill-gold text-gold" />
                          <span className="text-sm font-medium">{product.rating}</span>
                          <span className="text-sm text-muted-foreground">({product.reviews})</span>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                          <span className="font-display text-xl font-bold text-primary">
                            {formatPrice(product.price)}
                          </span>
                          {product.originalPrice && (
                            <span className="text-sm text-muted-foreground line-through">
                              {formatPrice(product.originalPrice)}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {filteredProducts.length === 0 && (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
                    <Button variant="outline" className="mt-4" onClick={() => setSearchParams({})}>
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
