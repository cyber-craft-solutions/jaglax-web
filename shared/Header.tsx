import { Call, Menu } from "@/assets/Icons";
import React from "react";
import Button from "./Button";

type Header = {
  type?: "light" | "dark";
};

const Header = ({ type = "dark" }: Header) => {
  if (type === "light") {
    return (
      <header className="flex items-center px-7 pt-11 justify-between font-bold">
        <Button type={type} className="py-[10px] px-[20px]">
          Book Now
        </Button>
        <div className="flex items-center gap-5">
          <span className="cursor-pointer">
            <Call color="white"/>
          </span>
          <span className="cursor-pointer">
            <Menu  color="white"/>
          </span>
        </div>
      </header>
    );
  }

  return (
    <header className="flex items-center px-7 pt-11 justify-between font-bold">
      <Button className="py-[10px] px-[20px]">Book Now</Button>
      <div className="flex items-center gap-5">
        <span className="cursor-pointer">
          <Call />
        </span>
        <span className="cursor-pointer">
          <Menu />
        </span>
      </div>
    </header>
  );
};

export default Header;
