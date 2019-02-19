import { createSelector } from "reselect";

const getItemsById = state => state.items.itemsById;
const getItemsAllIds = state => state.items.allIds;
const getItemsFetchStatus = state => state.items.fetchStatus;

export const itemsAllIds = createSelector(
  getItemsAllIds,
  allIds => allIds
);

export const itemsById = createSelector(
  getItemsById,
  itemsById => itemsById
);

export const itemsFetchStatus = createSelector(
  getItemsFetchStatus,
  fetchStatus => fetchStatus
);
