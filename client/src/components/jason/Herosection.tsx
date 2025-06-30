import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="/images/jason/1.jpg"
              alt="프로필 사진"
              width={200}
              height={200}
              className="rounded-full mx-auto border-4 border-white shadow-2xl"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
            김주영
            <span className="block text-3xl md:text-4xl text-purple-600 mt-2">Dog Fitness Trainer</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            반려견의 건강한 삶을 위한 전문 피트니스 트레이닝으로
            <br />더 행복한 반려생활을 만들어갑니다
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
              onClick={() => scrollToSection("contact")}
            >
              상담 문의하기
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-600 text-purple-600 hover:bg-purple-50 px-8 py-3"
              onClick={() => scrollToSection("about")}
            >
              더 알아보기
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}