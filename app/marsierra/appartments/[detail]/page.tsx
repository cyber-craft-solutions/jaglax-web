import React from "react";
import IndividualVilla from "@/components/individual-villa/page";
import { fetchMarsierraAppartmentById } from "@/sanity/api/marsierraAppartments.api";

type Props = {
  params: {
    detail: string;
  };
};

const Detail = async ({ params }: Props) => {
  const slug = params;
  const data = await fetchMarsierraAppartmentById(slug.detail);

  return (
    <IndividualVilla
      propertyType="marsierra"
      type="appartment"
      id={data._id}
      name={data?.name}
      amenities={data?.amenities}
      propertyImages={data?.propertyImages}
    />
  );
};

export default Detail;
