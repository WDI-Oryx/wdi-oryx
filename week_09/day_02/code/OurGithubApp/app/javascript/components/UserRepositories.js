import React from "react";

class UserRepositories extends React.Component {
  constructor(props) {
    super();
    this.state = { userRepos: null };
  }
  componentDidMount() {
    const baseURL = "https://api.github.com";
    const path = `/users/${this.props.username}/repos`;
    const apiKey = "45507879527e2fa447670cbdf28800b655cbe13d";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({ userRepos: data });
      });
  }
  render() {
    if (this.state.userRepos === null) {
      return <h2>Loading...</h2>;
    }
    const listItems = this.state.userRepos.map(repo => {
      return (
        <li key={repo.id}>
          <a href={repo.html_url}>{repo.full_name}</a>
        </li>
      );
    });
    return (
      <div>
        <h2>All {this.props.username}'s Repos</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default UserRepositories;
