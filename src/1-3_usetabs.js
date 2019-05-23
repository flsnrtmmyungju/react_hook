import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

//index는 0또는 1이되어야하고 모든버튼은 onclick(이벤트)를 가지고
//누군가 클릭하면 index가 무엇이든 상관없이 changItem(index)를 실행시키고
//changItem의 index는 index안에 있는 값인 0또는1로 바꿔줌
//그건 setCurrentIndex의 item을 바꿔줌 이는 state를 바꿔줌.
//그래서 currentItem의 currentIndex를바꿔줌
//이결과 모든걸 새로고침함

//set state는 모든걸 새로고침해줌 = re-render
//render 함수가없다고 render안되는것이아님

const content = [
  {
    tab: "Section 1",
    content: "i'm content section 1"
  },
  {
    tab: "Section 2",
    content: "i'm content section 2"
  }
];

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  } //                                      **7**
  const [currentIndex, setCurrentIndex] = useState(initialTab);
  return {
    //**8**                **9**
    currentItem: allTabs[currentIndex],
    //            **5**
    changItem: setCurrentIndex
  };
};

const App = () => {
  const { currentItem, changItem } = useTabs(0, content);
  return (
    <div className="App">
      <h1>React Hoo - useTabs</h1>
      {/*                    **1****4** */}
      {content.map((section, index) => (
        //       **2**         **3**
        <button onClick={() => changItem(index)}>{section.tab}</button>
      ))}
      <div>{currentItem.content}</div>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
