import image from "../utils/image";

export default {
  title: "Prosess",
  name: "what-we-do",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Pitch",
      name: "pitch",
      type: "string",
      description: "En kort pitch.",
      validation: (Rule) => Rule.required().max(180),
    },
    {
      title: "Ikon",
      name: "icon",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
  ],
};
