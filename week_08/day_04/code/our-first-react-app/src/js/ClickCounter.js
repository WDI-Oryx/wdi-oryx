import React from "react";

class ClickCounter extends React.Component {
  constructor() {
    super(); // Inherit all React stuff
    this.state = { clicks: 0 };
    this.decrement = this.decrement.bind(this);
    this.increment = this.increment.bind(this);
    // The `this` keyword should now always be the ClickCounter instance in this.increment
  }
  decrement() {
    const currentClicks = this.state.clicks;
    this.setState({ clicks: currentClicks - 1 });
  }
  increment() {
    const currentClicks = this.state.clicks;
    this.setState({
      clicks: currentClicks + 1
    });
  }
  render() {
    return (
      <div>
        <h1 onClick={this.increment}>Number of clicks: {this.state.clicks}</h1>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default ClickCounter;
