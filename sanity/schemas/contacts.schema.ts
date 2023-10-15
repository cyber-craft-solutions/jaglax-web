const ContactUs = {
  name: "contactUs",
  title: "Contact Us",
  readonly: true,
  type: "document",
  fields: [
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      option: { source: "name" },
    },
    {
      name: "address",
      title: "Address",
      type: "string",
    },
    {
      name: "contact",
      title: "Contact",
      type: "array",
      of: [{ type: "number" }],
    },
    {
      name: "email",
      title: "Email",
      type: "array",
      of: [{ type: "string" }],
    },
  ],
};

export default ContactUs;
