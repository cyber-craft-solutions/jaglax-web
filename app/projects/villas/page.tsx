import React from "react";
import ProjectsLayout from "../page";
import { fetchMarselvaVillas } from "@/sanity/api/marselvaVillas.api";
import ImageCard from "@/app/components/cards";

const Villas = async () => {
  const data = await fetchMarselvaVillas();
  console.log("fetchMarselvaVillas", data);
  return (
    <ProjectsLayout>
      {data?.map((villaDetails: any) => (
        <ImageCard
          villaDetails={villaDetails}
          key={villaDetails?.id}
          //   handleViewMore={handleViewMore}
        />
      ))}
    </ProjectsLayout>
  );
};

export default Villas;
