import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const useInput = (initialValue, validator) => {
  const [value, setValue] = useState(initialValue);
  const onChange = event => {
    const {
      target: { value }
    } = event;
    let willUpdate = true;
    if (typeof validator === "function") {
      willUpdate = validator(value);
    }
    if (willUpdate) {
      setValue(value);
    }
  };
  return { value, onChange };
};

const App = () => {
  //useInput
  //useinput은 k를 가졌는데 그값은 initialValue로받아서
  //useState의initialValue로받아서 value 값으로 보내줌.
  const maxLen = value => value.length <= 10;
  //name를 사용해서 useinput에 k와 maxLen을 넣어줌
  //매번 validateor은 바뀜
  //validateor의 타입이 펑션이면
  //willUpdate에 validateor의 결과를 업로드
  //여기서 validateor 는 maxLen 이고
  //결과는 true나 false 가됨.
  //10보다적으면 true
  const name = useInput("k", maxLen);

  return (
    <div className="App">
      <h1>React Hook - useInput</h1>
      {/* 언패킹을해서 value={name.value} 랑 {...name} 랑같음 */}
      <input placeholder="Name" {...name} />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
