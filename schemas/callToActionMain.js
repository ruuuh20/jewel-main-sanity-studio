export default {
  title: "Call To Action Main",
  name: 'callToActionMain',
  type: "document",
  fields: [
    {
      title: "Title",
      description: "CTA title for main page",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Description",
      description: "CTA description for main page",
      name: "description",
      type: "string",
      validation: Rule => Rule.required()
    },
  ]
}