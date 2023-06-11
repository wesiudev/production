"use client";

import { useSelector } from "react-redux";
import { Layout } from "../dom/Layout";
import { RootState, store } from "@/common/redux/store";
import Canvas3D from "../Canvas3D";
export const ImagePreview = () => {
  const { currentOpen } = useSelector((state: RootState) => state.images);
  return (
    <>
      {currentOpen ? (
        <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-screen rounded-lg z-50">
          <div className="w-screen h-screen overflow-y-scroll scrollbarBlack">
            <Layout>
              <Canvas3D image={currentOpen} />
            </Layout>
          </div>
        </div>
      ) : null}
    </>
  );
};
