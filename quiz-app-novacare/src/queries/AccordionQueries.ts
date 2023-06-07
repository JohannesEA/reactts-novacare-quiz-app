export const ACCORDION_ITEM_COLLECTION_QUERY = `
query {
  accordionItemCollection(limit: 10) {
    items {
      internalName
      text
      name
    }
  }
}
`;
