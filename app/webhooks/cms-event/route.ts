// import { NextResponse } from "next/server";

import { CASHE_TAG_REVIEWS } from "@/lib/reviews";
import { revalidateTag } from "next/cache";

export async function POST(request: Request) {
  const payload = await request.json();
  if (payload.model === "review") {
    revalidateTag(CASHE_TAG_REVIEWS);
  }
  console.log("payload", payload);

  return new Response(null, { status: 204 });
}
