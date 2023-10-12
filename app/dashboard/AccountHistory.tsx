import { AccountHistoryItem } from "@/types";
import moment from "moment";
import Link from "next/link";
import { BsArrowReturnRight } from "react-icons/bs";
import { FaClock } from "react-icons/fa";

export default function AccountHistory({
  accountHistory,
}: {
  accountHistory: AccountHistoryItem[];
}) {
  return (
    <div className="flex flex-col sm:grid sm:grid-cols-2 gap-x-3 w-full mt-2 relative">
      <div className="p-5 h-full bg-purple-900 rounded-md w-full mt-2 sm:mt-0 ">
        <span className="text-3xl not-italic">History</span>
        {accountHistory?.length && (
          <div className="h-[35vh] overflow-y-scroll scrollbar">
            {accountHistory?.map((item: AccountHistoryItem, idx: number) => (
              <div className="flex flex-col mt-4" key={idx}>
                <div className="flex flex-row items-center">
                  <FaClock className="w-6 h-6 mt-px mr-1" />
                  <span className="text-lg not-italic">
                    {moment(item.creationTime).format("DD-MM-yyyy hh:mm a")}{" "}
                  </span>
                  <span className="text-green-400 font-light text-sm ml-1 hidden lg:block">
                    {`(${moment(item.creationTime).fromNow()})`}
                  </span>
                </div>
                <span className="text-lg flex flex-row items-center">
                  <BsArrowReturnRight className="w-5 h-5 mr-1 ml-[9px]" />
                  {item.action}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
