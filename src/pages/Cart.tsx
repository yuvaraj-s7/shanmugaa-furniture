import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/CartContext";
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react";
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

const Cart = () => {
  const { t } = useTranslation();
  const { cartItems, removeFromCart, updateQuantity, getTotalPrice, clearCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(price);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="pt-20">
          <section className="py-24">
            <div className="container mx-auto px-4 text-center">
              <ShoppingBag className="h-24 w-24 text-muted-foreground mx-auto mb-6" />
              <h1 className="font-display text-3xl font-bold text-foreground mb-4">
                {t('cart.empty')}
              </h1>
              <p className="text-muted-foreground mb-8">
                Looks like you haven't added any items to your cart yet.
              </p>
              <Link to="/products">
                <Button variant="elegant" size="lg">
                  {t('cart.continueShopping')}
                </Button>
              </Link>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Page Header */}
        <section className="bg-primary py-12">
          <div className="container mx-auto px-4">
            <h1 className="font-display text-4xl font-bold text-primary-foreground">
              {t('cart.title')}
            </h1>
            <p className="text-primary-foreground/80 mt-2">
              {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in your cart
            </p>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Cart Items */}
              <div className="lg:col-span-2">
                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="bg-card rounded-2xl p-6 shadow-card flex flex-col sm:flex-row gap-6"
                    >
                      <img
                        src={productImages[item.category] || categoryLiving}
                        alt={item.name}
                        className="w-full sm:w-32 h-32 object-cover rounded-xl"
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <div>
                            <span className="text-gold text-xs font-medium uppercase tracking-wider">
                              {item.category.replace("-", " ")}
                            </span>
                            <h3 className="font-display text-lg font-semibold text-foreground mt-1">
                              {item.name}
                            </h3>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-muted-foreground hover:text-destructive transition-colors"
                          >
                            <Trash2 className="h-5 w-5" />
                          </button>
                        </div>
                        <p className="font-display text-xl font-bold text-primary mt-2">
                          {formatPrice(item.price)}
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="font-medium w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 mt-8">
                  <Link to="/products">
                    <Button variant="outline">
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Continue Shopping
                    </Button>
                  </Link>
                  <Button variant="ghost" onClick={clearCart}>
                    Clear Cart
                  </Button>
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-card rounded-2xl p-6 shadow-elegant sticky top-24">
                  <h2 className="font-display text-xl font-bold text-foreground mb-6">
                    Order Summary
                  </h2>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium">{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="font-medium text-gold">
                        {getTotalPrice() >= 50000 ? "Free" : formatPrice(2500)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Tax (18% GST)</span>
                      <span className="font-medium">{formatPrice(getTotalPrice() * 0.18)}</span>
                    </div>
                    <div className="border-t border-border pt-4">
                      <div className="flex justify-between">
                        <span className="font-display text-lg font-bold">Total</span>
                        <span className="font-display text-xl font-bold text-primary">
                          {formatPrice(
                            getTotalPrice() +
                              (getTotalPrice() >= 50000 ? 0 : 2500) +
                              getTotalPrice() * 0.18
                          )}
                        </span>
                      </div>
                    </div>
                  </div>

                  <Button variant="elegant" size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>

                  <p className="text-center text-muted-foreground text-sm mt-4">
                    Free shipping on orders above ₹50,000
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;
