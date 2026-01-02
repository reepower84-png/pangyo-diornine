"use client";

import { useState, useEffect } from "react";

interface InquiryData {
  id: number;
  name: string;
  phone: string;
  inquiry: string;
  created_at: string;
  status: "new" | "contacted" | "completed";
}

const ADMIN_PASSWORD = "dior9_2024";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [inquiries, setInquiries] = useState<InquiryData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filter, setFilter] = useState<"all" | "new" | "contacted" | "completed">("all");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPasswordError("");
      fetchInquiries();
    } else {
      setPasswordError("비밀번호가 올바르지 않습니다.");
    }
  };

  const fetchInquiries = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/inquiry");
      const data = await response.json();
      setInquiries(data.data || []);
    } catch (error) {
      console.error("Failed to fetch inquiries:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const updateStatus = async (id: number, status: InquiryData["status"]) => {
    try {
      await fetch("/api/inquiry", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status })
      });
      fetchInquiries();
    } catch (error) {
      console.error("Failed to update status:", error);
    }
  };

  const deleteInquiry = async (id: number) => {
    if (!confirm("정말 삭제하시겠습니까?")) return;

    try {
      await fetch(`/api/inquiry?id=${id}`, { method: "DELETE" });
      fetchInquiries();
    } catch (error) {
      console.error("Failed to delete inquiry:", error);
    }
  };

  const getStatusBadge = (status: InquiryData["status"]) => {
    const styles = {
      new: "bg-red-100 text-red-700",
      contacted: "bg-yellow-100 text-yellow-700",
      completed: "bg-green-100 text-green-700"
    };
    const labels = {
      new: "신규",
      contacted: "연락완료",
      completed: "상담완료"
    };
    return (
      <span className={`px-3 py-1 rounded-full text-sm font-medium ${styles[status]}`}>
        {labels[status]}
      </span>
    );
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("ko-KR", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    }).format(date);
  };

  const filteredInquiries = filter === "all"
    ? inquiries
    : inquiries.filter((i) => i.status === filter);

  const stats = {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    completed: inquiries.filter((i) => i.status === "completed").length
  };

  // 로그인 화면
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-2">관리자 로그인</h1>
            <p className="text-gray-500">판교 디오르나인 어드민</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                비밀번호
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent outline-none"
                placeholder="비밀번호를 입력하세요"
              />
              {passwordError && (
                <p className="text-red-500 text-sm mt-2">{passwordError}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 text-white font-bold py-3 rounded-xl hover:bg-amber-600 transition-colors"
            >
              로그인
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            기본 비밀번호: dior9_2024
          </p>
        </div>
      </div>
    );
  }

  // 어드민 대시보드
  return (
    <div className="min-h-screen bg-gray-100">
      {/* 헤더 */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-xl font-bold text-gray-900">관리자 대시보드</h1>
            <p className="text-sm text-gray-500">판교 디오르나인</p>
          </div>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* 통계 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <p className="text-gray-500 text-sm mb-1">전체 문의</p>
            <p className="text-3xl font-bold text-gray-900">{stats.total}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-500">
            <p className="text-gray-500 text-sm mb-1">신규 문의</p>
            <p className="text-3xl font-bold text-red-600">{stats.new}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-yellow-500">
            <p className="text-gray-500 text-sm mb-1">연락완료</p>
            <p className="text-3xl font-bold text-yellow-600">{stats.contacted}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
            <p className="text-gray-500 text-sm mb-1">상담완료</p>
            <p className="text-3xl font-bold text-green-600">{stats.completed}</p>
          </div>
        </div>

        {/* 필터 및 새로고침 */}
        <div className="bg-white rounded-xl shadow-sm p-4 mb-6 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap gap-2">
            {(["all", "new", "contacted", "completed"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setFilter(status)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  filter === status
                    ? "bg-amber-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {status === "all" && "전체"}
                {status === "new" && "신규"}
                {status === "contacted" && "연락완료"}
                {status === "completed" && "상담완료"}
              </button>
            ))}
          </div>
          <button
            onClick={fetchInquiries}
            disabled={isLoading}
            className="px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors disabled:opacity-50"
          >
            {isLoading ? "로딩 중..." : "새로고침"}
          </button>
        </div>

        {/* 문의 목록 */}
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {filteredInquiries.length === 0 ? (
            <div className="text-center py-16 text-gray-500">
              {filter === "all" ? "아직 문의가 없습니다." : "해당 상태의 문의가 없습니다."}
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">상태</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">이름</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">전화번호</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">문의내용</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">접수일시</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">관리</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  {filteredInquiries.map((inquiry) => (
                    <tr key={inquiry.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        {getStatusBadge(inquiry.status)}
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900">
                        {inquiry.name}
                      </td>
                      <td className="px-6 py-4 text-gray-600">
                        <a href={`tel:${inquiry.phone}`} className="text-blue-600 hover:underline">
                          {inquiry.phone}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-gray-600 max-w-xs truncate">
                        {inquiry.inquiry || "-"}
                      </td>
                      <td className="px-6 py-4 text-gray-500 text-sm">
                        {formatDate(inquiry.created_at)}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <select
                            value={inquiry.status}
                            onChange={(e) => updateStatus(inquiry.id, e.target.value as InquiryData["status"])}
                            className="text-sm border rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-amber-500"
                          >
                            <option value="new">신규</option>
                            <option value="contacted">연락완료</option>
                            <option value="completed">상담완료</option>
                          </select>
                          <button
                            onClick={() => deleteInquiry(inquiry.id)}
                            className="text-red-500 hover:text-red-700 text-sm"
                          >
                            삭제
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
