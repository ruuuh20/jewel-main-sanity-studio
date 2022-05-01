export default {
  title: "Program",
  name: 'program',
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "localeString",
   
    },
    {
      title: "Logo",
      name: "logo",
      type: "image",
      
    },
    {
      title: 'Description Block English',
      name: 'descriptionBlockEn',
       type: 'array',
      of: [{type: 'block'}],
   
    },
  ],
   preview: {
    select: {
      title: "title.en",
    },
  },
}