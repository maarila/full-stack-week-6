import React from "react";
import Filter from "./Filter";
import {addingVote} from "../reducers/anecdoteReducer";
import {voteNotification, notificationRemoval} from "../reducers/latestReducer";
import {connect} from "react-redux";

class AnecdoteList extends React.Component {
  handleClick = (id, content) => {
    return () => {
      this.props.addingVote(id);
      this.props.voteNotification(content);
      setTimeout(() => {
        this.props.notificationRemoval();
      }, 5000);
    };
  };
  render() {
    const anecdotes = this.props.anecdotes;
    const filterer = this.props.filter;
    const anecdotesToShow = anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(filterer.toLowerCase())
    );
    return (
      <div>
        <Filter />
        <h2>Anecdotes</h2>
        {anecdotesToShow.sort((a, b) => b.votes - a.votes).map((anecdote) => (
          <div key={anecdote.id}>
            <div>{anecdote.content}</div>
            <div>
              has {anecdote.votes}
              <button onClick={this.handleClick(anecdote.id, anecdote.content)}>
                vote
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    anecdotes: state.anecdotes.anecdotes,
    filter: state.filter
  };
};

export default connect(mapStateToProps, {
  addingVote,
  voteNotification,
  notificationRemoval
})(AnecdoteList);
