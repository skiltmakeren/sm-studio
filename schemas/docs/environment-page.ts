import image from "../utils/image";

export default {
  title: "Miljø-side",
  name: "environment-page",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Innhold",
      name: "content",
      type: "array",
      of: [{ type: "block" }, { ...image }],
    },
    {
      title: "Bilder",
      name: "images",
      type: "array",
      of: [{ type: "image" }],
    },
  ],
};
