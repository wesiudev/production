"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import CountingAnimation from "./CountingAnimation";
import { useUserData } from "@/app/hooks/useUserData";
import { FaCoins, FaHome, FaUser } from "react-icons/fa";
import { calculateLevel } from "./CalculateLevel";

export const LevelAnimation = () => {
  const { userData } = useUserData();
  const { pointsNeeded, percentageExperience, percentageToAdd } =
    calculateLevel(userData.accountLevel, userData.accountExperience, 6);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  console.log((userData.accountExperience / pointsNeeded) * 100);
  const [active, setActive] = useState(0);
  return (
    <>
      {isMenuOpen === false && (
        <div
          className={`fixed bottom-10 left-0 w-full h-1/5 flex items-center justify-center z-[53]
          
        `}
        >
          <div className="relative h-full bg-purple-950">
            <div className="absolute -left-[100%] -translate-x-[100%] grid grid-rows-3 gap-y-1 h-full text-white font-sans">
              <div
                className={`bg-gradient-to-r from-rose-700 to-purple-700 rounded-l-md w-max flex justify-start items-center px-3 
              ${active === 0 && "from-rose-500 to-purple-500"}`}
              >
                <FaUser className="w-5 h-5 mr-1" /> <span> Your Account</span>
              </div>
              <div className="bg-gradient-to-r from-rose-500 to-purple-700 rounded-l-md w-full flex justify-start items-center px-3">
                <FaHome className="w-5 h-5 mr-1" /> <span> Dashboard</span>
              </div>
              <div className="bg-gradient-to-r from-rose-500 to-purple-700 rounded-l-md w-full flex justify-start items-center px-3">
                <FaCoins className="w-5 h-5 mr-1" /> <span> Get coins </span>
              </div>
            </div>
          </div>
          <div className="w-4/5 sm:w-3/4 lg:w-1/3 bg-gradient-to-tr from-rose-500 to-purple-800 rounded-md p-6 text-white font-sans shadow-md shadow-black">
            <span className="pb-4 flex flex-row items-center">
              <FaUser /> <span className="ml-2">{userData.email}</span>
            </span>
            <div className="w-full pb-3 flex flex-row justify-between">
              <span className="italic">Lv. {userData.accountLevel}</span>
              <span className="italic">Lv. {userData.accountLevel + 1}</span>
            </div>
            <CountingAnimation
              start={0}
              end={(userData.accountExperience / pointsNeeded) * 100}
              duration={2000}
            />
          </div>
        </div>
      )}
    </>
  );
};
