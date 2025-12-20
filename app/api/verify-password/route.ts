import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    const sitePassword = process.env.SITE_PASSWORD;

    if (!sitePassword) {
      // If no password is set, allow access
      return NextResponse.json({ success: true });
    }

    if (password === sitePassword) {
      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ success: false, error: "Invalid password" }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false, error: "Invalid request" }, { status: 400 });
  }
}
