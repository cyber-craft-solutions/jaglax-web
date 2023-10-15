"use client";
import { Logo } from "@/assets/Icons";
import React, { useEffect, useRef } from "react";

const Hero = () => {
  const videoRef: any = useRef(null);

  useEffect(() => {
    const playVideo = () => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    };

    // Add event listener to play the video on user interaction
    document.addEventListener("click", playVideo);

    return () => {
      // Clean up the event listener
      document.removeEventListener("click", playVideo);
    };
  }, []);
  return (
    <div className="w-full height-full">
      <div className="overlay"></div>
      <video ref={videoRef} autoPlay loop muted playsInline>
        <source src="/home-bg.mp4" type="video/mp4" />
      </video>
      <div className="z-[2] relative flex justify-center items-center h-screen">
        <Logo />
      </div>
    </div>
  );
};

export default Hero;
