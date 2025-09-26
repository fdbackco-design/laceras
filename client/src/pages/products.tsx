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
    <div className="pt-20 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="font-playfair text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6" data-testid="text-products-title">
            Products
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed" data-testid="text-products-description">
            프랑스의 세련미가 담긴 프리미엄 캐리어 컬렉션
          </p>
        </div>

        {/* Featured Product */}
        {featuredProduct && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
            <div 
              className="aspect-square bg-cover bg-center rounded-lg"
              style={{ backgroundImage: `url(${featuredProduct.imageUrl})` }}
              data-testid="img-featured-product"
            />
            <div>
              <span className="text-accent text-sm font-medium uppercase tracking-wide" data-testid="text-featured-label">
                Featured
              </span>
              <h2 className="font-playfair text-2xl sm:text-3xl md:text-4xl font-bold mt-2 mb-4 sm:mb-6" data-testid="text-featured-name">
                {featuredProduct.name}
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed" data-testid="text-featured-description">
                {featuredProduct.description}
              </p>
              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {featuredProduct.features.map((feature, index) => (
                  <li key={index} className="flex items-start" data-testid={`text-feature-${index}`}>
                    <span className="w-2 h-2 bg-accent rounded-full mr-3 mt-2 flex-shrink-0"></span>
                    <span className="text-sm sm:text-base">{feature}</span>
                  </li>
                ))}
              </ul>
              
            </div>
          </div>
        )}

        

        
      </div>
    </div>
  );
}
