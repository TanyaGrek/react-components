import React from "react";

class Counter extends React.PureComponent {
  render() {
    return <h1>{this.props.count}</h1>;
  }
}

export default Counter;
