"use client";
import Header from "@/shared/Header";
import React, { useEffect, useState } from "react";
import Intro from "./intro";
import Link from "next/link";
import Footer from "@/shared/Footer";
import { fetchMarsierra } from "@/sanity/api/marsierra.api";

const ProjectsLayout = ({ children }: any) => {
  const [project, setProject] = useState<string>("villa");
  const [data, setData] = useState<any>(null);

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
              className={`text-sm cursor-pointer ${
                project === "villa"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
              onClick={() => setProject("villa")}
            >
              View Villas
            </p>
          </Link>
          <Link href="/marsierra/appartments">
            <p
              className={`text-sm cursor-pointer ${
                project === "appartment"
                  ? "border-b-[1px] border-solid border-[#221F1F]"
                  : ""
              }`}
              onClick={() => setProject("appartment")}
            >
              View Appartments
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
