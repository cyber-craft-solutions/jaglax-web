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
          key={villaDetails?._id}
          href={`/marsierra/villas/${villaDetails._id}`}
        />
      ))}
    </ProjectsLayout>
  );
};

export default Villas;
