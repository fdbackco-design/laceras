import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "홈", href: "/" },
    { label: "브랜드 소개", href: "/brand" },
    { label: "제품 소개", href: "/products" },
    { label: "고객 후기", href: "/reviews" },
    { label: "고객센터", href: "/contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-border">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <div className="font-playfair text-2xl font-bold text-primary">
              라쎄라쓰라
            </div>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.href.slice(1) || 'home'}`}>
                <span
                  className={cn(
                    "nav-link px-2 py-1 text-foreground hover:text-accent transition-colors cursor-pointer",
                    location === item.href && "active"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="text-xl" />
            ) : (
              <Menu className="text-xl" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.href.slice(1) || 'home'}`}>
                <div
                  className={cn(
                    "block px-2 py-2 text-foreground hover:text-accent transition-colors cursor-pointer",
                    location === item.href && "text-accent font-medium"
                  )}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </div>
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
