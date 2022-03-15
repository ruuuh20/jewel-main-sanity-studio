// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

//we import the object and document schema
import localeString from './localeString'
import localeText from './localeText'
import singletonAbout from './singletonAbout'
import singletonContact from './singletonContact'
import home from './home'
import callToActionMain from './callToActionMain'
import project from './project'
import projectImage from './projectImage'
import team from './team'
import timelineItem from './timelineItem'
import socials from './socials'
import program from './program'
import programCategories from './programCategories'



// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    localeString,
    localeText,
    home,
    callToActionMain,
    project,
    projectImage,
    program,
    programCategories,
    team,
    timelineItem,
    socials,
    singletonAbout,
    singletonContact,
  ]),
})
