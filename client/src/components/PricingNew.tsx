import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "기본 입장료",
    price: "10,000원",
    features: [
      "아메리카노",
      "카페라떼",
      "콜라",
      "사이다",
      "아이스티",
    ],
  },
  {
    name: "프리미엄 입장료",
    price: "12,000원",
    features: [
      "기본 입장료 포함 음료 전체", // 이 문구는 유지하거나, 아래처럼 모든 음료를 나열할 수 있습니다.
      // "아메리카노",
      // "카페라떼",
      // "콜라",
      // "사이다",
      // "아이스티",
      "딸기라떼",
      "초코라떼",
      "망고스무디",
      "딸기스무디",
      "유자차",
      "자몽차",
    ],
  },
];

const dogFee = {
  name: "반려견 동반",
  price: "3,000원",
  features: ["1마리당 적용"],
};

export function PricingNew() {
  return (
    <section id="pricing" className="py-12 bg-amber-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            입장료 안내
          </h2>
          <p className="mt-4 text-base font-normal leading-7 text-gray-600">
            다양한 음료와 함께 즐거운 시간을 보내세요.
          </p>
        </div>

        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 text-left md:max-w-4xl md:grid-cols-2 md:mt-16">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative flex flex-col overflow-hidden bg-white border-2 border-gray-200 rounded-2xl shadow-lg"
            >
              <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-amber-700">
                    {plan.name}
                  </p>
                  <div className="mt-6">
                    <p className="text-5xl font-bold tracking-tight text-amber-800">
                      {plan.price}
                    </p>
                  </div>

                  <ul className="mt-8 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                        <span className="text-base font-medium text-gray-700">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href="#" // 실제 링크는 필요에 따라 수정
                  title="입장 안내"
                  className="inline-flex items-center justify-center w-full px-6 py-4 mt-8 text-base font-medium text-white transition-all duration-200 bg-amber-600 border border-transparent rounded-lg hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-600"
                  role="button"
                >
                  입장 안내 보기
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-md mx-auto mt-8 text-left md:max-w-4xl"
        >
          <div className="relative flex flex-col overflow-hidden bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
            <div className="flex flex-col justify-between flex-1 p-6 lg:p-8">
              <div className="flex-1">
                <p className="text-xl font-semibold text-amber-700">
                  {dogFee.name}
                </p>
                <div className="mt-6">
                  <p className="text-5xl font-bold tracking-tight text-amber-800">
                    {dogFee.price}
                  </p>
                </div>
                <ul className="mt-8 space-y-3">
                  {dogFee.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="w-5 h-5 mr-2 text-green-500 flex-shrink-0 mt-1" />
                      <span className="text-base font-medium text-gray-700">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}