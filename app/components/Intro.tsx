import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { fetchHome } from "@/sanity/api/home.api";
import Text from "@/shared/Text";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const Intro = async () => {
  const data = await fetchHome();
  return (
    <div>
      <div className="py-10 px-7 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {data?.introTitle}
        </Text>
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <Text className="text-center md:w-[65%]">{data.introContent}</Text>
      </div>
      <div className="px-7 pb-[30px] flex flex-col md:flex-row items-center gap-3 justify-center">
        {data.introImages.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="main_one"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <Text className="text-center md:w-[65%]">{data.aboutContentOne}</Text>
      </div>
      <div className="px-7 pb-10 flex justify-center">
        <Text className="text-center md:w-[65%]">{data.aboutContentTwo}</Text>
      </div>
      <div className="px-7 pb-[30px] flex flex-col md:flex-row items-center gap-3 justify-center">
        {data.infoImages.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={300}
              height={300}
              alt="main_one"
              className="object-cover w-[300px] h-[300px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
