"use client";

import localFont from "next/font/local";
import React, { createContext, useState } from "react";
import Image from "next/image";
import Text from "@/shared/Text";
import { RightArrow } from "@/assets/Icons";
import IconTextCard from "../iconText-card";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});
export const SidebarContext = createContext<any>("");
const IndividualVilla = ({ amenities, name, propertyImages }: any) => {
  const [propertyData, setPropertyData] = useState<any>();
  return (
    <>
      <SidebarContext.Provider value={{ propertyData }}>
        <Header />
        <div className=" mx-8 my-8 lg:mx-[190px]">
          <div className="pt-20 pb-12 px-7 flex justify-center items-center gap-5">
            {/* <RightArrow className="rotate-180 cursor-pointer" /> */}
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
                  width={1200}
                  height={1200}
                  alt="individual-icon"
                  className="w-[300px] h-[200px] md:w-[520px] md:h-[350px] "
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </SidebarContext.Provider>
    </>
  );
};

export default IndividualVilla;
