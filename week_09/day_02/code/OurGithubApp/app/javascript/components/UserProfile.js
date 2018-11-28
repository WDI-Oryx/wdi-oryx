import React from "react";

class UserProfile extends React.Component {
  constructor(props) {
    super();
    this.state = { userData: null };
  }
  componentDidMount() {
    // This will automatically run when a component is added to the page (actually put on the page)
    // This is the place where you should run:
    //  AJAX Requests
    //  Animations
    //  Set timers

    const baseURL = "https://api.github.com";
    const path = `/users/${this.props.username}`;
    const apiKey = "45507879527e2fa447670cbdf28800b655cbe13d";
    const params = `?access_token=${apiKey}`;
    const url = baseURL + path + params;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          userData: data
        });
      });
  }
  render() {
    if (this.state.userData === null) {
      return <h2>Loading</h2>;
    }
    const { avatar_url, bio, followers, following } = this.state.userData;
    return (
      <div>
        <img src={avatar_url} />
        <h2>{this.props.username}</h2>
        <p>{bio}</p>
        <p>{followers}</p>
        <p>{following}</p>
      </div>
    );
  }
}

export default UserProfile;
