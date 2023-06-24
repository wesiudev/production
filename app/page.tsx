"use client";
import Link from "next/link";
import Header from "./components/header";
import Hero from "./auth/hero/Hero";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>My page title</title>
      </Head>
      <main className="font-sans relative overflow-hidden items-center min-h-screen bg-gradient-to-br from-zinc-900 via-white-900 to-purple-900 flex flex-row py-2 px-3 lg:px-0">
        <Hero />
        <Header />
        <span className="opacity-0 xl:opacity-75 w-24 h-24 rounded-full absolute left-12 top-24 from-zinc-900 to-purple-800 bg-gradient-to-br shadow-sm shadow-black" />
        <span className="opacity-0 xl:opacity-75 w-8 h-8 rounded-full absolute left-6 top-20 from-zinc-900 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black" />
        <div className="opacity-80  xl:opacity-0 w-[175vw] h-[175vw] sm:w-[125vw] sm:h-[125vw] rounded-full absolute -left-[100%] sm:-left-[80%] xl:-left-[90%] from-zinc-900 to-purple-800 bg-gradient-to-tl z-20" />
        <div className="opacity-0 xl:opacity-100 w-[125vw] h-[125vw] lg:w-[100vw] lg:h-[100vw] rounded-full absolute sm:-bottom-[100%] lg:-bottom-[140%] from-zinc-900 to-purple-700 lg:to-purple-800 bg-gradient-to-tr z-30" />
        <div className="justify-evenly h-[40vh] lg:mt-0 lg:h-max w-screen mx-0 sm:mx-auto flex flex-col sm:w-4/5 lg:w-3/4">
          <div className="text-6xl lg:text-8xl xl:text-9xl text-gray-50 font-bold text-center sm:text-left shadow-neutral-600 z-30">
            Deco<span className="text-purple-500 lg:text-gray-50">canva</span>
          </div>
          <div className="leading-relaxed font-light italic mt-3 text-xl sm:text-3xl lg:text-3xl text-gray-50 text-center sm:text-left z-30 w-3/4 mx-auto sm:mx-0">
            We are not scared of{" "}
            <span className="text-purple-400">Artificial Intelligence</span> on{" "}
            <span className="sm:text-purple-400 text-gray-50">canvas</span>
            <div className="relative"></div>
          </div>
          <div className="flex flex-row z-30 w-full justify-evenly sm:w-max mt-8">
            <Link
              href="/blog"
              className="py-3 px-5 bg-gray-500 hover:bg-gray-400 rounded-lg sm:text-xl text-gray-100"
            >
              Read more
            </Link>
            <Link
              href="/auth"
              className="sm:ml-3 py-3 px-5 bg-purple-700 hover:bg-purple-600 rounded-lg text-gray-100 lg:text-xl"
            >
              Check out
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
