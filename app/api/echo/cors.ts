import { NextRequest } from "next/server";

const ALLOW_METHODS = "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS";

export function corsHeaders(request: NextRequest): Record<string, string> {
  const origin = request.headers.get("origin");
  const allowOrigin = origin ?? "*";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": ALLOW_METHODS,
    "Access-Control-Allow-Headers":
      request.headers.get("access-control-request-headers") ?? "*",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin",
  };
}
