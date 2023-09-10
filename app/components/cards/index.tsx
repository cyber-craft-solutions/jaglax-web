import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Text from "../../../shared/Text";

import { RightArrow } from "@/assets/Icons";

const breadley = localFont({
  src: "../../../assets/fonts/breadleysans-regular.ttf",
});

type villaDetailsType = {
  villaDetails: {
    id: number;
    villaName: string;
    villaSize: string;
    image: any;
    amount: string;
  };
  handleViewMore: any;
};

export default function ImageCard({
  villaDetails,
  handleViewMore,
}: villaDetailsType) {
  return (
    <div className="rounded bg-[#f5f4f4] w-fit p-3 mt-10">
      <Image src={villaDetails?.image} alt="villa_image" />
      <Text
        className={`${breadley.className} text-[24px] leading-[24px]  uppercase pt-2`}
      >
        {villaDetails?.villaName}
      </Text>
      <Text className="text-sm font-normal py-2">
        {villaDetails?.villaSize}
      </Text>
      <hr className="border-[#221F1F] border-solid opacity-50" />
      <div className="flex justify-between items-center">
        <div>
          <Text className="text-base font-semibold pt-2">
            {villaDetails?.amount}
          </Text>
          <Text className="text-[10px] font-medium">*exclusive of taxes</Text>
        </div>
        <div className="flex items-center gap-4 cursor-pointer">
          <button
            className="text-sm font-bold"
            onClick={() => handleViewMore(villaDetails?.villaName)}
          >
            View More{" "}
          </button>
          <RightArrow />
        </div>
      </div>
    </div>
  );
}
