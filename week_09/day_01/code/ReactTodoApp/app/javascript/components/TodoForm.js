import React from "react";

class TodoForm extends React.Component {
  constructor() {
    super();
    this.state = { newTodo: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.addTodo(this.state.newTodo);
  }
  handleChange(event) {
    this.setState({
      newTodo: event.target.value
    });
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
        />
        <input type="submit" value="Add Todo" />
      </form>
    );
  }
}

export default TodoForm;
