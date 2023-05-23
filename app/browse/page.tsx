import { getData } from "../lib/data";
import SSRImageGrid from "./components/SSRImagesGrid";
import { Search } from "./components/Search";

export default async function BrowseImages() {
  await getData();
  return (
    <div className="flex flex-col font-sans items-center align-middle">
      <div className="w-[90vw] sm:w-3/4">
        <Search />
        <SSRImageGrid />
      </div>
    </div>
  );
}
