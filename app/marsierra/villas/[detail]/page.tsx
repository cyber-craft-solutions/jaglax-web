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

  return (
    <IndividualVilla
      name={data?.name}
      amenities={data?.amenities}
      propertyImages={data?.propertyImages}
      href="/marsierra/villas"
    />
  );
};

export default Detail;
