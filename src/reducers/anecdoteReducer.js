const reducer = (store = [], action) => {
  switch (action.type) {
    case "VOTE":
      const old = store.filter((a) => a.id !== action.id);
      const voted = store.find((a) => a.id === action.id);

      return [...old, {...voted, votes: voted.votes + 1}];
    case "CREATE":
      return [...store, action.content];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return store;
  }
};

export const anecdoteCreation = (content) => {
  return {
    type: "CREATE",
    content
  };
};

export const anecdoteInitialization = (data) => {
  return {
    type: "INIT_ANECDOTES",
    data
  };
};

export const addingVote = (id) => {
  return {
    type: "VOTE",
    id: id
  };
};

export default reducer;
