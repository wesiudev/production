"use client";
import { auth } from "@/common/firebase";
import {
  FaArrowRight,
  FaClock,
  FaCoins,
  FaEnvelope,
  FaSignOutAlt,
  FaUser,
} from "react-icons/fa";
import { BsArrowReturnRight } from "react-icons/bs";
import { signOut } from "firebase/auth";
import { SettingsModal } from "./modals/settings";
import { GalleryModal } from "./modals/gallery";
import { BackpackModal } from "./modals/backpack";
import { useUserData } from "../hooks/useUserData";
import Loading from "./loading";
import { useDispatch } from "react-redux";
import { logout } from "@/common/redux/slices/userSlice";
import { AccountHistoryItem } from "@/types";
import moment from "moment";
import Link from "next/link";
import Badges from "./modals/badges";
export default function Dashboard() {
  const { images, userData, loading } = useUserData();
  const dispatch = useDispatch();
  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {});
  }
  const accountHistory = userData?.accountHistory
    ?.map((commit: AccountHistoryItem) => commit)
    .sort(
      (a: { creationTime: number }, b: { creationTime: number }) =>
        b.creationTime - a.creationTime
    );
  return (
    <>
      {(!images || loading) && <Loading />}
      {images && !loading && (
        <div className="mx-auto w-[90vw] py-12 font-sans italic">
          <div className="text-gray-50 text-4xl flex flex-row w-full">
            <div className="ml-2">
              <div className="opacity-80 h-5 w-2 bg-purple-800 hue-rotate-60 rotate-[20deg] rounded-sm" />
              <div className="opacity-80 h-4 w-1 bg-purple-800 -rotate-45 rounded-sm" />
            </div>
            <div className="flex flex-row items-center justify-between w-full">
              <div className="ml-3 text-2xl sm:text-3xl">Dashboard</div>
              {userData && (
                <Link
                  href="/auth"
                  className="flex flex-row items-center text-lg sm:text-xl"
                  onClick={handleLogout}
                >
                  <FaSignOutAlt className="mt-1 mr-1" /> Sign out
                </Link>
              )}
            </div>
          </div>
          <div className="w-[90vw] mt-12">
            <div className="w-full text-2xl lg:text-3xl text-gray-100">
              <div className="flex flex-row items-center justify-between w-full bg-purple-900 p-5 rounded-md">
                <div className="flex flex-row items-center not-italic font-bold">
                  <FaUser className="mr-1 text-2xl" />
                  {userData?.displayName
                    ? userData?.displayName
                    : "Your account"}
                </div>
              </div>
              <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 w-full mt-2">
                <div className="bg-purple-900 rounded-md p-5 w-full">
                  <span className="text-3xl not-italic">Details</span>
                  <div className="flex flex-col mt-2">
                    <div className="text-xl flex flex-row items-center mt-2">
                      <FaEnvelope className="h-6 w-6 mr-1 mt-[2px]" />

                      <span className="text-sm lg:text-xl overflow-x-hidden">
                        {userData?.email}
                      </span>
                    </div>
                    <span className="flex flex-row items-center relative w-max mt-2 text-[20px]">
                      <FaCoins className="text-white h-6 w-6 mr-1 z-40" />{" "}
                      {/* TODO z-index of the element based on current step of the tutorial  */}
                      <span className="text-gray-100 flex flex-row items-center z-40">
                        {userData.balance}
                      </span>
                      {/* {dashboard.tutorials.wallet === "todo" && <InfoHover
                    title="Account balance"
                    description="Each render has its own price. You can earn Render Points daily by being active user. There's also a shop where you can buy them."
                    side="L"
                  />} */}
                    </span>
                  </div>
                </div>
                <div className="p-5 h-full bg-purple-900 rounded-md w-full mt-2 sm:mt-0 ">
                  <span className="text-3xl not-italic">History</span>
                  {accountHistory?.length && (
                    <div className="h-[35vh] overflow-y-scroll scrollbar">
                      {accountHistory?.map(
                        (item: AccountHistoryItem, idx: number) => (
                          <div className="flex flex-col mt-4" key={idx}>
                            <div className="flex flex-row items-center">
                              <FaClock className="w-6 h-6 mt-px mr-1" />
                              <span className="text-lg not-italic">
                                {moment(item.creationTime).format(
                                  "DD-MM-yyyy hh:mm a"
                                )}{" "}
                              </span>
                              <span className="text-green-400 font-light text-sm ml-1 hidden lg:block">
                                {`(${moment(item.creationTime).fromNow()})`}
                              </span>
                            </div>
                            <span className="text-lg flex flex-row items-center">
                              <BsArrowReturnRight className="w-5 h-5 mr-1 ml-[9px]" />
                              {item.action}
                            </span>
                          </div>
                        )
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className={`w-full mt-6`}>
              <BackpackModal images={images} />
              <div className="mt-6 gap-x-3 grid sm:grid-cols-2 gap-y-6 sm:gap-y-0">
                <GalleryModal />
                <Badges />
              </div>
              <div className="mt-6 gap-x-3 grid sm:grid-cols-2 gap-y-6 sm:gap-y-0">
                <SettingsModal />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
