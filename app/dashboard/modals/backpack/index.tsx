"use client";
import { FaArchive, FaArrowRight, FaPlus } from "react-icons/fa";
import { Latest } from "./Latest";
import Link from "next/link";
import { Popular } from "./Popular";
import { DocumentData } from "firebase/firestore/lite";
import { GiLightBackpack } from "react-icons/gi";
import InfoHover from "@/app/components/infohover";
export const BackpackModal = ({ images }: DocumentData) => {
  return (
    <>
      <Link
        href={`${!images.length ? "/backpack/empty" : "/backpack"}`}
        className="group text-2xl sm:text-3xl flex flex-row items-center w-full relative"
      >
        <div className="w-full flex flex-row items-center justify-between bg-purple-900 rounded-md text-gray-100 p-5">
          <div className="w-max relative">
            {/* <InfoHover
            description="In your backpack you will find tools that will be useful for creating and editing images. You can also change visibility of your images here, if you want to share or hide them. Saved images will apear here."
            side="L"
            title="Image storage"
          /> */}
            <div className="flex flex-row items-center">
              <GiLightBackpack className="w-8 h-8 text-gray-50" />
              <span className="font-bold not-italic mt-1">Backpack</span>
              <FaArrowRight className="invisible w-4 h-4 ml-2 mt-1 group-hover:scale-150 group-hover:translate-x-1 group-hover:visible ease-in duration-75" />
            </div>
          </div>
          <div className="relative w-max">
            {/* <InfoHover title="Click here to create your first image." side="R" /> */}
            <Link
              href={`${
                !images.length ? "/backpack/empty" : "/backpack/generator"
              }`}
            ></Link>
          </div>
        </div>
      </Link>
      <div className="mt-2 flex flex-col bg-purple-900 rounded-md text-gray-100 p-5">
        {!images.length ? (
          <div className="text-2xl text-gray-400 mt-1 mb-4 min-h-[30vh] flex items-center justify-center text-center">
            Your backpack is empty
          </div>
        ) : (
          <div className="grid grid-rows sm:grid-cols-2 lg:grid-cols-3 gap-x-3">
            <Latest images={images} />
            <Popular images={images} />
          </div>
        )}
      </div>
    </>
  );
};
