import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {

    const images = await getAllImages(50);
    return NextResponse.json(images);

}