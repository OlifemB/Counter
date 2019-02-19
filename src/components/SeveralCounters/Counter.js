import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { incrementCounter, decrementCounter } from "redux/severalCounters";

const _Counter = ({ counter, index, incrementCounter, decrementCounter }) => {
  const handleIncrement = () =>
    incrementCounter({
      index
    });
  const handleDecrement = () =>
    decrementCounter({
      index
    });

  return (
    <>
      <h1>{counter}</h1>
      <p>
        <button onClick={handleIncrement}>+</button>
        <button onClick={handleDecrement}>-</button>
      </p>
    </>
  );
};

_Counter.propTypes = {
  // From parent
  counter: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
  // From connect - actions
  incrementCounter: PropTypes.func.isRequired,
  decrementCounter: PropTypes.func.isRequired
};

export const Counter = connect(
  null,
  {
    incrementCounter,
    decrementCounter
  }
)(_Counter);
