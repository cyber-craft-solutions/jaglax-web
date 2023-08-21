import { createClient, groq } from "next-sanity";

export async function fetchMainPage() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="mainPage"][0]{
      _id,
      _createdAt,
      name,
      metaTags,
      slug,
      introTitle,
      "mainImages": mainImages[] {
        "url": asset->url
      },
      mainDescription,
    }`
  );
}
