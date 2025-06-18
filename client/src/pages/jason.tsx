"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube, Mail, Phone, MapPin, Award, Users, Calendar, Heart, X, ChevronLeft, ChevronRight } from "lucide-react" // ChevronLeft, ChevronRight 추가
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion" // framer-motion 추가

export default function DogTrainerPortfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [selectedImage, setSelectedImage] = useState<string | null>(null); // Lightbox state - REMOVED
  const [currentAboutImageIndex, setCurrentAboutImageIndex] = useState(0); // Added for single image viewer

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "experience", "services", "gallery", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  // Functions for lightbox
  // const openLightbox = (src: string) => {
  //   setSelectedImage(src);
  // };
  // const closeLightbox = () => {
  //   setSelectedImage(null);
  // };

  const experiences = [
    {
      year: "2020-2025",
      title: "반려견 피트니스 전문 트레이너",
      company: "퍼피빌 유치원 ",
      description: " 맞춤형 피트니스 프로그램 개발 및 운영",
    },
    {
      year: "2021-2024",
      title: "방문교육 반려견 행동수정 전문 트레이너",
      company: "방문교육",
      description: "고객님께 직접 방문하여 맞춤형 훈련 프로그램 교육"
    },
    {
      year: "2020-2021",
      title: "코코스퀘어 반려견 에듀팀",
      company: "코코스퀘어",
      description: "반려견 유치원 트레이너"
    },
    {
      year: "2015-2020",
      title: "돌고래 트레이너",
      company: "씨월드",
      description: "해양동물 트레이닝 및 고래 및 돌고래 관리"
    },
    
  ]

  const services = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "맞춤형 피트니스",
      description: "반려견의 나이, 크기, 건강상태에 맞는 개별 운동 프로그램",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "방문 교육",
      description: "고객님께 직접 방문하여 맞춤형 행동 수정 훈련 프로그램 교육",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "전문 상담",
      description: "반려견 트레이닝 및 운동 계획에 대한 전문적인 상담",
    },
  ]

  const galleryImages = [
    "/images/jason/gallery/1.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/2.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/3.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/4.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/5.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/6.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/7.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/8.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/9.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/10.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/11.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/12.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/13.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/14.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/15.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/16.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/17.jpg", // public 폴더 기준 경로로 수정
    "/images/jason/gallery/18.jpg", // public 폴더 기준 경로로 수정
   



  ]

  // Define images for the About section gallery
  const aboutSectionImages = [
    { id: 1, src: "/images/jason/1.jpg", alt: "소개 이미지 1" },
    { id: 2, src: "/images/jason/2.jpg", alt: "소개 이미지 2" },
    { id: 3, src: "/images/jason/3.jpg", alt: "소개 이미지 3" },
    { id: 4, src: "/images/jason/4.jpg", alt: "소개 이미지 4" },
    { id: 5, src: "/images/jason/5.jpg", alt: "소개 이미지 5" },
    { id: 6, src: "/images/jason/6.jpg", alt: "소개 이미지 6" },
    { id: 7, src: "/images/jason/7.jpg", alt: "소개 이미지 7" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600">MungMungFit</div>
            <div className="hidden md:flex space-x-8">
              {[
                { id: "home", label: "홈" },
                { id: "about", label: "소개" },
                { id: "experience", label: "경력" },
                { id: "services", label: "서비스" },
                { id: "gallery", label: "갤러리" },
                { id: "contact", label: "연락처" },
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`transition-colors ${
                    activeSection === item.id ? "text-purple-600 font-semibold" : "text-gray-600 hover:text-purple-600"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="flex space-x-4">
              {/* wouter의 Link는 href를 사용합니다. target, rel 속성은 그대로 사용 가능합니다. */}
              <a href="https://www.instagram.com/mungmungfit?igsh=cWN3YXJlY3RjYmhx" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="https://www.youtube.com/@Mungmungfit?si=g1AKqatSqNnUWik-" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </a>

            </div>
          </div>
        </div>
      </nav>


              
      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img // Image 컴포넌트를 img 태그로 변경
                src="/images/jason/1.jpg" // public 폴더 기준 경로로 수정
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

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">소개</h2>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Single Image Viewer for About Section with Arrows */}
              <div className="relative w-full h-auto md:h-[400px] rounded-lg overflow-hidden shadow-lg group">
                <motion.img
                  key={aboutSectionImages[currentAboutImageIndex].id} // Add key for re-animation
                  src={aboutSectionImages[currentAboutImageIndex].src}
                  alt={aboutSectionImages[currentAboutImageIndex].alt}
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={() => setCurrentAboutImageIndex((prevIndex) => (prevIndex + 1) % aboutSectionImages.length)} // Advance to next image
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

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">경력 및 이력</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="flex flex-col md:flex-row md:items-center gap-4">
                      <Badge variant="outline" className="w-fit text-purple-600 border-purple-600">
                        {exp.year}
                      </Badge>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-gray-800 mb-1">{exp.title}</h3>
                        <p className="text-purple-600 font-medium mb-2">{exp.company}</p>
                        <p className="text-gray-600">{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">자격증 및 인증</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">CSCC Dog Fitness Coach 자격</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">IDFA Canine Fitness Coach Level2</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">Fear Free Certified Trainer</span>
                </div>

                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">방문 트레이닝, 방문 교육 PT 4천회 이상</span>

                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">반려동물 행동 지도사</span>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">서비스</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow group">
                  <CardContent className="p-0">
                    <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">교육 갤러리</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image, index) => (
                <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg">
                  <img // Image 컴포넌트를 img 태그로 변경
                    src={image || "/images/placeholder.svg"} // public 폴더 기준 경로로 수정
                    alt={`교육 사진 ${index + 1}`}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                    <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity">
                      <p className="text-lg font-semibold">훈련 현장</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">연락처</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6">상담 문의</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">010-2609-6593</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">gmdqn2tp@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">미사강변중앙로170번길 10 제12층 제1201호 (퍼피빌)</span>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">소셜 미디어</h4>
                  <div className="flex space-x-4">
                    <a // Link 컴포넌트를 a 태그로 변경
                      href="https://www.instagram.com/mungmungfit?igsh=cWN3YXJlY3RjYmhx"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>@mungmungfit</span>
                    </a>
                    <a // Link 컴포넌트를 a 태그로 변경
                      href="https://youtube.com/@mungmungfit?si=g1AKqatSqNnUWik-"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                      <span>mungmungfit channel</span>
                    </a>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">운영 시간</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">월-금</span>
                      <span className="text-gray-800">18:00~24:00, 24시간 상담 가능</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">토요일</span>
                      <span className="text-gray-800">24시간 상담 가능</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">일요일</span>
                      <span className="text-gray-800">24시간 상담 가능</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Link href="/consultation">
                      <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                        <Calendar className="w-4 h-4 mr-2" />
                        상담 예약하기
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold text-purple-400 mb-4">MungMungFit</div>
          <p className="text-gray-400 mb-4">반려견의 건강한 삶을 위한 전문 피트니스 트레이닝</p>
          <div className="flex justify-center space-x-6">
            <a href="https://www.instagram.com/mungmungfit?igsh=cWN3YXJlY3RjYmhx" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://www.youtube.com/@Mungmungfit?si=g1AKqatSqNnUWik-" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">

              <Youtube className="w-6 h-6" />
            </a>

          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            © 2024 MungMungFit. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
