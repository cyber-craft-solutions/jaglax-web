import { createClient, groq } from "next-sanity";

export async function fetchMarsierraProperties() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  const query = groq`{
    "appartments": *[_type == "marsierraAppartments"] {
      name
    },
    "villas": *[_type == "marsierraVillas"] {
      name
    },
    "marselvaVillas": *[_type == "marselvaVillas"] {
      name
    }
  }`;

  const response = await client.fetch(query);
  const appartmentsNames = response.appartments.map((item: any) => {
    return { label: item.name, value: item.name };
  });
  const villasNames = response.villas.map((item: any) => {
    return { label: item.name, value: item.name };
  });
  const marselvaVillas = response.marselvaVillas.map((item: any) => {
    return { label: item.name, value: item.name };
  });

  return {
    marsierra: [...appartmentsNames, ...villasNames],
    marselvaVillas: marselvaVillas,
  };
}
