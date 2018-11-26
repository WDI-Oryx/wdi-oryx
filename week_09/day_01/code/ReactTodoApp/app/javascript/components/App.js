import React from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

class App extends React.Component {
  constructor() {
    super();
    this.state = { todos: [] };
    const appInstance = this;
    this.addTodo = this.addTodo.bind(appInstance);
  }
  addTodo(newTodo) {
    const currentTodos = this.state.todos;
    currentTodos.unshift(newTodo);
    this.setState({
      todos: currentTodos
    });
  }
  render() {
    return (
      <div>
        <h1>Todo App</h1>
        <hr />
        <TodoForm addTodo={this.addTodo} />
        <hr />
        <TodoList todos={this.state.todos} />
        <hr />
      </div>
    );
  }
}

export default App;
