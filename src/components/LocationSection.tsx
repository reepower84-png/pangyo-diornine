"use client";

interface LocationSectionProps {
  onCtaClick: () => void;
}

export default function LocationSection({ onCtaClick }: LocationSectionProps) {
  const locationFeatures = [
    {
      category: "교통",
      icon: "🚗",
      items: [
        "신분당선 판교역 도보권",
        "경부고속도로 판교IC 인접",
        "GTX-A 성남역 이용 편리",
        "분당-수서 간 고속도로 인접"
      ]
    },
    {
      category: "교육",
      icon: "🎓",
      items: [
        "판교 명문 학군 인접",
        "분당 학원가 이용 편리",
        "다양한 교육시설 밀집",
        "도서관 및 문화시설 근접"
      ]
    },
    {
      category: "편의시설",
      icon: "🛒",
      items: [
        "현대백화점 판교점 인근",
        "AK플라자 분당점 인접",
        "판교 테크노밸리 상권",
        "분당서울대병원 인접"
      ]
    },
    {
      category: "자연환경",
      icon: "🌳",
      items: [
        "탄천 수변공원 인접",
        "화랑공원 도보권",
        "청정한 주거환경",
        "도심 속 힐링 라이프"
      ]
    }
  ];

  return (
    <section id="location" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Prime Location
          </span>
          <h2 className="section-title">
            <span className="text-amber-500">판교</span> 중심 입지
          </h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            판교 대장지구 핵심 입지에 위치해<br />
            주거·업무·생활 인프라를 모두 가까이에서 누릴 수 있습니다.
          </p>
        </div>

        {/* 입지 장점 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {locationFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">{feature.icon}</span>
                <h3 className="text-xl font-bold text-gray-900">{feature.category}</h3>
              </div>
              <ul className="space-y-3">
                {feature.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start gap-2 text-gray-600">
                    <span className="text-amber-500 mt-1">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* 입지 하이라이트 */}
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* 지도 영역 (시각적 표현) */}
            <div className="bg-gradient-to-br from-slate-100 to-slate-200 p-8 md:p-12 flex items-center justify-center min-h-[400px]">
              <div className="text-center">
                <div className="w-40 h-40 mx-auto mb-6 bg-amber-500 rounded-full flex items-center justify-center shadow-lg">
                  <div className="text-center text-white">
                    <p className="text-3xl font-bold">판교</p>
                    <p className="text-sm">테크노밸리</p>
                  </div>
                </div>
                <div className="space-y-2 text-gray-600 text-left">
                  <p className="flex items-center gap-2">
                    <span className="text-amber-500">✔</span>
                    판교테크노밸리 직주근접
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-500">✔</span>
                    분당·서판교·강남 접근성 우수
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-500">✔</span>
                    분당IC·서분당IC 인접 광역 교통망
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="text-amber-500">✔</span>
                    향후 GTX-A, 월곶–판교선 등 교통 호재 기대
                  </p>
                </div>
              </div>
            </div>

            {/* 설명 영역 */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                판교 중심 생활권<br />
                <span className="text-amber-500">프리미엄 입지의 가치</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                판교는 대한민국의 대표적인 IT/바이오 산업 중심지로,
                우수한 교육환경과 풍부한 생활 인프라를 갖추고 있습니다.
                판교 디오르나인은 이 프리미엄 입지의 중심에 위치하여
                편리한 생활과 미래 가치를 동시에 제공합니다.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">5분</p>
                  <p className="text-sm text-gray-600">판교IC</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">도보권</p>
                  <p className="text-sm text-gray-600">판교역</p>
                </div>
                <div className="text-center p-4 bg-amber-50 rounded-xl">
                  <p className="text-2xl font-bold text-amber-600">10분</p>
                  <p className="text-sm text-gray-600">백화점</p>
                </div>
              </div>
              <button onClick={onCtaClick} className="cta-button w-full md:w-auto">
                입지 상담 받기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
