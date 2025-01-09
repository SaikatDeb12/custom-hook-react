import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setIsVisible((prev) => !prev);
        }}
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      <h1>{isVisible ? "This is a text" : ""}</h1>
    </div>
  );
}

export default App;
