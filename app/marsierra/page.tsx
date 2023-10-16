"use client";
import Header from "@/shared/Header";
import React, { useEffect, useState } from "react";
import Intro from "../../shared/intro";
import Link from "next/link";
import Footer from "@/shared/Footer";
import { fetchMarsierra } from "@/sanity/api/marsierra.api";
import { Nunito_Sans } from "next/font/google";

const nunito = Nunito_Sans({ subsets: ["latin"] });

const ProjectsLayout = ({ children }: any) => {
  const [data, setData] = useState<any>(null);
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "";
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMarsierra();
      setData(result);
    };
    fetchData();
  }, []);
  return (
    <main className="relative">
      <Header type="dark" />
      <Intro responseData={data} />
      <div className="container flex flex-col justify-center items-center mt-20 ">
        <div className="flex gap-4">
          <Link href="/marsierra/villas">
            <p
              className={`text-sm cursor-pointer ${nunito.className} ${
                pathname === "/marsierra/villas"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
            >
              View Villas
            </p>
          </Link>
          <Link href="/marsierra/apartments">
            <p
              className={`text-sm cursor-pointer  ${nunito.className} ${
                pathname === "/marsierra/apartments"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
            >
              View Apartments
            </p>
          </Link>
        </div>
        <div className="flex justify-center flex-wrap items-center my-5 gap-8">
          {children}
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default ProjectsLayout;
