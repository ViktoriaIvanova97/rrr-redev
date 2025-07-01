import React, { useState } from "react";

const StateFun = () => {
  const [increaseState, increaseSetState] = useState(0);
  const [hideState, hideSetState] = useState(false);
  const [inputState, inputSetState] = useState("");
  const [colorState, colorSetState] = useState("red");

  const changeInput = (text) => {
    inputSetState(text.target.value);
  };

  const changeColor = () => {
    colorSetState(colorState === "red" ? "green" : "red");
  };
  const style = {
    color: colorState,
  };

  return (
    <>
      <div>
        <h1>state: {increaseState}</h1>
        <button onClick={() => increaseSetState((preState) => preState + 1)}>
          click
        </button>
      </div>

      <div>
        {hideState && <h2>HELLO!</h2>}
        <button
          onClick={() => {
            hideSetState((hide) => !hide);
          }}
        >
          Показать/скрыть текст
        </button>
      </div>

      <div>
        <label>
          <input type="text" value={inputState} onChange={changeInput} />
        </label>
        <h3>text:{inputState}</h3>
		</div>

      <div>
        <h4 style ={style}>COLOR</h4>
        <button onClick={changeColor}>Change color</button>
      </div>
    </>
  );
};

export default StateFun;