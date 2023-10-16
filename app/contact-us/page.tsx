import React from "react";
import Text from "@/shared/Text";
import Header from "@/shared/Header";
import localFont from "next/font/local";
import { Phone, Navigation, Mail } from "@/assets/Icons";
import Footer from "@/shared/Footer";
import { fetchContactUs } from "@/sanity/api/contactUs.api";
import { Nunito_Sans } from "next/font/google";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});
const nunito = Nunito_Sans({ subsets: ["latin"] });
export default async function ContactUs() {
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
        <Text className={`${nunito.className} text-lg text-center pt-10`}>
          {data?.description}
        </Text>

        <div
          className={`${nunito.className} pt-[50px] pb-[120px] flex grow-1 flex-col  gap-5`}
        >
          <div className="flex gap-3 justify-center items-center">
            <span className="mt-1">
              <Navigation />
            </span>
            <Text className="text-lg">{data?.address}</Text>
          </div>
          <div className="flex gap-3 justify-start items-center">
            <span>
              <Phone />
            </span>
            {data?.contact?.map((number: string, index: number) => (
              <>
                <a href={`tel:${number}`}>
                  <Text className="text-lg" key={index}>
                    {data?.email?.length === index ? number : number + ","}
                  </Text>
                </a>
              </>
            ))}
          </div>
          <div className="flex gap-3 justify-start items-center">
            <span>
              <Mail />
            </span>
            {data?.email?.map((email: string, index: number) => (
              <>
                <a href={`mailto:${email}`}>
                  <Text className="text-lg" key={index}>
                    {data?.email?.length - 1 === index ? email : email + ","}
                  </Text>
                </a>
              </>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
