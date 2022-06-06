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
      title: "block Content",
      description:
        "The main content area, use the + button top right to add component blocks",
      name: "blockContent",
      type: "blockContentExtended",
    },
    {
      title: "Poster",
      description: "optional poster/flyer for program page",
      name: "poster",
      type: "array",
      of: [{ type: "image" }],
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
    {
      name: "previousSlug",
      title: "slug for previous project - go back",
      type: "string",
    },
    {
      name: "nextSlug",
      title: "slug for next project - go to next",
      type: "string",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
  },
};
