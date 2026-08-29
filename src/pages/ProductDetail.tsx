import { useParams, Link, useNavigate } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { ArrowLeft, Star, MessageSquare, Check, Truck, Shield, RefreshCw } from "lucide-react";
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

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Button onClick={() => navigate("/products")}>Back to Products</Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleAskForQuote = () => {
    toast.success("Quote request submitted! We'll contact you shortly.");
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Image */}
            <div className="space-y-4">
              <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
                <img
                  src={productImages[product.category] || categoryLiving}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <span className="text-gold text-sm font-medium uppercase tracking-wider">
                  {product.category.replace("-", " ")}
                </span>
                <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mt-2">
                  {product.name}
                </h1>
                <div className="flex items-center gap-2 mt-3">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < Math.floor(product.rating)
                            ? "fill-gold text-gold"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-muted-foreground">({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-xl text-muted-foreground line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="bg-gold text-charcoal text-sm font-bold px-3 py-1 rounded-full">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </span>
                  </>
                )}
              </div>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {product.description}
              </p>

              {/* Specifications */}
              <div className="bg-card rounded-xl p-6 space-y-4 border">
                <h3 className="font-semibold text-lg">Specifications</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-sm text-muted-foreground">Material</span>
                    <p className="font-medium">{product.material}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Dimensions</span>
                    <p className="font-medium">{product.dimensions}</p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Availability</span>
                    <p className={`font-medium ${product.inStock ? "text-green-600" : "text-red-600"}`}>
                      {product.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">Category</span>
                    <p className="font-medium capitalize">{product.category.replace("-", " ")}</p>
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Truck className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Free Delivery</p>
                    <p className="text-xs text-muted-foreground">Within city</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <Shield className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">5 Year Warranty</p>
                    <p className="text-xs text-muted-foreground">On all products</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                  <RefreshCw className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium text-sm">Easy Returns</p>
                    <p className="text-xs text-muted-foreground">30 days policy</p>
                  </div>
                </div>
              </div>

              {/* Ask for Quote Button */}
              <Button
                size="lg"
                className="w-full text-lg py-6"
                onClick={handleAskForQuote}
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Ask for Quote
              </Button>

              <p className="text-sm text-muted-foreground text-center">
                Submit a quote request and our team will get back to you within 24 hours
              </p>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="font-display text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {products
                .filter((p) => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <Link
                    key={relatedProduct.id}
                    to={`/products/${relatedProduct.id}`}
                    className="group bg-card rounded-xl overflow-hidden border hover:shadow-lg transition-all"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={productImages[relatedProduct.category] || categoryLiving}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-sm group-hover:text-primary transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="font-display font-bold text-primary mt-2">
                        {formatPrice(relatedProduct.price)}
                      </p>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
