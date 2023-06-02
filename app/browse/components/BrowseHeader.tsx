import Link from "next/link";
import { FaBlog, FaHome, FaImages } from "react-icons/fa";

export const BrowseHeader = () => {
  return (
    <header className="flex w-[90vw] sm:w-3/4 items-center font-sans mx-auto py-6">
      <div className="font-extralight text-5xl sm:text-6xl lg:text-9xl text-white w-max">
        <span className="">Explore</span>
        <span className="text-lg"> the Art of OpenAI </span>
      </div>
      <div className="fixed w-full h-16 bottom-0 left-0 flex flex-row items-center justify-evenly text-gray-100 bg-purple-800 z-50">
        <Link
          href="/"
          className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full"
        >
          <FaHome className="h-6 w-6 sm:mr-3" />
          <span> Home</span>
        </Link>
        <Link
          href="/browse"
          className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full"
        >
          <FaImages className="h-6 w-6 sm:mr-3" />
          <span>Shop</span>
        </Link>
        <Link
          href="/"
          className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full"
        >
          <FaBlog className="h-6 w-6 sm:mr-3" />
          <span>Blog</span>
        </Link>
      </div>
    </header>
  );
};
