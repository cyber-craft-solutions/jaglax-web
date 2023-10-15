"use client";

import { Call, Menu } from "@/assets/Icons";
import React, { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Link from "next/link";

type Header = {
  type?: "light" | "dark";
};

const Header = ({ type = "dark" }: Header) => {
  const [drop, setDrop] = useState(false);

  if (type === "light") {
    return (
      <header className="z-10 absolute w-full ">
        <div className="flex items-center px-7 pt-11 justify-between font-bold relative container">
          <Link href="/booking">
            <Button type={type} className="py-[10px] px-[20px]">
              Book Now
            </Button>
          </Link>
          <div className="flex items-center gap-5">
            <span className="cursor-pointer">
              <Call color="white" />
            </span>
            <span
              className="cursor-pointer"
              onClick={() => setDrop((drop) => !drop)}
            >
              <Menu color="white" />
            </span>
          </div>
          {drop && <Dropdown />}
        </div>
      </header>
    );
  }

  return (
    <header className="z-10 w-full">
      <div className="flex items-center px-7 pt-11 justify-between font-bold relative container">
        <Link href="/booking">
          <Button type={type} className="py-[10px] px-[20px]">
            Book Now
          </Button>
        </Link>
        <div className="flex items-center gap-5">
          <span className="cursor-pointer">
            <Call />
          </span>
          <span
            className="cursor-pointer"
            onClick={() => setDrop((drop) => !drop)}
          >
            <Menu />
          </span>
        </div>
        {drop && <Dropdown />}
      </div>
    </header>
  );
};

export default Header;
