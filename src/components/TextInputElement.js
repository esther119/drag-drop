import React, { useState } from "react";

const TextInputElement = ({ id }) => {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = () => {
    alert(`Input from Element ${id}: ${inputValue}`);
  };

  return (
    <div className="element">
      <h1>This is a text box</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={`Element ${id}`}
      />
      <button onClick={handleButtonClick}>Submit</button>
    </div>
  );
};

export default TextInputElement;
