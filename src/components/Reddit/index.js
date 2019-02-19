import React from "react";
import { connect } from "react-redux";

import { selectSubreddit, fetchPosts } from "redux/reddit";

const _Reddit = ({
  // From connect - state
  selectedSubreddit,
  postsBySubreddit,
  // From connect - actions
  selectSubreddit,
  fetchPosts,
}) => {
  const handleSubmit = event => {
    event.preventDefault();

    selectedSubreddit && fetchPosts(selectedSubreddit);
  };

  const handleChange = event => selectSubreddit(event.target.value);

  const getPostsBySubreddit = () => {
    const subredditPosts = postsBySubreddit[selectedSubreddit];

    const postsLoading = <p>Loading...</p>;
    const postsFailed = <p>Something going wrong :(</p>;

    const getListPosts = (posts, allIds) => {
      return allIds.map(id => {
        const { author, created_utc, title } = posts[id];

        return (
          <div key={id}>
            {title && <h4>{title}</h4>}
            {author && <p>Author: {author}</p>}
            {created_utc && <p>Date: {created_utc}</p>}
          </div>
        );
      });
    };

    if (subredditPosts) {
      switch (subredditPosts.fetchStatus) {
        case "PENDING":
          return postsLoading;
        case "FAILED":
          return postsFailed;
        case "SUCCESS":
          return getListPosts(subredditPosts.postsById, subredditPosts.allIds);
        default:
          return null;
      }
    }

    return <p>Perform a search</p>;
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter subreddit for search posts"
          value={selectedSubreddit}
          onChange={handleChange}
        />
        <button type="submit" disabled={!selectedSubreddit.trim()}>
          search
        </button>
      </form>

      {getPostsBySubreddit()}

      <hr/>
    </>
  );
};

export const Reddit = connect(
  state => ({
    selectedSubreddit: state.reddit.selectedSubreddit,
    postsBySubreddit: state.reddit.postsBySubreddit
  }),
  {
    // Sync actions
    selectSubreddit,
    // Async actions
    fetchPosts
  }
)(_Reddit);
