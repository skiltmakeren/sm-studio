import image from "../utils/image";
import { slugify } from "../utils/slugify";

export default {
  title: "Nyhet",
  name: "news-article",
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
      description: "URL for artikkelen",
      options: {
        source: "title",
        slugify,
      },
    },
    {
      title: "Kort beskrivelse",
      name: "shortDescription",
      type: "string",
      description: "En kort beskrivelse av artikkelen",
      validation: (Rule) => Rule.required().max(180),
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
  ],
};
