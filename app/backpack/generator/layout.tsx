"use client";
import { calculateLevel } from "@/app/dashboard/LevelSystem/CalculateLevel";
import { LevelAnimation } from "@/app/dashboard/LevelSystem/LevelAnimation";
import { useUserData } from "@/app/hooks/useUserData";
import { setLevelAnimated } from "@/common/redux/slices/userSlice";
import { RootState } from "@/common/redux/store";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";

export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { levelAnimated } = useSelector((state: RootState) => state.user);
  const { userData } = useUserData();
  const { percentageToAdd, percentageExperience } = calculateLevel(
    userData.accountLevel,
    userData.accountExperience,
    6
  );
  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-950 bg-gradient-to-br pb-12 relative`}
    >
      {userData && <LevelAnimation />}
      <ToastContainer />
      {children}
    </div>
  );
}
