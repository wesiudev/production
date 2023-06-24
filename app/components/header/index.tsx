"use client";
import { useAuthState } from "react-firebase-hooks/auth";
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
export default function Header() {
  const [user, loading] = useAuthState(auth);
  return (
    <>
      <header className="bg-gradient-to-r from-zinc-900 via-white-900 to-purple-800 fixed left-0 top-0 w-full z-[1000] font-sans">
        <div className="w-[90vw] mx-auto flex flex-row justify-between py-3">
          <div className="flex flex-row w-max h-max">
            <Link
              href="/"
              className="flex items-center text-gray-100 text-2xl py-2"
            >
              decocanva
            </Link>
          </div>
          <div className="fixed w-full h-16 bottom-0 left-0 flex flex-row items-center justify-evenly text-gray-100 bg-purple-800 ">
            <Link
              href="/contact"
              className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full"
            >
              <FaPhone className="h-6 w-6 sm:mr-3" />
              <span> Contact</span>
            </Link>
            <Link
              href="/browse"
              className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full"
            >
              <FaImages className="h-6 w-6 sm:mr-3" />
              <span>Browse</span>
            </Link>
            <Link
              href="/blog"
              className="flex sm:flex-row flex-col  items-center justify-center hover:bg-purple-700 w-full h-full"
            >
              <FaBlog className="h-6 w-6 sm:mr-3" />
              <span>Blog</span>
            </Link>
          </div>
          <div className="cursor-pointer flex flex-row justify-center items-center">
            {!user && (
              <Link href="/auth">
                <div className="flex flex-row items-center">
                  {" "}
                  <FaSignInAlt className="mr-2 h-7 w-7 text-gray-50" />
                  <span className="text-gray-50">Sign in</span>
                </div>
              </Link>
            )}
            {user && (
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
