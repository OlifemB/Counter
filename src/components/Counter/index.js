import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { increment, decrement, reset, add } from "redux/counter";

import { getCounter } from "components/Counter/selectors";

const _CounterAct = ({ counter, increment, decrement, reset, add }) => {
  const handleCounterIncrement = () => increment();

  const handleCounterDecrement = () => decrement();

  const handleCounterAdd = value => add(value);

  const asyncHandleCounterAdd = (value, delay) =>
    setTimeout(() => add(value), delay);

  const handleReset = () => reset();

  return (
    <>
      <h1>Counter value = {counter}</h1>
      <button onClick={handleCounterIncrement}>INCREMENT</button>{" "}
      <button onClick={handleCounterDecrement}>DECREMENT</button>{" "}
      <button onClick={() => handleCounterAdd(5)}>ADD 5</button>{" "}
      <button onClick={() => handleCounterAdd(-5)}>MINUS 5</button>{" "}
      <button onClick={() => asyncHandleCounterAdd(50, 300)}>
        Async add 50
      </button>{" "}
      <button onClick={() => asyncHandleCounterAdd(-5, 300)}>
        Async minus 5
      </button>{" "}
      <button onClick={handleReset}>RESET</button>
      <hr />
    </>
  );
};

_CounterAct.propTypes = {
  // From connect - store
  counter: PropTypes.number.isRequired,
  // From connect - actions
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  add: PropTypes.func.isRequired
};

export const Counter = connect(
  state => ({
    counter: getCounter(state)
  }),
  { increment, decrement, reset, add }
)(_CounterAct);
