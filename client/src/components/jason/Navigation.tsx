import { Instagram, Youtube } from "lucide-react";

interface NavigationProps {
  activeSection: string;
  scrollToSection: (sectionId: string) => void;
}

export default function Navigation({ activeSection, scrollToSection }: NavigationProps) {
  return (
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
  );
}