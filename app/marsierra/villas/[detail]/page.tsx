import React from "react";
import IndividualVilla from "@/components/individual-villa/page";
import { fetchMarsierraVillaById } from "@/sanity/api/marsierraVillas.api";

type Props = {
  params: {
    detail: string;
  };
};

const Detail = async ({ params }: Props) => {
  const slug = params;
  const data = await fetchMarsierraVillaById(slug.detail);
  console.log("TEST DATA", slug.detail);
  return (
    <IndividualVilla
      name={data?.name}
      amenities={data?.amenities}
      propertyImages={data?.propertyImages}
    />
  );
};

export default Detail;
