import { createClient, groq } from "next-sanity";

export async function fetchMarsierraVillas() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="marsierraVillas"]{
      _id,
      _createdAt,
      name,
      guestCount,
      rooms,
      slug,
      "cardImage":cardImage{
        "url": asset->url
      },
      amount,
      "amenities": amenities[] {
        "url": asset->url,
        text
      },
      "propertyImages": propertyImages[] {
        "url": asset->url
      }
    }`
  );
}
export async function fetchMarsierraVillaById(id: string) {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="marsierraVillas" && _id == $id][0]{
      _id,
      _createdAt,
      name,
      guestCount,
      rooms,
    slug,
      "cardImage": cardImage {
        "url": asset->url
      },
      amount,
      "amenities": amenities[]{
        "icon": icon.asset->url,
        text
      },
      "propertyImages": propertyImages[] {
        "url": asset->url
      }
    }`,
    { id }
  );
}
