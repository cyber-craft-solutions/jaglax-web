import { createClient, groq } from "next-sanity";

export async function fetchHome() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: '2023-07-30',
    dataset: "production",
    useCdn: true
  });

  return client.fetch(
    groq`*[_type=="home"][0]{
      _id,
      _createdAt,
      name,
      metaTags,
      slug,
      introTitle,
      introContent,
      "introImages": introImages[] {
        "url": asset->url
      },
      aboutContentOne,
      aboutContentTwo,
      "infoImages": infoImages[] {
        "url": asset->url
      }
    }`
  )
}
