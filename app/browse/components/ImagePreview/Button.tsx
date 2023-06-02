"use client";

import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { RootState, store } from "@/common/redux/store";
import { ImageProps } from "@/types";

import { useDispatch, useSelector } from "react-redux";

interface ButtonProps {
  image: ImageProps;
  children?: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ image, children }) => {
  const dispatch = useDispatch();
  const { currentOpen } = useSelector((state: RootState) => state.images);

  return (
    <div className="relative">
      <button
        onClick={() => {
          dispatch(setCurrentOpen(image)), console.log(currentOpen);
        }}
      >
        {children}
      </button>
    </div>
  );
};
