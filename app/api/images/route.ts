import { getAllImages } from "@/common/firebase";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET() {
  const headersList = headers();
  const referer = headersList.get('authorization')
  
  if (referer === process.env.API_KEY) {
    const images = await getAllImages(50)
    return NextResponse.json(images);
  }else{
    return NextResponse.json({error: "Auth faileddd"})
  }
}