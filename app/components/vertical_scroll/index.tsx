"use client";
import { useState } from "react";

export default function VerticalScroll({
  sectionWithUseCases,
}: {
  sectionWithUseCases: any;
}) {
  const handleScroll = (event: React.WheelEvent<HTMLDivElement>) => {
    const container = event.currentTarget;
    const direction = event.deltaY > 0 ? 1 : -1;
    const newPosition = container.scrollTop + direction * 100;
    container.scrollTo({
      top: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <div className="container" onWheel={handleScroll}>
      <div className="flex overflow-x-scroll scrollbar space-x-12">
        {sectionWithUseCases.map((item: any, i: any) => (
          <div
            key={i}
            className={`flex flex-col xl:flex-row w-[80vw] md:w-max justify-between rounded-lg my-6 `}
          >
            <div
              className={`prose text-zinc-700 drop-shadow-md w-[80vw] md:w-max shadow-black h-full flex flex-col  justify-center mx-auto font-sans mb-12 xl:mb-0   bg-gradient-to-br from-zinc-100 to-zinc-200 rounded-lg p-6 xl:p-12`}
            >
              <h1 className="!text-4xl lg:!text-6xl text-zinc-700 drop-shadow-md shadow-black">
                {item.h1}
              </h1>
              <h2 className="!text-lg lg:!text-2xl italic -mt-3 text-zinc-700 drop-shadow-md shadow-black ">
                {item.h2}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
