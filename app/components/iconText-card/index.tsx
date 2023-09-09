import Image from "next/image";
import React from "react";

import swimming_pool from "../../../assets/images/swimming_pool .png";

const IconTextCard = ({ elements }: any) => {
  return (
    <div className="flex flex-col items-center w-[100px]">
      <Image
        src={elements?.image}
        width={60}
        height={60}
        alt="individual-icon"
        className=" w-[60px] h-[60px] "
      />
      <p className="text-center">{elements?.text}</p>
    </div>
  );
};

export default IconTextCard;
