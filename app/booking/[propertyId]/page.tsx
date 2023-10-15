import React from "react";
import { fetchMarsierraAppartmentById } from "@/sanity/api/marsierraAppartments.api";
import Header from "@/shared/Header";
import { useRouter } from "next/router";

type Props = {
  params: {
    propertyId: string;
  };
};

const Detail = async ({ params }: Props) => {
  const slug = params;
  const data = await fetchMarsierraAppartmentById(slug.propertyId);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Detail;
