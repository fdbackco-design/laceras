import ReviewCard from "@/components/review-card";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import { reviews } from "@/data/reviews";

export default function Reviews() {
  const isLoading = false;

  const averageRating = reviews?.length
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
    : 0;

  const totalReviews = reviews?.length || 0;
  const recommendationRate = reviews?.length
    ? Math.round(
        (reviews.filter((r) => r.rating >= 4).length / reviews.length) * 100,
      )
    : 0;

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating)
            ? "text-accent fill-current"
            : "text-muted-foreground"
        }`}
      />
    ));
  };

  return (
    <div className="pt-20 pb-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="font-playfair text-6xl font-bold mb-6"
            data-testid="text-reviews-title"
          >
            Customer Reviews
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-reviews-description"
          >
            전 세계 고객들이 전하는 라쎄라스와의 특별한 여행 이야기
          </p>
        </div>

        {/* Review Stats */}
        <Card className="mb-16">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div
                  className="text-4xl font-bold text-accent mb-2"
                  data-testid="text-average-rating"
                >
                  {averageRating.toFixed(1)}
                </div>
                <div className="text-muted-foreground mb-2">평균 평점</div>
                <div
                  className="flex justify-center"
                  data-testid="rating-average-stars"
                >
                  {renderStars(averageRating)}
                </div>
              </div>
              <div>
                <div
                  className="text-4xl font-bold text-accent mb-2"
                  data-testid="text-total-reviews"
                >
                  {totalReviews.toLocaleString()}
                </div>
                <div className="text-muted-foreground">총 리뷰 수</div>
              </div>
              <div>
                <div
                  className="text-4xl font-bold text-accent mb-2"
                  data-testid="text-recommendation-rate"
                >
                  {recommendationRate}%
                </div>
                <div className="text-muted-foreground">추천률</div>
              </div>
              <div>
                <div
                  className="text-4xl font-bold text-accent mb-2"
                  data-testid="text-response-time"
                >
                  24H
                </div>
                <div className="text-muted-foreground">평균 답변 시간</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reviews Grid */}
        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card
                key={i}
                className="animate-pulse"
                data-testid={`skeleton-review-${i}`}
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-muted rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-muted rounded w-24 mb-2"></div>
                      <div className="h-3 bg-muted rounded w-32"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-16 bg-muted rounded mb-4"></div>
                  <div className="h-3 bg-muted rounded w-40"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : reviews && reviews.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12" data-testid="text-no-reviews">
            <p className="text-muted-foreground">
              아직 등록된 리뷰가 없습니다.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
