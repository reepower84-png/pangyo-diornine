"use client";

import { useState } from "react";

interface FloorPlanSectionProps {
  onCtaClick: () => void;
}

export default function FloorPlanSection({ onCtaClick }: FloorPlanSectionProps) {
  const [selectedType, setSelectedType] = useState(0);

  const floorPlans = [
    {
      type: "84㎡ A1",
      structure: "4BAY 판상형 구조",
      size: "전용25.5평 + 서비스면적 6.7평",
      realSize: "실사용면적 32.3평",
      image: "/images/84 m2 A1.jpg",
      features: [
        "옵션1 팬트리 포스트형 시스템선반 침실 드레스룸 벽판넬형 시스템선반",
        "옵션2 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션3 현관클린시스템"
      ]
    },
    {
      type: "84㎡ A2",
      structure: "4BAY 판상형 구조",
      size: "전용25.5평 + 서비스면적 6.7평",
      realSize: "실사용면적 32.3평",
      image: "/images/84 m2 A2.jpg",
      features: [
        "옵션1 BI냉장고+냉동고+김치냉장고+키큰장인덕션+수입 천정형 후드",
        "옵션2 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션3 현관 중문+에어샤워+에어브러쉬"
      ]
    },
    {
      type: "84㎡ B1",
      structure: "4BAY 판상형 구조",
      size: "전용25.4평 + 서비스면적 8.9평",
      realSize: "실사용면적 34.4평",
      image: "/images/84 m2 B1.jpg",
      features: [
        "옵션1 팬트리 포스트형 시스템선반 침실 드레스룸 벽판넬형 시스템선반",
        "옵션2 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션3 현관클린시스템"
      ]
    },
    {
      type: "84㎡ B2",
      structure: "4BAY 판상형 구조",
      size: "전용25.4평 + 서비스면적 8.9평",
      realSize: "실사용면적 34.4평",
      image: "/images/84 m2 B2.jpg",
      features: [
        "옵션1 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션2 현관 중문+에어샤워+에어브러쉬"
      ]
    },
    {
      type: "84㎡ B3",
      structure: "4BAY 판상형 구조",
      size: "전용25.4평 + 서비스면적 8.9평",
      realSize: "실사용면적 34.4평",
      image: "/images/84 m2 B3.jpg",
      features: [
        "옵션1 팬트리 포스트형 시스템선반 침실 드레스룸 벽판넬형 시스템선반",
        "옵션2 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션3 현관클린시스템"
      ]
    },
    {
      type: "84㎡ B4",
      structure: "4BAY 판상형 구조",
      size: "전용25.4평 + 서비스면적 8.9평",
      realSize: "실사용면적 34.4평",
      image: "/images/84 m2 B4.jpg",
      features: [
        "옵션1 BI냉장고+냉동고+김치냉장고+키큰장인덕션+수입 천정형 후드",
        "옵션2 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션3 현관 중문+에어샤워+에어브러쉬"
      ]
    },
    {
      type: "84㎡ C1",
      structure: "이면조망 타워형 구조",
      size: "전용25.4평 + 서비스면적 14.4평",
      realSize: "실사용면적 38.9평",
      image: "/images/84 m2 C1.jpg",
      features: [
        "옵션1 BI냉장고+냉동고+김치냉장고+플렉스인덕션+수입천정형 후드",
        "옵션2 현관클린시스템"
      ]
    },
    {
      type: "84㎡ C2",
      structure: "이면조망 타워형 구조",
      size: "전용25.4평 + 서비스면적 14.4평",
      realSize: "실사용면적 38.9평",
      image: "/images/84 m2 C2.jpg",
      features: [
        "옵션1 BI 냉장고+냉동고+김치냉장고+키큰장인덕션+수입 천정형 후드",
        "옵션2 팬트리 포스트형 시스템선반 침실 드레스룸 벽판넬형 시스템선반",
        "옵션3 현관 중문+에어샤워+에어브러쉬"
      ]
    }
  ];

  return (
    <section id="floorplan" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Floor Plan
          </span>
          <h2 className="section-title">
            <span className="text-amber-500">평면</span> 안내
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            다양한 라이프스타일에 맞춘<br />
            실용적이고 품격 있는 평면 설계
          </p>
        </div>

        {/* 평면 타입 선택 탭 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {floorPlans.map((plan, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedType === index
                  ? "bg-amber-500 text-white shadow-lg"
                  : "bg-white text-gray-600 hover:bg-amber-50 border border-gray-200"
              }`}
            >
              {plan.type}
            </button>
          ))}
        </div>

        {/* 선택된 평면 상세 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* 평면도 이미지 영역 */}
            <div className="bg-gradient-to-br from-gray-100 to-gray-200 p-4 md:p-8 flex items-center justify-center min-h-[400px]">
              <div className="text-center w-full">
                <img
                  src={floorPlans[selectedType].image}
                  alt={`${floorPlans[selectedType].type} 평면도`}
                  className="w-full max-w-md mx-auto rounded-xl shadow-lg"
                />
                <p className="text-gray-500 text-sm mt-4">
                  * 상세 평면도는 견본주택에서 확인하실 수 있습니다
                </p>
              </div>
            </div>

            {/* 평면 정보 */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6">
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {floorPlans[selectedType].type}타입
                </h3>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="font-semibold text-gray-900">평면 특징</h4>
                <ul className="space-y-3">
                  {floorPlans[selectedType].features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-600">
                      <span className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center text-white text-xs">
                        ✓
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <button onClick={onCtaClick} className="cta-button w-full">
                이 평형 상담 받기
              </button>
            </div>
          </div>
        </div>

        {/* 추가 안내 */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            더 자세한 평면 정보와 분양가는 상담을 통해 안내받으실 수 있습니다
          </p>
          <button
            onClick={onCtaClick}
            className="cta-button-outline border-amber-500"
          >
            전체 평면 상담 받기
          </button>
        </div>
      </div>
    </section>
  );
}
