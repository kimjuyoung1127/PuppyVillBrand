import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Award } from "lucide-react";

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
];

export default function Experience() {
    return (
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
    );
}