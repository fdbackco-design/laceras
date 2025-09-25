import HeroBanner from "@/components/hero-banner";
import ProductCard from "@/components/product-card";
import { products } from "@/data/products";

export default function Home() {
  const featuredProducts = products.slice(0, 3);
  const isLoading = false;

  return (
    <div className="pt-20">
      <HeroBanner />
      
      {/* Product Preview Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-5xl font-bold mb-6" data-testid="text-collection-title">
              컬렉션
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto" data-testid="text-collection-description">
              프랑스 장인정신으로 탄생한 프리미엄 캐리어 컬렉션을 만나보세요
            </p>
          </div>

          {isLoading ? (
            <div className="grid md:grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg p-6 animate-pulse" data-testid={`skeleton-product-${i}`}>
                  <div className="aspect-square bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded w-24"></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} showFavorite={false} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
