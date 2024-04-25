// App.jsx
import React, { useState } from "react";
import ElementColumns from "./components/ElementColumns";
import TextInputElement from "./components/TextInputElement";
import CheckboxElement from "./components/CheckboxElement";
import Leaf from "./components/Leaf";
import Unheard from "./components/Unheard";
import QuizComponent from "./components/Quiz";

function App() {
  const [acitveCard, setActiveCard] = useState(null);
  const elements = [
    { component: TextInputElement, props: { placeholder: "Type here..." } },
    {
      component: CheckboxElement,
      props: { initialLabel: "Enable", toggleLabel: "Disable" },
    },
    { component: Leaf },
    { component: Unheard },
    { component: QuizComponent },
    { component: QuizComponent },
  ];
  console.log("acitvecard", acitveCard);
  return (
    <div className="App">
      <h1>Dynamic Interactive Elements</h1>
      <ElementColumns elements={elements} setActiveCard={setActiveCard} />
    </div>
  );
}

export default App;
