import React from "react";
import {creatingFilter} from "../reducers/filterReducer";
import {connect} from "react-redux";

class Filter extends React.Component {
  handleChange = (e) => {
    this.props.creatingFilter(e.target.value);
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

export default connect(null, {creatingFilter})(Filter);
