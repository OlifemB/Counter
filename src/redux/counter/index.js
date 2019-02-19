import { createAction, createReducer } from "redux-act";

export const increment = createAction("Increment counter");
export const decrement = createAction("Decrement counter");
export const reset = createAction("Reset counter");
export const add = createAction("Add value to the counter");

export const counterReducer = createReducer(
  {
    [increment]: state => state + 1,
    [decrement]: state => state - 1,
    [reset]: () => 0,
    [add]: (state, payload) => state + payload
  },
  0
);
