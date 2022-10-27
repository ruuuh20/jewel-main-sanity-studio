export default {
  title: "Post",
  name: "post",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
      {
      title: 'Description',
      name: "description",
      type: "blockContent",
      
    },
         {
      title: 'Id',
      name: "id",
      type: "number",
      
    },
    
    {
  title: 'Post date',
  name: 'postDate',
  type: 'date',
    options: {
    dateFormat: 'YYYY-MM-DD',
    calendarTodayLabel: 'Today'
  }
},
    {
      title: "Main Image",
      name: "mainImage",
      type: "image",
     options: {
        hotspot: true,
     }
    },
    {
      title: 'Body',
      name: "body",
      type: "blockContent",
      
    },
    {
        title: 'Slug',
        name: 'slug',
type: 'slug',
options: {
    source: 'title',
    maxLength: 96,
}
}
    
  ],
     preview: {
    select: {
      title: "title",
    },
  },
};
