// src/components/List.js
import React from 'react';


const List = ({ items, onItemClick }) => {
  return (
    <ul className="menu-list">
      {items.map((item, index) => (
        <li key={index} onClick={() => onItemClick(item)}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default List;
