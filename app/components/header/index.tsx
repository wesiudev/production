"use client";
import { auth } from "../../../common/firebase";
import {
  FaBlog,
  FaImage,
  FaImages,
  FaPhone,
  FaSignInAlt,
  FaUser,
} from "react-icons/fa";
import Link from "next/link";
import { useUserData } from "@/app/hooks/useUserData";
export default function Header() {
  const { userData } = useUserData();
  return (
    <>
      <header className="bg-gradient-to-r from-zinc-900 via-white-900 to-purple-800 fixed left-0 top-0 w-full z-[1000] font-sans">
        <div className="w-[90vw] mx-auto flex flex-row justify-between py-3 sm:py-0">
          <div className="flex flex-row w-max h-max my-auto">
            <Link
              href="/"
              className="flex items-center text-gray-100 text-2xl py-3"
            >
              decocanva
            </Link>
          </div>
          <div className="fixed w-full sm:w-max h-16 bottom-0 left-0 flex flex-row items-center justify-evenly text-gray-100 bg-purple-800 sm:bg-transparent sm:relative">
            <Link
              href="/contact"
              className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full sm:w-max sm:px-12"
            >
              <FaPhone className="h-6 w-6 sm:mr-3 sm:hidden" />
              <span> Contact</span>
            </Link>
            <Link
              href=""
              className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full sm:w-max sm:px-12"
            >
              <FaImages className="h-6 w-6 sm:mr-3 sm:hidden" />
              <span>Browse</span>
            </Link>
            <Link
              href=""
              className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full sm:w-max sm:px-12"
            >
              <FaBlog className="h-6 w-6 sm:mr-3 sm:hidden" />
              <span>Blog</span>
            </Link>
          </div>
          <div className="cursor-pointer flex flex-row justify-center items-center">
            {!userData && (
              <Link href="/auth">
                <div className="flex flex-row items-center">
                  {" "}
                  <FaSignInAlt className="mr-2 h-7 w-7 text-gray-50" />
                  <span className="text-gray-50">Sign in</span>
                </div>
              </Link>
            )}
            {userData && (
              <Link href="/dashboard">
                <div className="flex flex-row items-center  text-gray-50">
                  <FaUser className="mr-2 h-6 w-6" />
                  <span>My account</span>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
