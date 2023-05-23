import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET(req: NextApiRequest) {
  const headersList = headers();
  const referer = headersList.get('authorization')
  if (referer === "5gingonqn21indzfafwqggzxghe") {
    const images = await getAllImages(50)
    return NextResponse.json(images);
  }else{
    return NextResponse.json({error: "Auth failed"})
  }
}