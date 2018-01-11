import React from "react";
import ReactDOM from "react-dom";
import {createStore, combineReducers} from "redux";
import App from "./App";
import reducer from "./reducers/anecdoteReducer";
import latestReducer from "./reducers/latestReducer";

const joinedReducer = combineReducers({
  anecdotes: reducer,
  latest: latestReducer
});

const store = createStore(joinedReducer);

const render = () => {
  ReactDOM.render(<App store={store} />, document.getElementById("root"));
};

render();
store.subscribe(render);
