import { Instagram, Youtube } from "lucide-react";

export default function Footer() {
    return (
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
    );
}