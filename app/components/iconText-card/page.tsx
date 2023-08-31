import Image from "next/image";
import React from "react";

import swimming_pool from "../../../assets/images/swimming_pool .png";

const IconTextCard = ({ elements }: any) => {
  return (
    <div className="flex flex-col items-center w-[100px]">
      <Image
        src={elements?.image}
        width={40}
        height={40}
        alt="individual-icon"
        className=" w-[40px] h-[40px] "
      />
      <p className="text-center">{elements?.text}</p>
    </div>
  );
};

export default IconTextCard;
