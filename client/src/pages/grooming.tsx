import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, Scissors, Star, X, Award, Heart, Shield } from "lucide-react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
 

interface BeforeAfter {
  id: string;
  dogName: string;
  breed: string;
  service: string;
  beforeImage: string;
  afterImage: string;
  description: string;
  ownerComment: string;
}

const beforeAfterData: BeforeAfter[] = [
  {
    id: "1",
    dogName: "가을이",
    breed: "푸들",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/1_1.jpg",
    afterImage: "/images/grooming/ba/1_2.jpg",
    description: "털이 엉켜있던 가을이가 깔끔하고 예쁜 모습으로 변신했습니다.",
    ownerComment: "가을이가 이렇게 예뻐질 줄 몰랐어요! 정말 감사합니다."
  },
  {
    id: "2",
    dogName: "포동이",
    breed: "말티즈",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/2_1.jpg",
    afterImage: "/images/grooming/ba/2_2.jpg",
    description: "말티즈 특유의 풍성한 털을 살린 스타일링으로 더욱 사랑스럽게 변신했습니다.",
    ownerComment: "포동이 털이 이렇게 부드러워질 줄 몰랐어요. 향도 너무 좋아요!"
  },
  {
    id: "3",
    dogName: "뭉이",
    breed: "믹스",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/3_1.jpg",
    afterImage: "/images/grooming/ba/3_2.jpg",
    description: "뭉이만의 매력을 한층 더 돋보이게 했습니다.",
    ownerComment: "뭉이가 미용을 무서워했는데, 여기서는 편안하게 받더라고요."
  },
  {
    id: "4",
    dogName: "둥이",
    breed: "푸들",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/4_1.jpg",
    afterImage: "/images/grooming/ba/4_2.jpg",
    description: "푸들의 곱슬털을 살린 클래식한 스타일링입니다.",
    ownerComment: "둥이가 진짜 귀족견 같아요. 너무 멋있어요!"
  },
  {
    id: "5",
    dogName: "하리 ",
    breed: "비숑프리제",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/5_1.jpg",
    afterImage: "/images/grooming/ba/5_2.jpg",
    description: "비숑프리제의 곱슬털을 살린 귀여운 컷으로 변신했습니다.",
    ownerComment: "하리가 구름같이 귀여워졌어요. 스파까지 받아서 털이 정말 부드러워요."
  },
  {
    id: "6",
    dogName: "베베",
    breed: "베들링턴 테리어",
    service: "여름컷 + 목욕",
    beforeImage: "/images/grooming/ba/6_1.jpg",
    afterImage: "/images/grooming/ba/6_2.jpg",
    description: "더운 여름을 위한 시원한 여름컷으로 건강하고 깔끔하게 변신했습니다.",
    ownerComment: "베베가 여름컷 받고 나서 훨씬 시원해보여요. 활동량도 늘었어요!"
  },
  {
    id: "7",
    dogName: "럭키",
    breed: "비숑",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/7_1.jpg",
    afterImage: "/images/grooming/ba/7_2.jpg",
    description: "비숑 특유의 풍성한 털을 살린 스타일링으로 더욱 사랑스럽게 변신했습니다.",
    ownerComment: "미용 후에 산책 나가면 다들 한 번씩 쳐다봐요! 너무 예뻐졌어요 😊"


  },
  {
    id: "8",
    dogName: "코코",
    breed: "폼스키",
    service: "전체 미용",
    beforeImage: "/images/grooming/ba/8_1.jpg",
    afterImage: "/images/grooming/ba/8_2.jpg",
    description: "폼스키의 활동성과 풍성한 털을 살린 스타일링입니다.",  
    ownerComment:"털 관리가 훨씬 쉬워졌어요! 집에서도 편하게 안아줄 수 있어요 🐶💕"
  },
  {
    id: "9",
    dogName: "테리",
    breed: "포메라니안",
    service: "전체 미용 + 네일케어",
    beforeImage: "/images/grooming/ba/9_1.jpg",
    afterImage: "/images/grooming/ba/9_2.jpg",
    description: "포메라니안의 풍성한 털을 살린 스타일링입니다.",  
    ownerComment: "아이도 스트레스를 안 받은 것 같아서 마음이 놓여요. 감사합니다!"
  },
  {
    id: "10",
    dogName: "자몽",
    breed: "비숑 프리제",
    service: "전체 미용 ",
    beforeImage: "/images/grooming/ba/10_1.jpg",
    afterImage: "/images/grooming/ba/10_2.jpg",
    description: "비숑프리제의 곱슬털을 살린 귀여운 컷으로 변신했습니다.",  
    ownerComment: "우리 아이한테 찰떡같이 어울려요! 완전 만족입니다 😍"
  },
  {
    id: "11",
    dogName: "구름이",
    breed: "비숑 프리제",
    service: "전체 미용 ",
    beforeImage: "/images/grooming/ba/11_1.jpg",
    afterImage: "/images/grooming/ba/11_2.jpg",
    description: "비숑프리제의 곱슬털을 살린 귀여운 푸들컷으로 변신했습니다.",
    ownerComment: "털도 예쁘고 향기도 좋아요~ 집 안이 포근한 느낌으로 가득해요 🌸"
  },
  
];


