"use client";

import React, { useState } from "react";
import Image from "next/image";
import localFont from "next/font/local";
import Header from "@/shared/Header";
import Text from "@/shared/Text";

import marsierra_main from "../../assets/images/marsierra_main.jpg";
import ImageCard from "../components/cards";

const breadley = localFont({
  src: "../../assets/fonts/breadleysans-regular.ttf",
});

import villa_1 from "../../assets/images/villa_1.jpg";
import villa_2 from "../../assets/images/villa_2.jpg";
import villa_3 from "../../assets/images/villa_3.jpg";
import villa_4 from "../../assets/images/villa_4.jpg";
import villa_5 from "../../assets/images/villa_5.jpg";
import villa_6 from "../../assets/images/villa_6.jpg";
import villa_7 from "../../assets/images/villa_7.jpg";
import appartment_1 from "../../assets/images/Apartment1.jpg";
import appartment_2 from "../../assets/images/Apartment2.jpg";
import appartment_3 from "../../assets/images/Apartment3.jpg";
import appartment_4 from "../../assets/images/Apartment4.jpg";
import appartment_5 from "../../assets/images/Apartment5.jpg";
import appartment_6 from "../../assets/images/Apartment6.jpg";
import appartment_7 from "../../assets/images/Apartment7.jpg";
import appartment_8 from "../../assets/images/Apartment8.jpg";
import swimming_pool from "../../assets/images/swimming_pool .png";
import Footer from "@/shared/Footer";
import { fetchMainPage } from "@/sanity/api/mainPage.api";
import IndividualVilla from "../individual-villa/page";

const Villa = () => {
  const [responseData, setResponseData] = useState<any>();
  const [selectedPlace, setSelectedPlace] = useState("View Villas");

  const marsierraVilla = [
    {
      id: 1,
      villaName: "Villa La Vida Loca",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_1,
      amount: "₹ 25000/ month*",
    },
    {
      id: 2,
      villaName: "Costal Reef Villa",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_2,
      amount: "₹ 25000/ month*",
    },
    {
      id: 3,
      villaName: "The Scandinavian Abode",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_3,
      amount: "₹ 25000/ month*",
    },
    {
      id: 4,
      villaName: "Villa La Dolce Vita",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_4,
      amount: "₹ 25000/ month*",
    },
    {
      id: 5,
      villaName: "Villa C’est La Vie",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_5,
      amount: "₹ 25000/ month*",
    },
    {
      id: 6,
      villaName: "Villa Hamptons Twilight",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_6,
      amount: "₹ 25000/ month*",
    },
    {
      id: 7,
      villaName: "Villa Tequilla Sunrise",
      villaSize: "Upto 7 Guests  |  3BHK",
      image: villa_7,
      amount: "₹ 25000/ month*",
    },
  ];
  const marierraApartments = [
    {
      id: 1,
      villaName: "Appartment G1",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_1,
      amount: "₹ 25000/ month*",
    },
    {
      id: 2,
      villaName: "Appartment G2",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_2,
      amount: "₹ 25000/ month*",
    },
    {
      id: 3,
      villaName: "Appartment F1",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_3,
      amount: "₹ 25000/ month*",
    },
    {
      id: 4,
      villaName: "Appartment F2",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_4,
      amount: "₹ 25000/ month*",
    },
    {
      id: 5,
      villaName: "Appartment F3",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_5,
      amount: "₹ 25000/ month*",
    },
    {
      id: 6,
      villaName: "Appartment S1",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_6,
      amount: "₹ 25000/ month*",
    },
    {
      id: 7,
      villaName: "Appartment S2",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_7,
      amount: "₹ 25000/ month*",
    },
    {
      id: 7,
      villaName: "Appartment S3",
      villaSize: "Upto 5 Guests  |  3BHK",
      image: appartment_8,
      amount: "₹ 25000/ month*",
    },
  ];

  const IndividualCardContents = [
    {
      id: 1,
      image: swimming_pool,
      text: "Private Pool",
    },
    {
      id: 2,
      image: swimming_pool,
      text: "Housekeeping",
    },
    {
      id: 3,
      image: swimming_pool,
      text: "Sofa cum bed",
    },
    {
      id: 4,
      image: swimming_pool,
      text: "3 Bedrooms and Ensuite Bathrooms",
    },
    {
      id: 5,
      image: swimming_pool,
      text: "Terrace Garden & Deck",
    },
  ];

  const data = fetchMainPage().then((res) => setResponseData(res));

  return (
    <div>
      <Header type="dark" />
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
            <ImageCard villaDetails={villaDetails} key={villaDetails?.id} />
          ))}
        </div>
      ) : (
        <div className="flex justify-center flex-wrap">
          {marierraApartments?.map((apartmentDetails) => (
            <ImageCard
              villaDetails={apartmentDetails}
              key={apartmentDetails?.id}
            />
          ))}
        </div>
      )}
      {/* <IndividualVilla IndividualCardContents={IndividualCardContents} /> */}
      <div className="mt-9">
        <Footer />
      </div>
    </div>
  );
};

export default Villa;
