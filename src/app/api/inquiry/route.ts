import { NextRequest, NextResponse } from "next/server";

// Discord 웹훅으로 알림 전송
async function sendDiscordNotification(name: string, phone: string, inquiry: string) {
  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

  if (!webhookUrl) {
    console.error("Discord webhook URL이 설정되지 않았습니다.");
    return;
  }

  const now = new Date();
  const koreanTime = new Date(now.getTime() + (9 * 60 * 60 * 1000));
  const formattedDate = koreanTime.toISOString().replace('T', ' ').substring(0, 19);

  const embed = {
    embeds: [
      {
        title: "📋 새로운 상담 신청이 접수되었습니다!",
        color: 0xD4AF37,
        fields: [
          {
            name: "👤 이름",
            value: name,
            inline: true
          },
          {
            name: "📞 연락처",
            value: phone,
            inline: true
          },
          {
            name: "💬 문의내용",
            value: inquiry || "내용 없음",
            inline: false
          },
          {
            name: "🕐 접수시간",
            value: formattedDate + " (KST)",
            inline: false
          }
        ],
        footer: {
          text: "판교디오르나인"
        },
        timestamp: new Date().toISOString()
      }
    ]
  };

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(embed),
    });

    if (!response.ok) {
      console.error("Discord 알림 전송 실패:", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Discord 알림 전송 중 오류:", error);
  }
}

// POST: 새 문의 추가 (Discord 다이렉트 알림)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, inquiry } = body;

    // 유효성 검사
    if (!name || !phone) {
      return NextResponse.json(
        { error: "이름과 전화번호는 필수입니다." },
        { status: 400 }
      );
    }

    // Discord 알림 직접 전송
    await sendDiscordNotification(name, phone, inquiry || "");

    return NextResponse.json(
      { message: "상담 신청이 완료되었습니다." },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error adding inquiry:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// GET: 모든 문의 조회
export async function GET() {
  try {
    const { supabase } = await import("@/lib/supabase");
    const { data, error } = await supabase
      .from('inquiries')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "데이터 조회 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// PATCH: 문의 상태 업데이트
export async function PATCH(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, status } = body;

    if (!id || !status) {
      return NextResponse.json(
        { error: "ID와 상태값이 필요합니다." },
        { status: 400 }
      );
    }

    const { supabase } = await import("@/lib/supabase");
    const { data, error } = await supabase
      .from('inquiries')
      .update({ status })
      .eq('id', id)
      .select()
      .single();

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "상태 업데이트 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "상태가 업데이트되었습니다.", data });
  } catch (error) {
    console.error("Error updating inquiry:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

// DELETE: 문의 삭제
export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "ID가 필요합니다." },
        { status: 400 }
      );
    }

    const { supabase } = await import("@/lib/supabase");
    const { error } = await supabase
      .from('inquiries')
      .delete()
      .eq('id', id);

    if (error) {
      console.error("Supabase error:", error);
      return NextResponse.json(
        { error: "삭제 중 오류가 발생했습니다." },
        { status: 500 }
      );
    }

    return NextResponse.json({ message: "삭제되었습니다." });
  } catch (error) {
    console.error("Error deleting inquiry:", error);
    return NextResponse.json(
      { error: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
