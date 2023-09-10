"use client";

import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/shared/Header";
import Text from "@/shared/Text";
import ImageCard from "../components/cards";
import Footer from "@/shared/Footer";
import { fetchMainPage } from "@/sanity/api/mainPage.api";
import IndividualVilla from "../individual-villa/page";
import { marierraApartments, marsierraVilla } from "@/utils/contants";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

const Villa = () => {
  const [responseData, setResponseData] = useState<any>();
  const [selectedPlace, setSelectedPlace] = useState("View Villas");
  const [individualPages, setIndividualPages] = useState({
    name: "",
    flag: false,
  });

  const data = fetchMainPage().then((res) => setResponseData(res));

  const handleViewMore = (elements: any) => {
    setIndividualPages({ name: elements, flag: true });
  };
  return (
    <div>
      <Header type="dark" />
      {individualPages?.flag === false ? (
        <>
          <div className="pt-20 pb-12 px-7 flex justify-center">
            <Text
              className={`${breadley.className} text-[32px] leading-[35px] text-center uppercase`}
            >
              {responseData?.introTitle}
            </Text>
          </div>
          <div className="px-7 flex flex-col items-center ">
            {responseData?.mainImages.map((img: any, i: any) => {
              return (
                <Image
                  key={i}
                  src={img.url}
                  width={300}
                  height={300}
                  alt="oncepts_main"
                  className="object-cover w-[300px] h-[300px]"
                />
              );
            })}
            <Text className="pt-10 text-center">
              {responseData?.mainDescription}
            </Text>
          </div>
          <div className="flex justify-center items-center mt-5 gap-8">
            <p
              className={`text-sm cursor-pointer ${
                selectedPlace === "View Villas"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
              onClick={() => setSelectedPlace("View Villas")}
            >
              View Villas
            </p>
            <p
              className={`text-sm cursor-pointer ${
                selectedPlace === "View Appartments"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
              onClick={() => setSelectedPlace("View Appartments")}
            >
              View Appartments
            </p>
          </div>
          {selectedPlace === "View Villas" ? (
            <div className="flex justify-center flex-wrap">
              {marsierraVilla?.map((villaDetails) => (
                <ImageCard
                  villaDetails={villaDetails}
                  key={villaDetails?.id}
                  handleViewMore={handleViewMore}
                />
              ))}
            </div>
          ) : (
            <div className="flex justify-center flex-wrap">
              {marierraApartments?.map((apartmentDetails) => (
                <ImageCard
                  villaDetails={apartmentDetails}
                  key={apartmentDetails?.id}
                  handleViewMore={handleViewMore}
                />
              ))}
            </div>
          )}
        </>
      ) : selectedPlace === "View Villas" ? (
        <IndividualVilla
          IndividualCardContents={
            marsierraVilla.find((el) => el?.villaName === individualPages?.name)
              ?.IndividualCardContents
          }
          heading={individualPages}
          setIndividualPages={setIndividualPages}
          IndividualImages={
            marsierraVilla.find((el) => el?.villaName === individualPages?.name)
              ?.AllIndividualImages
          }
        />
      ) : (
        <IndividualVilla
          IndividualCardContents={
            marierraApartments.find(
              (el) => el?.villaName === individualPages?.name
            )?.IndividualCardContents
          }
          heading={individualPages}
          setIndividualPages={setIndividualPages}
          IndividualImages={
            marierraApartments.find(
              (el) => el?.villaName === individualPages?.name
            )?.AllIndividualImages
          }
        />
      )}
      <div className="mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default Villa;
