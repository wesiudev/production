"use client";
import Link from "next/link";
import { FaArrowLeft, FaTools } from "react-icons/fa";
import BackpackImageThumbnail from "./components/ImageThumbnail";
import { FakeItem } from "./components/FakeItem";
import { ImageProps } from "@/types";
import { useUserData } from "../hooks/useUserData";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/common/redux/store";
import moment from "moment";

export default function Backpack() {
  const { images } = useUserData();
  const preparedData = [
    {
      today: images.filter((image: ImageProps) =>
        moment(image?.creationTime).isSame(moment(), "day")
      ),
      yesterday: images.filter((image: ImageProps) =>
        moment(image?.creationTime).isSame(moment().subtract(1, "day"), "day")
      ),
      older: images.filter((image: ImageProps) =>
        moment(image?.creationTime).isBefore(moment().subtract(1, "day"), "day")
      ),
    },
  ];
  const { loadingImages } = useSelector((state: RootState) => state.images);
  if (!images.length && !loadingImages) {
    redirect("/backpack/empty");
  }
  return (
    <div className="w-[90vw] sm:w-3/4 mx-auto font-sans">
      <Link
        href="/dashboard"
        className="pt-[24px] sm:pt-[4vw] hover:underline text-white flex flex-row items-center text-2xl z-50 w-max"
      >
        <FaArrowLeft />
        <span className="ml-1">Dashboard</span>
      </Link>
      <div className="mx-auto pt-12">
        <div className="text-gray-50 text-4xl flex flex-row w-full">
          <div className="ml-2">
            <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
            <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
          </div>
          <div className="w-full ml-3 italic flex flex-row justify-between">
            <span>Backpack</span>{" "}
            <div className="bg-gradient-to-tr from-rose-500  to-purple-950 hover:from-rose-500 hover:to-purple-900 duration-75 ease-in  items-center justify-center shadow-sm shadow-black py-2 px-4 text-center mx-auto lg:mx-0 bg-purple-900 hover:bg-purple-800 text-gray-50 hover:transition-transform w-max text-2xl rounded-lg">
              <Link href="/generator/" className="flex flex-row items-center">
                <FaTools className="mr-1" /> Render tools
              </Link>
            </div>
          </div>
        </div>
        {/* <Info
          destination="privacy"
          buttonText="Change it here"
          text="In order to share your images, you have to switch your profile
              settings to public."
        /> */}
      </div>

      <div className="mt-12">
        {images.length ? (
          <>
            {preparedData?.map((timestamp: any, idx: number) => (
              <>
                <>
                  {timestamp.today.length > 0 && (
                    <>
                      <span className="text-3xl font-light text-purple-200">
                        Today
                      </span>
                      <div
                        key={idx}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-6"
                      >
                        {timestamp.today.map(
                          (image: ImageProps, idx: number) => (
                            <BackpackImageThumbnail
                              key={idx}
                              src={image?.src}
                            />
                          )
                        )}
                      </div>
                    </>
                  )}
                </>
                <>
                  {timestamp.yesterday.length > 0 && (
                    <>
                      <span className="text-3xl font-light text-purple-200">
                        Yesterday
                      </span>
                      <div
                        key={idx}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-6"
                      >
                        {timestamp.yesterday.map(
                          (image: ImageProps, idx: number) => (
                            <BackpackImageThumbnail
                              key={idx}
                              src={image?.src}
                            />
                          )
                        )}
                      </div>
                    </>
                  )}
                </>
                <>
                  {timestamp.older.length > 0 && (
                    <>
                      <span className="text-3xl font-light text-purple-200">
                        {timestamp.older.length &&
                        (timestamp.yesterday.length || timestamp.today.length)
                          ? "Older"
                          : "Older than two days"}
                      </span>
                      <div
                        key={idx}
                        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 my-6"
                      >
                        {timestamp.older.map(
                          (image: ImageProps, idx: number) => (
                            <BackpackImageThumbnail
                              key={idx}
                              src={image?.src}
                            />
                          )
                        )}
                      </div>
                    </>
                  )}
                </>
              </>
            ))}
          </>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
            <FakeItem />
          </div>
        )}
      </div>
    </div>
  );
}
