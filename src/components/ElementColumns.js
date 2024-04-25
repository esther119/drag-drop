// ElementColumns.jsx
import React from "react";
import Element from "./Element"; // This path should correctly point to Element.jsx

const ElementColumns = ({ elements, setActiveCard }) => {
  // Determine the number of columns: at least 4 or equal to the number of elements if greater than 4
  const gridCols = elements.length > 4 ? elements.length : 4;
  console.log("gridCols", gridCols);
  return (
    <div className="overflow-x-auto mr-8 ml-8">
      <div className="flex space-x-8 min-w-max">
        {elements.map((item, index) => (
          <Element
            key={index}
            index={index}
            Component={item.component}
            {...item.props}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </div>
  );
};

export default ElementColumns;
