import { getAllImages } from "@/common/firebase";
import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

function authenticate(req: NextApiRequest) {
  const token = req.headers.authorization;
  // You can also use a more secure method like JWT validation here

  // Check if the token is valid
  if (token === "AAADWQFVMOZZ9@gmo!movVQWZZwqqfv") {
    return true;
  } else {
    return false;
  }
}

export async function GET(req: NextApiRequest) {
  if (authenticate(req)) {
    const images = await getAllImages(50);
    return NextResponse.json(images);
  } else {
    return NextResponse.error();
  }
}