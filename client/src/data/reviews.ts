import { type Review } from "@shared/schema";

export const reviews: Review[] = [
  {
    id: "r1",
    productId: "1",
    customerName: "김민수",
    customerLocation: "서울, 대한민국",
    rating: 5,
    comment:
      "유럽 여행에서 3주간 사용했는데 정말 만족스럽습니다. 디자인도 우아하고 내구성도 뛰어나네요. 추천합니다!",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "r2",
    productId: "2",
    customerName: "Sarah Johnson",
    customerLocation: "New York, USA",
    rating: 5,
    comment:
      "Absolutely love this luggage! The French craftsmanship is evident in every detail. Worth every penny.",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "r3",
    productId: "5",
    customerName: "이지은",
    customerLocation: "부산, 대한민국",
    rating: 4,
    comment:
      "비즈니스 출장용으로 구매했는데 정말 실용적이에요. 공항에서도 눈에 띄는 세련된 디자인이 마음에 듭니다.",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "r4",
    productId: "4",
    customerName: "Pierre Dubois",
    customerLocation: "Paris, France",
    rating: 5,
    comment:
      "En tant que Français, je suis fier de voir une telle qualité d'artisanat. Magnifique travail!",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "r5",
    productId: "6",
    customerName: "박현우",
    customerLocation: "인천, 대한민국",
    rating: 5,
    comment:
      "주말 여행용으로 완벽해요. 가벼우면서도 튼튼하고, 무엇보다 스타일이 너무 예뻐요!",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "r6",
    productId: "3",
    customerName: "Emma Wilson",
    customerLocation: "London, UK",
    rating: 4,
    comment:
      "Perfect for my daily commute and weekend getaways. The quality is exceptional and the design is timeless.",
    productName: "프리미엄 캐리어 4종 세트",
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
];
