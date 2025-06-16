import React from 'react';
import {
  Clock,
  ShieldCheck,
  Gift,
  Phone,
  MapPin,
  Info,
  AlertTriangle,
  CheckCircle,
  Home, // 추가될 수 있는 아이콘 예시
  Heart, // 추가될 수 있는 아이콘 예시
} from 'lucide-react';

// 호텔 이용 안내 세부 항목 인터페이스 (hotel.tsx와 동일하게 유지)
interface HotelNoticeDetail {
  title: string;
  items: string[];
  icon?: React.ElementType;
}

// 호텔 서비스 설명 인터페이스 (hotel.tsx와 동일하게 유지)
interface HotelServiceDescription {
  introTitle: string;
  introSubtitle: string;
  sections: HotelNoticeDetail[];
  closingTitle: string;
  contactNumber: string;
  location: string;
  finalMessage: string;
}

interface HotelGuideProps {
  description: HotelServiceDescription;
}

const HotelGuide: React.FC<HotelGuideProps> = ({ description }) => {
  if (!description) return null;

  const renderIcon = (IconComponent?: React.ElementType) => {
    if (!IconComponent) return null;
    return <IconComponent className="w-5 h-5 mr-2 text-amber-500 flex-shrink-0" />;
  };

  const renderDescriptionSection = (section: HotelNoticeDetail, index: number) => (
    <div key={index} className="mb-6 p-4 bg-slate-50 rounded-lg shadow">
      <h4 className="text-xl font-semibold text-slate-700 mb-3 flex items-center">
        {renderIcon(section.icon)}
        {section.title}
      </h4>
      <ul className="list-none pl-0 space-y-1 text-slate-600">
        {section.items.map((item, itemIndex) => (
          <li key={itemIndex} className="flex items-start">
            <span className="mr-2 text-amber-500">{item.startsWith('❗') || item.startsWith('💡') || item.startsWith('✅') || item.startsWith('✔️') || item.startsWith('📌') ? '' : '•'}</span>
            <span dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <section id="hotel-guide" className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-amber-500">{description.introTitle}</h2>
          <p className="text-lg text-slate-600 mt-2">{description.introSubtitle}</p>
        </div>

        {description.sections.map(renderDescriptionSection)}

        <div className="mt-10 p-6 bg-amber-50 rounded-lg shadow text-center">
          <h3 className="text-2xl font-semibold text-amber-600 mb-3">{description.closingTitle}</h3>
          <p className="text-slate-700 mb-2 flex items-center justify-center">
            <Phone className="w-5 h-5 mr-2 text-amber-500" /> 문의: {description.contactNumber}
          </p>
          <p className="text-slate-700 mb-4 flex items-center justify-center">
            <MapPin className="w-5 h-5 mr-2 text-amber-500" /> 위치: {description.location}
          </p>
          <p className="text-lg font-medium text-amber-700">{description.finalMessage}</p>
        </div>
      </div>
    </section>
  );
};

export default HotelGuide