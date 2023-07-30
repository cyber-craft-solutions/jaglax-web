const Home = {
  name: "home",
  title: "Home",
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
      name: "url",
      title: "URL",
      type: "url",
    },
  ],
};

export default Home;
