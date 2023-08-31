const Concepts = {
  name: "concepts",
  title: "Concepts",
  readonly: true,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: { source: "name" },
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "metaTags",
      title: "Meta Tags",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "conceptTitle",
      title: "Intorduction Title",
      type: "string",
    },
    {
      name: "conceptImages",
      title: "Concept Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "conceptImages1",
      title: "Concept Images1",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "conceptContent",
      title: "Intorduction Content",
      type: "text",
    },
    {
      name: "conceptImagesFirst",
      title: "Concept Images First",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "conceptFirstParaText",
      title: "Concept First Para Text",
      type: "string",
    },
    {
      name: "conceptImagesSecond",
      title: "Concept Images Second",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "conceptSecondParaText",
      title: "Concept Second Para Text",
      type: "string",
    },
    {
      name: "conceptImagesThird",
      title: "Concept Images Third",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default Concepts;
