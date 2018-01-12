import React from "react";
import {anecdoteCreation} from "../reducers/anecdoteReducer";
import {notificationRemoval} from "../reducers/latestReducer";
import {connect} from "react-redux";

class AnecdoteForm extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.anecdoteCreation(e.target.anecdote.value);
    setTimeout(() => {
      this.props.notificationRemoval();
    }, 5000);
    e.target.anecdote.value = "";
  };
  render() {
    return (
      <div>
        <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <input name="anecdote" />
          </div>
          <button>create</button>
        </form>
      </div>
    );
  }
}

export default connect(null, {anecdoteCreation, notificationRemoval})(
  AnecdoteForm
);
