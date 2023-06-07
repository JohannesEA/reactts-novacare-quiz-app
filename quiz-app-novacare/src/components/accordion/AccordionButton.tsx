import React from "react";
import "./AccordionButton.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

interface AccordionButtonProps {
  title: string;
  content: string;
  isActive: boolean;
  onClick: () => void;
}

const AccordionButton: React.FC<AccordionButtonProps> = ({
  title,
  content,
  isActive,
  onClick,
}) => {
  const prefix = "accordion";

  return (
    <div className={`${prefix}__wrapper`} onClick={onClick}>
      <div className={`${prefix}__button`}>
        {title}
        {isActive ? (
          <IoIosArrowUp className={`${prefix}__icon`} />
        ) : (
          <IoIosArrowDown className={`${prefix}__icon`} />
        )}
      </div>
      {isActive && (
        <div className={`${prefix}__content`}>
          <p>{content}</p>
        </div>
      )}
    </div>
  );
};

export default AccordionButton;
