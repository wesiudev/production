"use client";
import { LevelAnimation } from "@/app/components/levelsystem/LevelAnimation";
import { useUserData } from "@/app/hooks/useUserData";

import { ToastContainer } from "react-toastify";
export const metadata = {
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "/favicon.png",
  },
  title: `Decocanva - Render Tools - Free Image Generator`,
  themeColor: "black",
  authors: [
    { name: "wesiu.dev" },
    { name: "OpenAI Image Generator API" },
    { name: "React" },
    { name: "decocanva.com" },
  ],
};
export default function GeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userData } = useUserData();

  return (
    <div
      className={`min-h-screen w-full from-zinc-900 to-purple-900 bg-gradient-to-br relative`}
    >
      {userData && <LevelAnimation />}
      <ToastContainer />
      {children}
    </div>
  );
}
