import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import App from "./App";
import {Provider} from "react-redux";
import reducer from "./reducers/anecdoteReducer";
import latestReducer from "./reducers/latestReducer";
import filterReducer from "./reducers/filterReducer";

const joinedReducer = combineReducers({
  anecdotes: reducer,
  latest: latestReducer,
  filter: filterReducer
});

const store = createStore(joinedReducer, applyMiddleware(thunk));

const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById("root")
  );
};

render();
store.subscribe(render);
