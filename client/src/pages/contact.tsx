import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  insertContactInquirySchema,
  type InsertContactInquiry,
} from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const extendedSchema = insertContactInquirySchema.extend({
  privacyAgreed: insertContactInquirySchema.shape.message.refine(() => true),
});

export default function Contact() {
  const { toast } = useToast();
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const form = useForm<InsertContactInquiry & { privacyAgreed: boolean }>({
    resolver: zodResolver(extendedSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      inquiryType: "제품 문의",
      subject: "",
      message: "",
      privacyAgreed: false,
    },
  });

  const onSubmit = (
    data: InsertContactInquiry & { privacyAgreed: boolean },
  ) => {
    if (!data.privacyAgreed) {
      toast({
        title: "개인정보 처리방침 동의 필요",
        description: "개인정보 처리방침에 동의해주세요.",
        variant: "destructive",
      });
      return;
    }

    const emailBody = `문의 유형: ${data.inquiryType}\n제목: ${data.subject}\n\n${data.message}\n\n고객 정보:\n이름: ${data.name}\n이메일: ${data.email}\n전화번호: ${data.phone || "미제공"}`;
    const emailLink = `mailto:contact@laceras.fr?subject=${encodeURIComponent(
      data.subject,
    )}&body=${encodeURIComponent(emailBody)}`;

    window.open(emailLink, "_blank");

    toast({
      title: "이메일 클라이언트가 열렸습니다",
      description:
        "문의 내용이 포함된 이메일 작성 창이 열렸습니다. 이메일을 전송해주세요.",
    });
    form.reset();
  };

  const faqItems = [
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "국내 배송은 주문 후 2-3일 소요됩니다.",
    },
    { question: "A/S는 가능한가요?", answer: "모든 제품은 A/S를 제공합니다." },
    {
      question: "교환/환불이 가능한가요?",
      answer: "구매 후 14일 이내 미사용 제품에 한해 교환/환불이 가능합니다.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="font-pretendard pt-20 pb-12 sm:pb-16 lg:pb-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6"
            data-testid="text-contact-title"
          >
            Customer Service
          </h1>
          <p
            className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-xl sm:max-w-2xl mx-auto px-4 sm:px-0 leading-relaxed"
            data-testid="text-contact-description"
          >
            최고의 서비스로 도와드리겠습니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto px-4 sm:px-0">
          {/* Customer Service Center */}
          <div className="relative rounded-lg overflow-hidden mb-8 sm:mb-12">
            {/* 배경 이미지 */}
            <img
              src="/assets/building.jpg"
              alt="La Ceras A/S Center Building"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
            />

            {/* 반투명 오버레이 */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

            {/* 내용 영역 */}

            <div className="relative z-10 text-primary-foreground text-center p-4 sm:p-6 md:p-8">
              <h2
                className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-3 md:mb-4 break-keep"
                data-testid="text-service-center-title"
              >
                고객 지원 안내
              </h2>

              <p
                className="text-primary-foreground/80 mb-4 sm:mb-5 md:mb-7 text-xs sm:text-sm md:text-base leading-relaxed break-keep px-2"
                data-testid="text-service-center-description"
              >
                아래 연락처로 빠르게 도와드리겠습니다.
              </p>

              {/* 2열 연락처 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4 text-left max-w-3xl mx-auto">
                {/* 제품 고장·불량 CS */}
                <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-3 sm:p-4 md:p-5">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base md:text-lg font-semibold break-keep leading-tight">
                        고객센터 (A/S)
                        <br className="sm:hidden" />
                      </div>
                      <div className="mt-1.5 sm:mt-1 text-sm sm:text-base">
                        <span className="font-bold tracking-wide text-primary-foreground">
                          031-429-8570
                        </span>
                      </div>
                      <p className="mt-2 text-xs sm:text-sm text-primary-foreground/80 leading-relaxed break-keep">
                        제품 고장 및 불량 문의는
                        <br className="sm:hidden" /> 고객센터로 연락
                        부탁드립니다.
                      </p>
                    </div>
                  </div>
                </div>

                {/* B2B 문의 */}
                <div className="rounded-xl bg-white/10 backdrop-blur-sm border border-white/15 p-3 sm:p-4 md:p-5">
                  <div className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-0.5 flex-shrink-0">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm sm:text-base md:text-lg font-semibold break-keep leading-tight">
                        B2B 문의
                        <br className="sm:hidden" />
                      </div>
                      <div className="mt-1.5 sm:mt-1 text-sm sm:text-base">
                        <span className="font-bold tracking-wide text-primary-foreground">
                          070-8211-1761
                        </span>
                      </div>
                      <ul className="mt-2 space-y-1 text-xs sm:text-sm text-primary-foreground/90">
                        <li className="break-keep">
                          <span className="opacity-80">담당:</span>{" "}
                          <span className="font-medium">손성훈 이사</span>
                        </li>

                        <li className="break-all">
                          <span className="opacity-80 break-keep">
                            대표메일:
                          </span>
                          <a
                            href="mailto:fdbackteams@gmail.com"
                            className="font-medium underline ml-1"
                          >
                            fdbackteams@gmail.com
                          </a>
                        </li>
                        <li className="leading-relaxed break-keep">
                          대량 구매 및 B2B 납품 문의는
                          <br className="sm:hidden" /> 담당자에게 연락
                          부탁드립니다.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* 운영 시간 */}
              <div className="mt-5 sm:mt-6 md:mt-8 space-y-1 sm:space-y-2 text-primary-foreground/80 text-xs sm:text-sm break-keep">
                <div
                  data-testid="text-service-hours-weekday"
                  className="break-keep"
                >
                  운영시간 : AM 10:00 ~ PM 18:00
                </div>
                <div
                  data-testid="text-service-hours-weekend"
                  className="break-keep"
                >
                  점심시간 PM 12:30 ~ PM 13:30
                </div>
              </div>
            </div>
          </div>

          {/* FAQ Section */}
          <div>
            <h3
              className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6"
              data-testid="text-faq-title"
            >
              자주 묻는 질문
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-3 sm:p-4">
                    <button
                      className="w-full flex justify-between items-center text-left"
                      onClick={() => toggleFaq(index)}
                      data-testid={`button-faq-${index}`}
                    >
                      <span className="font-medium text-sm sm:text-base pr-2">
                        {item.question}
                      </span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground flex-shrink-0" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div
                        className="mt-2 sm:mt-3 text-muted-foreground text-sm sm:text-base leading-relaxed"
                        data-testid={`text-faq-answer-${index}`}
                      >
                        {item.answer}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
