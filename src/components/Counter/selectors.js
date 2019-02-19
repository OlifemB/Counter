import { createSelector } from "reselect";

export const getCounter = createSelector(
  state => state.counter,
  counter => counter
);
