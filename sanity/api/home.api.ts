import { createClient, groq } from "next-sanity";

export async function fetchHome() {
  const client = createClient({
    projectId: "wx0q3a19",
    dataset: "production",
  });

  return client.fetch(
    groq`*[]{
      _id,
      _createdAt,
      name,
      metaTags,
      slug,
      introTitle,
      introContent,
      intoImages,
      aboutContentOne,
      aboutContentTwo,
      infoImages
    }`
  )
}
