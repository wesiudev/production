"use client";

import React, { useRef } from "react";
import { useIsVisible } from "react-is-visible";
export const SectionWrapper = ({ children }: { children: React.ReactNode }) => {
  const nodeRef = useRef<any>();
  const isVisible = useIsVisible(nodeRef);
  const [opacity, setOpacity] = React.useState(false);
  React.useEffect(() => {
    if (isVisible) {
      setOpacity(true);
    } else {
      setOpacity(false);
    }
  }, [isVisible]);

  return (
    <section
      className={`duration-[750ms] h-[300vh] w-full bg-gradient-to-b from-purple-800 to-transparent absolute left-0 top-[110vh] sm:top-[100vh] z-50 
    ${isVisible ? "rounded-t-0 " : "rounded-t-[600px] "} 
    ${opacity ? "bg-opacity-100" : "bg-opacity-80"}
    `}
    >
      <div
        className="absolute top-24 sm:top-40 lg:top-60 left-0 w-4 h-full"
        ref={nodeRef}
      />
      {children}
    </section>
  );
};
