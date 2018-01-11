const initialState = "here be notification";

const latestReducer = (store = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return action.content;
    default:
      return store;
  }
};

export const latestChange = (content) => {
  return {
    type: "CREATE",
    content
  };
};

export default latestReducer;
