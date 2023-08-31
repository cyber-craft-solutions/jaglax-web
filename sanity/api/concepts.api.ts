import { createClient, groq } from "next-sanity";

export async function fetchConcepts() {
  const client = createClient({
    projectId: "wx0q3a19",
    apiVersion: "2023-07-30",
    dataset: "production",
    useCdn: true,
  });

  return client.fetch(
    groq`*[_type=="concepts"][0]{
      _id,
      _createdAt,
      name,
      metaTags,
      slug,
      conceptTitle,
      "conceptImages": conceptImages[] {
        "url": asset->url
      },
      "conceptImages1": conceptImages1[] {
        "url": asset->url
      },
      "conceptImagesFirst": conceptImagesFirst[] {
        "url": asset->url
      },
      conceptContent,
      conceptFirstParaText,
      "conceptImagesSecond": conceptImagesSecond[] {
        "url": asset->url
      },
      conceptSecondParaText,
      "conceptImagesThird": conceptImagesThird[] {
        "url": asset->url
      },
    }`
  );
}
