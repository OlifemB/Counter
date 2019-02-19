import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { setVisibilityFilter } from "redux/todos";

import { getVisibilityFilter } from "components/Todos/selectors";

const _FilterButton = ({
  children,
  filter,
  visibilityFilter,
  setVisibilityFilter
}) => {
  const handleSetVisibilityFilter = () =>
    setVisibilityFilter({
      filter
    });

  return (
    <button
      disabled={visibilityFilter === filter}
      onClick={handleSetVisibilityFilter}
    >
      {children}
    </button>
  );
};

_FilterButton.propTypes = {
  // From connect - state
  visibilityFilter: PropTypes.string.isRequired,
  // From connect - actions
  setVisibilityFilter: PropTypes.func.isRequired,
  // From parent
  children: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired
};

export const FilterButton = connect(
  state => ({
    visibilityFilter: getVisibilityFilter(state)
  }),
  {
    setVisibilityFilter
  }
)(_FilterButton);
