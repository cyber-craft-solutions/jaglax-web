const Home = {
  name: "marsierra",
  title: "Marsierra",
  readonly: true,
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "introImages",
      title: "Intro Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default Home;
