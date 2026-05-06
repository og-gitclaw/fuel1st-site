import { NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  const token = request.headers.get("x-revalidate-token") ?? new URL(request.url).searchParams.get("token");
  const expected = process.env.REVALIDATE_TOKEN;

  if (!expected || token !== expected) {
    return NextResponse.json({ ok: false, error: "unauthorized" }, { status: 401 });
  }

  revalidatePath("/");
  revalidatePath("/news");

  return NextResponse.json({ ok: true, revalidated: ["/", "/news"], at: new Date().toISOString() });
}

export async function GET(request: Request) {
  return POST(request);
}
