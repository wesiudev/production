import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextResponse) {
  if (req.body.authorization === process.env.API_KEY) {
    const images = await getAllImages(50)
    return NextResponse.json(images);
  }else{
    return NextResponse.json({error: "Auth failed"})
  }

    

}