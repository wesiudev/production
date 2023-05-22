import capitalizeString from "@/app/utils/CapitalizeString";
import truncate from "@/app/utils/CutString";
import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { store } from "@/common/redux/store";
import { ImageProps, ImagesArray } from "@/types";
import Image from "next/image";

export default function ImagesGrid({ images }: { images: ImageProps[] }) {
  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-3 mx-auto mt-3">
        {images?.map((image: ImageProps, idx: number) => (
          <div key={idx} className="relative group">
            <Image
              width={512}
              height={512}
              src={image.src}
              alt=""
              key={idx}
              className="rounded-none group-hover:rounded-md ease-in duration-200"
            />
            <div className="absolute bottom-0 left-0 p-2 bg-black text-white w-full opacity-0 group-hover:opacity-100 ease-in duration-200 rounded-none group-hover:rounded-b-md">
              {truncate(capitalizeString(image.prompt)!, 38)}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
