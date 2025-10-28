import { type Product } from "@shared/schema";

export const products: Product[] = [
  {
    id: "1",
    name: "프리미엄 하드셸 시리즈",
    description:
      "14인치, 20인치, 24인치, 28인치 4종 올인원 구성으로 단거리부터 장거리까지 모든 여행을 완벽하게 커버하는 프리미엄 트래블 솔루션입니다.",
    category: "하드셸",
    imageUrl: "/assets/carri-main2.jpeg",
    features: [
      "하이브리드 구조(PP+PC)",
      "Sinking Ordinary Lock",
      "무소음 휠 & 안정적 베어링 시스템",
      "1년 품질보증",
    ],
    inStock: 50,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
];
