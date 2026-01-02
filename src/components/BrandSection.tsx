"use client";

interface BrandSectionProps {
  onCtaClick: () => void;
}

export default function BrandSection({ onCtaClick }: BrandSectionProps) {
  const brandValues = [
    {
      icon: "🏆",
      title: "프리미엄 브랜드",
      description: "판교를 대표하는 프리미엄 주거 브랜드 디오르나인"
    },
    {
      icon: "🏠",
      title: "디오르나인 품격",
      description: "품격 있는 라이프스타일을 위한 프리미엄 주거공간"
    },
    {
      icon: "✨",
      title: "차별화된 설계",
      description: "입주민의 라이프스타일을 고려한 혁신적 평면 설계"
    },
    {
      icon: "🛡️",
      title: "믿을 수 있는 품질",
      description: "최고의 기술력으로 완성하는 프리미엄 주거공간"
    }
  ];

  return (
    <section id="brand" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* 섹션 헤더 */}
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm tracking-widest uppercase mb-4 block">
            Brand Story
          </span>
          <h2 className="section-title">
            판교 <span className="text-amber-500">디오르나인</span>
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            판교라는 입지 위에 완성한 하이엔드 주거 기준입니다.<br /><br />
            단순한 오피스텔을 넘어<br />
            공간의 완성도, 마감의 디테일, 거주자의 품격까지 고려한<br />
            프리미엄 주거 브랜드로 설계되었습니다.
          </p>
        </div>

        {/* 브랜드 가치 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {brandValues.map((item, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-gray-50 hover:bg-amber-50 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* 브랜드 설명 */}
        <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-3xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-6">
                판교에서 만나는<br />
                <span className="text-amber-400">디오르나인의 가치</span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                판교 디오르나인은 최고의 노하우와 기술력이 집약된
                프리미엄 주거 단지입니다. 판교 테크노밸리의 중심 입지에서
                디오르나인만의 차별화된 주거 가치를 경험하세요.
              </p>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✔</span>
                  전용 84㎡ 단일 대형 평면
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✔</span>
                  가족형 주거에 최적화된 구조
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-amber-400">✔</span>
                  판교의 희소한 하이엔드 주거 상품
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-amber-400 to-amber-600 rounded-full flex items-center justify-center">
                  <div className="text-center">
                    <p className="text-4xl md:text-5xl font-bold text-white mb-2">DIOR 9</p>
                    <p className="text-white/80 text-sm">Premium Living</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/20 rounded-full backdrop-blur-sm"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-amber-300/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button onClick={onCtaClick} className="cta-button">
            브랜드의 가치를 직접 확인하세요
          </button>
        </div>
      </div>
    </section>
  );
}
