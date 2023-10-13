import { defineField } from "sanity";

const Home = {
  name: "marsierraAppartments",
  title: "Marsierra appartments",
  readonly: true,
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      description:
        "Add a custom slug for the URL or generate one from the name",
      options: { source: "name" },
      validation: (rule) => rule.required(),
    }),
    {
      name: "guestCount",
      title: "Guest Count",
      type: "number",
    },
    {
      name: "rooms",
      title: "Rooms",
      type: "string",
    },

    {
      name: "cardImage",
      title: "Card Image",
      type: "image",
    },
    {
      name: "amount",
      title: "Amount",
      type: "number",
    },
    {
      name: "amenities",
      title: "Amenities",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "text",
              title: "Text",
              type: "string",
            },
            {
              name: "icon",
              title: "Icon",
              type: "image",
            },
          ],
        },
      ],
    },
    {
      name: "propertyImages",
      title: "Property Images",
      type: "array",
      of: [{ type: "image", options: { hotspot: true } }],
    },
  ],
};

export default Home;
