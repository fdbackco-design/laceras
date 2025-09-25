import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { MapPin, Phone, Mail, Clock, ChevronDown, ChevronUp } from "lucide-react";

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


  const onSubmit = (data: InsertContactInquiry & { privacyAgreed: boolean }) => {
    if (!data.privacyAgreed) {
      toast({
        title: "개인정보 처리방침 동의 필요",
        description: "개인정보 처리방침에 동의해주세요.",
        variant: "destructive",
      });
      return;
    }

    // Static deployment: Show contact info instead of form submission
    const emailBody = `문의 유형: ${data.inquiryType}\n제목: ${data.subject}\n\n${data.message}\n\n고객 정보:\n이름: ${data.name}\n이메일: ${data.email}\n전화번호: ${data.phone || '미제공'}`;
    const emailLink = `mailto:contact@laceras.fr?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(emailBody)}`;
    
    window.open(emailLink, '_blank');
    
    toast({
      title: "이메일 클라이언트가 열렸습니다",
      description: "문의 내용이 포함된 이메일 작성 창이 열렸습니다. 이메일을 전송해주세요.",
    });
    form.reset();
  };

  const faqItems = [
    {
      question: "배송은 얼마나 걸리나요?",
      answer: "국내 배송은 주문 후 2-3일, 해외 배송은 5-7일 소요됩니다.",
    },
    {
      question: "A/S 기간은 얼마나 되나요?",
      answer: "모든 제품은 10년 품질보증과 평생 A/S를 제공합니다.",
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
          <h1 className="font-playfair text-6xl font-bold mb-6" data-testid="text-contact-title">
            Customer Service
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-description">
            언제든지 문의해 주세요. 최고의 서비스로 도와드리겠습니다.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-8" data-testid="text-contact-info-title">
              연락처 정보
            </h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-accent text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold mb-1" data-testid="text-office-label">본사</div>
                  <div className="text-muted-foreground" data-testid="text-office-address">
                    서울특별시 강남구 청담동 123-45<br />
                    라쎄라스 타워 12층
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-accent text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold mb-1" data-testid="text-phone-label">전화번호</div>
                  <div className="text-muted-foreground" data-testid="text-phone-numbers">
                    고객센터: 1588-1234<br />
                    A/S센터: 1588-5678
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-accent text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold mb-1" data-testid="text-email-label">이메일</div>
                  <div className="text-muted-foreground" data-testid="text-email-addresses">
                    일반문의: info@lacerault.kr<br />
                    A/S문의: service@lacerault.kr
                  </div>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-accent text-xl mr-4 mt-1" />
                <div>
                  <div className="font-semibold mb-1" data-testid="text-hours-label">운영시간</div>
                  <div className="text-muted-foreground" data-testid="text-hours-info">
                    평일: 09:00 - 18:00<br />
                    토요일: 10:00 - 17:00<br />
                    일요일/공휴일: 휴무
                  </div>
                </div>
              </div>
            </div>

            {/* Store Locations */}
            <div className="mt-12">
              <h3 className="font-playfair text-2xl font-bold mb-6" data-testid="text-stores-title">
                매장 안내
              </h3>
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="font-semibold" data-testid="text-store-gangnam-name">강남 플래그십 스토어</div>
                    <div className="text-muted-foreground" data-testid="text-store-gangnam-address">서울 강남구 압구정로 123</div>
                    <div className="text-sm text-muted-foreground" data-testid="text-store-gangnam-phone">02-1234-5678</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="font-semibold" data-testid="text-store-myeongdong-name">명동 중앙점</div>
                    <div className="text-muted-foreground" data-testid="text-store-myeongdong-address">서울 중구 명동길 456</div>
                    <div className="text-sm text-muted-foreground" data-testid="text-store-myeongdong-phone">02-2345-6789</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-4">
                    <div className="font-semibold" data-testid="text-store-busan-name">부산 해운대점</div>
                    <div className="text-muted-foreground" data-testid="text-store-busan-address">부산 해운대구 센텀로 789</div>
                    <div className="text-sm text-muted-foreground" data-testid="text-store-busan-phone">051-3456-7890</div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="font-playfair text-3xl font-bold mb-8" data-testid="text-inquiry-form-title">
              문의하기
            </h2>
            
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>이름 *</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="성함을 입력해주세요" 
                            {...field} 
                            data-testid="input-name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>연락처 *</FormLabel>
                        <FormControl>
                          <Input 
                            type="tel" 
                            placeholder="010-1234-5678" 
                            {...field} 
                            data-testid="input-phone"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>이메일 *</FormLabel>
                      <FormControl>
                        <Input 
                          type="email" 
                          placeholder="example@email.com" 
                          {...field} 
                          data-testid="input-email"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="inquiryType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>문의 유형</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger data-testid="select-inquiry-type">
                            <SelectValue placeholder="문의 유형을 선택해주세요" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="제품 문의">제품 문의</SelectItem>
                          <SelectItem value="A/S 문의">A/S 문의</SelectItem>
                          <SelectItem value="주문/배송 문의">주문/배송 문의</SelectItem>
                          <SelectItem value="기타 문의">기타 문의</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>제목 *</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="문의 제목을 입력해주세요" 
                          {...field} 
                          data-testid="input-subject"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>문의 내용 *</FormLabel>
                      <FormControl>
                        <Textarea 
                          rows={6} 
                          placeholder="자세한 문의 내용을 작성해주세요" 
                          {...field} 
                          data-testid="textarea-message"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="privacyAgreed"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          data-testid="checkbox-privacy"
                        />
                      </FormControl>
                      <div className="space-y-1 leading-none">
                        <FormLabel className="text-sm text-muted-foreground">
                          개인정보 처리방침에 동의합니다. *
                        </FormLabel>
                      </div>
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  className="w-full"
                  data-testid="button-submit-inquiry"
                >
                  문의 보내기
                </Button>
              </form>
            </Form>

            {/* FAQ Section */}
            <div className="mt-12">
              <h3 className="font-playfair text-2xl font-bold mb-6" data-testid="text-faq-title">
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
                        <div className="mt-3 text-muted-foreground" data-testid={`text-faq-answer-${index}`}>
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
    </div>
  );
}
