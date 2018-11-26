import React from "react";

class Student extends React.Component {
  constructor() {
    super();
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleDoubleClick = this.handleDoubleClick.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }
  handleMouseEnter() {
    console.log("The mouse entered the component", this);
  }
  handleClick() {
    console.log("Hello", this);
  }
  handleDoubleClick() {
    console.log(this);
  }
  handleContextMenu(e) {
    e.preventDefault();
    console.log("Someone was right-clicked", this);
  }
  render() {
    return (
      <li
        onDoubleClick={this.handleDoubleClick}
        onContextMenu={this.handleContextMenu}
        onMouseEnter={this.handleMouseEnter}
        onClick={this.handleClick}
      >
        {this.props.name}
      </li>
    );
  }
}

export default Student;
