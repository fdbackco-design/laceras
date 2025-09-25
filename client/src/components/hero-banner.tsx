import { Link } from "wouter";
import heroVideo from "@assets/hero-video.mp4";

export default function HeroBanner() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        data-testid="video-hero-background"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      
      <div className="relative z-10 text-center text-white px-6 animate-fade-in-up">
        <h1 className="font-playfair text-6xl md:text-8xl font-bold mb-6" data-testid="text-hero-title">
          라쎄라쓰라
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light" data-testid="text-hero-subtitle">
          L'Art du Voyage Français
        </p>
        <p className="text-lg max-w-2xl mx-auto mb-12 opacity-90" data-testid="text-hero-description">
          프랑스의 전통과 현대적 세련미가 만나는 럭셔리 캐리어 브랜드
        </p>
        <Link href="/products">
          <button 
            className="bg-accent text-accent-foreground px-8 py-3 text-lg font-medium hover:bg-opacity-90 transition-all"
            data-testid="button-view-collection"
          >
            컬렉션 보기
          </button>
        </Link>
      </div>
      
    </section>
  );
}
