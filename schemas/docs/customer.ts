export default {
  title: "Kunde",
  name: "customer",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
