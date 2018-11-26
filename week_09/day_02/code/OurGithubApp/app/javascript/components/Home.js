import React from "react";

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Our GitHub App</h1>
        <p>
          Here is our React GitHub application. You can search for users, and
          see their profile and repositories
        </p>
        <button className="button-primary">Search</button>
      </div>
    );
  }
}

export default Home;
