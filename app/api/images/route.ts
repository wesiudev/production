import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { headers } from 'next/headers';

export async function GET(req: NextApiRequest) {
  const headersList = headers();
  if (headersList.get('host') === "decocanva.com" || "localhost:3000") {
    const images = await getAllImages(50)
    return NextResponse.json(images);
  }

}