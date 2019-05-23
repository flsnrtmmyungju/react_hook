import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const App = () => {
  const [item, setItem] = useState(1);
  const incrementItem = () => setItem(item + 1);
  const decrementItem = () => setItem(item - 1);

  return (
    <div className="App">
      <h1>React Hook!!</h1>
      <h2>{item}</h2>
      <button onClick={incrementItem}>IncrementItem</button>
      <button onClick={decrementItem}>DecrementItem</button>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
