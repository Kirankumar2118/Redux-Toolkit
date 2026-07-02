import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counterSlice";
import "./App.css";

const App = () => {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  const [num, setNum] = useState(5);

  return (
    <div className="app">
      <div className="card">
        <h1>Counter: {count}</h1>

        <div className="controls">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>

        <div className="picker">
          <input
            value={num}
            type="number"
            onChange={(e) => setNum(e.target.value)}
          />
          <button onClick={() => dispatch(incrementByAmount(Number(num)))}>
            Increase by Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
