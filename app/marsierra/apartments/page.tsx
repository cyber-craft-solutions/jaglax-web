import React from "react";
import ProjectsLayout from "../page";
import ImageCard from "@/components/cards";
import { fetchMarsierraAppartments } from "@/sanity/api/marsierraAppartments.api";

const Appartments = async () => {
  const data = await fetchMarsierraAppartments();
  return (
    <ProjectsLayout>
      {data?.map((details: any) => (
        <ImageCard
          villaDetails={details}
          key={details?.id}
          href={`/marsierra/apartments/${details._id}`}
        />
      ))}
    </ProjectsLayout>
  );
};

export default Appartments;
