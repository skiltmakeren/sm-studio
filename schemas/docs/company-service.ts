import image from "../utils/image";
import { slugify } from "../utils/slugify";

export default {
  title: "Tjeneste",
  name: "company-service",
  type: "document",
  fields: [
    {
      title: "Tittel",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      description: "URL for tjenesten",
      options: {
        source: "title",
        slugify,
      },
    },
    {
      title: "Kort beskrivelse",
      name: "shortDescription",
      type: "string",
      description: "En kort beskrivelse av tjenesten",
      validation: (Rule) => Rule.required().max(180),
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
    {
      title: "Ikon",
      name: "icon",
      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Underkategorier",
      name: "subCategories",
      type: "array",
      of: [{ type: "company-service-sub-category" }],
    },
    {
      title: "Layout",
      name: "layout",
      type: "string",
      options: {
        list: [
          { title: "To-søyle", value: "two-column" },
          { title: "Split", value: "split" },
        ],
        layout: "radio",
      },
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
