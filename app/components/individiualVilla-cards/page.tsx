import React from "react";
import localFont from "next/font/local";
import Header from "@/shared/Header";
import Text from "@/shared/Text";

// const breadley = localFont({
//   src: "../../assets/fonts/breadleysans-regular.ttf",
// });

export function IndividualVilla() {
  return (
    <div>
      <Header type="dark" />
      <div className="pt-20 pb-12 px-7 flex justify-center">
        <Text
          className={`text-[32px] leading-[35px] text-center uppercase`}
        >
          Marsierra
        </Text>
      </div>
    </div>
  );
}
