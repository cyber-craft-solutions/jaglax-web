import localFont from "next/font/local";
import React from "react";
import Image from "next/image";
import Text from "@/shared/Text";
import { RightArrow } from "@/assets/Icons";
import IconTextCard from "../components/iconText-card";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const IndividualVilla = ({
  IndividualCardContents,
  heading,
  setIndividualPages,
  IndividualImages,
}: any) => {
  return (
    <div className=" mx-8 lg:mx-[190px]">
      <div
        className="pt-20 pb-12 px-7 flex justify-center items-center gap-5"
        onClick={() => setIndividualPages({ name: "", flag: false })}
      >
        <RightArrow className="rotate-180 cursor-pointer" />
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {heading?.name}
        </Text>
      </div>
      <div className="flex justify-center md:gap-24 gap-12 flex-wrap my-5">
        {IndividualCardContents?.map((elements: any) => (
          <IconTextCard elements={elements} key={elements?.id} />
        ))}
      </div>
      <div className=" flex justify-center flex-wrap gap-8  mt-8">
        {IndividualImages?.map((el: any) => (
          <div key={el?.id}>
            <Image
              src={el?.image}
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
