const initialState = {
  anecdotes: [
    {
      content: "If it hurts, do it more often",
      id: 1,
      votes: 0
    },
    {
      content: "Adding manpower to a late software project makes it later!",
      id: 2,
      votes: 0
    },
    {
      content: "Premature optimization is the root of all evil.",
      id: 3,
      votes: 0
    }
  ],
  latest: ""
};

const getId = () => (100000 * Math.random()).toFixed(0);

const reducer = (store = initialState, action) => {
  switch (action.type) {
    case "VOTE":
      const old = store.anecdotes.filter((a) => a.id !== action.id);
      const voted = store.anecdotes.find((a) => a.id === action.id);
      return {
        ...store,
        anecdotes: [...old, {...voted, votes: voted.votes + 1}]
      };
    case "CREATE":
      return {
        ...store,
        anecdotes: [
          ...store.anecdotes,
          {content: action.content, id: getId(), votes: 0}
        ]
      };
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

export const addingVote = (id) => {
  return {
    type: "VOTE",
    id: id
  };
};

export default reducer;
