import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Link } from "wouter";
import {
  ChevronLeft,
  Play,
  X,
  Star,
  Users,
  CalendarDays,
  Dog,
  Maximize,
  Home,
  Heart,
  Info,
  AlertTriangle,
  CheckCircle,
  Gift,
  Phone,
  MapPin,
  Clock,
  Bone,
  ShieldCheck,
  Edit,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import HotelGuide from "@/components/hotelGuide"; // Fix casing in import path

// --- 인터페이스 정의 --- //

// 호텔 요금제 인터페이스
interface HotelPricingTier {
  id: string;
  weightRange: string;
  pricePerNight: string;
  sevenNightDiscount?: string;
}

// 호텔 이미지 인터페이스
interface HotelImage {
  src: string;
  alt: string;
  caption: string;
}

// 호텔 후기 인터페이스
interface HotelTestimonial {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date?: string;
}

// 호텔 이용 안내 세부 항목 인터페이스 (HotelGuide.tsx로 이동 또는 공유 타입으로 분리 가능)
interface HotelNoticeDetail {
  title: string;
  items: string[];
  icon?: React.ElementType;
}

// 호텔 서비스 설명 인터페이스 (HotelGuide.tsx로 이동 또는 공유 타입으로 분리 가능)
interface HotelServiceDescription {
  introTitle: string;
  introSubtitle: string;
  sections: HotelNoticeDetail[];
  closingTitle: string;
  contactNumber: string;
  location: string;
  finalMessage: string;
}

// 호텔 서비스 전체 데이터 구조 인터페이스
interface ServiceDetailDataEntry {
  id: string;
  title: string;
  subtitle: string;
  heroImage?: string;
  pricingTiers?: HotelPricingTier[];
  additionalPricingInfo?: {
    familyDiscount: string;
    hourlyExtension: string;
    checkInOutTime: string;
  };
  gallery?: HotelImage[];
  testimonials?: HotelTestimonial[];
  ctaText?: string;
  description?: HotelServiceDescription; // 상세 설명 필드
}

// 서비스 데이터 인터페이스
interface ServiceData {
  [key: string]: ServiceDetailDataEntry;
}

// --- 서비스 데이터 --- //
const serviceData: ServiceData = {
  hotel: {
    id: "hotel",
    title: "퍼피빌 호텔 HOTEL",
    subtitle: "우리 아이를 위한 조용하고 안락한 1박 2일",
    heroImage: "https://images.unsplash.com/photo-1544568100-847a948585b9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    pricingTiers: [
      { id: "tier1", weightRange: "~5kg", pricePerNight: "40,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier2", weightRange: "~10kg", pricePerNight: "50,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier3", weightRange: "~15kg", pricePerNight: "55,000원", sevenNightDiscount: "5% 할인" },
      { id: "tier4", weightRange: "15kg 이상", pricePerNight: "별도 상담", sevenNightDiscount: "별도 상담" },
    ],
    additionalPricingInfo: {
      familyDiscount: "-10,000원",
      hourlyExtension: "+5,000원",
      checkInOutTime: "체크인 09:30 / 체크아웃 22:00",
    },
    gallery: [
      { src: "/images/hotel/1.jpg", alt: "", caption: "" },
      { src: "/images/hotel/2.jpg", alt: "", caption: "" },
      { src: "/images/hotel/3.jpg", alt: "", caption: "" },
      { src: "/images/hotel/4.jpg", alt: "", caption: "" },
      { src: "/images/hotel/5.jpg", alt: "", caption: "" },
    ],
    testimonials: [
      {
        id: "review1",
        rating: 5,
        comment: "여행을 다녀오게되어 아이들을 믿고 맡길만한 호텔이 필요했습니다. 둘다 11살 드신 강쥐님들이라 어디 편하게 맡기는게 마음이 편하진 못해요ㅜㅜ 전에 맡겼던 적은 없었던 곳이다보니 의심이 많은 저는 열흘전쯤 답사를 겸해서 방문을 했었구요. 기대이상으로 정말 만족했습니다! 리뷰를 오늘 남기는 이유는 호텔링 이후에도 만족하게된다면 그때 리뷰를 남겨야겠다고 생각했었기 때문이에요. 호텔링동안 아이들은 너무나 정성스레 잘 돌봐주셨구요. 사장님과 쌤들 모두 아이들이 잘 지낼수 있도록 최선을 다해주신다는걸 떨어져있는데도 충분히 느낄수 있었습니다. 하나하나 말할 필요 없을만큼 모든면에서 좋았구요! 아이들 맡길곳이 필요하시다면 믿고 가보시길 적극 추천합니다~ 이 리뷰는 요청받은적도 없는 100% 자발적 내돈내산 솔직리뷰입니다! ",
        author: "보리 보호자님",
      },
      {
        id: "review2",
        rating: 5,
        comment: "혼자 자는 게 처음인데 생각보다 잘 적응했어요! 넓은 공간에서 친구들이랑 신나게 뛰어놀고, 간식도 잘 먹었다고 해서 너무 기뻤습니다.",
        author: "뭉치 보호자님",
      },
    ],
    ctaText: "지금 예약하고 퍼피빌 호텔의 특별한 밤을 경험하세요!",
    description: {
      introTitle: "💜 퍼피빌 애견호텔 이용 안내 & 서비스 안내 💜",
      introSubtitle: "🐾 소중한 반려견이 편안하고 안전하게 머물 수 있도록, 퍼피빌 애견호텔에서 최상의 서비스를 제공합니다! 🏡✨",
      sections: [
        {
          title: "📌 호텔 이용 안내",
          icon: Clock,
          items: [
            "✅ 입·퇴실 시간: AM 09:30 ~ PM 21:30",
            "✔️ 시간 조율 가능하지만, 시간당 추가 요금이 발생합니다.",
            "✅ 호텔 이용 기준: 1박 기준은 24시간 단위이며, 초과 시 시간당 데이케어 요금이 추가됩니다.",
            "7박 이상 5% 할인"
          ],
        },
        {
          title: "✅ 호텔 이용 전 필수 체크사항",
          icon: ShieldCheck,
          items: [
            "❗ 반려견 건강 수첩 지참 필수!",
            "✔️ 1년 이내의 광견병 주사를 접종한 증명서 제출",
            "✔️ 기본접종을 하지 않은 애완견은 투숙이 불가능",
            "💡 (예약 접종이 불가능한 생후 3개월 이하의 반려견은 입실 불가)",
            "✔️ 호텔 내 모든 업장 이용 시, 예방접종 5차까지 완료되지 않은 반려견은 원칙적으로 이용이 불가",
            "❗ 예방접종 확인서 미확인 및 보호자의 부주의로 인한 사고 및 동반 반려견 분실시 호텔에서는 책임을 지지 않습니다.",
            "📌 사전 예약 필수 (💡 당일 예약은 어려울 수 있어요!)",
            "📌 연령 제한: 3개월 미만의 어린 강아지 & 10살 이상의 노령견은 건강상 이용이 제한될 수 있습니다.",
            "📌 건강 상태 확인: 피부병, 감기, 귓병 등의 질환이 있는 경우 이용이 어렵습니다.",
            "📌 성향 제한: **심한 짖음, 공격성(물거나 사나운 성향)**이 있는 경우 다른 친구들에게 영향을 줄 수 있어 입실이 제한될 수 있습니다.",
            "✅ 반려견의 건강과 안전을 위해",
            "✔️ 강아지들의 케어는 최선을 다하지만, 호텔에서 질병에 대한 책임은 지지 않습니다.",
            "✔️ 여러 강아지들과 함께 생활하는 경우, 영역 다툼·전염병 등의 리스크가 발생할 수 있습니다.",
            "💡 이용 전, 반려견의 식습관·배변습관·건강 상태를 미리 알려주시면 더욱 세심한 케어가 가능합니다!",
          ],
        },
        {
          title: "🏡 기본 제공 서비스",
          icon: Gift,
          items: [
            "✅ 편안한 휴식을 위한 맞춤 환경 제공!",
            "✔️ 푹신한 쿠션 제공",
            "✔️ 배변판 & 배변패드 제공",
            "✔️ 개별 식기 제공",
            "✔️ 자유로운 잔디 운동장, 테라스 산책",
            "✔️ 실내 놀이 공간 이용",
            "✔️ 정기적인 환기 및 소독",
          ],
        },
       
      ],
      closingTitle: "퍼피빌과 함께하는 특별한 시간",
      contactNumber: "010-3749-7299",
      location: "미사강변중앙로170번길 10 제12층 제1201호 (퍼피빌)",
      finalMessage: "언제나 최고의 서비스로 모시겠습니다.",
    },
  },
};

