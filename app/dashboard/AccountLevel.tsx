import Link from "next/link";
import { FaCoins, FaEnvelope } from "react-icons/fa";
import InfoHover from "../components/infohover";

export default function AccountLevel({
  userData,
  percentageExperience,
}: {
  userData: any;
  percentageExperience: number;
}) {
  return (
    <div className="bg-purple-900 rounded-md p-5 w-full relative min-h-[40vh]">
      <span className="text-3xl not-italic">Details</span>
      <div className="flex flex-col mt-2">
        <div className="text-xl flex flex-row items-center mt-2">
          <FaEnvelope className="h-6 w-6 mr-1 mt-[2px]" />

          <span className="text-lg overflow-x-hidden">{userData?.email}</span>
        </div>
        <span className="flex flex-row items-center relative w-max mt-2 text-[20px]">
          <FaCoins
            className={`text-white h-6 w-6 mr-1 ${
              userData.tutorialStep === 0 && "z-50"
            }`}
          />{" "}
          <span
            className={`text-gray-100 flex flex-row items-center ${
              userData.tutorialStep === 0 && "z-50"
            }`}
          >
            {userData.balance}
          </span>
          {userData.tutorialStep === 0 && (
            <InfoHover
              title="Account balance"
              description="Each render has its own price. You can earn Render Points daily by being active user. There is also a shop where you can buy them."
              side="L"
              destination="tutorialStep01"
            />
          )}
        </span>
        <div className="bottom-0 left-0 absolute p-5 flex flex-col w-full text-lg">
          <div className="flex flex-row justify-between pb-2 relative">
            <span>Experience</span>
            <div className="">Lv. {userData.accountLevel + 1}</div>
          </div>
          <div className="w-full h-2 bg-gray-50 rounded-full relative overflow-hidden">
            <div
              style={{
                transform: `translateX(${percentageExperience}%)`,
              }}
              className={`bg-green-600 absolute top-0 h-3 w-full -left-[100%]`}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
