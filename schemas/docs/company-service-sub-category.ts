import image from "../utils/image";

export default {
  title: "Tjeneste | Underkategori",
  name: "company-service-sub-category",
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
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Cover-bilde",
      name: "coverImage",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
};
