import React from "react";
import Filter from "./Filter";
import {addingVote} from "../reducers/anecdoteReducer";
import {voteNotification, notificationRemoval} from "../reducers/latestReducer";

class AnecdoteList extends React.Component {
  handleClick = (id, content) => {
    return () => {
      this.props.store.dispatch(addingVote(id));
      this.props.store.dispatch(voteNotification(content));
      setTimeout(() => {
        this.props.store.dispatch(notificationRemoval());
      }, 5000);
    };
  };
  render() {
    const anecdotes = this.props.store.getState().anecdotes.anecdotes;
    const filterer = this.props.store.getState().filter;
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

export default AnecdoteList;
