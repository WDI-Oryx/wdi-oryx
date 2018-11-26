import React from "react";

class Todo extends React.Component {
  render() {
    return <li>{this.props.content}</li>;
  }
}

export default Todo;
