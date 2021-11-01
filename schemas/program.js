export default {
    name: 'program',
    title: 'Program',
    type: 'document',
    fields:  [
   { 
       name: 'title',
    title: 'Title',
    type: 'string',
},
{ 
       name: 'mainImage',
    title: 'Main Image',
    type: 'image',
    options: {
        hotspot: true
    }
},
 { 
       name: 'images',
    title: 'Images',
    type: 'array',
    of: [{type: 'programImage'}]
},
 { 
       name: 'slug',
    title: 'Slug',
    type: 'slug',
    options: {
        source: 'title',
        maxLength: 100
    }
},
 { 
       name: 'id',
    title: 'ID',
    type: 'number',
},
 { 
       name: 'description',
    title: 'Description',
    type: 'string',
},
    ]
}