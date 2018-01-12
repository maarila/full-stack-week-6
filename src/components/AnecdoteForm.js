import React from "react";
import {createNew} from "../reducers/anecdoteReducer";
import {notify} from "../reducers/latestReducer";
import {connect} from "react-redux";

class AnecdoteForm extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = "";
    this.props.createNew(content);
    this.props.notify(`Added the blog "${content}"`, 5);
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

export default connect(null, {createNew, notify})(AnecdoteForm);
