"use client";
import Image from "next/image";

interface BackpackThumbnail {
  src: string;
}

export default function BackpackImageThumbnail(props: BackpackThumbnail) {
  const { src } = props;
  return (
    <Image
      priority
      className="rounded-md"
      width={512}
      height={512}
      src={src}
      alt=""
    />
  );
}
