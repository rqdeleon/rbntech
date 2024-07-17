export default {
  name: "productCategory",
  title: "Product Category",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Category Name",
      type: "string"
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
      name: "parent",
      title: "Parent Category",
      type: "reference",
      to:[{type: 'productCategory'}]
    },
    {
      name: "description",
      title: "Description",
      type: "text"
    },
  ]
};
