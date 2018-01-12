const initialState = null;

const latestReducer = (store = initialState, action) => {
  switch (action.type) {
    case "CREATE":
      return `Added the anecdote "${action.content}"`;
    case "NOTIFY_VOTE":
      return `You voted "${action.content}"`;
    case "REMOVE":
      return null;
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

export const voteNotification = (content) => {
  return {
    type: "NOTIFY_VOTE",
    content
  };
};

export const notificationRemoval = () => {
  return {
    type: "REMOVE"
  };
};

export default latestReducer;
