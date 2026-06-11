import { NextResponse } from "next/server";
import { publicPage } from "../../../helpers/lib/content-store";

export async function GET(request, { params }) {
  const { page: pageName } = await params;
  const content = publicPage(pageName);

  if (!content) {
    return NextResponse.json({ error: "Page not found" }, { status: 404 });
  }

  return NextResponse.json(content);
}
