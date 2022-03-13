export default {
    title: 'Contact',
    name: 'contact',
    type: 'document',
     __experimental_actions: ['create', 'update', /*'delete',*/ 'publish'],
    fields: [
        {
            title: 'Title',
            name: 'title',
            type: 'string',
            validation: Rule => Rule.required()
        },
         {
      title: 'Email Address',
      name: 'email',
      type: 'string',
    
    },
    {
      title: 'Phone Number',
      name: 'phoneNumber',
      type: 'string',
    },
    {
      title: 'Address',
      name: 'address',
      type: 'text',
      rows: 3
    },
    {
      title: 'Social Links',
      name: 'socialLinks',
 
      type: 'array',
      of: [{type: 'social', title: 'Social'}],
    },
    ]
}