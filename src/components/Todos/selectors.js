import { createSelector } from "reselect";

import { visibilityFilters } from "redux/todos";

export const getTodosById = createSelector(
  state => state.todos.byId,
  byId => byId
);
export const getAllIds = createSelector(
  state => state.todos.allIds,
  allIds => allIds
);
export const getVisibilityFilter = createSelector(
  state => state.todos.visibilityFilter,
  filter => filter
);

export const getVisibleTodoIds = createSelector(
  getTodosById,
  getAllIds,
  getVisibilityFilter,
  (todosById, allIds, visibilityFilter) => {
    switch (visibilityFilter) {
      case visibilityFilters.showAll:
        return allIds;
      case visibilityFilters.showCompleted:
        return allIds.filter(id => todosById[id].completed);
      case visibilityFilters.showActive:
        return allIds.filter(id => !todosById[id].completed);
    }
  }
);
