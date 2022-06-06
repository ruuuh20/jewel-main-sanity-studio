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
      title: "ID",
      name: "ID",
      type: "number",
   
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
    {
      title: 'Block Content',
      name: 'blockContentEn',
       type: 'array',
      of: [
        {type: 'block', 
          of: [
        {type: 'string'}
      ]},
       {type:'image'}
      ],
   
    },
       {
      name: "images",
      title: "Images",
      type: "array",
      of: [{ type: "projectImage" }],
    },
  ],
   preview: {
    select: {
      title: "title.en",
    },
  },
}