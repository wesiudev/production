import { setBrowseImages } from "@/common/redux/slices/imagesSlice";
import { store } from "@/common/redux/store";

export async function getData() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/images`, {
    headers: {
      authorization: process.env.API_KEY!,
    },
    method: "GET",
  });
  const data = await res.json();

  store.dispatch(setBrowseImages(data));
}