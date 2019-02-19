import React from "react";
import { connect } from "react-redux";

import {
  fetchAlphabetSuccess,
  fetchAlphabetFail,
  alphabetFixtures
} from "redux/alphabet";

const Char = ({ children }) => (
  <div
    style={{
      width: "100px",
      height: "100px",
      margin: "0 auto 1rem auto",
      display: "flex",
      alignItems: "center",
      alignContent: "center",
      justifyContent: "center",
      backgroundColor: "black",
      color: "white"
    }}
  >
    <span
      style={{
        fontSize: "3rem",
        lineHeight: "3rem"
      }}
    >
      {children}
    </span>
  </div>
);

const _Alphabet = ({ fetchAlphabetSuccess, byIds, allIds, fetching }) => {
  const handleFetchAlphabetSuccess = () =>
    fetchAlphabetSuccess(alphabetFixtures);

  const getAlphabetList = () => {
    if (fetching)
      return (
        <p
          style={{
            textAlign: "center",
            fontSize: "2rem"
          }}
        >
          Loading...
        </p>
      );

    if (byIds && allIds)
      return allIds.map(id => <Char key={id}>{byIds[id].name}</Char>);
  };

  return (
    <>
      <button
        onClick={handleFetchAlphabetSuccess}
        style={{
          display: "block",
          margin: "0 auto 2rem auto",
          fontSize: "2rem",
          backgroundColor: "black",
          color: "white"
        }}
      >
        Fetch Alphabet Success :)
      </button>

      {getAlphabetList()}
      <hr />
    </>
  );
};

export const Alphabet = connect(
  state => ({
    byIds: state.alphabet.byIds,
    allIds: state.alphabet.allIds,
    fetching: state.alphabet.fetching
  }),
  {
    fetchAlphabetSuccess,
    fetchAlphabetFail
  }
)(_Alphabet);
