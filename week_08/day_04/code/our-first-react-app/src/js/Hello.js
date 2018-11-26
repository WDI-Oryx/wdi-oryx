import React from "react";

class Hello extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}</h1>
        <p>You are from {this.props.hometown}</p>
      </div>
    );
  }
}

export default Hello;
