import { combineReducers } from "redux";

import { counterReducer } from "redux/counter";
import { todosReducer } from "redux/todos";
import { severalCountersReducer } from "redux/severalCounters";
import { itemsReducer } from "redux/itemsList";
import { redditReducer } from "redux/reddit";
import { alphabetReducer } from "redux/alphabet";

export const rootReducer = combineReducers({
  counter: counterReducer,
  severalCounters: severalCountersReducer,
  todos: todosReducer,
  items: itemsReducer,
  reddit: redditReducer,
  alphabet: alphabetReducer
});
