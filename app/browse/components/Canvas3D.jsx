"use client";
import dynamic from "next/dynamic";
import capitalizeString from "@/app/utils/CapitalizeString";
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa";
import { GiCardRandom } from "react-icons/gi";
import { MdEuroSymbol } from "react-icons/md";
import moment from "moment";
import Hero from "@/app/auth/hero/Hero";
import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { useDispatch, useSelector } from "react-redux";

const Blob = dynamic(() => import("./canvas/Shapes").then((mod) => mod.Blob), {
  ssr: false,
});
const Stars = dynamic(
  () => import("./canvas/Shapes").then((mod) => mod.Stars),
  {
    ssr: false,
  }
);
const View = dynamic(() => import("./canvas/View").then((mod) => mod.View), {
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
});
const Common = dynamic(
  () => import("../components/canvas/View").then((mod) => mod.Common),
  { ssr: false }
);

export default function Canvas3D({ image }) {
  const dispatch = useDispatch();
  const { randomImages } = useSelector((state) => state.images);
  return (
    <div className="h-screen lg:h-[95vh] w-full z-50 bg-purple-950 rounded-md overflow-y-scroll scrollbarBlack overflow-x-hidden select-none">
      <div className="flex flex-col-reverse lg:grid lg:grid-cols-2 lg:gap-x-3 h-full relative mx-auto w-full">
        <div className="flex flex-col px-0 lg:px-3  lg:pt-0 relative my-auto  text-white w-screen h-full lg:h-3/5">
          <div className="flex flex-col justify-center h-full relative w-full lg:w-3/4 mx-auto px-4">
            <button
              onClick={() => {
                dispatch(setCurrentOpen(""));
              }}
              className="italic text-gray-500 py-4 flex flex-row items-center fixed top-12 left-12 z-[1001]"
            >
              <FaArrowLeft className="mr-2" /> Back to the shop
            </button>
            <div className="flex flex-col bg-opacity-90 bg-purple-950 lg:bg-transparent">
              <div className="z-50 lg:mt-0 w-full flex flex-col">
                <span className="text-2xl text-left lg:w-full">
                  {capitalizeString(image.prompt)}
                </span>
                <div className="pt-2">
                  Created {moment(image.creationTime).fromNow()}
                </div>
              </div>

              <div className="flex flex-row lg:pb-2 lg:pt-2">
                <FaStar className="text-yellow-500 hover:text-yellow-400" />
                <FaStar className="text-yellow-500 ml-px hover:text-yellow-400" />
                <FaStar className="text-yellow-500 ml-px hover:text-yellow-400" />
                <FaStar className="text-yellow-500 ml-px hover:text-yellow-400" />
                <FaStar className="text-yellow-500 ml-px hover:text-yellow-400" />
              </div>
              <div className="text-xl font-light text-white">
                Authors{"'"} username is not defined yet
              </div>
              {/* <div className="flex flex-row justify-between lg:flex-col lg:justify-center pt-6 pb-12 lg:pb-3 w-full">
                <div className=" text-4xl flex flex-row items-center">
                  <MdEuroSymbol /> 45
                </div>
                <button className="lg:mt-6 shadow-sm shadow-black z-[999] font-bold italic text-2xl flex flex-row items-center bg-gradient-to-bl from-rose-500 to-purple-900 py-2 px-5 text-white rounded-lg w-max ">
                  Buy on canvas
                </button>
              </div> */}
            </div>
          </div>
        </div>
        <Hero />
        <div className="bg-purple-950 w-full lg:w-3/4 h-[50vh] lg:h-full lg:pt-0">
          <div className="w-full h-full relative">
            <View
              orbit
              className="min-h-0 h-[50vh] lg:min-h-[60vh] lg:h-full relative rounded-md"
            >
              <Blob
                image={image}
                className="absolute left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-50"
              />
              <Common />
            </View>
          </div>
        </div>
      </div>
    </div>
  );
}
