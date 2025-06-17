import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronDown, ChevronUp } from "lucide-react";

// 갤러리에 표시될 이미지 데이터 배열
const galleryImages = [
  {
    src: "/images/gallery/1.jpg",
    alt: "강아지들이 함께 노는 모습갤러리 이미지 1",
  },
  {
    src: "/images/gallery/2.jpg",
    alt: "갤러리 이미지 2",
  },
  {
    src: "/images/gallery/3.jpg",
    alt: "갤러리 이미지 3",
  },
  {
    src: "/images/gallery/4.jpg",
    alt: "갤러리 이미지 4: 뛰어노는 강아지", // alt 속성에 의미있는 설명을 추가하는 것이 좋습니다.
    // height: "h-68" // Masonry 레이아웃을 위해 개별 높이 지정은 제거하거나 CSS로 관리하는 것이 좋습니다.
  },
  {
    src: "/images/gallery/5.jpg",
    alt: "갤러리 이미지 5: 창밖을 보는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/6.jpg",
    alt: "갤러리 이미지 6: 장난감을 가지고 노는 강아지",
    // height: "h-72"
  },
  {
    src: "/images/gallery/7.jpg",
    alt: "갤러리 이미지 7: 풀밭 위의 강아지",
    // height: "h-60"
  },
  {
    src: "/images/gallery/8.jpg",
    alt: "갤러리 이미지 8: 쉬고 있는 강아지들",
    // height: "h-64"
  },
  {
    src: "/images/gallery/9.jpg",
    alt: "갤러리 이미지 9: 훈련 중인 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/10.jpg",
    alt: "갤러리 이미지 10: 귀여운 강아지 표정",
    // height: "h-64"
  },
  {
    src: "/images/gallery/11.jpg",
    alt: "갤러리 이미지 11: 친구와 함께 있는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/12.jpg",
    alt: "갤러리 이미지 12: 공놀이 하는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/13.jpg",
    alt: "갤러리 이미지 13: 잠자는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/14.jpg",
    alt: "갤러리 이미지 14: 간식을 기다리는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/15.jpg",
    alt: "갤러리 이미지 15: 산책하는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/16.jpg",
    alt: "갤러리 이미지 16: 물 마시는 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/17.jpg",
    alt: "갤러리 이미지 17: 미용 후 강아지",
    // height: "h-64"
  },
  {
    src: "/images/gallery/18.jpg",
    alt: "갤러리 이미지 18: 다양한 강아지들",
    // height: "h-64"
  },
  {
    src: "/images/gallery/19.jpg",
    alt: "갤러리 이미지 19: 퍼피빌 시설 내부",
    // height: "h-64"
  },
  {
    src: "/images/gallery/20.jpg",
    alt: "갤러리 이미지 20: 강아지 교육 모습",
    // height: "h-64"
  },
  {
    src: "/images/gallery/21.jpg",
    alt: "갤러리 이미지 21",
    // height: "h-64"
  },
  {
    src: "/images/gallery/22.jpg",
    alt: "갤러리 이미지 22",
    // height: "h-64"
  },
  {
    src: "/images/gallery/23.jpg",
    alt: "갤러리 이미지 23",
    // height: "h-64"
  },
  {
    src: "/images/gallery/24.jpg",
    alt: "갤러리 이미지 24",
    // height: "h-64"
  },
  {
    src: "/images/gallery/25.jpg",
    alt: "갤러리 이미지 25",
    // height: "h-64"
  },
  {
    src: "/images/gallery/26.jpg",
    alt: "갤러리 이미지 26",
    // height: "h-64"
  },
  {
    src: "/images/gallery/27.jpg",
    alt: "갤러리 이미지 27",
    // height: "h-64"
  },
  {
    src: "/images/gallery/28.jpg",
    alt: "갤러리 이미지 28",
    // height: "h-64"
  },
  {
    src: "/images/gallery/29.jpg",
    alt: "갤러리 이미지 29",
  }
];

/**
 * 갤러리 컴포넌트
 * - 이미지들을 Masonry 레이아웃으로 보여줍니다.
 * - 이미지 클릭 시 라이트박스로 확대해서 보여줍니다.
 * - '더보기'/'접기' 버튼으로 표시되는 이미지 수를 조절할 수 있습니다.
 */
