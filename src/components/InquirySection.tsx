"use client";

import { useState, FormEvent } from "react";

export default function InquirySection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    inquiry: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/inquiry", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", inquiry: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneChange = (value: string) => {
    // 숫자만 추출
    const numbers = value.replace(/[^0-9]/g, "");

    // 전화번호 형식으로 변환
    let formatted = "";
    if (numbers.length <= 3) {
      formatted = numbers;
    } else if (numbers.length <= 7) {
      formatted = `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      formatted = `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(7, 11)}`;
    }

    setFormData({ ...formData, phone: formatted });
  };

  return (
    <section id="inquiry" className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* 왼쪽: 안내 텍스트 */}
          <div className="text-white">
            <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-amber-400">분양 상담</span> 신청
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              판교 디오르나인에 관심을 가져주셔서 감사합니다.
              아래 양식을 작성해주시면 전문 상담사가 빠른 시간 내에 연락드리겠습니다.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-xl">📞</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">전화 상담</h4>
                  <p className="text-gray-400">평일 09:00 ~ 18:00 상담 가능</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-xl">🏠</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">견본주택 방문</h4>
                  <p className="text-gray-400">사전 예약 시 원활한 상담 가능</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-amber-400 text-xl">📋</span>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1">맞춤 상담</h4>
                  <p className="text-gray-400">고객님께 맞는 평형과 조건 안내</p>
                </div>
              </div>
            </div>
          </div>

          {/* 오른쪽: 문의 폼 */}
          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              상담 신청하기
            </h3>

            {submitStatus === "success" ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl">✓</span>
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  상담 신청이 완료되었습니다
                </h4>
                <p className="text-gray-600 mb-6">
                  빠른 시간 내에 연락드리겠습니다.
                </p>
                <button
                  onClick={() => setSubmitStatus("idle")}
                  className="text-amber-500 font-semibold hover:underline"
                >
                  다시 신청하기
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* 이름 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    이름 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="홍길동"
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none text-gray-900"
                  />
                </div>

                {/* 전화번호 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    전화번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => handlePhoneChange(e.target.value)}
                    placeholder="010-1234-5678"
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none text-gray-900"
                  />
                </div>

                {/* 분양문의 */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    분양문의
                  </label>
                  <textarea
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    placeholder="관심 있는 평형이나 문의사항을 적어주세요"
                    rows={4}
                    className="w-full px-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all outline-none resize-none text-gray-900"
                  />
                </div>

                {/* 개인정보 동의 */}
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    id="privacy"
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-amber-500 focus:ring-amber-500"
                  />
                  <label htmlFor="privacy" className="text-sm text-gray-600">
                    개인정보 수집 및 이용에 동의합니다. (필수)
                    <br />
                    <span className="text-gray-400 text-xs">
                      수집항목: 이름, 연락처, 문의내용 / 보유기간: 상담 완료 후 1년
                    </span>
                  </label>
                </div>

                {/* 에러 메시지 */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm">
                    신청 중 오류가 발생했습니다. 다시 시도해주세요.
                  </div>
                )}

                {/* 제출 버튼 */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full cta-button disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "신청 중..." : "상담 신청하기"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
