import S from "@sanity/desk-tool/structure-builder";

const hiddenDocTypes = listItem => ![    "about", "contact"  ].includes(listItem.getId())

export default () =>
  S.list()
    .title("Content")
    .items([
   
        S.listItem()
            .title("About")
            .child(
                S.editor()
                    .id('about')
                    .schemaType("about")
                    .documentId("singleton-about")
            ),
             S.divider(),
      S.listItem().title('Contact').child(S.editor().id('contact').schemaType('contact').documentId('singleton-contact')),
            ...S.documentTypeListItems()
             .filter(hiddenDocTypes)
    ]);