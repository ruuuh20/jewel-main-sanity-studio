export default {
  title: "Home",
  name: "home",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hero Image",
      name: "heroImage",

      type: "image",
      validation: (Rule) => Rule.required(),
    },
    {
      title: '"Welcome" Section Heading',
      name: "welcomeHeading",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Goals",
      name: "goals",
      type: "array",
      description: "The block of text to list goals.",
      of: [{ type: "string" }],
    },
    {
      title: "callToAction",
      name: "callToAction",
      description: "Main CTA options on home page",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "callToActionMain" }],
        },
      ],
    },
  ],
};
