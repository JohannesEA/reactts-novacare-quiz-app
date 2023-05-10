export const ACCORDION_ITEM_COLLECTION_QUERY = `
query{
  accordionItemCollection{
    items {
      internalName
      text
      name
    }
  }
}
`;
