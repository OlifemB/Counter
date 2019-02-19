import { createAction, createReducer } from "redux-act";

export const visibilityFilters = {
  showAll: "SHOW_ALL",
  showCompleted: "SHOW_COMPLETED",
  showActive: "SHOW_ACTIVE"
};

export const addTodo = createAction("Todo Add");
export const toggleTodo = createAction("Todo Toggle");
export const deleteTodo = createAction("Todo Delete");
export const setVisibilityFilter = createAction("Todo set visibility filter");

export const todosReducer = createReducer(
  {
    [addTodo]: (state, payload) => ({
      ...state,
      byId: {
        ...state.byId,
        [payload.id]: {
          completed: false,
          ...payload
        }
      },
      allIds: [...state.allIds, payload.id]
    }),

    [toggleTodo]: (state, payload) => ({
      ...state,
      byId: {
        ...state.byId,
        [payload.id]: {
          ...state.byId[payload.id],
          completed: !state.byId[payload.id].completed
        }
      }
    }),

    [deleteTodo]: (state, payload) => ({
      ...state,
      byId: {
        ...state.byId,
        [payload.id]: undefined
      },
      allIds: [...state.allIds.filter(id => id !== payload.id)]
    }),

    [setVisibilityFilter]: (state, payload) => ({
      ...state,
      visibilityFilter: payload.filter
    })
  },
  {
    byId: {},
    allIds: [],
    visibilityFilter: visibilityFilters.showAll
  }
);
