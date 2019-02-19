import React from "react";

import { FilterButton } from "components/Todos/FilterButton";

import { visibilityFilters } from "redux/todos";

export const Filter = () => (
  <p>
    <FilterButton filter={visibilityFilters.showAll}>SHOW ALL</FilterButton>{" "}
    <FilterButton filter={visibilityFilters.showCompleted}>
      SHOW COMPLETED
    </FilterButton>{" "}
    <FilterButton filter={visibilityFilters.showActive}>
      SHOW ACTIVE
    </FilterButton>
  </p>
);
