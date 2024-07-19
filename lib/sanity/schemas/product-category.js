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
      title: "Mark as Parent Category",
      type: "boolean"
    },
    {
      name: "children",
      title: "Children Category",
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
