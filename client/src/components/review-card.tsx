import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { type Review } from "@shared/schema";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-accent fill-current" : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <Card className="bg-card" data-testid={`card-review-${review.id}`}>
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 bg-muted rounded-full mr-4 flex items-center justify-center">
            <span className="text-sm font-medium" data-testid={`text-reviewer-initial-${review.id}`}>
              {review.customerName.charAt(0)}
            </span>
          </div>
          <div>
            <div className="font-semibold" data-testid={`text-reviewer-name-${review.id}`}>
              {review.customerName}
            </div>
            <div className="text-sm text-muted-foreground" data-testid={`text-reviewer-location-${review.id}`}>
              {review.customerLocation}
            </div>
          </div>
        </div>
        <div className="flex mb-3" data-testid={`rating-stars-${review.id}`}>
          {renderStars(review.rating)}
        </div>
        <p className="text-muted-foreground mb-4" data-testid={`text-review-comment-${review.id}`}>
          "{review.comment}"
        </p>
        <div className="text-sm text-muted-foreground" data-testid={`text-product-name-${review.id}`}>
          {review.productName}
        </div>
      </CardContent>
    </Card>
  );
}
