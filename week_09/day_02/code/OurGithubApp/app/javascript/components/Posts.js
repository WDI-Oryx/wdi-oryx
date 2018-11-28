import React from "react";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: null };
    fetch("/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(r => r.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }
  render() {
    if (this.state.posts === null) {
      return <h3>Loading</h3>;
    }
    const listItems = this.state.posts.map(p => {
      return <li>{p.title}</li>;
    });
    return (
      <div>
        <h2>All Posts</h2>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

export default Posts;
