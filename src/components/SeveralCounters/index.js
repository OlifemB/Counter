import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { Counter } from "components/SeveralCounters/Counter";

import { addCounter, removeCounter } from "redux/severalCounters";

import { getSeveralCounters } from "components/SeveralCounters/selectors";

const _SeveralCounters = ({ severalCounters, addCounter, removeCounter }) => {
  const handleAddCounter = () => addCounter();
  const handleRemoveCounter = () => removeCounter();
  return (
    <>
      {severalCounters.map((counter, index) => (
        <Counter counter={counter} index={index} key={index} />
      ))}

      <button onClick={handleAddCounter}>Add Counter</button>
      <button onClick={handleRemoveCounter}>Remove counter</button>
      <hr />
    </>
  );
};

_SeveralCounters.propTypes = {
  // From connect - state
  severalCounters: PropTypes.array.isRequired,
  // From connect - actions
  addCounter: PropTypes.func.isRequired,
  removeCounter: PropTypes.func.isRequired
};

export const SeveralCounters = connect(
  state => ({
    severalCounters: getSeveralCounters(state)
  }),
  {
    addCounter,
    removeCounter
  }
)(_SeveralCounters);
