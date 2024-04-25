// Element.jsx
import React from "react";

const Element = ({ index, setActiveCard, Component, ...props }) => {
  // console.log("index", index);
  return (
    <div
      className="element w-44 h-80 md:w-56 md:h-96 overflow-auto border-2 border-gray-300"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <Component {...props} />
    </div>
  );
};

export default Element;
