import React from "react";
import { Button } from "./components/Button";
import Counter from "./components/Counter";
import "./styles.css";

class App extends React.Component {
  state = {
    count: 0
  };

  componentDidMount() {
    console.log("Hello, World");
  }

  handleClick = (isIncrement) => {
    const count = this.state.count;
    this.setState({
      count: isIncrement ? count + 1 : count - 1
    });
  };

  render() {
    return (
      <div className="bar">
        <Button handleClick={() => this.handleClick(false)} title={"-"} />
        <Counter onClick={this.handleClick} count={this.state.count} />
        <Button handleClick={() => this.handleClick(true)} title={"+"} />
      </div>
    );
  }
}

export default App;
