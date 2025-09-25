export default function Brand() {
  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div
          className="relative h-96 mb-16 rounded-lg overflow-hidden bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1471623432079-b009d30b6729?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=600')",
          }}
          data-testid="img-brand-hero"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-white text-center">
            <div>
              <h1
                className="font-playfair text-6xl font-bold mb-4"
                data-testid="text-brand-title"
              >
                Notre Histoire
              </h1>
              <p className="text-xl" data-testid="text-brand-subtitle">
                프랑스에서 시작된 여행의 예술
              </p>
            </div>
          </div>
        </div>

        {/* Brand Story */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-16">
          <div>
            <h2
              className="font-playfair text-4xl font-bold mb-6"
              data-testid="text-craftsmanship-title"
            >
              프랑스 장인정신의 전통
            </h2>
            <p
              className="text-lg text-muted-foreground mb-6"
              data-testid="text-brand-story-1"
            >
              1920년 파리의 한 작은 공방에서 시작된 라쎄라스라는 프랑스 전통
              가죽공예 기술과 현대적 디자인을 결합한 럭셔리 여행용품
              브랜드입니다.
            </p>
            <p
              className="text-lg text-muted-foreground mb-6"
              data-testid="text-brand-story-2"
            >
              100년이 넘는 시간 동안 축적된 노하우와 혁신적인 기술로 세계 최고
              수준의 캐리어를 제작하고 있습니다.
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-accent"
                  data-testid="text-heritage-years"
                >
                  100+
                </div>
                <div className="text-sm text-muted-foreground">
                  Years of Heritage
                </div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-accent"
                  data-testid="text-countries"
                >
                  50+
                </div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div
                  className="text-3xl font-bold text-accent"
                  data-testid="text-travelers"
                >
                  1M+
                </div>
                <div className="text-sm text-muted-foreground">
                  Happy Travelers
                </div>
              </div>
            </div>
          </div>
          <div
            className="aspect-square bg-cover bg-center rounded-lg"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800')",
            }}
            data-testid="img-craftsmanship"
          />
        </div>

        {/* Quote Section */}
        <div className="bg-muted p-12 rounded-lg text-center">
          <blockquote
            className="font-playfair text-2xl italic text-foreground mb-4"
            data-testid="text-founder-quote"
          >
            "여행은 단순한 이동이 아닌, 인생을 풍요롭게 하는 예술입니다"
          </blockquote>
          <cite
            className="text-muted-foreground"
            data-testid="text-founder-name"
          >
            — Jean-Pierre Lacerault, 창립자
          </cite>
        </div>
      </div>
    </div>
  );
}
