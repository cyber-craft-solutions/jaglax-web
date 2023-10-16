import { Nunito_Sans } from "next/font/google";
import Image from "next/image";
import React from "react";
const nunito = Nunito_Sans({ subsets: ["latin"] });
const IconTextCard = ({ elements }: any) => {
  return (
    <div className="flex flex-col items-center w-[100px]">
      <Image
        src={elements?.icon}
        width={1200}
        height={1200}
        alt={elements?.text}
        className=" w-[60px] h-[60px] "
      />
      <p className={`${nunito.className} text-center`}>{elements?.text}</p>
    </div>
  );
};

export default IconTextCard;
