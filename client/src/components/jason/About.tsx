import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const aboutSectionImages = [
    { id: 1, src: "/images/jason/1.jpg", alt: "소개 이미지 1" },
    { id: 2, src: "/images/jason/2.jpg", alt: "소개 이미지 2" },
    { id: 3, src: "/images/jason/3.jpg", alt: "소개 이미지 3" },
    { id: 4, src: "/images/jason/4.jpg", alt: "소개 이미지 4" },
    { id: 5, src: "/images/jason/5.jpg", alt: "소개 이미지 5" },
    { id: 6, src: "/images/jason/6.jpg", alt: "소개 이미지 6" },
    { id: 7, src: "/images/jason/7.jpg", alt: "소개 이미지 7" },
];

export default function About() {
    const [currentAboutImageIndex, setCurrentAboutImageIndex] = useState(0);

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">소개</h2>
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative w-full h-auto md:h-[400px] rounded-lg overflow-hidden shadow-lg group">
                            <motion.img
                                key={aboutSectionImages[currentAboutImageIndex].id}
                                src={aboutSectionImages[currentAboutImageIndex].src}
                                alt={aboutSectionImages[currentAboutImageIndex].alt}
                                className="w-full h-full object-cover cursor-pointer"
                                onClick={() => setCurrentAboutImageIndex((prevIndex) => (prevIndex + 1) % aboutSectionImages.length)}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                whileHover={{ scale: 1.03 }}
                            />
                            {aboutSectionImages.length > 1 && (
                                <>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentAboutImageIndex((prevIndex) =>
                                                prevIndex === 0 ? aboutSectionImages.length - 1 : prevIndex - 1
                                            );
                                        }}
                                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-50 z-10"
                                        aria-label="Previous Image"
                                    >
                                        <ChevronLeft size={24} />
                                    </button>
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentAboutImageIndex((prevIndex) =>
                                                (prevIndex + 1) % aboutSectionImages.length
                                            );
                                        }}
                                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-opacity-50 z-10"
                                        aria-label="Next Image"
                                    >
                                        <ChevronRight size={24} />
                                    </button>
                                </>
                            )}
                        </div>
                        <div className="space-y-6">
                            <p className="text-lg text-gray-600 leading-relaxed">
                                안녕하세요! 반려견 피트니스 전문 트레이너 <strong>김주영</strong>입니다.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                저는 6년간 5000마리 이상의 반려견과 함께 건강한 습관을 만들어 왔으며, <strong>운동을 통한 신체적 건강</strong>은 물론 <strong>정서적 웰빙까지 케어하는 트레이닝</strong>을 지향합니다. 🐶💪
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                반려견의 건강한 삶을 위해 다양한 프로그램과 솔루션을 제공하고 있으며, 고객의 건강한 반려견을 위해 최선을 다합니다.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                각 반려견의 <strong>성격, 생활환경, 신체 조건</strong>에 맞는 맞춤 솔루션션을 설계하며, 초보 보호자분들도 안심하고 함께할 수 있는 <strong>전문적이고 따뜻한 접근</strong>을 약속드립니다.
                            </p>
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                <div className="text-center p-4 bg-purple-50 rounded-lg">
                                    <div className="text-3xl font-bold text-purple-600">5000+</div>
                                    <div className="text-sm text-gray-600">훈련한 반려견</div>
                                </div>
                                <div className="text-center p-4 bg-blue-50 rounded-lg">
                                    <div className="text-3xl font-bold text-blue-600">10년</div>
                                    <div className="text-sm text-gray-600">경력</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}