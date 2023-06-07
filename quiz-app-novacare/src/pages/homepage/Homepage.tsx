import { useState } from "react";
import AccordionButton from "../../components/accordion/AccordionButton";
import useFetchAccordionItemCollection from "../../hooks/useFetchAccordionItemCollection";
import "./Homepage.css";

interface HomepageProps {
  title: string;
}

const Homepage: React.FC<HomepageProps> = ({ title }) => {
  const prefix = "homepage";
  const { data, error, loading } = useFetchAccordionItemCollection();
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleClick = (index: number) => {
    setActiveIndex(index === activeIndex ? -1 : index);
  };

  return (
    <div className={`${prefix}__wrapper`}>
      <h1 className={`${prefix}__title`}>{title}</h1>
      {loading && (
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
            onClick={() => handleClick(index)}
            isActive={activeIndex === index}
          />
        ))}
    </div>
  );
};

export default Homepage;
