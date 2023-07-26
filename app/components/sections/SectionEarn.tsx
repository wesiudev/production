import Link from "next/link";

export const SectionEarn = () => {
  return (
    <div className="flex flex-col w-[90vw] sm:w-3/4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
        <Link href="/auth?type=artist" className="group">
          <div className="py-6 duration-200 group-hover:bg-white group-hover:bg-opacity-25 w-full border-l-[20px]  border-b-[20px] border-r-[20px] border-white flex items-center justify-center text-2xl cursor-pointer">
            I am an artist.
          </div>
        </Link>
        <Link href="/auth?type=earn" className="group">
          <div className="py-6 duration-200 group-hover:bg-white group-hover:bg-opacity-25  w-full border-l-[20px]  border-b-[20px] border-r-[20px] border-white flex items-center justify-center text-2xl cursor-pointer">
            I want to create a shop.
          </div>
        </Link>
      </div>
      <Link href="/auth?type=fun" className="group ">
        <div className="py-6 duration-200 group-hover:border-t-[20px] group-hover:scale-110 w-full border-l-[20px]  border-b-[20px] border-r-[20px] border-white flex items-center justify-center text-2xl cursor-pointer">
          I just want to have some fun!
        </div>
      </Link>
    </div>
  );
};
