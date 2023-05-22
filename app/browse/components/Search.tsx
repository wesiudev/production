import { BsSearch } from "react-icons/bs";
export const Search = () => {
  return (
    <div className="w-full mx-auto h-12 mb-6">
      <div className="flex flex-row h-full items-center">
        <input
          type="text"
          className="h-full w-full sm:w-1/2 text-white bg-purple-600 p-3 outline-none rounded-l-md placeholder:text-white"
          placeholder="Search for images"
        />
        <button className="h-full bg-purple-600 flex items-center pr-2 rounded-r-md relative">
          <div className="border-l border-purple-400 absolute -left-[10px] h-4/5"></div>
          <BsSearch className="h-3/4 w-max text-white " />
        </button>
      </div>
    </div>
  );
};
