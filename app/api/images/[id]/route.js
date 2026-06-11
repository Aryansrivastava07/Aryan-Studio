import { NextResponse } from "next/server";
import { readContent } from "../../../../helpers/lib/content-store";

export async function GET(request, { params }) {
  const { id } = await params;
  const content = readContent();
  const url = content.images[id];

  if (!url) {
    return NextResponse.json({ error: "Image not found" }, { status: 404 });
  }

  return NextResponse.redirect(url, 302);
}
