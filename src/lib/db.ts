import fs from "fs";
import path from "path";

export interface InquiryData {
  id: string;
  name: string;
  phone: string;
  inquiry: string;
  createdAt: string;
  status: "new" | "contacted" | "completed";
}

const DATA_FILE = path.join(process.cwd(), "data", "inquiries.json");

// 데이터 파일이 없으면 생성
function ensureDataFile() {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  if (!fs.existsSync(DATA_FILE)) {
    fs.writeFileSync(DATA_FILE, JSON.stringify([], null, 2));
  }
}

// 모든 문의 조회
export function getAllInquiries(): InquiryData[] {
  ensureDataFile();
  const data = fs.readFileSync(DATA_FILE, "utf-8");
  return JSON.parse(data);
}

// 문의 추가
export function addInquiry(inquiry: Omit<InquiryData, "id" | "createdAt" | "status">): InquiryData {
  ensureDataFile();
  const inquiries = getAllInquiries();

  const newInquiry: InquiryData = {
    ...inquiry,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    status: "new"
  };

  inquiries.unshift(newInquiry);
  fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));

  return newInquiry;
}

// 문의 상태 업데이트
export function updateInquiryStatus(id: string, status: InquiryData["status"]): InquiryData | null {
  ensureDataFile();
  const inquiries = getAllInquiries();
  const index = inquiries.findIndex((i) => i.id === id);

  if (index === -1) return null;

  inquiries[index].status = status;
  fs.writeFileSync(DATA_FILE, JSON.stringify(inquiries, null, 2));

  return inquiries[index];
}

// 문의 삭제
export function deleteInquiry(id: string): boolean {
  ensureDataFile();
  const inquiries = getAllInquiries();
  const filtered = inquiries.filter((i) => i.id !== id);

  if (filtered.length === inquiries.length) return false;

  fs.writeFileSync(DATA_FILE, JSON.stringify(filtered, null, 2));
  return true;
}
