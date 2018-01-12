import React from "react";
import {anecdoteCreation} from "../reducers/anecdoteReducer";
import {notificationRemoval} from "../reducers/latestReducer";
import {connect} from "react-redux";
import anecdoteService from "../services/anecdotes";

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    const newNote = await anecdoteService.createNew(content);
    this.props.anecdoteCreation(newNote);
    setTimeout(() => {
      this.props.notificationRemoval();
    }, 5000);
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
