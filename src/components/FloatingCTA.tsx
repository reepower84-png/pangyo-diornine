"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

interface FloatingCTAProps {
  onClick: () => void;
}

export default function FloatingCTA({ onClick }: FloatingCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Hero 섹션을 지나면 표시
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* 데스크탑 플로팅 버튼 */}
      <button
        onClick={onClick}
        className={`hidden md:flex fixed right-6 bottom-6 z-40 items-center gap-3 bg-amber-500 text-white px-6 py-4 rounded-full shadow-2xl hover:bg-amber-600 transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <span className="text-xl">📞</span>
        <span className="font-bold">상담 신청</span>
      </button>

      {/* 카카오톡 상담 플로팅 버튼 */}
      <a
        href="http://pf.kakao.com/_TxaaZX/chat"
        target="_blank"
        rel="noopener noreferrer"
        className={`fixed right-6 z-50 w-16 h-16 rounded-full shadow-2xl hover:scale-110 transition-all duration-300 overflow-hidden ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        } md:bottom-24 bottom-28`}
      >
        <Image
          src="/images/카톡_원형_로고.png"
          alt="카카오톡 상담"
          width={64}
          height={64}
          className="w-full h-full object-cover"
        />
      </a>

      {/* 모바일 하단 고정 CTA */}
      <div
        className={`md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-full"
        }`}
      >
        <div className="p-4 flex gap-3">
          <button
            onClick={onClick}
            className="flex-1 bg-amber-500 text-white font-bold py-4 rounded-xl hover:bg-amber-600 transition-colors flex items-center justify-center gap-2"
          >
            <span>📞</span>
            상담 신청
          </button>
          <button
            onClick={onClick}
            className="flex-1 border-2 border-amber-500 text-amber-600 font-bold py-4 rounded-xl hover:bg-amber-50 transition-colors flex items-center justify-center gap-2"
          >
            <span>🏠</span>
            방문 예약
          </button>
        </div>
      </div>

      {/* 모바일 하단 여백 (CTA가 컨텐츠를 가리지 않도록) */}
      <div className={`md:hidden h-24 ${isVisible ? "block" : "hidden"}`}></div>
    </>
  );
}
