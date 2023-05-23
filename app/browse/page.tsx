import { store } from "@/common/redux/store";
import SSRImageGrid from "./components/SSRImagesGrid";
import { Search } from "./components/Search";
import { setBrowseImages } from "@/common/redux/slices/imagesSlice";

export default async function BrowseImages() {
  const req = await fetch("https://decocanva.com/api/images", {
    headers: {
      authorization: process.env.API_KEY!,
    },
  });
  const data = await req.json();
  store.dispatch(setBrowseImages(data));
  return (
    <div className="flex flex-col font-sans items-center align-middle">
      <div className="w-[90vw] sm:w-3/4">
        <Search />
        <SSRImageGrid />
      </div>
    </div>
  );
}
