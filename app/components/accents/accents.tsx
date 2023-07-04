"use client";

export const Accents = () => {
  return (
    <>
      <span className="opacity-0 xl:opacity-75 w-24 h-24 rounded-full absolute left-12 top-24 from-zinc-900 to-purple-800 bg-gradient-to-br shadow-sm shadow-black" />
      <span className="opacity-0 xl:opacity-75 w-8 h-8 rounded-full absolute left-6 top-20 from-zinc-900 to-purple-900 bg-gradient-to-tl shadow-sm shadow-black" />
      <div className="opacity-80 rounded-full lg:opacity-0 w-[175vw] h-[175vw] sm:w-[125vw] sm:h-[125vw] absolute -left-[100%] sm:-left-[80%] from-zinc-900 via-purple-900 to-purple-800 bg-gradient-to-b z-20" />
      <div className=" rounded-full opacity-0 lg:opacity-100 w-[125vw] h-[125vw] lg:w-[100vw] lg:h-[100vw] absolute left-[50%] -translate-x-[50%] lg:-bottom-[100%] xl:-bottom-[150%] from-zinc-900 to-purple-700 lg:to-purple-800 bg-gradient-to-tr z-30" />
    </>
  );
};
