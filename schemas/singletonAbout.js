export default {
  title: "About Page",
  name: "about",
  type: "document",
  __experimental_actions: [/* 'create', */ "update", "delete", "publish"],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Description",
      name: "description",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Intro Text",
      name: "introText",
      type: "text",
      description:
        "The block of introductory text that appears below the carousel.",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hero Image",
      name: "heroImage",
      description: "The hero image.",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    },

    {
      title: "Founder's Message",
      name: "foundersMessage",
      type: "localeText",
      description: "Founder and President's Message",
    },
    {
      title: "Founder's Image",
      name: "foundersImage",
      description: "The Founder's image for Message section.",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      title: "Content",
      description:
        "The main content area, use the + button top right to add component blocks",
      name: "content",
      type: "blockContentExtended",
    },

    {
      title: "History",
      name: "history",
      type: "localeText",
      description: "History text",
      rows: 3,
    },
    {
      title: "Timeline Items",
      name: "timelineItems",
      type: "array",
      of: [{ type: "timelineItem" }],
    },
    {
      title: "Goals",
      name: "goals",
      type: "text",
      description: "Goals text",
      rows: 3,
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Founder blurb",
      name: "founderBlurb",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      title: "Intro blurb",
      name: "introBlurb",
      type: "blockContent",
    },
  ],
  preview: {
    select: {
      title: "title.en",
    },
    // prepare ({ title }) {
    //   return {
    //     title
    //   }
    // }
  },
};
