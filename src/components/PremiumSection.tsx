"use client";

interface PremiumSectionProps {
  onCtaClick: () => void;
}

export default function PremiumSection({ onCtaClick }: PremiumSectionProps) {
  const premiumFeatures = [
    {
      number: "01",
      title: "프리미엄 외관 설계",
      description: "도시의 스카이라인을 바꾸는 세련된 외관 디자인과 품격 있는 단지 조경",
      highlight: "랜드마크 디자인"
    },
    {
      number: "02",
      title: "혁신 평면 설계",
      description: "4Bay 판상형 구조로 채광과 통풍이 우수하며, 공간 활용도를 극대화한 실용적 설계",
      highlight: "4Bay 판상형"
    },
    {
      number: "03",
      title: "최고급 마감재",
      description: "디오르나인만의 프리미엄 마감재와 주방 시스템으로 완성되는 고품격 인테리어",
      highlight: "프리미엄 마감"
    },
    {
      number: "04",
      title: "스마트홈 시스템",
      description: "AI 기반 홈 IoT 시스템으로 편리하고 안전한 스마트 라이프 실현",
      highlight: "AI 홈 IoT"
    },
    {
      number: "05",
      title: "커뮤니티 시설",
      description: "피트니스, 골프연습장, 독서실, 키즈카페 등 다양한 입주민 전용 시설",
      highlight: "원스톱 커뮤니티"
    },
    {
      number: "06",
      title: "친환경 단지",
      description: "넓은 중앙 광장과 산책로, 친환경 조경으로 도심 속 힐링 공간 제공",
      highlight: "Green Complex"
    }
  ];

  return (
    <section id="premium" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Premium Features
          </span>
          <h2 className="section-title">
            <span className="text-amber-500">디오르나인</span> 프리미엄
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            디오르나인은 '고급'이라는 단어를<br />
            공간으로 증명합니다.
          </p>
        </div>

        {/* 프리미엄 특징 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {premiumFeatures.map((feature, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl border border-gray-200 hover:border-amber-500 transition-all duration-300 hover:shadow-xl bg-white"
            >
              {/* 번호 */}
              <span className="absolute top-6 right-6 text-6xl font-bold text-gray-100 group-hover:text-amber-100 transition-colors">
                {feature.number}
              </span>

              {/* 하이라이트 태그 */}
              <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 text-xs font-semibold rounded-full mb-4">
                {feature.highlight}
              </span>

              {/* 제목 */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">
                {feature.title}
              </h3>

              {/* 설명 */}
              <p className="text-gray-600 leading-relaxed relative z-10">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* 특별 혜택 배너 */}
        <div className="bg-gradient-to-r from-amber-500 to-amber-600 rounded-3xl p-8 md:p-12 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            지금 상담 신청하시면<br className="md:hidden" /> 특별 혜택을 드립니다
          </h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            견본주택 방문 고객에게 드리는 다양한 혜택과 상세한 분양 정보를 확인하세요.
            전문 상담사가 친절하게 안내해 드립니다.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onCtaClick}
              className="bg-white text-amber-600 font-bold py-4 px-8 rounded-lg hover:bg-gray-100 transition-colors"
            >
              분양 상담 신청
            </button>
            <button
              onClick={onCtaClick}
              className="border-2 border-white text-white font-bold py-4 px-8 rounded-lg hover:bg-white/10 transition-colors"
            >
              견본주택 예약
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
