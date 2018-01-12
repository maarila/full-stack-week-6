const initialState = null;

const latestReducer = (store = initialState, action) => {
  switch (action.type) {
    case "NOTIFY_VOTE":
      return action.content;
    case "REMOVE":
      return null;
    default:
      return store;
  }
};

export const notify = (content, timeInSecs) => {
  return async (dispatch) => {
    dispatch({
      type: "NOTIFY_VOTE",
      content
    });
    setTimeout(() => {
      dispatch(notificationRemoval());
    }, timeInSecs * 1000);
  };
};

const notificationRemoval = () => {
  return {
    type: "REMOVE"
  };
};

export default latestReducer;
