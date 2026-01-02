"use client";

import { useState, useEffect } from "react";

interface HeaderProps {
  onCtaClick: () => void;
}

export default function Header({ onCtaClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "브랜드", id: "brand" },
    { label: "입지환경", id: "location" },
    { label: "프리미엄", id: "premium" },
    { label: "평면정보", id: "floorplan" },
    { label: "상담신청", id: "inquiry" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* 로고 */}
        <div
          className="flex items-center cursor-pointer"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <img
            src="/images/20260102_165153-removebg-preview.png"
            alt="판교 디오르나인"
            className="h-10 md:h-12 w-auto"
          />
        </div>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`font-medium transition-colors hover:text-amber-500 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={onCtaClick}
            className="bg-amber-500 text-white px-6 py-2 rounded-full font-bold hover:bg-amber-600 transition-colors"
          >
            방문예약
          </button>
        </nav>

        {/* 모바일 메뉴 버튼 */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? "bg-gray-900" : "bg-white"} ${isMobileMenuOpen ? "rotate-45 translate-y-2" : ""}`}></div>
          <div className={`w-6 h-0.5 mb-1.5 transition-all ${isScrolled ? "bg-gray-900" : "bg-white"} ${isMobileMenuOpen ? "opacity-0" : ""}`}></div>
          <div className={`w-6 h-0.5 transition-all ${isScrolled ? "bg-gray-900" : "bg-white"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-2" : ""}`}></div>
        </button>
      </div>

      {/* 모바일 메뉴 */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col py-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="py-3 px-6 text-left font-medium text-gray-700 hover:bg-amber-50 hover:text-amber-500 transition-colors"
            >
              {item.label}
            </button>
          ))}
          <div className="px-6 pt-4">
            <button
              onClick={onCtaClick}
              className="w-full bg-amber-500 text-white py-3 rounded-lg font-bold hover:bg-amber-600 transition-colors"
            >
              방문예약
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
