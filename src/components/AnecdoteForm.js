import React from "react";
import {createNew} from "../reducers/anecdoteReducer";
import {notificationRemoval} from "../reducers/latestReducer";
import {connect} from "react-redux";

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    this.props.createNew(content);
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

export default connect(null, {createNew, notificationRemoval})(AnecdoteForm);
