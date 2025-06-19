import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-md z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <img src="/images/footer/logo.png" alt="퍼피빌 로고" className="h-8 w-8 mr-2" /> {/* 로고 이미지 경로를 확인해주세요 */}
            <h1 className="text-2xl font-gaegu font-bold text-warm-orange">퍼피빌</h1>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-dark-gray hover:text-warm-orange transition-colors">
                서비스
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-dark-gray hover:text-warm-orange transition-colors">
                갤러리
              </button>
              <button onClick={() => scrollToSection('reviews')} className="text-dark-gray hover:text-warm-orange transition-colors">
                후기
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-dark-gray hover:text-warm-orange transition-colors">
                요금
              </button>
              <button onClick={() => scrollToSection('about')} className="text-dark-gray hover:text-warm-orange transition-colors">
                소개
              </button>
            </div>
          </div>
          
          {/* CTA Button */}
          <Link href="/consultation">
            <button className="hidden md:block bg-warm-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all transform hover:scale-105">
              상담 신청
            </button>
          </Link>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-dark-gray hover:text-warm-orange"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-dark-gray hover:text-warm-orange transition-colors w-full text-left">
              서비스
            </button>
            <button onClick={() => scrollToSection('gallery')} className="block px-3 py-2 text-dark-gray hover:text-warm-orange transition-colors w-full text-left">
              갤러리
            </button>
            <button onClick={() => scrollToSection('reviews')} className="block px-3 py-2 text-dark-gray hover:text-warm-orange transition-colors w-full text-left">
              후기
            </button>
            <button onClick={() => scrollToSection('pricing')} className="block px-3 py-2 text-dark-gray hover:text-warm-orange transition-colors w-full text-left">
              요금
            </button>
            <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-dark-gray hover:text-warm-orange transition-colors w-full text-left">
              소개
            </button>
            <Link href="/consultation">
              <button className="w-full mt-4 bg-warm-orange text-white px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                상담 신청
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
