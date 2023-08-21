const MainPage = {
  name: "mainPage",
  title: "MainPage",
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
      name: "mainImages",
      title: "Main Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
    {
      name: "mainDescription",
      title: "Main Description",
      type: "string",
    },
  ],
};

export default MainPage;
