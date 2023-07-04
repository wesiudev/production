import React from "react";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import { addImage, storage, updateUserLevel } from "@/common/firebase";
import Image from "next/image";
import { toast } from "react-toastify";
import { Msg } from "./MsgSuccess";
import { FaArrowCircleLeft, FaImage } from "react-icons/fa";
import {
  addImagesToArray,
  pushToImages,
} from "@/common/redux/slices/imagesSlice";
import { useDispatch } from "react-redux";
import { useUserData } from "@/app/hooks/useUserData";
import { calculateLevel } from "@/app/components/levelsystem/CalculateLevel";
import { setAccountExperience } from "@/common/redux/slices/userSlice";
import Hero from "@/app/auth/hero/Hero";
import capitalizeString from "@/app/utils/CapitalizeString";

export default function FirstGenerationPopup(props: any) {
  const {
    isGenerationTriggered,
    setIsGenerationTriggered,
    isLoading,
    hasImage,
    imageResponse,
    userPrompt,
    imageLoaded,
    setImageLoaded,
    displayError,
    setHasImage,
  } = props;
  const { userData } = useUserData();
  const { level, pointsNeeded } = calculateLevel(
    userData.accountLevel,
    userData.accountExperience
  );
  const dispatch = useDispatch();
  const saveImage = async () => {
    if (hasImage)
      try {
        dispatch(
          setAccountExperience({
            pointsToAdd: 6,
            accountLevel: level,
            accountExperience: userData.accountExperience,
            pointsNeeded: pointsNeeded,
          })
        );
        const id = toast.loading(
          <span className="font-sans">Saving an image...</span>
        );
        //in pseudo randomness we trust 🙏
        const pseudoRandomName = Math.floor(
          Math.random() * 9999 * 100
        ).toString();
        const imageRef = ref(storage, `image-${pseudoRandomName}`);
        uploadString(imageRef, imageResponse, "base64", {
          contentType: "text/plain",
        }).then(() =>
          getDownloadURL(imageRef).then((url) => {
            const req = {
              author: userData?.email,
              comments: [],
              creationTime: Date.now(),
              isPublic: true,
              likes: 0,
              prompt: userPrompt,
              src: url,
            };
            addImage(req),
              dispatch(pushToImages(req)),
              setHasImage(false),
              updateUserLevel({
                email: userData?.email,
                level: level,
                accountExperience: userData.accountExperience,
                pointsToAdd: 6,
                pointsNeeded: pointsNeeded,
              }),
              calculateLevel(
                userData.accountLevel,
                userData.accountExperience,
                6
              );
            toast.update(id, {
              render: Msg,
              type: "success",
              isLoading: false,
              closeOnClick: true,
              autoClose: 5000,
            });
          })
        );
        setHasImage(false), setIsGenerationTriggered(false);
      } catch (err: any) {
        displayError(err.message);
      }
  };
  function closePopup() {
    setIsGenerationTriggered(false);
    setHasImage(false);
  }
  return (
    <>
      {isGenerationTriggered && userPrompt.length && (
        <div className="z-[54] fixed h-screen w-screen top-0 left-0 flex items-center justify-center">
          <div className="relative h-full sm:w-full w-full bg-black bg-opacity-80 sm:px-12 flex flex-col sm:flex-row justify-evenly">
            <div className="w-full h-full sm:w-[95vw] lg:w-3/4 flex flex-col sm:grid sm:grid-cols-2 sm:aspect-square items-center justify-center mx-auto">
              <div className="w-full min-h-[50vh] sm:h-[60vh] bg-purple-800 relative  flex justify-center items-center ">
                {hasImage && (
                  <button
                    onClick={closePopup}
                    className="absolute left-[24px] top-12 rounded-full  text-white z-50 "
                  >
                    <FaArrowCircleLeft className="h-12 w-12" />
                  </button>
                )}
                <Hero />
                {isLoading && (
                  <FaImage className="w-3/4 h-3/4 lg:w-1/2 lg:h-1/2 text-gray-50 px-12 py-6 mx-auto absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]" />
                )}
                <div
                  className={`scale-0 ${
                    hasImage && "scale-100 duration-500"
                  }  h-full w-full relative flex justify-center items-center `}
                >
                  {!isLoading && (
                    <Image
                      width={512}
                      height={512}
                      src={`data:image/png;base64,${imageResponse}`}
                      alt={userPrompt}
                      className={`h-3/4 w-auto sm:h-auto sm:w-3/4 mx-auto my-auto sm:scale-90 sm:absolute sm:left-[50%] sm:-translate-x-[50%] sm:top-[50%] sm:-translate-y-[50%] `}
                      style={{ display: imageLoaded ? "block" : "none" }}
                      onLoad={() => setImageLoaded(true)}
                    />
                  )}
                </div>
              </div>

              <div className="rounded-md h-full w-full text-2xl text-gray-50 flex justify-center items-center">
                {!imageLoaded && (
                  <div className="w-full min-h-[50vh] sm:h-[60vh] bg-purple-700 bg-opacity-80 flex items-center justify-center">
                    <svg
                      aria-hidden="true"
                      className="w-16 h-16 mr-3 text-gray-200 animate-spin dark:text-gray-600 fill-purple-600"
                      viewBox="0 0 100 101"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                        fill="currentColor"
                      />
                      <path
                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                        fill="currentFill"
                      />
                    </svg>
                  </div>
                )}
                {hasImage && (
                  <div className="h-max w-full flex flex-col ">
                    <div className="hidden h-[10vh] sm:flex items-center border-b-2 border-gray-200  bg-white text-black shadow-sm shadow-black px-3">
                      <div className="w-full">Product details</div>
                    </div>
                    <div className="flex flex-col  h-[40vh]  w-full overflow-y-scroll  sm:scrollbar bg-white">
                      <div className="w-full h-full flex flex-col sm:justify-evenly sm:items-center">
                        <div className="w-full h-full pb-6 text-black grid grid-cols-2 p-3 sm:gap-x-3 sm:gap-y-3 text-xl">
                          <div className="w-full h-full">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full z-[1001]">
                              Title
                            </h1>
                            <h2 className="w-full ">
                              {capitalizeString(userPrompt)}
                            </h2>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              Description
                            </h1>
                            <h2 className="">{capitalizeString(userPrompt)}</h2>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              Author
                            </h1>
                            <h2 className="">{userData.email}</h2>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              3D Display
                            </h1>
                            <h2 className="">True</h2>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              Price
                            </h1>
                            <h2 className="">Standard</h2>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              Tags
                            </h1>
                          </div>
                          <div className="w-full ">
                            <h1 className="text-sm sm:text-xl px-2 bg-gradient-to-br from-purple-600 to-rose-500 text-white w-max rounded-full">
                              Visibility
                            </h1>
                            <h2 className="">Public</h2>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <button
                        onClick={saveImage}
                        className="w-full h-[10vh] bg-green-700 hover:bg-green-600 text-gray-100 text-xl lg:text-2xl sm:px-12"
                      >
                        Save to the backpack
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