const groomingFeatures = [
  {
    icon: Scissors,
    title: "견종별 전문 케어",
    description: "각 견종의 특성을 고려한 맞춤형 미용 서비스"
  },
  {
    icon: Heart,
    title: "스트레스 프리",
    description: "반려견이 편안하게 받을 수 있는 특별한 케어 기법"
  },
  {
    icon: Shield,
    title: "프리미엄 제품",
    description: "안전힌 미용 제품만을 사용"
  }
];

// Hero Section 데이터 인터페이스 (daycare.tsx 참고)
interface HeroSectionData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}

// grooming.tsx에 맞는 Hero 데이터 정의
const groomingHeroData: HeroSectionData = {
  title: "퍼피빌 살롱",
  subtitle: "10년 경력 전문 미용사의 섬세한 손길로 완성하는 스타일",
  backgroundImage: "https://images.unsplash.com/photo-1598809445853-3811f0d0ceb5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080", // 미용실 관련 이미지로 교체 권장
};

export default function GroomingDetail() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedBeforeAfter, setSelectedBeforeAfter] = useState<BeforeAfter | null>(null);
  const [pricingImageModalOpen, setPricingImageModalOpen] = useState<boolean>(false);
  // 실제 가격표 이미지 경로로 변경해주세요.
  const pricingImageUrl = "/images/grooming/price.jpg"; // 예시 경로

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const openImage = (src: string) => {
    setSelectedImage(src);
  };

  const openBeforeAfter = (item: BeforeAfter) => {
    setSelectedBeforeAfter(item);
  };

  const openPricingImageModal = () => {
    setPricingImageModalOpen(true);
  };

  const closePricingImageModal = () => {
    setPricingImageModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-playfair font-bold text-warm-orange cursor-pointer hover:opacity-80 transition-opacity">
                퍼피빌
              </h1>
            </Link>
            <Link href="/">
              <Button variant="ghost" className="flex items-center text-dark-gray hover:text-warm-orange">
                <ChevronLeft className="w-4 h-4 mr-2" />
                홈으로 돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section (daycare.tsx 스타일로 수정) */}
      <motion.section
        className="py-20 md:py-32 bg-cover bg-center relative text-center bg-cream-dark overflow-hidden"
        style={{ backgroundImage: `url(/images/grooming/1.jpg)` }} // 배경 이미지 설정
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/40"></div> {/* 어두운 오버레이 */} 
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.h1
            className="font-playfair text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {groomingHeroData.title}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            {groomingHeroData.subtitle}
          </motion.p>
          <Link href="/consultation">
            <motion.button
              className="bg-white text-warm-orange px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              미용 예약 상담하기
            </motion.button>
          </Link>
        </div>
      </motion.section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              <span className="text-warm-orange">전문가의 케어</span>
            </h2>
            <p className="text-medium-gray">15년 경력 전문 미용사의 섬세한 손길</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {groomingFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-16 h-16 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-playfair text-xl font-bold text-dark-gray mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-medium-gray">{feature.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Before & After Section - Main Feature */}
      <section className="py-20 bg-gradient-to-r from-soft-mint/20 to-warm-orange/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-6">
              <span className="text-warm-orange">놀라운 변신</span> Before & After
            </h2>
            <p className="text-xl text-medium-gray max-w-3xl mx-auto">
              전문 미용사의 마법 같은 손길로 탄생한 아름다운 변화를 만나보세요
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterData.map((item, index) => (
              <motion.div
                key={item.id}
                className="bg-white rounded-3xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                onClick={() => openBeforeAfter(item)}
              >
                <div className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="font-playfair text-xl font-bold text-dark-gray mb-1">
                      {item.dogName}
                    </h3>
                    <p className="text-medium-gray text-sm">{item.breed} · {item.service}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <img 
                        src={item.beforeImage} 
                        alt="미용 전" 
                        className="w-full h-32 object-cover rounded-lg mb-2" 
                      />
                      <span className="text-xs font-semibold text-medium-gray bg-gray-100 px-2 py-1 rounded">BEFORE</span>
                    </div>
                    <div className="text-center">
                      <img 
                        src={item.afterImage} 
                        alt="미용 후" 
                        className="w-full h-32 object-cover rounded-lg mb-2" 
                      />
                      <span className="text-xs font-semibold text-warm-orange bg-warm-orange/10 px-2 py-1 rounded">AFTER</span>
                    </div>
                  </div>
                  
                  <p className="text-sm text-medium-gray text-center mb-4 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="bg-cream rounded-lg p-3">
                    <p className="text-xs text-medium-gray italic text-center">
                      "{item.ownerComment}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              <span className="text-warm-orange">미용 요금표</span>
            </h2>
            <p className="text-medium-gray">체중과 견종별 세분화된 합리적인 가격</p>
          </motion.div>

          <motion.div
            className="bg-cream rounded-3xl p-8 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-dark-gray mb-2">
                상세 가격표는 이미지를 클릭하여 확인해주세요
              </h3>
              <p className="text-medium-gray">
                견종과 체중에 따른 정확한 가격 정보를 확인하실 수 있습니다
              </p>
            </div>
            
            {/* Pricing image holder - 수정된 부분 */}
            <div 
              className="bg-white rounded-2xl p-4 sm:p-8 shadow-lg text-center cursor-pointer hover:shadow-xl transition-shadow duration-300"
              onClick={openPricingImageModal} // 클릭 시 모달 열기
            >
              <div className="w-full h-auto bg-gray-100 rounded-lg flex items-center justify-center mb-6 overflow-hidden">
                <img 
                  src={pricingImageUrl} 
                  alt="퍼피빌 미용 가격표" 
                  className="w-full h-auto object-contain rounded-lg max-h-[600px]" // max-h 추가 및 object-contain 유지
                  onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/800x1000?text=가격표+이미지+준비중')}
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">소형견 (5kg 미만)</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 가위컷: 80,000원~</li>
                    <li>• 부분미용: 50,000원~</li>
                    <li>• 목욕: 35,000원~</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">중형견 (5-15kg)</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 가위컷컷: 120,000원~</li>
                    <li>• 부분미용: 80,000원~</li>
                    <li>• 목욕: 60,000원~</li>
                  </ul>
                </div>
                <div>
                  <h5 className="font-bold text-warm-orange mb-3">특수견종</h5>
                  <ul className="space-y-2 text-sm text-medium-gray">
                    <li>• 푸들, 비숑 등</li>
                    <li>• 털 상태에 따라 가격 상이</li>
                    <li>• 상담 후 견적 제공</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <Link href="/consultation">
              <motion.button
                className="bg-warm-orange text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-warm-orange/90 transition-all shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                정확한 견적 상담받기
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="font-playfair text-3xl font-bold text-dark-gray mb-4">
              <span className="text-warm-orange">미용 과정</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "1", title: "상담 & 체크", description: "건강 상태 확인 및 스타일 상담" },
              { step: "2", title: "목욕 & 케어", description: "전용 샴푸로 깨끗하게 목욕" },
              { step: "3", title: "미용 & 스타일링", description: "견종별 특성을 살린 미용" },
              { step: "4", title: "마무리 & 케어", description: "발톱케어 및 마무리 손질" }
            ].map((process, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">{process.step}</span>
                </div>
                <h3 className="font-bold text-dark-gray mb-2">{process.title}</h3>
                <p className="text-sm text-medium-gray">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Gallery item"
                className="max-w-full max-h-full object-contain rounded-lg"
              />
              <button
                className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-8 h-8" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before/After Detail Modal */}
      <AnimatePresence>
        {selectedBeforeAfter && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBeforeAfter(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-2">
                  {selectedBeforeAfter.dogName}의 변신
                </h3>
                <p className="text-medium-gray">{selectedBeforeAfter.breed} · {selectedBeforeAfter.service}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.beforeImage} 
                    alt="미용 전" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-medium-gray bg-gray-100 px-3 py-1 rounded-full">BEFORE</span>
                </div>
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.afterImage} 
                    alt="미용 후" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-warm-orange bg-warm-orange/10 px-3 py-1 rounded-full">AFTER</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-dark-gray mb-2">변화 포인트</h4>
                  <p className="text-medium-gray leading-relaxed">{selectedBeforeAfter.description}</p>
                </div>
                
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-bold text-dark-gray mb-2">보호자 후기</h4>
                  <p className="text-medium-gray italic">"{selectedBeforeAfter.ownerComment}"</p>
                </div>
              </div>
              
              <button
                className="absolute top-4 right-4 text-medium-gray hover:text-dark-gray transition-colors"
                onClick={() => setSelectedBeforeAfter(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Pricing Image Modal - 추가된 부분 */}
      <AnimatePresence>
        {pricingImageModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-[60] p-4" // z-index를 높여 다른 모달보다 위에 오도록 설정
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closePricingImageModal} // 배경 클릭 시 닫기
          >
            <motion.div
              className="relative bg-white p-2 sm:p-4 rounded-lg shadow-2xl max-w-full max-h-[95vh] overflow-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
            >
              <img 
                src={pricingImageUrl} 
                alt="퍼피빌 미용 가격표 확대" 
                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-md"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/1200x1600?text=가격표+이미지+준비중')}
              />
              <button 
                onClick={closePricingImageModal} 
                className="absolute top-2 right-2 sm:top-4 sm:right-4 text-gray-700 bg-white/70 rounded-full p-2 hover:bg-gray-200 transition-colors shadow-md"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Before & After Modal */}
      <AnimatePresence>
        {selectedBeforeAfter && (
          <motion.div
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedBeforeAfter(null)}
          >
            <motion.div
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="text-center mb-6">
                <h3 className="font-playfair text-2xl font-bold text-dark-gray mb-2">
                  {selectedBeforeAfter.dogName}의 변신
                </h3>
                <p className="text-medium-gray">{selectedBeforeAfter.breed} · {selectedBeforeAfter.service}</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.beforeImage} 
                    alt="미용 전" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-medium-gray bg-gray-100 px-3 py-1 rounded-full">BEFORE</span>
                </div>
                <div className="text-center">
                  <img 
                    src={selectedBeforeAfter.afterImage} 
                    alt="미용 후" 
                    className="w-full h-64 object-cover rounded-lg mb-3" 
                  />
                  <span className="text-sm font-semibold text-warm-orange bg-warm-orange/10 px-3 py-1 rounded-full">AFTER</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold text-dark-gray mb-2">변화 포인트</h4>
                  <p className="text-medium-gray leading-relaxed">{selectedBeforeAfter.description}</p>
                </div>
                
                <div className="bg-cream rounded-lg p-4">
                  <h4 className="font-bold text-dark-gray mb-2">보호자 후기</h4>
                  <p className="text-medium-gray italic">"{selectedBeforeAfter.ownerComment}"</p>
                </div>
              </div>
              
              <button
                className="absolute top-4 right-4 text-medium-gray hover:text-dark-gray transition-colors"
                onClick={() => setSelectedBeforeAfter(null)}
              >
                <X className="w-6 h-6" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}