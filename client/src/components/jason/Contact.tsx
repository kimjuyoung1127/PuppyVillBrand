import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Instagram, Youtube, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
    return (
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
                                    <a
                                        href="https://www.instagram.com/mungmungfit?igsh=cWN3YXJlY3RjYmhx"
                                        target="_blank" rel="noopener noreferrer"
                                        className="flex items-center space-x-2 text-pink-500 hover:text-pink-600 transition-colors"
                                    >
                                        <Instagram className="w-6 h-6" />
                                        <span>@mungmungfit</span>
                                    </a>
                                    <a
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
    );
}