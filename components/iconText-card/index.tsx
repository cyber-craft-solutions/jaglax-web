import Image from "next/image";
import React from "react";

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
      <p className="text-center">{elements?.text}</p>
    </div>
  );
};

export default IconTextCard;
