import React from "react";
import { connect } from "react-redux";

import { fetchItems } from "redux/pagination/fixtures";

const _Pagination = () => {
  return (
    <>
      <button
        onClick={() => fetchItems().then(response => console.log(response))}
      >
        fetchItems();
      </button>

      <button
        onClick={() =>
          fetchItems({ offset: 10 }).then(response => console.log(response))
        }
      >
        {"fetchItems({offset: 10});"}
      </button>

      <button
        onClick={() =>
          fetchItems({ offset: 10, limits: 5 }).then(response =>
            console.log(response)
          )
        }
      >
        {"fetchItems({offset: 10, limits: 5});"}
      </button>
    </>
  );
};

export const Pagination = connect()(_Pagination);
