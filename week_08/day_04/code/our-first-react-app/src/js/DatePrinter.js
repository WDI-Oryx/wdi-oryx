import React from "react";

class DatePrinter extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date().toString()
    };
    setInterval(() => {
      this.setState({
        date: new Date().toString()
      });
    }, 1000);
  }
  render() {
    return (
      <div>
        <h2>Current Date: {this.state.date}</h2>
      </div>
    );
  }
}

export default DatePrinter;
