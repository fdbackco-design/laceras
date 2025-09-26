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

    // Static deployment: Show contact info instead of form submission
    const emailBody = `문의 유형: ${data.inquiryType}\n제목: ${data.subject}\n\n${data.message}\n\n고객 정보:\n이름: ${data.name}\n이메일: ${data.email}\n전화번호: ${data.phone || "미제공"}`;
    const emailLink = `mailto:contact@laceras.fr?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;

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
    {
      question: "A/S는 가능한가요?",
      answer: "모든 제품은 A/S를 제공합니다.",
    },
    {
      question: "교환/환불이 가능한가요?",
      answer: "구매 후 14일 이내 미사용 제품에 한해 교환/환불이 가능합니다.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  return (
    <div className="pt-20 pb-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h1
            className="font-playfair text-6xl font-bold mb-6"
            data-testid="text-contact-title"
          >
            Customer Service
          </h1>
          <p
            className="text-xl text-muted-foreground max-w-2xl mx-auto"
            data-testid="text-contact-description"
          >
            언제든지 문의해 주세요. 최고의 서비스로 도와드리겠습니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Customer Service Center */}
          <div className="bg-primary text-primary-foreground p-8 rounded-lg text-center mb-12">
            <h2 className="font-pretendard text-3xl font-bold mb-4" data-testid="text-service-center-title">
              라쎄라스 A/S 센터
            </h2>
            <p className="text-primary-foreground/80 mb-6" data-testid="text-service-center-description">
              라쎄라스 A/S 센터를 상시 운영하고 있습니다.
            </p>
            <div className="flex items-center justify-center mb-6">
              <Phone className="w-6 h-6 mr-3 text-accent" />
              <span className="text-2xl font-bold" data-testid="text-service-phone">
                031-429-8570
              </span>
            </div>
            <div className="space-y-2 text-primary-foreground/80">
              <div data-testid="text-service-hours-weekday">
                운영시간 : AM 10:00 ~ PM 17:00
              </div>
              <div data-testid="text-service-hours-weekend">
                점심시간 PM 12:00~ PM 13:00
              </div>
            </div>
            <Button 
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
              data-testid="button-service-center"
            >
              A/S 센터 자세히 보기
            </Button>
          </div>

          {/* FAQ Section */}
          <div>
            <h3
              className="font-playfair text-2xl font-bold mb-6"
              data-testid="text-faq-title"
            >
              자주 묻는 질문
            </h3>
            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-4">
                    <button
                      className="w-full flex justify-between items-center text-left"
                      onClick={() => toggleFaq(index)}
                      data-testid={`button-faq-${index}`}
                    >
                      <span className="font-medium">{item.question}</span>
                      {expandedFaq === index ? (
                        <ChevronUp className="w-5 h-5 text-muted-foreground" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-muted-foreground" />
                      )}
                    </button>
                    {expandedFaq === index && (
                      <div
                        className="mt-3 text-muted-foreground"
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
