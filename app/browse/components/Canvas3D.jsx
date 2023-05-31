"use client";
import dynamic from "next/dynamic";
import capitalizeString from "@/app/utils/CapitalizeString";
import { FaImage, FaStar, FaWindowClose } from "react-icons/fa";
import { MdEuroSymbol } from "react-icons/md";
import { BsSendFill } from "react-icons/bs";
import moment from "moment";
import Hero from "@/app/auth/hero/Hero";
import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { useDispatch } from "react-redux";
import { ImageComments } from "./ImageComments";
import { useState } from "react";
import { useUserData } from "@/app/hooks/useUserData";
import Link from "next/link";
import { addComment, auth } from "@/common/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

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
        </div>{" "}
        <div className="flex flex-col px-3 sm:pt-0 relative">
          <div className="z-50 lg:mt-0 w-full">
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
              <MdEuroSymbol /> 45
            </div>
            <button className="bg-purple-500 w-max text-white px-3 py-2 rounded-sm ml-2">
              Buy on canvas
            </button>
          </div>
          <div className="w-full h-full flex flex-col">
            <ImageComments comments={image?.comments} />
            <div className="relative flex flex-row ">
              {/* {user && !loading ? (
                <textarea
                  onChange={(e) => setCommentValue(e.target.value)}
                  value={commentValue}
                  placeholder="Add comment"
                  className="bg-gray-200 w-full px-3 pt-3 resize-none focus:outline-none max-h-12"
                />
              ) : (
                <div
                  onFocus={() => setPopupOpen(true)}
                  placeholder="Add comment"
                  className="bg-gray-200 w-full px-3 pt-3 resize-none focus:outline-none max-h-12"
                >
                  <span className="text-gray-700">
                    <Link href="/auth" className="text-blue-600">
                      {" "}
                      Sign in{" "}
                    </Link>{" "}
                    to comment
                  </span>
                </div>
              )} */}

              <button
                onClick={() =>
                  addComment({
                    src: image.src,
                    userData: user,
                    commentValue: commentValue,
                  })
                }
                className="bg-purple-500 text-white w-12 h-12 flex justify-center items-center"
              >
                <BsSendFill />
              </button>
            </div>
          </div>
          <button
            onClick={() => {
              dispatch(setCurrentOpen(""));
            }}
            className="italic text-gray-700 py-4 sm:hidden"
          >
            Close window
          </button>
        </div>
      </div>
    </div>
  );
}
