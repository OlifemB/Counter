import React from "react";
import { connect } from "react-redux";

import { fetchItems, FETCH_STATUS } from "redux/itemsList";
import {
  itemsById,
  itemsAllIds,
  itemsFetchStatus
} from "components/ItemsList/selectors";

const _ItemsList = ({
  // From connect - state
  fetchStatus,
  itemsById,
  allIds,
  // From connect - actions
  fetchItems
}) => {
  const getFetchList = () => {
    const notFetch = <p>There was no request</p>;

    const loading = <p>Loading</p>;

    const error = <p>Something going wrong :(</p>;

    const list = (
      <ul>
        {allIds.map(item => (
          <li key={itemsById[item].id}>{itemsById[item].label}</li>
        ))}
      </ul>
    );

    switch (fetchStatus) {
      case FETCH_STATUS.NOT_FETCH:
        return notFetch;
      case FETCH_STATUS.FETCH_PENDING:
        return loading;
      case FETCH_STATUS.FETCH_FAILED:
        return error;
      default:
        return list;
    }
  };

  const getFetchButton = () => (
    <button
      onClick={() =>
        fetchItems("http://5826ed963900d612000138bd.mockapi.io/items")
      }
    >
      Fetch data
    </button>
  );

  return (
    <>
      {getFetchList()}
      {getFetchButton()}
      <hr />
    </>
  );
};

export const ItemsList = connect(
  state => ({
    fetchStatus: itemsFetchStatus(state),
    itemsById: itemsById(state),
    allIds: itemsAllIds(state)
  }),
  {
    fetchItems
  }
)(_ItemsList);
