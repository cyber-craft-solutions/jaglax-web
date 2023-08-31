import localFont from "next/font/local";
import React from "react";
import Text from "@/shared/Text";
import { RightArrow } from "@/assets/Icons";
import IconTextCard from "../components/iconText-card/page";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const IndividualVilla = ({ IndividualCardContents }: any) => {
  console.log("IndividualCardContents", IndividualCardContents);
  return (
    <div>
      <div className="pt-20 pb-12 px-7 flex justify-center items-center gap-5">
        <RightArrow className="rotate-180 cursor-pointer" />
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          Villa la Vida Loca
        </Text>
      </div>
      <div className="flex justify-evenly gap-5 flex-wrap">
        {IndividualCardContents?.map((elements: any) => (
          <IconTextCard elements={elements} key={elements?.id} />
        ))}
      </div>
    </div>
  );
};

export default IndividualVilla;
