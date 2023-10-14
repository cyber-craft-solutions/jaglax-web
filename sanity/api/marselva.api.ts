import { createClient, groq } from "next-sanity";

export async function fetchMarselva() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="marselva"][0]{
      _id,
      _createdAt,
      title,
      description,
      "introImages": introImages[] {
        "url": asset->url
      },
    }`
  );
}
