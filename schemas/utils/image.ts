export default {
  title: "Image",
  name: "image",
  type: "image",
  validation: (Rule) => Rule.required(),
  options: {
    storeOriginalFilename: false,
    accept: ".png, .jpg, .jpeg, .svg",
  },
  fields: [
    {
      title: "Alternativ tekst for bilde (for skjermlesere)",
      name: "alt",
      type: "string",
    },
  ],
};
