"use client";

import { useCallback } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BrandSection from "@/components/BrandSection";
import LocationSection from "@/components/LocationSection";
import PremiumSection from "@/components/PremiumSection";
import FloorPlanSection from "@/components/FloorPlanSection";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  const scrollToInquiry = useCallback(() => {
    const inquirySection = document.getElementById("inquiry");
    if (inquirySection) {
      inquirySection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <main className="min-h-screen">
      <Header onCtaClick={scrollToInquiry} />
      <HeroSection onCtaClick={scrollToInquiry} />
      <BrandSection onCtaClick={scrollToInquiry} />
      <LocationSection onCtaClick={scrollToInquiry} />
      <PremiumSection onCtaClick={scrollToInquiry} />
      <FloorPlanSection onCtaClick={scrollToInquiry} />
      <InquirySection />
      <Footer />
      <FloatingCTA onClick={scrollToInquiry} />
    </main>
  );
}
