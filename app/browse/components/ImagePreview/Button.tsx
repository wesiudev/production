"use client";

import { setCurrentOpen } from "@/common/redux/slices/imagesSlice";
import { store } from "@/common/redux/store";
import { ImageProps } from "@/types";

interface ButtonProps {
  image: ImageProps;
  children?: React.ReactNode;
}
export const Button: React.FC<ButtonProps> = ({ image, children }) => {
  return (
    <div className="relative">
      <button
        onClick={() => {
          store.dispatch(setCurrentOpen(image));
        }}
      >
        {children}
      </button>
    </div>
  );
};
