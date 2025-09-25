import ProductCard from "@/components/product-card";
import { useState } from "react";
import { products } from "@/data/products";

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const isLoading = false;

  const categories = ["all", "하드셸", "소프트", "캐리온", "트렁크", "비즈니스", "더플백"];
  
  const filteredProducts = products?.filter(product => 
    selectedCategory === "all" || product.category === selectedCategory
  ) || [];

  const featuredProduct = products?.[0];

  const handleFavorite = (productId: string) => {
    // TODO: Implement favorite functionality
    console.log("Added to favorites:", productId);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1 className="font-playfair text-6xl font-bold mb-6" data-testid="text-products-title">
            Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-products-description">
            프랑스의 세련미가 담긴 프리미엄 캐리어 컬렉션
          </p>
        </div>

        {/* Featured Product */}
        {featuredProduct && (
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div 
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${featuredProduct.imageUrl})` }}
              data-testid="img-featured-product"
            />
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wide" data-testid="text-featured-label">
                Featured
              </span>
              <h2 className="font-playfair text-4xl font-bold mt-2 mb-6" data-testid="text-featured-name">
                {featuredProduct.name}
              </h2>
              <p className="text-lg text-muted-foreground mb-8" data-testid="text-featured-description">
                {featuredProduct.description}
              </p>
              <ul className="space-y-3 mb-8">
                {featuredProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-center" data-testid={`text-feature-${index}`}>
                    <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        )}

        {/* Category Filter */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? "bg-accent text-accent-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent/20"
                }`}
                data-testid={`button-category-${category}`}
              >
                {category === "all" ? "전체" : category}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 animate-pulse" data-testid={`skeleton-product-${i}`}>
                <div className="aspect-square bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded mb-2"></div>
                <div className="h-4 bg-muted rounded mb-4"></div>
                <div className="h-6 bg-muted rounded w-24"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onFavorite={handleFavorite}
              />
            ))}
          </div>
        )}

        {filteredProducts.length === 0 && !isLoading && (
          <div className="text-center py-12" data-testid="text-no-products">
            <p className="text-muted-foreground">선택한 카테고리에 제품이 없습니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}
