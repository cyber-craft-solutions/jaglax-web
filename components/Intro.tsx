"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import { fetchHome } from "@/sanity/api/home.api";
import Text from "@/shared/Text";
import { Nunito_Sans } from "next/font/google";

const breadley = localFont({
  src: "../assets/fonts/breadleysans-regular.ttf",
});
const nunito = Nunito_Sans({ subsets: ["latin"] });
const Intro = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>(null);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchHome();
      setData(result);
    };

    fetchData();
  }, []);

  return (
    <div>
      <div className="py-10 px-3 flex justify-center">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          {data?.introTitle}
        </Text>
      </div>
      <div className="px-3 pb-10 flex justify-center">
        <Text className={`${nunito.className} text-center text-lg md:w-[65%]`}>
          {data?.introContent}
        </Text>
      </div>
      <div className="px-3 pb-[40px] flex flex-col md:flex-row items-center gap-3 justify-center">
        {data?.introImages.map((img: any, i: any) => {
          return (
            <>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Blurred image placeholder */}
                  <Image
                    src={img.url}
                    width={400}
                    height={300}
                    alt="Placeholder"
                    className="object-fit w-[90%] h-[300px] filter blur-[8px]"
                    placeholder="blur"
                    blurDataURL="/blur.jpg"
                  />
                </div>
              )}
              <Image
                src={img.url}
                width={300}
                height={300}
                alt="main_one"
                className="object-cover w-[400px] h-[300px]"
                onLoad={handleImageLoad}
              />
            </>
          );
        })}
      </div>
      <div
        className={`${nunito.className} text-center text-lg px-3 pb-10 flex justify-center`}
      >
        <Text className="text-center md:w-[65%]">{data?.aboutContentOne}</Text>
      </div>
      <div
        className={`${nunito.className} text-center text-lg px-3 pb-10 flex justify-center`}
      >
        <Text className="text-center md:w-[65%]">{data?.aboutContentTwo}</Text>
      </div>
      <div className="px-3 pb-[40px] flex flex-col md:flex-row items-center gap-3 justify-center">
        {data?.infoImages.map((img: any, i: any) => {
          return (
            <Image
              key={i}
              src={img.url}
              width={1200}
              height={1200}
              alt="main_one"
              className="object-cover w-[400px] h-[300px]"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Intro;
