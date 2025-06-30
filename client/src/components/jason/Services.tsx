import { useState, FC } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, ChevronLeft } from 'lucide-react';
import { BehaviorClass, HomeVisitClass, FitnessClass, classes as customClasses } from '@/pages/customtraining';

const services = [
    {
        icon: <Heart className="w-8 h-8" />,
        title: "맞춤형 피트니스",
        description: "반려견의 나이, 크기, 건강상태에 맞는 개별 운동 프로그램",
        id: "fitness"
    },
    {
        icon: <Users className="w-8 h-8" />,
        title: "방문 교육",
        description: "고객님께 직접 방문하여 맞춤형 행동 수정 훈련 프로그램 교육",
        id: "homevisit"
    },
    {
        icon: <Award className="w-8 h-8" />,
        title: "전문 상담",
        description: "반려견 트레이닝 및 운동 계획에 대한 전문적인 상담",
        id: "behavior"
    },
];

export default function Services() {
    const [selectedService, setSelectedService] = useState<string | null>(null);
    const selectedClassData = selectedService ? customClasses.find(c => c.id === selectedService) : null;

    return (
        <section id="services" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">서비스</h2>
                    {!selectedService ? (
                        <div className="grid md:grid-cols-3 gap-8">
                            {services.map((service, index) => (
                                <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow group flex flex-col">
                                    <CardContent className="p-0 flex-grow">
                                        <div className="text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                                            {service.icon}
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{service.title}</h3>
                                        <p className="text-gray-600">{service.description}</p>
                                    </CardContent>
                                    <Button
                                        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white"
                                        onClick={() => setSelectedService(service.id)}
                                    >
                                        자세히 보기
                                    </Button>
                                </Card>
                            ))}
                        </div>
                    ) : (
                        <div>
                            <Button onClick={() => setSelectedService(null)} className="mb-8 bg-gray-200 text-gray-800 hover:bg-gray-300">
                                <ChevronLeft className="w-4 h-4 mr-2" />
                                서비스 목록으로 돌아가기
                            </Button>
                            {selectedClassData && selectedService === 'fitness' && <FitnessClass classData={selectedClassData} index={0} />}
                            {selectedClassData && selectedService === 'homevisit' && <HomeVisitClass classData={selectedClassData} index={0} />}
                            {selectedClassData && selectedService === 'behavior' && <BehaviorClass classData={selectedClassData} index={0} />}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}