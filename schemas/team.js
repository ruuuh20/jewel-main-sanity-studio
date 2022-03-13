export default {
  title: "Team",
  name: 'team',
  type: "document",
  fields: [
   
    {
      title: "Name",
      name: "name",
      type: "localeString",
     
    },
    
    {
      title: "Position",
      name: "position",
      type: "localeString",
    },
    {
      title: "Board Name",
      name: "boardName",
      type: "localeString"
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      // hidden: true,
    },
     
  ],
   preview: {
      select: {
        title: 'name.en'
      },
    }
  
}