//READY TO DEPLOY

import { FaBlog, FaDownload, FaImages, FaPhone } from "react-icons/fa";
import Link from "next/link";

export default function Header() {
  return (
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
          {[
            {
              href: "/blog",
              icon: <FaPhone className="h-6 w-6 sm:mr-3 sm:hidden" />,
              text: "BLOG",
            },
            {
              href: "/community",
              icon: <FaBlog className="h-6 w-6 sm:mr-3 sm:hidden" />,
              text: (
                <span className="text-green-500 animate-pulse">COMMUNITY</span>
              ),
            },
            {
              href: "/faq",
              icon: <FaImages className="h-6 w-6 sm:mr-3 sm:hidden" />,
              text: "FAQ",
            },
          ].map(({ href, icon, text }) => (
            <Link
              key={href}
              href={href}
              className="flex sm:flex-row flex-col items-center justify-center hover:bg-purple-700 w-full h-full sm:w-max sm:px-12"
            >
              {icon}
              <span>{text}</span>
            </Link>
          ))}
        </div>
        <div className="cursor-pointer flex flex-row justify-center items-center">
          <Link href="/ai-generator-download">
            <div className="flex flex-row items-center bg-green-500 border-green-800 border-px rounded-lg px-3 py-2">
              <FaDownload className="mr-2 h-5 w-5 text-gray-50" />
              <span className="text-gray-50 italic font-light">Download</span>
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
