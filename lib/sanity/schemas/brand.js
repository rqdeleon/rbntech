export default {
  name: "brand",
  title: "Product Brand",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Brand",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 96
      },
      validation: Rule => Rule.required()
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
  ]
};
