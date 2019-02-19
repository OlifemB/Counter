export const normalizePostsById = posts =>
  posts.reduce((accumulator, current) => {
    const { author, title, selftext, created_utc, is_video } = current.data;

    accumulator[current.data.id] = {
      author,
      title,
      selftext,
      created_utc,
      is_video
    };
    return accumulator;
  }, {});

export const normalizeAllIds = posts =>
  posts.reduce((accumulator, current) => {
    accumulator.push(current.data.id);
    return accumulator;
  }, []);

