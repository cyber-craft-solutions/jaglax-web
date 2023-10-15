"use client";
import React, { useState } from "react";
import Text from "@/shared/Text";
import localFont from "next/font/local";
import Image from "next/image";

const breadley = localFont({
  src: "../assets/fonts/breadleysans-regular.ttf",
});

export type IntroProps = {
  responseData: {
    title: string;
    introImages: { url: string }[];
    description: string;
  };
};

const Intro = ({ responseData }: IntroProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <div className="flex flex-col mb-8 items-center justify-center container">
      <div className="pt-20 pb-12 px-7 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {responseData?.title}
        </Text>
      </div>
      <div className="px-7 flex flex-col items-center ">
        {responseData?.introImages?.map((img: any, i: any) => (
          <div key={i} className="relative w-full h-auto">
            {!imageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full animate-pulse bg-gray-200"></div>
              </div>
            )}
            <Image
              src={img.url}
              width={300}
              height={300}
              alt="oncepts_main"
              className={`object-cover w-full h-auto ${
                imageLoaded ? "" : "opacity-0"
              }`}
              layout="responsive"
              blurDataURL="/blur.jpg" // Provide the base64-encoded blurred image placeholder
              onLoadingComplete={() => setImageLoaded(true)} // Set the imageLoaded state to true when the image finishes loading
            />
          </div>
        ))}
        <Text className="pt-10 text-center">{responseData?.description}</Text>
      </div>
    </div>
  );
};

export default Intro;
