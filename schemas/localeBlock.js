export default  {
      title: 'Localized Block',
      name: 'localeBlock',
      type: 'object',
      fields: [
        {
          title: 'English',
          name: 'en',
          type: 'block',
          marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight' }
        ]
      }
        },
        {
          title: 'Korean',
          name: 'ko',
          type: 'block',
          marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Code', value: 'code' },
          { title: 'Highlight', value: 'highlight' }
        ]
      }
        },
    ]
}