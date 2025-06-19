import { useState, useEffect, useRef } from "react"; // useRef 추가
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react"; // 아이콘 추가

// 이벤트 이미지 경로 (실제 이미지 경로로 수정해주세요)
const eventImages = [
  "/images/events/1.jpg",
  "/images/events/2.jpg",
  "/images/events/3.jpg",
  // 필요에 따라 더 많은 이미지 추가
];

export default function EventNotice() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageHeight, setImageHeight] = useState<number | string>('auto'); // 이미지 높이 상태 추가
  const imageRef = useRef<HTMLImageElement>(null); // 이미지 참조 추가

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
    }, 10000); // 5초마다 이미지 변경

    return () => clearInterval(interval);
  }, []);

  // 현재 이미지가 변경될 때마다 높이를 재계산
  useEffect(() => {
    if (eventImages.length > 0) {
      const img = new Image();
      img.src = eventImages[currentImageIndex];
      img.onload = () => {
        // 부모 컨테이너의 최대 너비(max-w-3xl)를 고려하여 높이 계산
        // max-w-3xl은 Tailwind에서 768px (48rem) 입니다.
        const containerMaxWidth = 768;
        const aspectRatio = img.naturalWidth / img.naturalHeight;
        let calculatedHeight = containerMaxWidth / aspectRatio;
        
        // 화면 너비가 containerMaxWidth보다 작을 경우, 화면 너비에 맞춰 높이 재계산
        if (window.innerWidth < containerMaxWidth) {
            calculatedHeight = window.innerWidth / aspectRatio;
        }
        
        // 이미지의 원본 높이보다 커지지 않도록 제한
        setImageHeight(Math.min(calculatedHeight, img.naturalHeight)); 
      };
    }
  }, [currentImageIndex, eventImages]);

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + eventImages.length) % eventImages.length);
  };

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % eventImages.length);
  };

  if (eventImages.length === 0) {
    return (
      <section id="event-notice" className="py-16 bg-warm-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-neutral-500">현재 진행 중인 이벤트가 없습니다.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="event-notice" className="py-16 bg-warm-gray-50 relative">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="font-playfair text-4xl md:text-5xl font-bold mb-10 text-center text-neutral-800"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          퍼피빌 <span className="text-warm-orange">공지사항</span>
        </motion.h2>

        {/* 이미지 홀더의 aspect ratio 제거, 높이는 동적으로 설정 */}
        <div 
          className="relative max-w-3xl mx-auto overflow-hidden rounded-lg shadow-xl transition-all duration-500 ease-in-out"
          style={{ height: imageHeight === 'auto' ? 'auto' : `${imageHeight}px` }} // 동적 높이 적용
        >
          {eventImages.map((image, index) => (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, x: index === currentImageIndex ? 0 : (index > currentImageIndex ? '100%' : '-100%') }}
              animate={{
                opacity: index === currentImageIndex ? 1 : 0,
                x: index === currentImageIndex ? '0%' : (index > currentImageIndex ? '100%' : '-100%'),
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              {/* img 태그를 사용하여 실제 이미지 렌더링 및 참조 설정 */}
              <img 
                ref={index === currentImageIndex ? imageRef : null} 
                src={image} 
                alt={`Event ${index + 1}`} 
                className="w-full h-full object-contain" // object-contain으로 이미지 비율 유지
              />
            </motion.div>
          ))}
          
          {/* Navigation Buttons */}
          <button 
            onClick={goToPrevious} 
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
          >
            <ChevronLeft size={28} />
          </button>
          <button 
            onClick={goToNext} 
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full hover:bg-black/50 transition-colors z-10"
          >
            <ChevronRight size={28} />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
            {eventImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${index === currentImageIndex ? 'bg-warm-orange' : 'bg-white/50 hover:bg-white/80'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}