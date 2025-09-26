import { type Product } from "@shared/schema";

export const products: Product[] = [
  {
    id: "1",
    name: "프리미엄 하드셸 시리즈",
    description:
      "독일산 폴리카보네이트 소재와 프랑스 전통 가죽공예가 만나 탄생한 최고급 하드셸 캐리어입니다. 10년 품질보증과 함께 평생 A/S를 제공합니다.",
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