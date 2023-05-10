export type AccordionItem = {
  internalName: string;
  text: string;
  name: string;
};

export type AccordionItemCollection = {
  items: AccordionItem[];
  total: number;
  skip: number;
  limit: number;
};
