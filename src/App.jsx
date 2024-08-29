import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./Features/Counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  console.log(count);
  const ThemeTextColor = useSelector((state) => state.theme.color);

  return (
    <>
      <div>
        <h1>Counter Application</h1>
        <div className="card">
          <button onClick={() => dispatch(increment())}>Increment</button>
          <span className="count" style={{ color: ThemeTextColor }}>
            {" "}
            count is {count}
          </span>
          <button onClick={() => dispatch(decrement())}> Decrement</button>
          <button onClick={() => dispatch(incrementByAmount(10))}>
            {" "}
            incrementBy10
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
