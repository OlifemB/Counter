import { createAction, createReducer } from "redux-act";

export const alphabetFixtures = {
  byIds: {
    0: { id: 0, name: "A" },
    1: { id: 1, name: "B" },
    2: { id: 2, name: "C" },
    3: { id: 3, name: "D" },
    4: { id: 4, name: "E" },
    5: { id: 5, name: "F" },
    6: { id: 6, name: "G" },
    7: { id: 7, name: "H" },
    8: { id: 8, name: "I" },
    9: { id: 9, name: "J" },
    10: { id: 10, name: "K" },
    11: { id: 11, name: "L" },
    12: { id: 12, name: "M" },
    13: { id: 13, name: "N" },
    14: { id: 14, name: "O" },
    15: { id: 15, name: "P" },
    16: { id: 16, name: "Q" },
    17: { id: 17, name: "R" },
    18: { id: 18, name: "S" },
    19: { id: 19, name: "T" },
    20: { id: 20, name: "U" },
    21: { id: 21, name: "V" },
    22: { id: 22, name: "W" },
    23: { id: 23, name: "X" },
    24: { id: 24, name: "Y" },
    25: { id: 25, name: "Z" }
  },
  // prettier-ignore
  allIds: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]
};

export const requestAlphabet = createAction("Request Alphabet");
export const receiveAlphabet = createAction("Receive Alphabet");

export const fetchAlphabetSuccess = alphabet => dispatch => {
  dispatch(requestAlphabet());

  setTimeout(() => {
    dispatch(
      receiveAlphabet({
        ...alphabet,
        hasError: false,
      })
    );
  }, 1500);
};

export const fetchAlphabetFail = () => dispatch => {
  dispatch(requestAlphabet());

  setTimeout(() => {
    dispatch(
      receiveAlphabet({
        hasError: true,
        error: "ERROR_TEXT"
      })
    );
  }, 1500);
};

export const alphabetReducer = createReducer(
  {
    [requestAlphabet]: state => ({
      ...state,
      fetching: true
    }),
    [receiveAlphabet]: (state, payload) => ({
      ...state,
      ...payload,
      fetching: false
    })
  },
  {}
);
