"use client";

import { FaArrowLeft, FaUser } from "react-icons/fa";
import { SettingsModal } from "./modals/settings";
import { GalleryModal } from "./modals/gallery";
import { BackpackModal } from "./modals/backpack";
import { useUserData } from "../hooks/useUserData";
import { AccountHistoryItem } from "@/types";
import { calculateLevel } from "../components/levelsystem/CalculateLevel";
import Loading from "./loading";
import Badges from "./modals/badges";
import AccountLevel from "./AccountLevel";
import AccountHistory from "./AccountHistory";
import Link from "next/link";
export default function Dashboard() {
  const { images, userData, loading } = useUserData();

  const accountHistory = userData?.accountHistory
    ?.map((commit: AccountHistoryItem) => commit)
    .sort(
      (a: { creationTime: number }, b: { creationTime: number }) =>
        b.creationTime - a.creationTime
    );

  const { percentageExperience } = calculateLevel(
    userData.accountLevel,
    userData.accountExperience
  );
  return (
    <>
      {(!images || loading) && <Loading />}
      {images && !loading && (
        <div className="mx-auto w-[90vw] py-12 font-sans italic">
          <div className="w-[90vw] mt-12">
            <div className="w-full text-2xl lg:text-3xl text-gray-100">
              <div className="flex flex-row items-center justify-between w-full bg-purple-900 p-5 rounded-md">
                <div className="flex flex-row items-center not-italic font-bold">
                  <FaUser className="mr-1 text-2xl" />

                  {userData?.displayName
                    ? userData?.displayName
                    : "Your account"}
                </div>
                <AccountLevel
                  percentageExperience={percentageExperience}
                  userData={userData}
                />
                <AccountHistory accountHistory={accountHistory} />
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
