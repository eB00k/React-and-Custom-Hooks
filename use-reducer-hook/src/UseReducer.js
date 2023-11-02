import React from "react";
import { useReducer } from "react";
import "./style.scss";

const ACTIONS = {
  INCREAMENT: "increament",
  DECREAMENT: "decreament",
};

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.INCREAMENT:
      return { count: state.count + 1 };
    case ACTIONS.DECREAMENT:
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default function useReducer() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  const increament = () => dispatch({ type: ACTIONS.INCREAMENT });

  const decreament = () => dispatch({ type: ACTIONS.DECREAMENT });

  return (
    <>
      <button onClick={decreament}>-</button>
      <span>{state.count}</span>
      <button onClick={increament}>+</button>
    </>
  );
}
