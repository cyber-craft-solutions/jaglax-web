"use client";

import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import Text from "@/shared/Text";
import { RightArrow } from "@/assets/Icons";
import IconTextCard from "../components/iconText-card";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const IndividualVilla = ({ amenities, name, propertyImages }: any) => {
  return (
    <div className=" mx-8 lg:mx-[190px]">
      <div className="pt-20 pb-12 px-7 flex justify-center items-center gap-5">
        <RightArrow className="rotate-180 cursor-pointer" />
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {name}
        </Text>
      </div>
      <div className="flex justify-center md:gap-24 gap-12 flex-wrap my-5">
        {amenities?.map((elements: any) => (
          <IconTextCard elements={elements} key={elements?.id} />
        ))}
      </div>
      <div className=" flex justify-center flex-wrap gap-8  mt-8">
        {propertyImages?.map((el: any) => (
          <div key={el?.id}>
            <Image
              src={el?.url}
              width={300}
              height={40}
              alt="individual-icon"
              className=" w-[520px] h-[350px] "
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndividualVilla;
