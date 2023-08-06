const Home = {
  name: "home",
  title: "Home",
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
      name: "introTitle",
      title: "Intorduction Title",
      type: "string",
    },
    {
      name: "introContent",
      title: "Intorduction Content",
      type: "text",
    },
    {
      name: "introImages",
      title: "Intro Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "aboutContentOne",
      title: "About Content One",
      type: "text",
    },
    {
      name: "aboutContentTwo",
      title: "About Content Two",
      type: "text",
    },
    {
      name: "infoImages",
      title: "Info Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default Home;
