"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      {/* 견본주택 안내 */}
      <div className="bg-amber-500 py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-2xl">🏠</span>
              <p className="font-bold text-lg">견본주택 안내</p>
            </div>
            <p className="font-bold">경기도 성남시 분당구 판교대장로2길 34</p>
          </div>
        </div>
      </div>

      {/* 메인 푸터 */}
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* 브랜드 */}
            <div>
              <div className="mb-4">
                <p className="text-2xl font-bold text-amber-400">DIOR 9</p>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                판교에 선보이는 프리미엄 주거 브랜드 디오르나인.
                판교 테크노밸리의 중심에서 새로운 주거 가치를 경험하세요.
              </p>
            </div>

            {/* 바로가기 */}
            <div>
              <h4 className="font-bold text-lg mb-4">바로가기</h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => document.getElementById("brand")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    브랜드 소개
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("location")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    입지환경
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("premium")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    프리미엄
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("floorplan")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    평면안내
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("inquiry")?.scrollIntoView({ behavior: "smooth" })}
                    className="text-gray-400 hover:text-amber-400 transition-colors"
                  >
                    상담신청
                  </button>
                </li>
              </ul>
            </div>

            {/* 연락처 */}
            <div>
              <h4 className="font-bold text-lg mb-4">문의안내</h4>
              <div className="space-y-3">
                <div>
                  <p className="text-gray-400 text-sm">견본주택</p>
                  <p className="text-white">경기도 성남시 분당구 판교대장로2길 34</p>
                </div>
              </div>
            </div>
          </div>

          {/* 하단 카피라이트 */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-gray-500 text-sm text-center md:text-left">
                © {currentYear} 판교 디오르나인. All rights reserved.
              </p>
              <p className="text-gray-500 text-sm">
                본 사이트는 분양 홍보를 위한 사이트로, 실제 분양 정보는 견본주택에서 확인해주세요.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
