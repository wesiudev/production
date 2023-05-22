"use client";
import { FaArrowAltCircleRight, FaArrowLeft, FaPlus } from "react-icons/fa";
import GenerateButton from "./GenerateButton";
import { useState } from "react";
import { CreateImageRequestSizeEnum } from "openai";
import FirstGenerationPopup from "./FirstGenerationPopup";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { redirect } from "next/navigation";
import { useUserData } from "../../hooks/useUserData";

export default function BackpackEmpty() {
  const { images, userData } = useUserData();

  const [isGenerationPending, setIsGenerationPending] =
    useState<boolean>(false);
  const [userPrompt, setUserPrompt] = useState("");
  const [size, setSize] = useState<CreateImageRequestSizeEnum>("1024x1024");
  const [hasImage, setHasImage] = useState(false);
  const [imageResponse, setImageResponse] = useState("");
  const [isError, setIsError] = useState<boolean | string>("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [isGenerationTriggered, setIsGenerationTriggered] = useState(false);
  const displayError = (errorMessage: any) => {
    toast.error(errorMessage, {
      onClose: () => (setIsError(false), setIsGenerationTriggered(false)),
    });
  };

  if (images?.length > 0) {
    redirect("/backpack");
  }

  return (
    <div className="font-sans">
      {userData && (
        <Link
          href="/dashboard"
          className="absolute hover:underline left-[4vw] top-[24px] sm:top-[4vw]  text-white flex flex-row items-center text-2xl z-50"
        >
          <FaArrowLeft /> <span className="ml-1 font-light">Dashboard</span>
        </Link>
      )}
      <div className="lg:w-full w-full min-h-screen flex flex-col lg:flex-row mx-auto from-zinc-900 to-purple-950 bg-gradient-to-br pb-12 ">
        <div className="max-h-screen w-full flex items-center relative mt-[122px] lg:mt-10">
          <div className="absolute -bottom-12 left-24 bg-purple-400 hue-rotate-[45] w-16 h-16 rounded-full bg-opacity-0 lg:bg-opacity-50" />
          <div className="absolute bottom-12 left-12 bg-purple-500 hue-rotate-30 w-12 h-12 rounded-full bg-opacity-0 lg:bg-opacity-50" />
          <div className="flex flex-col justify-evenly h-[40vh] w-[90vw] lg:w-[45vw] pl-[4vw] pr-10 py-5 lg:py-10 lg:pr-12 bg-purple-950 rounded-r-full shadow-sm shadow-black">
            <div className="text-xl sm:text-2xl text-gray-50 lg:text-left">
              <div className="mx-auto">
                Hello! It seems like your{" "}
                <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
                  Backpack
                </strong>{" "}
                is empty.
              </div>
            </div>
            <div className="lg:text-left text-xl sm:text-2xl lg:text-2xl text-gray-50 w-full sm:w-4/5 lg:w-4/5 mt-6">
              Specify the scenerio for{" "}
              <span className="text-purple-500">AI</span> - tell it what you
              want to see on your first{" "}
              <span className="text-purple-500">canva</span>.
            </div>
          </div>
        </div>
        <div className="w-[90%] lg:w-[100%] min-h-[60vh] flex flex-col mx-auto pt-12 lg:pt-[175px] relative">
          <div className="absolute w-12 h-12 bg-purple-400 bg-opacity-70 -top-3 lg:top-10 lg:right-16 right-1 hue-rotate-30 rotate-45" />
          <div className="absolute w-6 h-6 bg-purple-800 bg-opacity-70 top-16 lg:top-32 lg:right-28 right-12 hue-rotate-30 -rotate-12" />
          <div className="text-gray-50 text-3xl lg:mt-0 mt-16">
            Step 1.{" "}
            <strong className="bg-gradient-to-r from-purple-600 to-rose-600 bg-clip-text text-transparent">
              Generate
            </strong>{" "}
            your first image
          </div>
          <div className="bg-opacity-50 w-full lg:w-[90%] mt-12">
            <div className="flex flex-row w-full relative">
              <FaArrowAltCircleRight className="w-5 h-5 mr-2 text-gray-50" />
              <textarea
                onChange={(e) => setUserPrompt(e.target.value)}
                value={userPrompt}
                placeholder="A sunshine on the desert with a smiling cactus, ultrarealistic, high resolution"
                className="text-gray-100 z-20 w-full p-2 rounded-md text-xl lg:text-xl min-h-[25vh] bg-purple-700 bg-opacity-80 placeholder:text-purple-300 outline-none"
              />
            </div>
            <div className="w-full h-max">
              <div className="text-xl text-gray-50 flex flex-row items-center mt-5">
                <FaPlus className="w-4 h-4 mr-3" /> <div>Add prompts</div>
              </div>
            </div>
            <GenerateButton
              setIsGenerationPending={setIsGenerationPending}
              setImageLoaded={setImageLoaded}
              setImageResponse={setImageResponse}
              setHasImage={setHasImage}
              setIsError={setIsError}
              userPrompt={userPrompt}
              size={size}
              hasImage={hasImage}
              isGenerationPending={isGenerationPending}
              imageResponse={imageResponse}
              setIsGenerationTriggered={setIsGenerationTriggered}
              displayError={displayError}
              isError={isError}
            />
            {!isError && (
              <FirstGenerationPopup
                isGenerationTriggered={isGenerationTriggered}
                setIsGenerationTriggered={setIsGenerationTriggered}
                isLoading={isGenerationPending}
                hasImage={hasImage}
                imageResponse={imageResponse}
                userPrompt={userPrompt}
                imageLoaded={imageLoaded}
                setImageLoaded={setImageLoaded}
                displayError={displayError}
                isError={isError}
                setHasImage={setHasImage}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
