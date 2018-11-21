import React from "react";
import ReactDOM from "react-dom";

class Hello extends React.Component {
  render() {
    return <h1>Hello World!</h1>;
  }
}

ReactDOM.render(<Hello />, document.querySelector("#app"));

// class Nav extends React.Component {
//   render() {
//     return <nav>This is the nav</nav>;
//   }
// }

// ReactDOM.render(<Nav />, document.querySelector("#app"));

// const el = <h1>Hello World</h1>;

// ReactDOM.render(
//   el,
//   document.querySelector("#app")
// );
