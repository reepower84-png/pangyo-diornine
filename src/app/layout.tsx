import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "판교 디오르나인 | 판교 프리미엄 주거단지",
  description: "경기도 성남시 판교 디오르나인. 판교 테크노밸리 중심의 프리미엄 주거단지. 분양 상담 및 견본주택 방문 예약 접수 중.",
  keywords: "디오르나인, 판교, 성남, 분당, 분양, 아파트, 테크노밸리",
  openGraph: {
    title: "판교 디오르나인",
    description: "판교의 새로운 랜드마크, 디오르나인",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
