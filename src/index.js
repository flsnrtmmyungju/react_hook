import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = initialValue => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    console.log(event.target);
  };
  return { value, onChange };
};

const App = () => {
  //usestate
  // const [item, setItem] = useState(1);
  // const incrementItem = () => setItem(item + 1);
  // const decrementItem = () => setItem(item - 1);

  //useInput
  //useinput은 k를 가졌는데 그값은 initialValue로받아서
  //useState의initialValue로받아서 value 값으로 보내줌.

  const name = useInput("k");

  return (
    <div className="App">
      <h1>React Hooktest!!</h1>
      {/* usestate
      <h2>{item}</h2>
      <button onClick={incrementItem}>IncrementItem</button>
      <button onClick={decrementItem}>DecrementItem</button> */}
      {/* 언패킹을해서 value={name.value} 랑 {...name} 랑같음 */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
