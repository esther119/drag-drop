import React from "react";

function Draggable({ id, children, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={onDragStart}
      id={id}
      style={{
        cursor: "move",
        padding: "10px",
        margin: "5px",
        backgroundColor: "lightgrey",
      }}
    >
      {children}
    </div>
  );
}

export default Draggable;
