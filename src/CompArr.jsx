import React from "react";

const ArrFun = ({arr}) => {
  return <p>Return value array - {arr.map(el=> 'элемент массива: ' + el +'; ')}</p>;
};


export default ArrFun;