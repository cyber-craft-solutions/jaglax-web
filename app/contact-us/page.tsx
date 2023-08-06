import React from "react";
import Text from "@/shared/Text";
import Header from "@/shared/Header";
import localFont from "next/font/local";
import { Phone, Navigation, Mail } from "@/assets/Icons";
import Footer from "@/shared/Footer";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

export default function ContactUs() {
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
          Thank you for considering getting in touch with us! We would love to
          hear from you and answer any questions you may have.
        </Text>

        <div className="pt-[50px] pb-[120px] flex grow-1 flex-col gap-5">
          <div className="flex gap-3 justify-center">
            <span className="mt-1">
              <Navigation />
            </span>
            <Text>
              448/6 Pilimbi Vaddo, Shree Ganesh Puri, Sodiem-Siolim, Bardez, Goa
              - 403517. North Goa – 403517
            </Text>
          </div>
          <div className="flex gap-3 justify-start">
            <span>
              <Phone />
            </span>
            <Text>+91 76665 96567</Text>
          </div>
          <div>
            <span>
              <Mail />
            </span>
            <Text>explore@jaglaxhomes.com</Text>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
