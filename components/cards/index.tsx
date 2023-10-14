"use client";
import React from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Text from "../../shared/Text";
import { RightArrow } from "@/assets/Icons";
import Link from "next/link";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

type villaDetailsType = {
  villaDetails: {
    _id: number;
    slug: string;
    name: string;
    guestCount: string;
    rooms: string;
    cardImage: any;
    amount: string;
  };
  href: string;
};

export default function ImageCard({ villaDetails, href }: villaDetailsType) {
  return (
    <div className="rounded bg-[#f5f4f4] w-fit p-3 mt-10 shadow-xl">
      <Link href={href}>
        <Image
          src={villaDetails?.cardImage?.url}
          alt="villa_image"
          width={303}
          height={204}
        />
        <Text
          className={`${breadley.className} text-[24px] leading-[24px]  uppercase pt-2`}
        >
          {villaDetails?.name}
        </Text>
        <div className="flex gap-2 items-center">
          <p className="text-sm font-normal py-2">
            Upto {villaDetails?.guestCount} Guests
          </p>
          <p className="text-sm font-normal py-2">|</p>
          <p className="text-sm font-normal py-2">{villaDetails?.rooms}BHK</p>
        </div>
        <hr className="border-[#221F1F] border-solid opacity-50" />
        <div className="flex justify-between items-center">
          <div>
            <p className="text-base font-semibold pt-2">
              ₹ {villaDetails?.amount} / month*
            </p>
            <Text className="text-[10px] font-medium">*exclusive of taxes</Text>
          </div>
          <div className="flex items-center gap-4 cursor-pointer">
            <button className="text-sm font-bold">View More </button>
            <RightArrow />
          </div>
        </div>
      </Link>
    </div>
  );
}
