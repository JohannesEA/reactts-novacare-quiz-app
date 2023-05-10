import { useEffect, useState } from "react";
import AccordionButton from "../../components/accordion/AccordionButton";
import { BASE_URL } from "../../config/config";
import { AccordionItemCollection } from "../../types/types";
import "./Homepage.css";

const query = `
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

interface HomepageProps {
  title: string;
}

const Homepage = ({ title }: HomepageProps) => {
  const prefix = "homepage";
  const [data, setData] = useState<AccordionItemCollection>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const fetchAccordionItemCollection = () => {
      setIsLoading(true);
      fetch(BASE_URL, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ query }),
      })
        .then((response) => response.json())
        .then((json) => {
          setData(json.data.accordionItemCollection);
          setIsLoading(false);
        })
        .catch((error) => {
          setError("Error fetching data");
          setIsLoading(false);
        });
    };
    fetchAccordionItemCollection();
  }, []);

  return (
    <div className={`${prefix}__wrapper`}>
      <h1 className={`${prefix}__title`}>{title}</h1>
      {isLoading && (
        <p className={`${prefix}__loading-text`}>
          Laster inn spørsmål og svar...
        </p>
      )}
      {error && <p className={`${prefix}__error-text`}>{error}</p>}
      {data &&
        data.items.length > 0 &&
        data.items.map((accordion, index) => (
          <AccordionButton
            key={index}
            title={accordion.name}
            content={accordion.text}
          />
        ))}
    </div>
  );
};

export default Homepage;
