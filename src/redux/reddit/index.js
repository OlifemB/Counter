import { combineReducers } from "redux";
import { createAction, createReducer } from "redux-act";

import { normalizePostsById, normalizeAllIds } from "redux/reddit/normalize";

// Sync actions
export const selectSubreddit = createAction(
  "Select subreddit - expects a string"
);

export const invalidateSubreddit = createAction("Invalidate subreddit");

export const requestPosts = createAction("Request posts - expects a string");

export const receivePosts = createAction(
  "Receive posts",
  (subreddit, data) => ({
    subreddit,
    data
  })
);

// Async actions
export const fetchPosts = subreddit => dispatch => {
  dispatch(requestPosts(subreddit));

  return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    .then(response => {
      if (!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();
    })
    .then(json => {
      const { before, after } = json.data;
      const postsById = normalizePostsById(json.data.children);
      const allIds = normalizeAllIds(json.data.children);

      return {
        before,
        after,
        receivedAt: Date.now(),
        fetchStatus: "SUCCESS",
        postsById,
        allIds
      };
    })
    .then(result => dispatch(receivePosts(subreddit, result)))
    .catch(e => dispatch(receivePosts(subreddit, { fetchStatus: "FAILED" })));
};

// Reducers
export const selectedSubredditReducer = createReducer(
  {
    [selectSubreddit]: (state, payload) => payload
  },
  "reactjs"
);

export const postsBySubredditReducer = createReducer(
  {
    [requestPosts]: (state, payload) => ({
      ...state,
      [payload]: {
        ...state[payload],
        fetchStatus: "PENDING"
      }
    }),
    [receivePosts]: (state, payload) => ({
      ...state,
      [payload.subreddit]: {
        ...payload.data
      }
    })
  },
  {}
);

// Root (reddit) reducer
export const redditReducer = combineReducers({
  selectedSubreddit: selectedSubredditReducer,
  postsBySubreddit: postsBySubredditReducer
});
