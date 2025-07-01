import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";


import ArrFun from "./CompArr";
import BoolFun from "./CompBoolean";
import FunFun from "./CompFun";
import NumberFun from "./CompNumber";
import ObjFun from "./CompObj";
import StrFun from "./CompString";

function App() {
  return (
    <>
      <ArrFun arr={[1, "abc", 50]} />
      <BoolFun bool={true} />
      <FunFun
        propsFun={(el) => {
          return el + 100;
        }}
      />
      <NumberFun num={123} />
      <ObjFun obj={{ name: "vika", age: 27 }} />
      <StrFun str={"hello"} />
    </>
  );
}

export default App;
