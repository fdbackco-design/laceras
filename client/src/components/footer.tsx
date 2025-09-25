import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div
              className="font-playfair text-2xl font-bold mb-4"
              data-testid="text-footer-brand"
            >
              La Ceras
            </div>
            <p
              className="text-primary-foreground/80 mb-6"
              data-testid="text-footer-description"
            >
              프랑스의 전통과 혁신이 만나는
              <br />
              럭셔리 여행용품 브랜드
            </p>
            <div className="flex space-x-4">
              <i
                className="fab fa-facebook text-xl hover:text-accent cursor-pointer transition-colors"
                data-testid="link-social-facebook"
              />
              <i
                className="fab fa-instagram text-xl hover:text-accent cursor-pointer transition-colors"
                data-testid="link-social-instagram"
              />
              <i
                className="fab fa-youtube text-xl hover:text-accent cursor-pointer transition-colors"
                data-testid="link-social-youtube"
              />
              <i
                className="fab fa-twitter text-xl hover:text-accent cursor-pointer transition-colors"
                data-testid="link-social-twitter"
              />
            </div>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="text-footer-products-title"
            >
              제품
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-hardshell"
                >
                  하드셸 컬렉션
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-soft"
                >
                  소프트 럭셔리
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-business"
                >
                  비즈니스 라인
                </Link>
              </li>
              <li>
                <Link
                  href="/products"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-essentials"
                >
                  트래블 에센셜
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="text-footer-service-title"
            >
              고객서비스
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-support"
                >
                  고객센터
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-as"
                >
                  A/S 신청
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-shipping"
                >
                  배송조회
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-stores"
                >
                  매장찾기
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4
              className="font-semibold mb-4"
              data-testid="text-footer-company-title"
            >
              회사정보
            </h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>
                <Link
                  href="/brand"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-story"
                >
                  브랜드 스토리
                </Link>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-careers"
                >
                  채용정보
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-investor"
                >
                  투자정보
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-accent transition-colors"
                  data-testid="link-footer-news"
                >
                  뉴스룸
                </a>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-primary-foreground/60">
          <div className="mb-4 md:mb-0">
            <p data-testid="text-footer-copyright">
              &copy; 2025 라쎄라쓰라. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="link-footer-privacy"
            >
              개인정보처리방침
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="link-footer-terms"
            >
              이용약관
            </a>
            <a
              href="#"
              className="hover:text-accent transition-colors"
              data-testid="link-footer-cookies"
            >
              쿠키정책
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
