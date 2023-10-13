import React from "react";
import ProjectsLayout from "../page";
import { fetchMarsierraVillas } from "@/sanity/api/marsierraVillas.api";
import ImageCard from "@/components/cards";

const Villas = async () => {
  const data = await fetchMarsierraVillas();
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
