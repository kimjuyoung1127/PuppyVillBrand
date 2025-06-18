"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Instagram, Youtube, Mail, Phone, MapPin, Award, Users, Calendar, Heart } from "lucide-react"
// import { Canvas } from "@react-three/fiber"
// import { OrbitControls, Sphere, MeshDistortMaterial, Environment } from "@react-three/drei"
// import { Suspense } from "react"
import { Link } from "wouter"; // 이 부분을 추가해주세요.

/*
function AnimatedSphere() {
  return (
    <Sphere visible args={[1, 100, 200]} scale={2}>
      <MeshDistortMaterial color="#8B5CF6" attach="material" distort={0.3} speed={1.5} roughness={0} />
    </Sphere>
  )
}

function ThreeBackground() {
  return (
    <div className="absolute inset-0 -z-10">
      <Canvas>
        <Suspense fallback={null}>
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
          <ambientLight intensity={1} />
          <directionalLight position={[3, 2, 1]} />
          <AnimatedSphere />
          <Environment preset="city" />
        </Suspense>
      </Canvas>
    </div>
  )
}
*/

export default function DogTrainerPortfolio() {
  const [activeSection, setActiveSection] = useState("home")

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

  const experiences = [
    {
      year: "2020-현재",
      title: "반려견 피트니스 전문 트레이너",
      company: "펫핏 트레이닝 센터",
      description: "대형견부터 소형견까지 맞춤형 피트니스 프로그램 개발 및 운영",
    },
    {
      year: "2018-2020",
      title: "동물 재활 치료사",
      company: "서울 동물병원",
      description: "수술 후 재활 및 물리치료를 통한 반려견 건강 회복 지원",
    },
    {
      year: "2016-2018",
      title: "반려견 행동 교정사",
      company: "해피독 트레이닝",
      description: "문제행동 교정 및 기본 훈련을 통한 반려견 사회화 교육",
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
      title: "그룹 클래스",
      description: "사회화 훈련과 함께하는 즐거운 그룹 피트니스 수업",
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "전문 상담",
      description: "반려견 건강 관리 및 운동 계획에 대한 전문적인 상담",
    },
  ]

  const galleryImages = [
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
    "/images/placeholder.svg?height=300&width=400", // public 폴더 기준 경로로 수정
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600">DogFit Pro</div>
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
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-500 hover:text-pink-600 transition-colors">
                <Instagram className="w-6 h-6" />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-500 hover:text-red-600 transition-colors">
                <Youtube className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* <ThreeBackground /> */}
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img // Image 컴포넌트를 img 태그로 변경
                src="/images/placeholder.svg?height=200&width=200" // public 폴더 기준 경로로 수정
                alt="프로필 사진"
                width={200}
                height={200}
                className="rounded-full mx-auto border-4 border-white shadow-2xl"
              />
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              김도그
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
              <div>
                <img // Image 컴포넌트를 img 태그로 변경
                  src="/images/placeholder.svg?height=400&width=500" // public 폴더 기준 경로로 수정
                  alt="트레이닝 모습"
                  width={500}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  안녕하세요! 반려견 피트니스 전문 트레이너 김도그입니다. 8년간 1000마리 이상의 반려견과 함께 건강한
                  운동 습관을 만들어왔습니다.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  각 반려견의 개성과 특성을 이해하고, 맞춤형 운동 프로그램을 통해 신체적 건강뿐만 아니라 정신적 웰빙까지
                  케어합니다.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                  <div className="text-center p-4 bg-purple-50 rounded-lg">
                    <div className="text-3xl font-bold text-purple-600">1000+</div>
                    <div className="text-sm text-gray-600">훈련한 반려견</div>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <div className="text-3xl font-bold text-blue-600">8년</div>
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
                  <span className="text-gray-700">반려동물 행동교정사 1급</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">동물 물리치료사 자격증</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">펫 피트니스 전문가 인증</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-yellow-500" />
                  <span className="text-gray-700">반려견 응급처치 자격증</span>
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
                    <span className="text-gray-700">010-1234-5678</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">dogfit.trainer@email.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600" />
                    <span className="text-gray-700">서울시 강남구 반려견로 123</span>
                  </div>
                </div>

                <div className="pt-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">소셜 미디어</h4>
                  <div className="flex space-x-4">
                    <Link // Link 컴포넌트 to 속성 사용
                      to="https://instagram.com"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
                    >
                      <Instagram className="w-6 h-6" />
                      <span>@dogfit_trainer</span>
                    </Link>
                    <Link // Link 컴포넌트 to 속성 사용
                      to="https://youtube.com"
                      target="_blank" rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-red-500 hover:text-red-600 transition-colors"
                    >
                      <Youtube className="w-6 h-6" />
                      <span>DogFit Channel</span>
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="p-6">
                <CardContent className="p-0">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">운영 시간</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">월-금</span>
                      <span className="text-gray-800">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">토요일</span>
                      <span className="text-gray-800">09:00 - 15:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">일요일</span>
                      <span className="text-gray-800">휴무</span>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t">
                    <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                      <Calendar className="w-4 h-4 mr-2" />
                      상담 예약하기
                    </Button>
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
          <div className="text-2xl font-bold text-purple-400 mb-4">DogFit Pro</div>
          <p className="text-gray-400 mb-4">반려견의 건강한 삶을 위한 전문 피트니스 트레이닝</p>
          <div className="flex justify-center space-x-6">
            <Link to="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-400 hover:text-pink-300 transition-colors">
              <Instagram className="w-6 h-6" />
            </Link>
            <Link to="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-300 transition-colors">
              <Youtube className="w-6 h-6" />
            </Link>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-700 text-sm text-gray-400">
            © 2024 DogFit Pro. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}
