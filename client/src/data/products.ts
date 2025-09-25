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
  {
    id: "2",
    name: "소프트 럭셔리 컬렉션",
    description:
      "이탈리아산 최고급 가죽을 사용한 소프트 캐리어로, 부드러운 터치와 실용성을 겸비했습니다.",
    category: "소프트",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    features: [
      "이탈리아산 프리미엄 가죽",
      "확장 가능한 수납 공간",
      "내구성 강화 바퀴",
      "방수 처리",
    ],
    inStock: 30,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "3",
    name: "트래블 에센셜",
    description:
      "여행 필수템을 담은 컴팩트한 캐리온으로, 완벽한 여행의 시작을 도와드립니다.",
    category: "캐리온",
    imageUrl:
      "https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    features: [
      "기내 반입 허용 사이즈",
      "USB 충전 포트",
      "분리형 노트북 케이스",
      "스마트 잠금",
    ],
    inStock: 75,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "4",
    name: "빈티지 트렁크",
    description:
      "클래식한 매력의 대형 여행 트렁크로, 프랑스 전통 공예의 정수를 담았습니다.",
    category: "트렁크",
    imageUrl:
      "https://images.unsplash.com/photo-1586899028174-e7098604235b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    features: [
      "수작업 가죽 마감",
      "황동 금속 장식",
      "벨벳 내부 라이닝",
      "한정판 컬렉션",
    ],
    inStock: 10,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "5",
    name: "비즈니스 라인",
    description:
      "출장용 프리미엄 캐리어로, 비즈니스 여행에 최적화된 디자인과 기능을 제공합니다.",
    category: "비즈니스",
    imageUrl:
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    features: [
      "노트북 전용 구획",
      "정장 보관 시스템",
      "문서 정리함",
      "GPS 추적 기능",
    ],
    inStock: 40,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
  {
    id: "6",
    name: "위켄드 컬렉션",
    description:
      "주말 여행용 스타일리시한 더플백으로, 가벼우면서도 튼튼한 구조입니다.",
    category: "더플백",
    imageUrl:
      "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
    features: ["경량 디자인", "방수 소재", "다양한 수납 포켓", "어깨끈 포함"],
    inStock: 60,
    createdAt: new Date("2024-01-01T00:00:00.000Z"),
  },
];
