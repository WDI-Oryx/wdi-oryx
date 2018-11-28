import React from "react";
import { Link } from "react-router-dom";

class Posts extends React.Component {
  constructor() {
    super();
    this.state = { posts: null };
  }
  componentDidMount() {
    fetch("/posts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(data => {
        this.setState({
          posts: data
        });
      });
  }
  render() {
    if (this.state.posts === null) {
      return <h2>Loading...</h2>;
    }
    const posts = this.state.posts;
    const lis = posts.map(post => {
      return (
        <li>
          <Link to={`/posts/${post.id}`}>{post.title}</Link>
        </li>
      );
    });
    return (
      <div>
        <h1>All Posts</h1>
        <ul>{lis}</ul>
      </div>
    );
  }
}

export default Posts;
