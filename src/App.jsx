import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import LifecycleComponent from "./LifecycleComponent";
import LifecycleComponent2 from "./LifecycleComponent2";


function App() {
  const [state, setState] = useState(1);
  const [state2, setState2] = useState(0);
  return (
    <div style={{ display: 'flex' }}>
      <div>
        {state < 10 ? <LifecycleComponent /> : <p>...</p>}
        <p>{state}</p>
        <button onClick={() => setState((state) => state + 1)}>
          componentWillUnmount
        </button>
      </div>
      <div>
        {state2 < 10 ? <LifecycleComponent2 /> : <p>...</p>}
        <p>{state2}</p>
        <button onClick={() => setState2((state2) => state2 + 1)}>
          componentWillUnmount
        </button>
      </div>
    </div>
  );
}

export default App;
