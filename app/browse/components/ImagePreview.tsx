"use client";

import { useSelector } from "react-redux";
import { Layout } from "./dom/Layout";
import { RootState } from "@/common/redux/store";
import Canvas3D from "../components/Canvas3D";
import { useState } from "react";
export const ImagePreview = () => {
  const { currentOpen } = useSelector((state: RootState) => state.images);
  return (
    <>
      {currentOpen ? (
        <div className="fixed left-[50%] translate-x-[-50%] top-[50%] translate-y-[-50%] h-[95vh] sm:h-[80vh] rounded-lg z-50">
          <div className="w-[90vw] lg:w-[80vw] h-[50vh] overflow-y-scroll scrollbarBlack">
            <Layout>
              <Canvas3D image={currentOpen} />
            </Layout>
          </div>
        </div>
      ) : null}
    </>
  );
};
