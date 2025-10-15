export default function Brand() {
  return (
    <div className="pt-20 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div
          className="relative h-64 sm:h-80 md:h-96 mb-12 sm:mb-16 rounded-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/france1.jpg')",
          }}
          data-testid="img-brand-hero"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-white text-center px-4">
            <div>
              <h1
                className="font-pretendard text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4"
                data-testid="text-brand-title"
              >
                Brand Story
              </h1>
              <p
                className="text-base sm:text-lg md:text-xl"
                data-testid="text-brand-subtitle"
              >
                시간을 지키는 디자인, La Ceras의 철학
              </p>
            </div>
          </div>
        </div>

        {/* Brand Story */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center mb-12 sm:mb-16">
          <div>
            <h2
              className="font-pretendard text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6"
              data-testid="text-craftsmanship-title"
            >
              완성된 감각
            </h2>
            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
              data-testid="text-brand-story-1"
            >
              라쎄라스(La ceras)는 프랑스 감성의 절제된 미학을 바탕으로, 보이는
              디테일보다 느껴지는 완성도에 집중하는 프리미엄 캐리어
              브랜드입니다.
            </p>
            <p
              className="text-sm sm:text-base md:text-lg text-muted-foreground mb-4 sm:mb-6 leading-relaxed"
              data-testid="text-brand-story-2"
            >
              파리의 스튜디오에서 활동하는 프랑스 디자이너 팀이 형태와 기능이
              만나는 지점을 집요하게 탐구했습니다. 캐리어는 단지 짐을 옮기는
              도구가 아니라, 사용자의 시간을 지키는 공학적 오브제로라는 관점에서
              시작했습니다.
            </p>
            <div className="grid grid-cols-3 gap-4 sm:flex sm:items-center sm:space-x-6 md:space-x-8">
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-accent"
                  data-testid="text-heritage-years"
                >
                  50+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                  Years of Heritage
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-accent"
                  data-testid="text-countries"
                >
                  10+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                  Countries
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-bold text-accent"
                  data-testid="text-travelers"
                >
                  1M+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
                  Happy Travelers
                </div>
              </div>
            </div>
          </div>
          <div
            className="aspect-square bg-cover bg-center rounded-lg"
            style={{
              backgroundImage: "url('/assets/carri-one.png')",
            }}
            data-testid="img-craftsmanship"
          />
        </div>

        {/* Quote Section */}
        <div className="bg-muted p-6 sm:p-8 md:p-12 rounded-lg text-center">
          <blockquote
            className="font-pretendard text-lg sm:text-xl md:text-2xl italic text-foreground mb-3 sm:mb-4 px-4 sm:px-0 leading-relaxed"
            data-testid="text-founder-quote"
          >
            "오래 봐도 질리지 않는 형태, 오래 써도 문제없는 구조"
          </blockquote>
          <cite
            className="text-muted-foreground"
            data-testid="text-founder-name"
          >
            — La Ceras Design Team
          </cite>
        </div>
      </div>
    </div>
  );
}
