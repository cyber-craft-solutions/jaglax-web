import IndividualVilla from "@/app/individual-villa/page";
import {
  fetchMarselvaVillaById,
  fetchMarselvaVillas,
} from "@/sanity/api/marselvaVillas.api";
import React from "react";

type Props = {
  params: {
    detail: string;
  };
};

const Detail = async ({ params }: Props) => {
  const slug = params;
  const data = await fetchMarselvaVillaById(slug.detail);
  console.log("MYIDe3e", data?.amenities);
  return (
    <IndividualVilla
      name={data?.name}
      amenities={data?.amenities}
      propertyImages={data?.propertyImages}
    />
  );
};

export default Detail;
