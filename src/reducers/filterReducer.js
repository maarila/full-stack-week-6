const initialState = "";

const filterReducer = (store = initialState, action) => {
  switch (action.type) {
    case "FILTER_ANECDOTES":
      return action.content;
    default:
      return store;
  }
};

export const creatingFilter = (content) => {
  return {
    type: "FILTER_ANECDOTES",
    content
  };
};

export default filterReducer;
