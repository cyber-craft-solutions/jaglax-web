import { Logo } from "@/assets/Icons";
import React from "react";

const Hero = () => {
  return (
    <div className="w-full height-full">
      <div className="overlay"></div>
      <video autoPlay loop muted>
        <source src="/home-bg.mp4" type="video/mp4" />
      </video>
      <div className="z-[2] relative flex justify-center items-center h-screen">
        <Logo />
      </div>
    </div>
  );
};

export default Hero;
