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
      
      
      
    </section>
  );
}
