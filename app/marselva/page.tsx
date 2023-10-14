"use client";
import Header from "@/shared/Header";
import React, { useEffect, useState } from "react";
import Intro from "../../shared/intro";
import Link from "next/link";
import Footer from "@/shared/Footer";
import { fetchMarselva } from "@/sanity/api/marselva.api";

const ProjectsLayout = ({ children }: any) => {
  const [project, setProject] = useState<string>("villa");
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchMarselva();
      setData(result);
    };
    fetchData();
  }, []);

  return (
    <main className="relative">
      <Header type="dark" />
      <Intro responseData={data} />

      <Footer />
    </main>
  );
};

export default ProjectsLayout;
