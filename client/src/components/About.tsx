import { motion } from "framer-motion";
import { Heart, Zap, Shield, Star } from "lucide-react"; // Award 아이콘은 사용되지 않아 제거했습니다.
import { useState, useEffect } from "react"; // useState와 useEffect를 추가합니다.
import { Link } from "wouter"; // 이 부분도 추가해주세요
import { Button } from "@/components/ui/button"; // 이 부분도 추가해주세요.


const features = [
  {
    icon: Heart,
    title: "사회화 교육",
    description: "반려견의 특성을 고려한 단계별 사회화 프로그램으로 스트레스를 최소화한 교육을 제공합니다."
  },
  {
    icon: Zap,
    title: "전문 독 피트니스",
    description: "반려견에 맞는 운동 강도와 프로그램으로 건강한 체력 관리를 도와드립니다."
  },
  {
    icon: Shield,
    title: "안전 관리 시스템",
    description: "200평 대의 넓은 공간을 통해 충분한 활동량을 보장하고 안전하게 관리해드립니다"
  }
];

const staff = [
  {
    name: "김주영 트레이너",
    position: "훈련 실장",
    experience: "10년 경력",
    description: "10년 경력의 전문 트레이너로 견종별 특성을 고려한 맞춤 트레이닝 서비스를 제공합니다.",
    image: "/images/about/trainer.jpg",
    credentials: [
      "North Carolina State University",
      "CSCC Dog Fitness Coach 자격",
      "방문 트레이닝, 방문 교육 PT 4천회 이상",
      "Fear Free Certified Trainer",
      "IDFA Canine Fitness Coach Level2",
      "전 돌고래 트레이너"
    ]

    
  },
  {
    name: "최예진",
    position: "미용 실장",
    experience: "10년 경력",
    description: "퍼피빌 펫 스타일리스트",
    image: "/images/about/yejin.jpg",
    credentials: [
      "한국 애견협회 반려견 스타일리스트 1,2,3급 자격증",
      "WGA LEVEL A 자격증",
      "IJA PRESENTS 1LEVEL 자격증",
      "KKC 애견미용심사위원 자격증"
    ]
  },
  {
    name: "위시쌤",
    position: "애견 미용사",
    experience: "미용 보조",
    description: "꼼꼼하게 목욕/위생, 깔끔한 라인정리와 부목얼까지 책임져 드립니다!",
    image: "/images/about/wish.jpg",
    credentials: [
      "애견 협회 반려견 스타일리스트 2급",
    ]
  }
];

// Features 섹션에 사용할 이미지 배열
const featureImages = [
  "/images/about/facility_1.jpg", // 추가 이미지 예시 1
  "/images/about/facility_2.jpg", // 추가 이미지 예시 2
  "/images/about/facility_3.jpg",
  "/images/about/facility_4.jpg",
  "/images/about/facility_5.jpg",
  "/images/about/facility_6.jpg",
  "/images/about/facility_7.jpg",
  "/images/about/facility_8.jpg",
];

export default function About() {
  const [currentFeatureImageIndex, setCurrentFeatureImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFeatureImageIndex((prev) => (prev + 1) % featureImages.length);
    }, 5000); // 5초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            퍼피빌만의 <span className="text-warm-orange">특별함</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            반려견 전문 케어 센터로서 차별화된 서비스를 제공합니다
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            className="relative w-full h-80 md:h-96 rounded-2xl shadow-xl overflow-hidden" // 이미지 컨테이너 스타일
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {featureImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: index === currentFeatureImageIndex ? 1 : 0 }}
                transition={{ duration: 1 }} // 이미지 전환 속도
              />
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="font-playfair text-3xl font-bold text-dark-gray mb-6">
              <span className="text-warm-orange">반려견</span> 케어 시스템
            </h3>
            <div className="space-y-6">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 bg-warm-orange rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-dark-gray mb-2">{feature.title}</h4>
                      <p className="text-medium-gray">{feature.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Staff Introduction */}
        <motion.div
          className="bg-cream rounded-3xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="font-playfair text-3xl font-bold text-center text-dark-gray mb-12">
            전문가와 함께하는 <span className="text-warm-orange">케어 서비스</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {staff.map((member, index) => (
              <motion.div
                key={index}
                className="text-center bg-white p-6 rounded-lg shadow-md flex flex-col justify-between" // 카드 스타일 및 flex 설정 추가
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div> {/* 내용 컨테이너 추가 */} 
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-32 h-32 rounded-full mx-auto mb-4 object-cover shadow-lg"
                  />
                  <h4 className="font-bold text-dark-gray mb-2">{member.name}</h4>
                  <p className="text-warm-orange font-semibold mb-2">{member.position}</p>
                  <p className="text-sm text-medium-gray mb-4 min-h-[60px]">{member.description}</p> {/* 최소 높이 설정 */} 
                  
                  <div className="space-y-2 mb-4"> {/* 하단 여백 추가 */} 
                    {member.credentials.map((credential, credIndex) => (
                      <div key={credIndex} className="flex items-center text-sm text-medium-gray">
                        <Star className="w-4 h-4 text-warm-orange mr-2 flex-shrink-0" /> {/* 아이콘 축소 방지 */} 
                        <span>{credential}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <Link 
                  href={member.name === '김주영 트레이너' ? '/jason' : '#'}
                  className="mt-auto" 

                > 
                  <div>
                    <Button variant="outline" className="w-full border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white transition-colors">
                      자세히 보기
                    </Button>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
