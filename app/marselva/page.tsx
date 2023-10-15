"use client";
import Header from "@/shared/Header";
import React, { useEffect, useState } from "react";
import Intro from "../../shared/intro";
import Link from "next/link";
import Footer from "@/shared/Footer";
import { fetchMarselva } from "@/sanity/api/marselva.api";
import ImageCard from "@/components/cards";
import { fetchMarselvaVillas } from "@/sanity/api/marselvaVillas.api";

const ProjectsLayout = ({ children }: any) => {
  const [villasData, setVillasData] = useState<any>();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMarselva();
      const villas = await fetchMarselvaVillas();
      setData(result);
      setVillasData(villas);
    };
    fetchData();
  }, []);

  return (
    <main className="relative">
      <Header type="dark" />
      <Intro responseData={data} />
      <div className="flex flex-wrap justify-center gap-8 container mb-8">
        {villasData?.map((villaDetails: any) => (
          <ImageCard
            villaDetails={villaDetails}
            key={villaDetails?._id}
            href={`/marselva/${villaDetails._id}`}
          />
        ))}
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsLayout;
