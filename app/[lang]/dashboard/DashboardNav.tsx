"use client";
import { FaSignOutAlt } from "react-icons/fa";
import Link from "next/link";
import { useUserData } from "@/hooks/useUserData";
import { signOut } from "firebase/auth";
import { useDispatch } from "react-redux";
import { auth } from "@/common/firebase";
import { logout } from "@/common/redux/slices/userSlice";
import { redirect } from "next/navigation";

export default function DashboardNav() {
  const { userData } = useUserData();
  const dispatch = useDispatch();
  function handleLogout() {
    signOut(auth)
      .then(() => {
        dispatch(logout());
      })
      .catch((error) => {});
  }
  const user = userData?.user;
  if (!user) {
    redirect("/en/auth");
  }
  return (
    <>
      <header className="bg-gradient-to-r from-zinc-900 via-white-900 to-purple-800 fixed left-0 top-0 w-full z-[1000] font-sans">
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
      </header>
    </>
  );
}
