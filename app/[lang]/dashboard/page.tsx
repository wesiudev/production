"use client";

import DashboardNav from "./DashboardNav";

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
  return (
    <div className="bg-gradient-to-br from-[#202020] via-[#212121] to-[#222222]">
      <DashboardNav />
    </div>
  );
}
