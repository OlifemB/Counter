import { createSelector } from "reselect";

export const getSeveralCounters = createSelector(
  state => state.severalCounters,
  severalCounters => severalCounters
);
