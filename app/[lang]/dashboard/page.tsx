"use client";

import { useAuthState } from "react-firebase-hooks/auth";
import DashboardNav from "./DashboardNav";
import { auth } from "@/common/firebase";
import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function Dashboard() {
  // const { images, userData, loading } = useUserData();

  // const accountHistory = userData?.accountHistory
  //   ?.map((commit: AccountHistoryItem) => commit)
  //   .sort(
  //     (a: { creationTime: number }, b: { creationTime: number }) =>
  //       b.creationTime - a.creationTime
  //   );

  // const { percentageExperience } = calculateLevel(
  //   userData.accountLevel,
  //   userData.accountExperience
  // );
  const [user, loading] = useAuthState(auth);

  useEffect(() => {
    if (!user) {
      setTimeout(() => {
        redirect("http://localhost:3000/en/auth");
      }, 5000); // wait for 10 seconds before redirecting
    }
  }, [user]);

  return (
    <div className="bg-gradient-to-br from-[#202020] via-[#212121] to-[#222222] !text-black">
      {user?.displayName}
    </div>
  );
}
