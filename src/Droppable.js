import React from "react";

function Droppable({ children, onDrop, onDragOver }) {
  return (
    <div
      onDrop={onDrop}
      onDragOver={onDragOver}
      style={{
        width: "100%",
        minHeight: "100px",
        border: "2px dashed gray",
        padding: "10px",
      }}
    >
      {children}
    </div>
  );
}

export default Droppable;
