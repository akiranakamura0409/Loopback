import { NextRequest, NextResponse } from "next/server";

async function buildEcho(request: NextRequest) {
  const url = new URL(request.url);
  const headers: Record<string, string> = {};
  request.headers.forEach((value, key) => {
    headers[key] = value;
  });

  const query: Record<string, string> = {};
  url.searchParams.forEach((value, key) => {
    query[key] = value;
  });

  let bodyText: string | null = null;
  let bodyJson: unknown = null;
  const contentType = request.headers.get("content-type") ?? "";

  try {
    bodyText = await request.text();
    if (bodyText && contentType.includes("application/json")) {
      try {
        bodyJson = JSON.parse(bodyText);
      } catch {
        bodyJson = null;
      }
    }
  } catch {
    bodyText = null;
  }

  const cookies: Record<string, string> = {};
  request.cookies.getAll().forEach((c) => {
    cookies[c.name] = c.value;
  });

  return {
    echoed_at: new Date().toISOString(),
    method: request.method,
    url: request.url,
    path: url.pathname,
    query,
    headers,
    cookies,
    body: bodyText,
    body_json: bodyJson,
  };
}

async function handle(request: NextRequest) {
  const payload = await buildEcho(request);
  return NextResponse.json(payload, {
    status: 200,
    headers: {
      "Cache-Control": "no-store",
      "X-Loopback-Echo": "1",
    },
  });
}

export const GET = handle;
export const POST = handle;
export const PUT = handle;
export const PATCH = handle;
export const DELETE = handle;
export const HEAD = handle;
export const OPTIONS = handle;
