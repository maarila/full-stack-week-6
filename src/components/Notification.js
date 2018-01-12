import React from "react";
import {connect} from "react-redux";

class Notification extends React.Component {
  render() {
    const style = {
      border: "solid",
      padding: 10,
      borderWidth: 1
    };
    if (this.props.latest !== null) {
      return <div style={style}>{this.props.latest}</div>;
    }
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    latest: state.latest
  };
};

export default connect(mapStateToProps)(Notification);
