import React from "react";

interface ListsProps {
  title: string;
  items: string[];
}

const Lists: React.FC<ListsProps> = ({ title, items }) => {
  return (
    <div className="list col">
        <ul className="list__items">
        <h3 className="list__title">{title}</h3>
          {items.map((item, index) => (
            <li key={index} className="list__item">
              {item}
            </li>
          ))}
        </ul>
    </div>
  );
};

export default Lists;
