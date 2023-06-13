import { useState } from "react";
import arrayPaginate from "array-paginate";
export type Step = {
  step: number;
  title: string;
  description: string;
};

interface TutorialWindow {
  steps: Step[];
  tutorialHeadline: string;
  isTutorialOpen: boolean;
  setTutorialOpen: (arg: boolean) => void;
}

export const TutorialWindow = (props: TutorialWindow) => {
  const { steps, tutorialHeadline, setTutorialOpen, isTutorialOpen } = props;
  const [currnentTutorialPage, setCurrentTutorialPage] = useState(1);
  const paginatedItems = arrayPaginate(steps, currnentTutorialPage, 3);
  return (
    <>
      {isTutorialOpen && (
        <div className="fixed w-[95vw] min-h-[30vh] sm:w-[75vw] lg:w-[40vw] bg-purple-900 flex flex-col px-3 py-3 sm:px-5 sm:py-5 font-sans rounded-md left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] z-[999]">
          <div className="flex flex-col">
            <span className="w-max mx-auto text-2xl text-white py-2">
              {tutorialHeadline}
            </span>
            <div className="w-full flex flex-row justify-between text-white items-center my-3">
              <span className="w-full h-px bg-purple-600"></span>
              <span className="italic font-light px-5">tutorial</span>
              <span className="w-full h-px bg-purple-600"></span>
            </div>
          </div>
          <div className="flex flex-col max-h-[90vh] overflow-y-scroll scrollbar">
            {paginatedItems.docs.map((step: Step, idx: number) => (
              <div key={idx} className="mt-3">
                <span className="text-gray-50 text-lg">Step {step.step}.</span>{" "}
                <span className="bg-gradient-to-r from-purple-400 to-rose-400 bg-clip-text text-transparent text-lg ">
                  {step.title}
                </span>
                <span className="text-white">:</span>{" "}
                <span className="text-gray-50 text-lg leading-relaxed">
                  {step.description}
                </span>
              </div>
            ))}
            <div
              className={`grid ${
                currnentTutorialPage > 1 ? "grid-cols-2 gap-3" : "grid-cols-1"
              } mt-3 
              text-white`}
            >
              {currnentTutorialPage > 1 && (
                <button
                  className="bg-purple-950 w-full px-2 py-2 rounded-md hover:bg-purple-800"
                  onClick={() =>
                    setCurrentTutorialPage(currnentTutorialPage - 1)
                  }
                >
                  Previous
                </button>
              )}
              {currnentTutorialPage < paginatedItems.totalPages && (
                <button
                  className="bg-purple-950 w-full px-2 py-2 rounded-md hover:bg-purple-800"
                  onClick={() =>
                    setCurrentTutorialPage(currnentTutorialPage + 1)
                  }
                >
                  Next
                </button>
              )}
              {currnentTutorialPage === paginatedItems.totalPages && (
                <button
                  className="bg-green-600 w-full px-2 py-2 rounded-md hover:bg-purple-500"
                  onClick={() => {
                    setTutorialOpen(false), setCurrentTutorialPage(1);
                  }}
                >
                  Finish tutorial
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
