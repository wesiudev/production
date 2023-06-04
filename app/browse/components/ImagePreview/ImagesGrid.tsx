"use client";
import capitalizeString from "@/app/utils/CapitalizeString";
import truncate from "@/app/utils/CutString";
import { ImageProps } from "@/types";
import Image from "next/image";
import React from "react";
import { Button } from "./Button";
import { ImagePreview } from "./ImagePreview";
import { ScrollTrigger } from "./ScrollTrigger";
import { ScrollTriggerProvider } from "./ScrollTriggerProvider";
import { store } from "@/common/redux/store";
// import Canvas3D from "./Canvas3D";
// import { Layout } from "../components/dom/Layout";
export default function ImagesGrid({ images }: { images: ImageProps[] }) {
  return (
    <div className="relative pb-32">
      <ImagePreview />
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-full gap-3 mx-auto mt-3">
        {images?.map((image: ImageProps, idx: number) => (
          <div
            key={idx}
            className={`relative ${
              idx <= store.getState().images.limit ? "block" : "hidden"
            }`}
          >
            <div className="relative group">
              <Button image={image}>
                <Image
                  priority
                  width={512}
                  height={512}
                  src={image.src}
                  alt=""
                  key={idx}
                />
                <div className="absolute text-left bottom-0 left-0 p-2 bg-black text-white w-full opacity-0 group-hover:opacity-100 ease-in duration-200">
                  {truncate(capitalizeString(image.prompt)!, 38)}
                </div>
              </Button>
            </div>
          </div>
        ))}
      </div>
      <ScrollTriggerProvider>
        <ScrollTrigger />
      </ScrollTriggerProvider>
    </div>
  );
}
