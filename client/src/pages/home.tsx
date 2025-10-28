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
      <section className="py-12 sm:py-16 lg:py-20 bg-muted">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12 sm:mb-16">
            <h2
              className="font-pretendard text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
              data-testid="text-collection-title"
            >
              컬렉션
            </h2>
            <p
              className="text-muted-foreground text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto leading-relaxed px-4 sm:px-0"
              data-testid="text-collection-description"
            >
              프리미엄 디테일과 이동성까지 완성한 라쎄라스 캐리어 컬렉션을
              만나보세요.
            </p>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="bg-card rounded-lg p-4 sm:p-6 animate-pulse"
                  data-testid={`skeleton-product-${i}`}
                >
                  <div className="aspect-square bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded mb-2"></div>
                  <div className="h-4 bg-muted rounded mb-4"></div>
                  <div className="h-6 bg-muted rounded w-24"></div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <div className="text-center mb-8 sm:mb-12">
                <h3
                  className="font-pretendard text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 px-4 sm:px-0"
                  data-testid="text-premium-series-title"
                >
                  프리미엄 하드셸 캐리어
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {/* 1) 컬렉션 세트 */}
                <div
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                  data-testid="card-collection-set"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/assets/carri-main2.jpeg"
                      alt="라쎄라스 캐리어 컬렉션 세트 - 전체 뷰"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid="img-collection-set"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4
                      className="font-pretendard text-lg sm:text-xl font-semibold mb-2"
                      data-testid="text-collection-set-title"
                    >
                      컬렉션 세트
                    </h4>
                    <p
                      className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      data-testid="text-collection-set-description"
                    >
                      14인치, 20인치, 24인치, 28인치 올인원 구성
                    </p>
                  </div>
                </div>

                {/* 2) 디테일 뷰 */}
                <div
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                  data-testid="card-collection-main"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/assets/carri-scene.jpg"
                      alt="라쎄라스 메인 캐리어 디테일"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid="img-collection-main"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4
                      className="font-pretendard text-lg sm:text-xl font-semibold mb-2"
                      data-testid="text-collection-main-title"
                    >
                      디테일 뷰
                    </h4>
                    <p
                      className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      data-testid="text-collection-main-description"
                    >
                      하이브리드 구조(PP+PC)로 구현한 견고한 바디
                    </p>
                  </div>
                </div>

                {/* 3) 럭셔리 라이프스타일 */}
                <div
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                  data-testid="card-collection-lifestyle"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/assets/carriMD.jpg"
                      alt="라쎄라스 캐리어 사용 연출 장면"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid="img-collection-lifestyle"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4
                      className="font-pretendard text-lg sm:text-xl font-semibold mb-2"
                      data-testid="text-collection-lifestyle-title"
                    >
                      럭셔리 라이프스타일
                    </h4>
                    <p
                      className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      data-testid="text-collection-lifestyle-description"
                    >
                      무소음 휠 &amp; 안정적 베어링 시스템으로 어떤 방향에서도
                      부드럽고 조용한 이동
                    </p>
                  </div>
                </div>

                {/* 4) 프리미엄 디테일 */}
                {/* <div
                  className="bg-card rounded-lg overflow-hidden shadow-lg"
                  data-testid="card-collection-detail"
                >
                  <div className="aspect-square overflow-hidden">
                    <img
                      src="/assets/lock.png"
                      alt="프리미엄 디테일 클로즈업"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      data-testid="img-collection-detail"
                    />
                  </div>
                  <div className="p-4 sm:p-6">
                    <h4
                      className="font-pretendard text-lg sm:text-xl font-semibold mb-2"
                      data-testid="text-collection-detail-title"
                    >
                      프리미엄 디테일
                    </h4>
                    <p
                      className="text-muted-foreground text-xs sm:text-sm leading-relaxed"
                      data-testid="text-collection-detail-description"
                    >
                      정밀한 마감과 견고한 구조로 완성된 프리미엄 퀄리티
                    </p>
                  </div>
                </div> */}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
