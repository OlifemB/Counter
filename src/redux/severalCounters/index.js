import { createAction } from "redux-act";
import { createReducer } from "redux-act";

export const addCounter = createAction("Add counter");
export const removeCounter = createAction("Remove counter");
export const incrementCounter = createAction("Increment counter");
export const decrementCounter = createAction("Decrement counter");

export const severalCountersReducer = createReducer(
  {
    [addCounter]: state => [...state, 0],
    [removeCounter]: state => [...state.slice(0, -1)],
    [incrementCounter]: (state, payload) => [
      ...state.slice(0, payload.index),
      state[payload.index] + 1,
      ...state.splice(payload.index + 1)
    ],
    [decrementCounter]: (state, payload) => [
      ...state.slice(0, payload.index),
      state[payload.index] - 1,
      ...state.splice(payload.index + 1)
    ]
  },
  [0]
);
