export default {
  title: "Social",
  name: 'social',
  type: "object",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "URL",
      name: "url",
      type: "url",
      validation: Rule => Rule.required()
    },
  ]
}