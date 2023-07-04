export const SectionEarn = () => {
  return (
    <div className="flex flex-col w-[90vw] sm:w-3/4 mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 w-full ">
        <div className="group py-6 border-r-[20px]  border-b-[20px] border-l-[20px] border-white flex items-center justify-center text-2xl cursor-pointer">
          <button className="group-hover:scale-105 duration-200">
            I am an artist.
          </button>
        </div>
        <div className="group py-6 border-l-[20px] lg:border-l-0 border-r-[20px]  border-b-[20px]  border-white flex items-center justify-center text-2xl cursor-pointer">
          <button className="group-hover:scale-105 duration-200">
            I want to create a shop.
          </button>
        </div>
      </div>
      <div className="group py-6 w-full border-l-[20px]  border-b-[20px] border-r-[20px] border-white flex items-center justify-center text-2xl cursor-pointer">
        <button className="group-hover:scale-105 duration-200">
          I just want to have some fun!
        </button>
      </div>
    </div>
  );
};
