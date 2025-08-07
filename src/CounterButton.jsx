import { memo } from "react";
const CounterButton = ({ changeCount }) => {
  return <button onClick={changeCount}>Increase</button>;
};

export default memo(CounterButton);
