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
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <Link href="/" data-testid="link-home">
            <img 
              src="/assets/laceras-logo-new.png" 
              alt="La Ceras France" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} data-testid={`link-${item.href.slice(1) || 'home'}`}>
                <span
                  className={cn(
                    "nav-link px-2 py-1 text-sm lg:text-base text-foreground hover:text-accent transition-colors cursor-pointer",
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
            className="md:hidden p-2 -mr-2 rounded-lg hover:bg-muted transition-colors"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
            aria-label="메뉴 열기/닫기"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} data-testid={`link-mobile-${item.href.slice(1) || 'home'}`}>
                  <div
                    className={cn(
                      "block px-4 py-3 rounded-lg text-foreground hover:bg-muted hover:text-accent transition-colors cursor-pointer",
                      location === item.href && "bg-accent/10 text-accent font-medium"
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
