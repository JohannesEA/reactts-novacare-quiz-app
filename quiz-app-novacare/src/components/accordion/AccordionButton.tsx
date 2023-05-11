import React, { useState } from "react";
import "./AccordionButton.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionButtonProps {
  title: string;
  content: string;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  title,
  content,
}) => {
  const prefix = "accordion";
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${prefix}__wrapper`}>
      <button className={`${prefix}__button`} onClick={toggleAccordion}>
        {title}
        {isOpen ? (
          <IoIosArrowUp className={`${prefix}__icon`} />
        ) : (
          <IoIosArrowDown className={`${prefix}__icon`} />
        )}
      </button>
      {isOpen && (
        <div className={`${prefix}__content`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
