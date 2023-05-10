import { useState, useEffect } from "react";
import { BASE_URL } from "../config/config";
import { ACCORDION_ITEM_COLLECTION_QUERY } from "../queries/AccordionQueries";
import { AccordionItemCollection } from "../types/types";

const useFetchAccordionItemCollection = () => {
  const [data, setData] = useState<AccordionItemCollection>();
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchAccordionItemCollection = () => {
      setLoading(true);
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ query: ACCORDION_ITEM_COLLECTION_QUERY }),
      })
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json.data.accordionItemCollection);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setError("Feil ved henting av spørsmål og svar");
          setLoading(false);
        });
    };
    fetchAccordionItemCollection();
  }, []);

  return { data, error, loading };
};

export default useFetchAccordionItemCollection;
