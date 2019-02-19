import { createAction, createReducer } from "redux-act";

// Helpers
export const FETCH_STATUS = {
  NOT_FETCH: "NOT_FETCH",
  FETCH_PENDING: "FETCH_PENDING",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_FAILED: "FETCH_FAILED"
};

// Normalize
import {
  normalizeAllIds,
  normalizeItemsById
} from "redux/itemsList/normalizeShape";

// Sync Actions
export const setFetchStatus = createAction("Set fetch status");
export const setFetchedItems = createAction("Set Items");

// Async Actions
export const fetchItems = url => dispatch => {
  dispatch(setFetchStatus(FETCH_STATUS.FETCH_PENDING));

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response;
    })
    .then(response => response.json())
    .then(items => {
      // Normalize State Shape
      dispatch(
        setFetchedItems({
          itemsById: normalizeItemsById(items),
          allIds: normalizeAllIds(items)
        })
      );
    })
    .then(() => {
      dispatch(setFetchStatus(FETCH_STATUS.FETCH_SUCCESSFUL));
    })
    .catch(() => {
      dispatch(setFetchStatus(FETCH_STATUS.FETCH_FAILED));
    });
};

// Reducer
export const itemsReducer = createReducer(
  {
    [setFetchStatus]: (state, payload) => ({ ...state, fetchStatus: payload }),
    [setFetchedItems]: (state, payload) => {
      return {
        ...state,
        itemsById: {
          ...state.itemsById,
          ...payload.itemsById
        },
        allIds: payload.allIds
      };
    }
  },
  {
    fetchStatus: FETCH_STATUS.NOT_FETCH,
    itemsById: {},
    allIds: []
  }
);
