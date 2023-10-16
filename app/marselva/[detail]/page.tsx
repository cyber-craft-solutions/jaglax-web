import React from "react";
import IndividualVilla from "@/components/individual-villa/page";
import { fetchMarsierraAppartmentById } from "@/sanity/api/marsierraAppartments.api";
import { fetchMarselvaVillaById } from "@/sanity/api/marselvaVillas.api";

type Props = {
  params: {
    detail: string;
  };
};

const Detail = async ({ params }: Props) => {
  const slug = params;
  const data = await fetchMarselvaVillaById(slug.detail);

  return (
    <IndividualVilla
      name={data?.name}
      amenities={data?.amenities}
      propertyImages={data?.propertyImages}
      href="/marselva"
    />
  );
};

export default Detail;
