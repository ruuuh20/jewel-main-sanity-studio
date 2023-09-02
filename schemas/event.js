export default {
  title: "Event",
  name: 'event',
  type: "document",
  fields: [
    {
      title: "Title Eng",
      description: "Event title in English",
      name: "titleEng",
      type: "string",
      validation: Rule => Rule.required()
    },
    {
      title: "Title Kor",
      description: "Event title in Kor",
      name: "titleKor",
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
    {
      title: "Slug",
      name: "slug",
      type: "string",
     
    },
     {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
  ]
}