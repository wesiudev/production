"use client";

import DashboardNav from "./DashboardNav";

export default function DashboardLayout({
  children,
  isDarkMode = true,
}: {
  children: React.ReactNode;
  isDarkMode?: boolean;
}) {
  const bgColor = isDarkMode
    ? "bg-gradient-to-br from-[#202020] via-[#212121] to-[#222222]"
    : "bg-white";
  return (
    <div className={`w-full h-screen ${bgColor}`}>
      <DashboardNav />
      {children}
    </div>
  );
}
