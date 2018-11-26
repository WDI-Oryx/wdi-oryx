import React from "react";
import UserProfile from "./UserProfile";
import UserRepositories from "./UserRepositories";

class UserShow extends React.Component {
  render() {
    const username = this.props.match.params.username;
    return (
      <div>
        <h2>{username}</h2>
        <p>Here is the profile page</p>
        <UserProfile username={username} />
        <UserRepositories username={username} />
      </div>
    );
  }
}

export default UserShow;
