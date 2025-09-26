import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center text-primary-foreground/80">
          <p data-testid="text-footer-copyright" className="mb-1 sm:mb-2 text-xs sm:text-sm">
            &copy; 2025 제이일렉트릭(J.ELECTRIC). 모든 권리 보유.
          </p>
          <p data-testid="text-footer-business-info" className="mb-1 sm:mb-2 text-xs sm:text-sm">
            사업자등록번호: 591-26-00132 | 대표이사: 김진수
          </p>
          <p data-testid="text-footer-address" className="text-xs sm:text-sm">
            사업장: 서울특별시 구로구 디지털로26길 43, L동 4층 407호
          </p>
        </div>
      </div>
    </footer>
  );
}