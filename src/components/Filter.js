import React from "react";
import {creatingFilter} from "../reducers/filterReducer";

class Filter extends React.Component {
  handleChange = (e) => {
    this.props.store.dispatch(creatingFilter(e.target.value));
  };
  render() {
    const style = {
      marginTop: 10,
      marginBottom: 10
    };

    return (
      <div style={style}>
        filter <input onChange={this.handleChange} />
      </div>
    );
  }
}

export default Filter;
