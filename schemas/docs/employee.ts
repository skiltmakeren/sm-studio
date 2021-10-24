export default {
  title: "Ansatt",
  name: "employee",
  type: "document",
  fields: [
    {
      title: "Navn",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Stilling",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "E-post",
      name: "email",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Telefonnummer",
      name: "phoneNumber",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Bilde",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
