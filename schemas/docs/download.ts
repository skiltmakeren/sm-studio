export default {
  title: "Nedlastning",
  name: "download",
  type: "document",
  fields: [
    {
      name: "file",
      type: "file",
      title: "Fil",
    },
    {
      name: "title",
      type: "string",
      title: "Tittel",
    },
    {
      name: "category",
      type: "reference",
      title: "Kategori",
      to: { type: "download-category" },
    },
  ],
};
