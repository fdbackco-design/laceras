import {
  type User,
  type InsertUser,
  type Product,
  type InsertProduct,
  type Review,
  type InsertReview,
  type ContactInquiry,
  type InsertContactInquiry,
} from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  getProducts(): Promise<Product[]>;
  getProduct(id: string): Promise<Product | undefined>;
  createProduct(product: InsertProduct): Promise<Product>;

  getReviews(): Promise<Review[]>;
  getReviewsByProduct(productId: string): Promise<Review[]>;
  createReview(review: InsertReview): Promise<Review>;

  getContactInquiries(): Promise<ContactInquiry[]>;
  createContactInquiry(inquiry: InsertContactInquiry): Promise<ContactInquiry>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private products: Map<string, Product>;
  private reviews: Map<string, Review>;
  private contactInquiries: Map<string, ContactInquiry>;

  constructor() {
    this.users = new Map();
    this.products = new Map();
    this.reviews = new Map();
    this.contactInquiries = new Map();

    // Initialize with sample luxury luggage products
    this.initializeProducts();
    this.initializeReviews();
  }

  private initializeProducts() {
    const sampleProducts: Product[] = [
      {
        id: "1",
        name: "프리미엄 하드셸 시리즈",
        description:
          "독일산 폴리카보네이트 소재와 프랑스 전통 가죽공예가 만나 탄생한 최고급 하드셸 캐리어입니다. 10년 품질보증과 함께 평생 A/S를 제공합니다.",
        price: "980000",
        category: "하드셸",
        imageUrl: "/assets/carri1.jpg",
        features: [
          "100% 폴리카보네이트 하드셸",
          "TSA 승인 잠금장치",
          "360도 회전 바퀴",
          "10년 품질보증",
        ],
        inStock: 50,
        createdAt: new Date(),
      },
      {
        id: "2",
        name: "소프트 럭셔리 컬렉션",
        description:
          "이탈리아산 최고급 가죽을 사용한 소프트 캐리어로, 부드러운 터치와 실용성을 겸비했습니다.",
        price: "750000",
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
        createdAt: new Date(),
      },
      {
        id: "3",
        name: "트래블 에센셜",
        description:
          "여행 필수템을 담은 컴팩트한 캐리온으로, 완벽한 여행의 시작을 도와드립니다.",
        price: "450000",
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
        createdAt: new Date(),
      },
      {
        id: "4",
        name: "빈티지 트렁크",
        description:
          "클래식한 매력의 대형 여행 트렁크로, 프랑스 전통 공예의 정수를 담았습니다.",
        price: "1200000",
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
        createdAt: new Date(),
      },
      {
        id: "5",
        name: "비즈니스 라인",
        description:
          "출장용 프리미엄 캐리어로, 비즈니스 여행에 최적화된 디자인과 기능을 제공합니다.",
        price: "850000",
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
        createdAt: new Date(),
      },
      {
        id: "6",
        name: "위켄드 컬렉션",
        description:
          "주말 여행용 스타일리시한 더플백으로, 가벼우면서도 튼튼한 구조입니다.",
        price: "320000",
        category: "더플백",
        imageUrl:
          "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800",
        features: [
          "경량 디자인",
          "방수 소재",
          "다양한 수납 포켓",
          "어깨끈 포함",
        ],
        inStock: 60,
        createdAt: new Date(),
      },
    ];

    sampleProducts.forEach((product) => {
      this.products.set(product.id, product);
    });
  }

  private initializeReviews() {
    const sampleReviews: Review[] = [
      {
        id: "r1",
        productId: "1",
        customerName: "김민수",
        customerLocation: "서울, 대한민국",
        rating: 5,
        comment:
          "유럽 여행에서 3주간 사용했는데 정말 만족스럽습니다. 디자인도 우아하고 내구성도 뛰어나네요. 추천합니다!",
        productName: "프리미엄 하드셸 시리즈",
        createdAt: new Date(),
      },
      {
        id: "r2",
        productId: "2",
        customerName: "Sarah Johnson",
        customerLocation: "New York, USA",
        rating: 5,
        comment:
          "Absolutely love this luggage! The French craftsmanship is evident in every detail. Worth every penny.",
        productName: "소프트 럭셔리 컬렉션",
        createdAt: new Date(),
      },
      {
        id: "r3",
        productId: "5",
        customerName: "이지은",
        customerLocation: "부산, 대한민국",
        rating: 4,
        comment:
          "비즈니스 출장용으로 구매했는데 정말 실용적이에요. 공항에서도 눈에 띄는 세련된 디자인이 마음에 듭니다.",
        productName: "비즈니스 라인",
        createdAt: new Date(),
      },
      {
        id: "r4",
        productId: "4",
        customerName: "Pierre Dubois",
        customerLocation: "Paris, France",
        rating: 5,
        comment:
          "En tant que Français, je suis fier de voir une telle qualité d'artisanat. Magnifique travail!",
        productName: "빈티지 트렁크",
        createdAt: new Date(),
      },
      {
        id: "r5",
        productId: "6",
        customerName: "박현우",
        customerLocation: "인천, 대한민국",
        rating: 5,
        comment:
          "주말 여행용으로 완벽해요. 가벼우면서도 튼튼하고, 무엇보다 스타일이 너무 예뻐요!",
        productName: "위켄드 컬렉션",
        createdAt: new Date(),
      },
      {
        id: "r6",
        productId: "3",
        customerName: "Emma Wilson",
        customerLocation: "London, UK",
        rating: 4,
        comment:
          "Perfect for my daily commute and weekend getaways. The quality is exceptional and the design is timeless.",
        productName: "트래블 에센셜",
        createdAt: new Date(),
      },
    ];

    sampleReviews.forEach((review) => {
      this.reviews.set(review.id, review);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getProducts(): Promise<Product[]> {
    return Array.from(this.products.values());
  }

  async getProduct(id: string): Promise<Product | undefined> {
    return this.products.get(id);
  }

  async createProduct(insertProduct: InsertProduct): Promise<Product> {
    const id = randomUUID();
    const product: Product = {
      ...insertProduct,
      id,
      features: insertProduct.features || [],
      inStock: insertProduct.inStock || 0,
      createdAt: new Date(),
    };
    this.products.set(id, product);
    return product;
  }

  async getReviews(): Promise<Review[]> {
    return Array.from(this.reviews.values());
  }

  async getReviewsByProduct(productId: string): Promise<Review[]> {
    return Array.from(this.reviews.values()).filter(
      (review) => review.productId === productId,
    );
  }

  async createReview(insertReview: InsertReview): Promise<Review> {
    const id = randomUUID();
    const review: Review = {
      ...insertReview,
      id,
      productId: insertReview.productId || null,
      createdAt: new Date(),
    };
    this.reviews.set(id, review);
    return review;
  }

  async getContactInquiries(): Promise<ContactInquiry[]> {
    return Array.from(this.contactInquiries.values());
  }

  async createContactInquiry(
    insertInquiry: InsertContactInquiry,
  ): Promise<ContactInquiry> {
    const id = randomUUID();
    const inquiry: ContactInquiry = {
      ...insertInquiry,
      id,
      status: "pending",
      createdAt: new Date(),
    };
    this.contactInquiries.set(id, inquiry);
    return inquiry;
  }
}

export const storage = new MemStorage();
