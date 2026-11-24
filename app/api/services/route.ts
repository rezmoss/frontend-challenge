import { NextResponse } from "next/server";
import { SERVICES } from "../../../lib/data";

export const dynamic = "force-dynamic";

// This route simulates a real upstream: it is slow, and it fails sometimes.
// Treat it as a third-party API you cannot change. Please don't edit this file.
export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 600));

  // Down for 10 seconds out of every 30.
  if (Math.floor(Date.now() / 10_000) % 3 === 2) {
    return new Response("Internal Server Error", { status: 500 });
  }

  return NextResponse.json({ services: SERVICES });
}