// --- 호텔 상세 페이지 컴포넌트 --- //
const HotelDetail = () => {
  const hotelData = serviceData.hotel;
  const [location, setLocation] = useLocation(); // setLocation을 이미 사용하고 있습니다.
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // 갤러리 이미지 자동 슬라이드 효과
  useEffect(() => {
    if (hotelData.gallery && hotelData.gallery.length > 0) {
      const timer = setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % hotelData.gallery!.length);
      }, 5000); // 5초마다 이미지 변경
      return () => clearTimeout(timer);
    }
  }, [currentImageIndex, hotelData.gallery]);

  // 데이터 로딩 중 처리 (실제 API 호출 시 필요)
  if (!hotelData) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl text-slate-600">호텔 정보를 불러오는 중입니다...</p>
      </div>
    );
  }

  // --- 렌더링 함수들 --- //

  // 히어로 섹션 렌더링
  const renderHeroSection = () => (
    <section 
      className="relative h-[60vh] md:h-[80vh] bg-cover bg-center text-white flex items-center justify-center shadow-lg"
      style={{ backgroundImage: `url(${hotelData.heroImage || '/images/placeholder-large.jpg'})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center p-4">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight"
        >
          {hotelData.title}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl font-medium mb-8"
        >
          {hotelData.subtitle}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
          <Button 
            size="lg" 
            className="bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105"
            onClick={() => document.getElementById('pricing-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            요금 안내 보기
          </Button>
        </motion.div>
      </div>
      {/* 뒤로가기 버튼 */}
      <Link href="/">
        <Button 
          variant="outline" 
          className="absolute top-6 left-6 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-900 border-slate-300"
        >
          <ChevronLeft className="w-5 h-5 mr-2" /> 홈으로
        </Button>
      </Link>
    </section>
  );

  // 가격 정보 섹션 렌더링
  const renderPricingSection = () => (
    <section id="pricing-section" className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">호텔 요금 안내</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {hotelData.pricingTiers?.map((tier) => (
            <motion.div 
              key={tier.id} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.5, delay: parseInt(tier.id.slice(-1)) * 0.1 }}
            >
              <h3 className="text-xl font-semibold text-amber-600 mb-2">{tier.weightRange}</h3>
              <p className="text-2xl font-bold text-slate-700 mb-1">{tier.pricePerNight}</p>
              <p className="text-sm text-slate-500 mb-4">/ 1박</p>
              {tier.sevenNightDiscount && (
                <p className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full self-start mb-auto">
                  <Star className="w-4 h-4 inline mr-1" /> 7박 이상: {tier.sevenNightDiscount}
                </p>
              )}
              <Button 
                className="mt-6 w-full bg-amber-500 hover:bg-amber-600 text-white"
                onClick={() => alert(`${tier.weightRange} 예약을 진행합니다.`)} // 실제 예약 로직 연결 필요
              >
                예약 문의
              </Button>
            </motion.div>
          ))}
        </div>
        {hotelData.additionalPricingInfo && (
          <div className="mt-8 p-6 bg-white rounded-lg shadow-md text-center">
            <h3 className="text-xl font-semibold text-slate-700 mb-4">추가 안내</h3>
            <div className="grid md:grid-cols-3 gap-4 text-slate-600">
              <p><Users className="w-5 h-5 inline mr-1 text-amber-500" /> 다견 가정 할인: {hotelData.additionalPricingInfo.familyDiscount}</p>
              <p><Clock className="w-5 h-5 inline mr-1 text-amber-500" /> 시간 연장: {hotelData.additionalPricingInfo.hourlyExtension} (시간당)</p>
              <p><CalendarDays className="w-5 h-5 inline mr-1 text-amber-500" /> 입/퇴실 시간: {hotelData.additionalPricingInfo.checkInOutTime}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  );

  // 갤러리 섹션 렌더링
  const renderGallerySection = () => (
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">호텔 시설 둘러보기</h2>
        {hotelData.gallery && hotelData.gallery.length > 0 ? (
          <div className="relative w-full max-w-3xl mx-auto h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-xl">
            <AnimatePresence initial={false}>
              <motion.img
                key={currentImageIndex}
                src={hotelData.gallery[currentImageIndex].src}
                alt={hotelData.gallery[currentImageIndex].alt}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute w-full h-full object-cover"
              />
            </AnimatePresence>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-50 text-white text-center">
              <p>{hotelData.gallery[currentImageIndex].caption}</p>
            </div>
            {/* 이전/다음 버튼 (선택적 추가) */}
          </div>
        ) : (
          <p className="text-center text-slate-500">갤러리 이미지가 준비 중입니다.</p>
        )}
      </div>
    </section>
  );

  // 고객 후기 섹션 렌더링
  const renderTestimonialsSection = () => (
    <section className="py-12 md:py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-slate-800 mb-10">고객님들의 생생한 후기</h2>
        {hotelData.testimonials && hotelData.testimonials.length > 0 ? (
          <div className="grid md:grid-cols-2 gap-8">
            {hotelData.testimonials.map((testimonial) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
                initial={{ opacity: 0, scale: 0.9 }} 
                animate={{ opacity: 1, scale: 1 }} 
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-300'}`} />
                  ))}
                </div>
                <p className="text-slate-600 mb-4 leading-relaxed italic">"{testimonial.comment}"</p>
                <p className="text-right font-semibold text-amber-600">- {testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-500">아직 등록된 후기가 없습니다.</p>
        )}
      </div>
    </section>
  );

  // CTA 섹션 렌더링
  const renderCtaSection = () => (
    <section className="py-16 bg-amber-500 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">{hotelData.ctaText || "지금 바로 예약하세요!"}</h2>
        <Button 
          size="lg" 
          variant="outline"
          className="bg-white text-amber-600 hover:bg-slate-100 font-semibold py-3 px-8 rounded-full shadow-md transition-transform transform hover:scale-105 border-amber-600"
          onClick={() => setLocation('/consultation')} // 변경된 부분
        >
          예약하기
        </Button>
      </div>
    </section>
  );

  // --- 메인 렌더링 --- //
  return (
    <div className="min-h-screen bg-white">
      {/* 히어로 섹션 */}
      {renderHeroSection()}

      {/* 가격 정보 섹션 */}
      {renderPricingSection()}

      {/* 호텔 이용 안내 섹션 (분리된 컴포넌트 사용) */}
      {hotelData.description && <HotelGuide description={hotelData.description} />}

      {/* 갤러리 섹션 */}
      {renderGallerySection()}

      {/* 고객 후기 섹션 */}
      {renderTestimonialsSection()}

      {/* CTA 섹션 */}
      {renderCtaSection()}

      {/* 푸터 (필요시 추가) */}
      <footer className="py-8 bg-slate-800 text-slate-300 text-center">
        <p>&copy; {new Date().getFullYear()} 퍼피빌. All rights reserved.</p>
        <p className="text-sm mt-1">사랑하는 반려견을 위한 최고의 선택</p>
      </footer>

      {/* 비디오 모달 (선택적 기능) */}
      <AnimatePresence>
        {showVideoModal && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={() => setShowVideoModal(false)}
          >
            <motion.div 
              initial={{ scale: 0.8 }} 
              animate={{ scale: 1 }} 
              exit={{ scale: 0.8 }}
              className="bg-white p-2 rounded-lg shadow-xl w-full max-w-2xl aspect-video relative"
              onClick={(e) => e.stopPropagation()} // 모달 내부 클릭 시 닫힘 방지
            >
              <iframe 
                className="w-full h-full rounded"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Placeholder video
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
              <Button 
                variant="ghost" 
                size="icon" 
                className="absolute -top-4 -right-4 bg-white rounded-full text-slate-700 hover:bg-slate-200"
                onClick={() => setShowVideoModal(false)}
              >
                <X className="w-5 h-5" />
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HotelDetail;
          