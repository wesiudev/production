import Link from "next/link";
import Header from "./components/header";
import Hero from "./auth/hero/Hero";
import { Accents } from "./components/accents/accents";
import { SectionWrapper } from "./components/sections/SectionWrapper";
import { getPrimaryImages } from "@/common/firebase";
import Image from "next/image";
import { FaDollarSign, FaLink } from "react-icons/fa";
import { SectionEarn } from "./components/sections/SectionEarn";

export default async function Home() {
  const images = await getPrimaryImages(12);

  return (
    <div className="relative h-full w-full bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900">
      <Hero />
      <main className="font-sans overflow-x-hidden relative flex items-center min-h-screen  py-2 px-3 lg:px-0">
        <Header />
        <Accents />
        <div className="justify-evenly h-[40vh] lg:mt-0 lg:h-max w-screen mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4">
          <h1 className="z-30 ">
            <div className="text-[12vw] sm:text-[10vw] xl:text-9xl text-gray-50 font-bold text-center sm:text-left drop-shadow-md shadow-black">
              Deco<span className="text-purple-600">canva</span>
            </div>
            <div className="font-light mt-3 text-xl sm:text-2xl lg:text-3xl w-4/5 lg:w-3/4 text-gray-50 text-center sm:text-left z-30  mx-auto sm:mx-0">
              <span className="text-white drop-shadow-md shadow-black">
                Join our creative community today!
              </span>
            </div>
          </h1>
          <div className="flex z-30 w-full space-x-3 justify-center items-center sm:w-max lg:mt-8 mx-auto sm:mx-0">
            <a
              className="py-3 px-5 w-max sm:w-auto bg-gray-500 hover:bg-gray-400 rounded-lg sm:text-xl text-gray-100 cursor-pointer"
              href="#about"
            >
              Read more
            </a>
            <Link
              href="/auth"
              className="sm:ml-3 py-3 px-6 w-max sm:w-auto bg-green-700 hover:bg-green-600 rounded-lg text-gray-100 lg:text-xl"
            >
              Check out
            </Link>
          </div>
        </div>
        <SectionWrapper>
          <div
            id="about"
            className="w-[90vw] sm:w-3/4 mx-auto text-xl sm:text-2xl lg:text-3xl flex flex-col mt-12 bg-white px-12 pt-20 rounded-t-md relative"
          >
            <span className="opacity-0 sm:opacity-75 sm:w-16 sm:h-16 xl:w-20 xl:h-20  rounded-full absolute sm:left-12 sm:top-28 lg:left-24 lg:top-24 from-purple-600 to-purple-800 bg-gradient-to-br shadow-sm shadow-black" />
            <span className="opacity-0 sm:opacity-75 w-8 h-8 rounded-full absolute sm:left-6 lg:left-12 top-20 from-purple-600 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black" />
            <div className="pb-10 sm:pb-12 w-max mx-auto flex flex-col">
              <h1 className="text-black text-xl sm:text-2xl">
                Welcome to{" "}
                <span className="text-purple-600 font-bold">Decocanva</span>!
              </h1>
              <div className="h-1 w-24 bg-purple-500 mx-auto mt-10 rounded-md"></div>
            </div>
            <div className="flex flex-col lg:flex-row justify-between w-full">
              <h2 className="text-lg lg:text-xl xl:text-2xl w-full pb-12 lg:pb-0 sm:mx-auto  text-center lg:text-left leading-relaxed bg-transparent lg:w-1/2 lg:pr-6 lg:h-max lg:my-auto ">
                <span className="text-black">
                  Experience the limitless wellspring of inspiration on{" "}
                  <span className="text-purple-600 font-bold">Decocanva</span>,
                  where our cutting-edge Image Generators empower you to unleash
                  your creative potential.
                </span>
              </h2>

              <div className="gap-4 z-50 w-full lg:w-1/2 grid grid-cols-2">
                {images.map((image, idx) => (
                  <Image
                    key={idx}
                    width={1024}
                    height={1024}
                    src={image.src}
                    alt={image.prompt}
                    className={`rounded-lg w-full ${idx < 10 && "hidden"}`}
                  />
                ))}
              </div>
            </div>
            <div className="w-full mt-12">
              <div className="h-1 w-24 bg-purple-500 mx-auto mb-10 rounded-md"></div>
              <div className="pb-6 w-full text-center lg:w-max mx-auto flex flex-col text-black">
                Latest generations from our community
                <div className="h-1 w-24 bg-purple-500 mx-auto mt-10 rounded-md"></div>
              </div>
              <div className="grid-cols-2 lg:grid-cols-6 mt-10 gap-4 z-50 w-full grid">
                {images.map((image, idx) => (
                  <Image
                    key={idx}
                    width={1024}
                    height={1024}
                    src={image.src}
                    alt={image.prompt}
                    className={`rounded-lg w-full gap-4 ${
                      (idx < 3 || idx > 8) && "hidden"
                    }`}
                  />
                ))}
              </div>
              {/* <Link
                href="/explore"
                className="text-purple-600 font-bold text-xl mt-10 text-center flex items-center hover:underline w-max "
              >
                <FaLink className="mr-1" />
                See more
              </Link> */}
            </div>
            <div className="text-black my-12 text-2xl">
              <div className="h-1 w-24 bg-purple-500 mx-auto mb-10 rounded-md"></div>
              <div className="pb-10 w-full text-center lg:w-max mx-auto flex flex-col text-black">
                <h1 className="text-2xl sm:text-3xl">
                  Discover the earning potential with{" "}
                  <span className="text-purple-600 font-bold">Decocanva</span>!
                </h1>
                <div className="h-1 w-24 bg-purple-500 mx-auto mt-10 rounded-md"></div>
              </div>
              <h2 className="text-xl text-center sm:w-[90%] lg:w-4/5 xl:w-3/4 mx-auto">
                Unlock a world of possibilities to monetize your creativity on
                our platform.
              </h2>
            </div>
          </div>
          <SectionEarn />
        </SectionWrapper>
      </main>
    </div>
  );
}
