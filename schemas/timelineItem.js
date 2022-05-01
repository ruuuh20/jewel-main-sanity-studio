export default {
  name: "timelineItem",
  title: "timelineItem",
  type: 'object',
  fields: [
    {
      title: 'Year',
      name: 'timelineItemYear',
      type: 'localeString',
      
    },
    {
      title: 'Text',
      name: 'timelineItemText',
      type: 'localeText',
   
    },
    {
      title: 'Timeline Block English',
      name: 'timelineBlockEn',
       type: 'array',
      of: [{type: 'block'}],
   
    },
    {
      title: 'Timeline Block Korean',
      name: 'timelineBlockKo',
       type: 'array',
      of: [{type: 'block'}],
   
    },

    {
 title: 'Text Items',
 name: 'textItems',
 type: 'array',
   of: [{type: 'localeText'}],

    }
   

  ]
}