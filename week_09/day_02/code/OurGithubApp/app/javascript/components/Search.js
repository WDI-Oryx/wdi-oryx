import React from "react";

class Search extends React.Component {
  constructor() {
    super();
    this.state = { searchTerm: "" };
    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleUserInput(event) {
    this.setState({
      searchTerm: event.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    const { searchTerm } = this.state;
    console.log("Should render the UserShow component", searchTerm);
  }
  render() {
    return (
      <div>
        <h2>Search for a User</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            placeholder="Username:"
            className="u-full-width"
            id="username"
            onChange={this.handleUserInput}
            value={this.state.searchTerm}
          />
          <input
            type="submit"
            value={`Search for ${this.state.searchTerm}`}
            className="button-primary"
          />
        </form>
      </div>
    );
  }
}

export default Search;
