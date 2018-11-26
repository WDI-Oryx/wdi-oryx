import React from "react";
import ReactDOM from "react-dom";
import MessagePreview from "./MessagePreview";
import DatePrinter from "./DatePrinter";
import ClickCounter from "./ClickCounter";

class FakeAJAX extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    window.setTimeout(() => {
      this.setState({ data: "Something from an API" });
    }, 5000 * Math.random());
  }
  render() {
    if (this.state.data === null) {
      return <div>Loading...</div>;
    } else {
      return <div>{this.state.data}</div>;
    }
  }
}
ReactDOM.render(<FakeAJAX />, document.querySelector("#app"));
// ReactDOM.render(
//   <div>
//     <MessagePreview />
//     <DatePrinter />
//     <ClickCounter />
//   </div>,
//   document.querySelector("#app")
// );
