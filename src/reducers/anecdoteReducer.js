import anecdoteService from "../services/anecdotes";

const reducer = (store = [], action) => {
  switch (action.type) {
    case "VOTE":
      const nonVoted = store.filter(
        (anecdote) => anecdote.id !== action.content.id
      );
      return [...nonVoted, action.content];
    case "CREATE":
      return [...store, action.content];
    case "INIT_ANECDOTES":
      return action.data;
    default:
      return store;
  }
};

export const createNew = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteService.createNew(content);
    dispatch({
      type: "CREATE",
      content: newAnecdote
    });
  };
};

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll();
    dispatch({
      type: "INIT_ANECDOTES",
      data: anecdotes
    });
  };
};

export const addVote = (id, votedAnecdote) => {
  return async (dispatch) => {
    const updatedAnecdote = await anecdoteService.update(id, votedAnecdote);
    dispatch({
      type: "VOTE",
      content: updatedAnecdote
    });
  };
};

export default reducer;
