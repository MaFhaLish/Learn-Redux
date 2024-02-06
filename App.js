import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signIn } from "./Actions/index";
function App() {
  const counter = useSelector(state => state.counter);
  const logged = useSelector(state => state.logged);
  const dispatch = useDispatch();
  return (
    <>
      <h1>{logged ? "You Are Logged in" : "Logg in Please!"}</h1>
      <button onClick={() => dispatch(signIn())}>
        {logged ? "logg out" : "logg in"}
      </button>

      <h2>Counter : {counter}</h2>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
