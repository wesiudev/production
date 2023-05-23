"use client";
import dynamic from "next/dynamic";
import capitalizeString from "@/app/utils/CapitalizeString";
import { FaImage, FaStar, FaWindowClose } from "react-icons/fa";
import { MdEuroSymbol } from "react-icons/md";
import moment from "moment";
import Hero from "@/app/auth/hero/Hero";
import { store } from "@/common/redux/store";
import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { useDispatch } from "react-redux";

const Blob = dynamic(() => import("./canvas/Shapes").then((mod) => mod.Blob), {
  ssr: false,
});
const Stars = dynamic(
  () => import("./canvas/Shapes").then((mod) => mod.Stars),
  {
    ssr: false,
  }
);
const View = dynamic(
  () => import("../components/canvas/View").then((mod) => mod.View),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-96 w-full flex-col items-center justify-center">
        <svg
          className="-ml-1 mr-3 h-5 w-5 animate-spin text-black"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0 1 8-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 0 1 4 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      </div>
    ),
  }
);
const Common = dynamic(
  () => import("../components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

export default function Canvas3D({ image }) {
  const dispatch = useDispatch();
  return (
    <div className="min-h-screen w-full z-50 bg-white rounded-md sm:min-h-0 sm:h-max sm:p-4 sm:pr-0 sm:pt-1 px-3 overflow-y-scroll scrollbarBlack overflow-x-hidden">
      <div className="pb-6 pt-6 sm:pt-3 flex flex-row justify-between w-full items-center ">
        <span className=" pl-1 text-2xl flex flex-row items-center">
          <FaImage className="mr-1" />
          Canvas preview
        </span>
        <button
          onClick={() => {
            dispatch(setCurrentOpen(""));
          }}
        >
          <FaWindowClose className="h-8 w-8 mr-1" />
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-x-3">
        <div className="bg-purple-950">
          <div className="w-full h-full relative">
            <Hero />
            <View
              orbit
              className="min-h-[60vh] lg:h-full w-full lg:w-full relative  ml-1 rounded-md"
            >
              <Blob
                image={image}
                className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-50"
              />
              <Common />
            </View>
          </div>
        </div>
        <div className="flex flex-col p-3 sm:pt-0 relative">
          <div className=" bg-white z-50 lg:mt-0 w-full">
            <span className="text-xl text-left w-full">
              {capitalizeString(image.prompt)}
            </span>
          </div>
          <div className="pt-1">
            Added {moment(image.creationTime).fromNow()}
            {/* <FaThumbsUp />{" "} */}
          </div>
          <div className="flex flex-row pb-2 pt-2">
            <FaStar className="text-yellow-500" />
            <FaStar className="text-yellow-500 ml-px" />
            <FaStar className="text-yellow-500 ml-px" />
            <FaStar className="text-yellow-500 ml-px" />
            <FaStar className="text-yellow-500 ml-px" />
          </div>
          <div className="flex flex-row items-center pt-6 pb-3 w-full justify-between">
            <div className=" text-4xl flex flex-row items-center">
              45 <MdEuroSymbol />
            </div>
            <button className="bg-purple-500 w-max text-white px-3 py-2 rounded-sm ml-2">
              Buy on canvas
            </button>
          </div>
          <div className="w-full h-full flex flex-col">
            <div className="flex flex-col w-full h-full overflow-y-scroll scrollbar py-3">
              Comments {`(${image?.comments?.length})`}
              {image?.comments?.map((comment, idx) => (
                <div className="flex flex-col" key={idx}>
                  <span>{comment.author}</span>
                  <span>{comment.content}</span>
                </div>
              ))}
            </div>
            <textarea
              placeholder="Add comment"
              className="bg-gray-200 w-full p-3"
            />
          </div>
          <button
            onClick={() => {
              dispatch(setCurrentOpen(""));
            }}
            className="italic text-gray-600 py-3 sm:hidden"
          >
            Close window
          </button>
        </div>
      </div>
    </div>
  );
}
