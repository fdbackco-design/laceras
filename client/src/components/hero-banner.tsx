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
        <h1
          className="font-playfair text-6xl md:text-8xl font-bold mb-6"
          data-testid="text-hero-title"
        >
          La Ceras
        </h1>
        <p
          className="text-lg max-w-2xl mx-auto mb-12 opacity-90"
          data-testid="text-hero-description"
        >
          프랑스의 전통과 현대적 세련미가 만나는 럭셔리 캐리어 브랜드
        </p>
      </div>
    </section>
  );
}
