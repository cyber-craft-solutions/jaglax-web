import React from "react";
import Text from "@/shared/Text";
import Header from "@/shared/Header";
import localFont from "next/font/local";
import { Phone, Navigation, Mail } from "@/assets/Icons";
import Footer from "@/shared/Footer";
import { fetchContactUs } from "@/sanity/api/contactUs.api";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

export default async function ContactUs () {
  const data = await fetchContactUs();

  return (
    <div>
      <Header type="dark" />
      <div className="pt-[152px] flex flex-col items-center px-7">
        <Text
          className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
        >
          Contact Us
        </Text>
        <Text className="text-center pt-10">
          {data?.description}
        </Text>

        <div className="pt-[50px] pb-[120px] flex grow-1 flex-col gap-5">
          <div className="flex gap-3 justify-center">
            <span className="mt-1">
              <Navigation />
            </span>
            <Text>
             {data?.address}
            </Text>
          </div>
          <div className="flex gap-3 justify-start">
            <span>
              <Phone />
            </span>
            {data?.contact?.map((number:string, index: number) => (
            <Text key={index}>{number}</Text>
            ))}
          </div>
          <div className="flex gap-3 justify-start">
            <span>
              <Mail />
            </span>
            {data?.email?.map((email:string, index: number) => (
            <Text key={index}>{email}</Text>
            ))}
        
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
