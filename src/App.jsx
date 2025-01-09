import { useState } from "react";
import "./App.css";
import { useToggle } from "./useToggle";

function App() {
  const [isVisible, toggle] = useToggle(false);
  return (
    <div>
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      <h1>{isVisible ? "This is a text" : ""}</h1>
    </div>
  );
}

export default App;
