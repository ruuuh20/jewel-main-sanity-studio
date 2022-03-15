export default {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "localeString",
    },
    {
      name: "mainImage",
      title: "Main Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "projectImage" }],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 100,
      },
    },
    {
      name: "id",
      title: "ID",
      type: "number",
    },
    {
      name: "cardDescription",
      title: "Card Description",
      type: "string",
    },
    {
      name: "contentOne",
      title: "Content One",
      description: "First block of long description for project page",
      type: "text",
    },
    {
      name: "contentTwo",
      title: "Content Two",
      description: "Second block of long description for project page",
      type: "text",
    },
    {
      name: "contentThree",
      title: "Content Three",
      description: "Third block of long description for project page",
      type: "text",
    },
    {
      name: "overview",
      title: "overview",
      description: "short overview for sidebar",
      type: "string",
    },
    {
      name: "keyDates",
      title: "Key Dates",
      type: "text",
      rows: 3,
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};
