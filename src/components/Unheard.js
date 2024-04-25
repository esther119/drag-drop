import React, { useState, useEffect } from "react";

const Unheard = () => {
  const [textValue, setTextValue] = useState("");
  const [textBoxDimensions, setTextBoxDimensions] = useState({
    width: "70vw",
    height: "70vh",
  });
  const typingAudio = new Audio("/typewriter.mp3");

  const handleChange = (event) => {
    setTextValue(event.target.value);
    typingAudio.play();
  };

  useEffect(() => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    setTextBoxDimensions({
      width: `${Math.min(windowWidth * 0.7, 500)}px`, // maximum width of 500px
      height: `${Math.min(windowHeight * 0.7, 300)}px`, // maximum height of 300px
    });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        minHeight: "100vh",
        backgroundColor: "#E9D5FF",
      }}
    >
      <div>
        <p
          style={{
            textAlign: "center",
            color: "#805AD5",
            fontWeight: "bold",
            fontSize: "20px",
            marginBottom: "8px",
          }}
        >
          Reflect on a time when you felt unheard
        </p>
      </div>
      <div>
        <textarea
          aria-label="Reflect on a time when you felt unheard"
          value={textValue}
          onChange={handleChange}
          style={{
            ...textBoxDimensions,
            padding: "12px",
            backgroundColor: "#FEEBC8",
            borderRadius: "8px",
          }}
        />
      </div>
    </div>
  );
};

export default Unheard;
