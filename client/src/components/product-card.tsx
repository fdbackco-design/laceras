import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { type Product } from "@shared/schema";

interface ProductCardProps {
  product: Product;
  onFavorite?: (productId: string) => void;
  showFavorite?: boolean;
}

export default function ProductCard({ product, onFavorite, showFavorite = true }: ProductCardProps) {

  return (
    <Card className="product-card bg-card rounded-lg overflow-hidden shadow-sm" data-testid={`card-product-${product.id}`}>
      <div 
        className="aspect-square bg-cover bg-center"
        style={{ backgroundImage: `url(${product.imageUrl})` }}
        data-testid={`img-product-${product.id}`}
      />
      <CardContent className="p-6">
        <h3 className="font-playfair text-xl font-semibold mb-2" data-testid={`text-product-name-${product.id}`}>
          {product.name}
        </h3>
        <p className="text-muted-foreground mb-4 line-clamp-2" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>
        <div className="flex justify-end items-center">
          {showFavorite && (
            <button 
              className="text-accent hover:text-accent/80 transition-colors"
              onClick={() => onFavorite?.(product.id)}
              data-testid={`button-favorite-${product.id}`}
            >
              <Heart className="w-5 h-5" />
            </button>
          )}
        </div>
        {product.inStock <= 10 && product.inStock > 0 && (
          <div className="mt-2 text-sm text-amber-600" data-testid={`text-stock-warning-${product.id}`}>
            재고 {product.inStock}개 남음
          </div>
        )}
        {product.inStock === 0 && (
          <div className="mt-2 text-sm text-red-600" data-testid={`text-out-of-stock-${product.id}`}>
            품절
          </div>
        )}
      </CardContent>
    </Card>
  );
}
