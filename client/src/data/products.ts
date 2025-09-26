import { type Product } from "@shared/schema";

export const products: Product[] = [
  {
    id: "1",
    name: "프리미엄 하드셸 시리즈",
    description:
      "28, 24, 20, 14인치 4종 세트로 단거리부터 장거리까지 모든 여행을 완벽하게 커버하는 프리미엄 트래블 솔루션입니다.",
    category: "하드셸",
    imageUrl: "/assets/carri1.jpg",
    features: [
      "100% 폴리카보네이트 하드셸",
      "TSA 승인 잠금장치",
      "360도 회전 바퀴",
      "10년 품질보증",
    ],
    inStock: 50,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
];
