import { motion } from "framer-motion";
import { Link } from "wouter";
import { ChevronLeft, ChevronDown } from 'lucide-react'; // ChevronDown 아이콘 import 추가
import { Button } from '@/components/ui/button';
import { PricingNew } from "../components/PricingNew";
import { useState, useEffect } from "react"; // useState, useEffect import 추가

interface MenuItem {
  name: string;
  description: string;
  image: string;
  inclusionTier: number; // 0: 단품, 10000: 기본 입장료 포함, 12000: 프리미엄 입장료 포함
}

const menuData: MenuItem[] = [
  {
    name: "아메리카노",
    description: "깊고 풍부한 맛의 아메리카노",
    image: "/images/cafe/americano.jpg",
    inclusionTier: 10000,
  },
  {
    name: "카페라떼",
    description: "부드러운 우유와 에스프레소의 조화",
    image: "/images/cafe/latte.jpg",
    inclusionTier: 12000,
  },
  {
    name: "콜라",
    description: "시원한 탄산음료 콜라",
    image: "/images/cafe/cola.jpg",
    inclusionTier: 10000,
  },
  {
    name: "닥터페퍼",
    description: "달콤하고 시원한 닥터페퍼",
    image: "/images/cafe/pepper.jpg",
    inclusionTier: 10000,
  },
  {
    name: "딸기에이드",
    description: "상큼한 딸기와 부드러운 우유의 만남",
    image: "/images/cafe/strawberrylatte.jpg",
    inclusionTier: 12000,
  },
  {
    name: "초코라떼",
    description: "달콤한 초콜릿과 우유의 조화",
    image: "/images/cafe/chocolatte.jpg",
    inclusionTier: 12000,
  },
  {
    name: "바닐라라떼",
    description: "달콤한 바나나와 우유의 조화",
    image: "/images/cafe/vanillalatte.jpg",
    inclusionTier: 12000,
  },
  {
    name: "돌체라떼",
    description: "달콤한 돌체라떼",
    image: " /images/cafe/dolche.jpg",
    inclusionTier: 12000,
  },
  {
    name: "오렌지주스",
    description: "달콤한 오렌지주스",
    image: "/images/cafe/orangejuice.jpg",
    inclusionTier: 12000,
  },
  {
    name: "자몽티",
    description: "상큼쌉싸름한 자몽티",
    image: "/images/cafe/grapefruittea.jpg",
    inclusionTier: 12000,
  },
  {
    name: "자몽에이드",
    description: "상큼한 자몽에이드",
    image: "/images/cafe/grapefruit.jpg",
    inclusionTier: 0, // 단품 구매
  },
  {
    name: "애플주스",
    description: "상큼한 애플주스",
    image: "/images/cafe/applejuice.jpg",
    inclusionTier: 0, // 단품 구매
  },
];

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const heroImages = [
  "/images/cafe/1.jpg",
  "/images/cafe/2.jpg",
  "/images/cafe/3.jpg",


  // 필요에 따라 더 많은 카페 관련 이미지 추가
];

const CafePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  const heroData = {
    title: "퍼피빌 애견카페",
    subtitle: "반려견과 함께하는 특별한 공간, 맛있는 음료와 즐거운 시간을 만끽하세요.",
  };

  const scrollToContent = () => {
    const element = document.getElementById('cafe-introduction');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-amber-50 font-sans">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/">
              <h1 className="text-2xl font-playfair font-bold text-amber-700 cursor-pointer hover:opacity-80 transition-opacity">
                퍼피빌
              </h1>
            </Link>
            <Link href="/"> 
              <Button variant="ghost" className="flex items-center text-gray-700 hover:text-amber-700">
                <ChevronLeft className="w-4 h-4 mr-2" />
                돌아가기
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Hero.tsx 스타일 적용 */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image Slider */}
        <div className="absolute inset-0">
          {heroImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${image})` }}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentImageIndex ? 1 : 0 }}
              transition={{ duration: 1 }}
            />
          ))}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/50"></div> {/* 어두운 오버레이 */}
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1 
            className="font-playfair text-5xl md:text-7xl font-bold mb-6 leading-tight drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {heroData.title}
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-md"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {heroData.subtitle}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* 버튼은 daycare.tsx의 Hero.tsx와 다르게 카페 페이지에 맞게 수정 가능 */}
            <motion.button 
              className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToContent} // 아래 컨텐츠로 스크롤
            >
              ☕ 카페 둘러보기
            </motion.button>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white cursor-pointer"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          onClick={scrollToContent}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </section>

      {/* 소개 섹션 - Hero 아래로 이동 및 간소화 */}
      <motion.section 
        id="cafe-introduction" // 스크롤 타겟 ID
        className="py-16 px-4 md:px-8 lg:px-16 bg-white" // 배경색 변경
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-6 text-amber-700">카페에서 즐거운 시간을!</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
            퍼피빌 카페는 반려견과 보호자 모두를 위한 아늑하고 편안한 공간입니다.
            엄선된 재료로 만든 다양한 음료와 디저트를 즐기며, 사랑하는 반려견과 소중한 추억을 만들어보세요.
            </p>
        </div>
      </motion.section>

      {/* 이용 안내 및 가격 정보 섹션 */}
      <PricingNew />

      {/* 메뉴 섹션 */}
      <motion.section 
        className="py-16 px-4 md:px-8 lg:px-16 bg-amber-100"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={sectionVariants}
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center text-amber-700 mb-12">전체 메뉴</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {menuData.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
            >
              <img src={item.image} alt={item.name} className="w-full h-56 object-cover"/>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-amber-600">{item.name}</h3>
                <p className="text-gray-600 mb-3 text-sm h-10">{item.description}</p>
                {item.inclusionTier > 0 && (
                  <p className="text-sm font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full inline-block mt-2">
                    {item.inclusionTier === 10000 && "기본 입장료 포함"}
                    {item.inclusionTier === 12000 && "프리미엄 입장료 포함"}
                  </p>
                )}
                {item.inclusionTier === 0 && (
                   <p className="text-sm font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full inline-block mt-2">
                     단품 주문 가능
                   </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Footer 영역 */}
      <footer className="text-center py-8 text-gray-600 text-sm bg-white border-t border-gray-200">
        <p>&copy; {new Date().getFullYear()} PuppyVill. All rights reserved.</p>
        <p>퍼피빌 | 대표: 하민주 | 사업자등록번호: 123-45-67890</p>
        <p>주소: 미사강변중앙로170번길 10 제12층 제1201호 (퍼피빌)</p>
      </footer>

    </div>
  );
};

export default CafePage;