export default function Gallery() {
  // 라이트박스에서 선택된 이미지의 src를 저장하는 상태
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  // 갤러리 확장 여부를 저장하는 상태 (더보기/접기)
  const [isExpanded, setIsExpanded] = useState(false);

  // 현재 화면에 보여줄 이미지 목록
  // isExpanded 상태에 따라 전체 이미지를 보여주거나 처음 3개만 보여줌
  const imagesToShow = isExpanded ? galleryImages : galleryImages.slice(0, 3);

  return (
    <section id="gallery" className="py-20 bg-cream relative pb-28"> {/* 하단 고정 버튼을 위한 여백 */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 갤러리 제목 및 설명 섹션 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }} // 초기 상태 (투명, 아래로 약간 이동)
          whileInView={{ opacity: 1, y: 0 }} // 화면에 보일 때 애니메이션 (불투명, 원래 위치)
          transition={{ duration: 0.6 }} // 애니메이션 지속 시간
          viewport={{ once: true }} // 애니메이션 한 번만 실행
        >
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-dark-gray mb-4">
            <span className="text-warm-orange">행복한 순간들</span>
          </h2>
          <p className="text-xl text-medium-gray max-w-2xl mx-auto">
            퍼피빌에서 보내는 우리 아이들의 즐거운 일상을 만나보세요
          </p>
        </motion.div>

        {/* 이미지 그리드 (Masonry 레이아웃) */}
        <div className="masonry">
          {imagesToShow.map((image, index) => (
            <motion.div
              key={index}
              className="masonry-item" // Masonry 레이아웃을 위한 클래스
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }} // 각 이미지마다 약간의 지연을 줘서 순차적으로 나타나도록 함
              viewport={{ once: true }}
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`w-full object-cover rounded-2xl shadow-lg cursor-pointer`}
                whileHover={{ scale: 1.02, shadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }} // 마우스 호버 시 약간 확대 및 그림자 효과
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(image.src)} // 이미지 클릭 시 라이트박스 표시
              />
            </motion.div>
          ))}
        </div>

        {/* 더보기/숨기기 버튼 - 이미지가 3개 초과일 때만 표시 */}
        {galleryImages.length > 3 && (
          <div className="fixed bottom-0 left-0 right-0 flex justify-center py-4 bg-cream bg-opacity-90 backdrop-blur-sm z-40">
            <motion.button
              onClick={() => setIsExpanded(!isExpanded)} // 클릭 시 isExpanded 상태 토글
              className="inline-flex items-center justify-center px-8 py-3 text-base font-semibold text-white transition-all duration-200 bg-warm-orange border border-transparent rounded-lg hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-warm-orange shadow-lg"
              whileHover={{ scale: 1.05 }} // 마우스 호버 시 약간 확대
              whileTap={{ scale: 0.95 }} // 클릭 시 약간 축소
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  접기
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  사진 더보기
                </>
              )}
            </motion.button>
          </div>
        )}

        {/* 라이트박스 모달 */}
        <AnimatePresence>
          {selectedImage && ( // selectedImage가 있을 때만 라이트박스 렌더링
            <motion.div
              className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4" // 화면 전체를 덮는 반투명 배경
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedImage(null)} // 배경 클릭 시 라이트박스 닫기
            >
              <motion.div
                className="relative max-w-4xl max-h-full" // 라이트박스 이미지 컨테이너
                initial={{ scale: 0.5, opacity: 0 }} // 초기 상태 (작고 투명)
                animate={{ scale: 1, opacity: 1 }} // 나타날 때 애니메이션 (원래 크기, 불투명)
                exit={{ scale: 0.5, opacity: 0 }} // 사라질 때 애니메이션
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()} // 이미지 클릭 시 라이트박스 닫힘 방지
              >
                <img
                  src={selectedImage}
                  alt="Gallery lightbox"
                  className="max-w-full max-h-full object-contain rounded-lg" // 이미지가 컨테이너를 벗어나지 않도록 함
                />
                <button
                  className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                  onClick={() => setSelectedImage(null)} // 닫기 버튼 클릭 시 라이트박스 닫기
                >
                  <X className="w-8 h-8" />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

