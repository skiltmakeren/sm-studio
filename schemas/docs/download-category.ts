export default {
  title: "Nedlastnings-kategori",
  name: "download-category",
  type: "document",
  fields: [
    {
      name: "name",
      type: "string",
      title: "Kategori",
      validation: (Rule) => Rule.required(),
    },
  ],
};
