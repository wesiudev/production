import Link from "next/link";

export const BrowseHeader = () => {
  return (
    <header className="flex flex-col  w-[90vw] sm:w-3/4 items-center font-sans mx-auto py-6">
      <span className="text-5xl sm:text-6xl lg:text-9xl font-bold w-full text-white">
        Decocanva
      </span>
      <div className="flex flex-row flex-wrap gap-3 text-white w-full py-6">
        <Link
          href="/"
          className=" px-2 py-2 flex items-center justify-center border-b-2 border-white hover:border-purple-500 "
        >
          Home
        </Link>
        <Link
          href=""
          className="px-2 py-3 flex items-center justify-center border-b-2 border-purple-500"
        >
          Shop
        </Link>
        <Link
          href="https://www.facebook.com/profile.php?id=100092608192165"
          className=" px-2 py-3 flex items-center justify-center border-b-2 border-white hover:border-purple-500"
        >
          Facebook
        </Link>
        <Link
          href=""
          className=" px-2 py-3 flex items-center justify-center border-b-2 border-white hover:border-purple-500"
        >
          Instagram
        </Link>
      </div>
    </header>
  );
};
