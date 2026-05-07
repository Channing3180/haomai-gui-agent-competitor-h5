import { execFile } from "child_process";
import { NextRequest, NextResponse } from "next/server";
import { promisify } from "util";

const execFileAsync = promisify(execFile);

export async function POST(request: NextRequest) {
  const { url } = await request.json().catch(() => ({ url: "" }));

  if (typeof url !== "string") {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  let parsedUrl: URL;
  try {
    parsedUrl = new URL(url);
  } catch {
    return NextResponse.json({ error: "Invalid URL" }, { status: 400 });
  }

  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    return NextResponse.json({ error: "Unsupported URL protocol" }, { status: 400 });
  }

  await execFileAsync("/usr/bin/open", [parsedUrl.toString()]);

  return NextResponse.json({ ok: true });
}
