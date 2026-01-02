"use client";

interface HeroSectionProps {
  onCtaClick: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  return (
    <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
      {/* 배경 이미지 */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/20260102_165314.jpg')" }}
      >
        {/* 어두운 오버레이 */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* 컨텐츠 */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* 서브 타이틀 */}
        <div className="inline-block mb-6">
          <span className="text-amber-400 text-sm md:text-base font-medium tracking-widest uppercase border border-amber-400/30 px-4 py-2 rounded-full">
            Premium Residence in Pangyo
          </span>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-white text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="text-amber-400">판교</span>
          <br />
          디오르나인
        </h1>

        {/* 설명 */}
        <p className="text-gray-300 text-lg md:text-xl mb-4 max-w-2xl mx-auto leading-relaxed">
          판교 테크노밸리의 새로운 주거 랜드마크
        </p>
        <p className="text-gray-400 text-base md:text-lg mb-10 max-w-2xl mx-auto">
          프리미엄 라이프스타일의 완성, 디오르나인
        </p>

        {/* 핵심 정보 */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-10">
          <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-amber-400 text-2xl md:text-3xl font-bold">판교</p>
            <p className="text-gray-300 text-sm">테크노밸리 프리미엄 입지</p>
          </div>
          <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-amber-400 text-2xl md:text-3xl font-bold">디오르나인</p>
            <p className="text-gray-300 text-sm">프리미엄 주거 브랜드</p>
          </div>
          <div className="text-center px-6 py-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <p className="text-amber-400 text-2xl md:text-3xl font-bold">DIOR 9</p>
            <p className="text-gray-300 text-sm">품격 있는 생활의 시작</p>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onCtaClick}
            className="cta-button text-lg px-10 py-4"
          >
            분양 상담 신청
          </button>
          <button
            onClick={onCtaClick}
            className="cta-button-outline border-white/50 text-white hover:bg-white hover:text-gray-900"
          >
            견본주택 방문예약
          </button>
        </div>
      </div>

      {/* 스크롤 인디케이터 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white/50 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
