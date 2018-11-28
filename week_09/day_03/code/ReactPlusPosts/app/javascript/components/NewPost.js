import React from "react";

class NewPost extends React.Component {
  constructor() {
    super();
    this.state = { title: "", content: "" };

    this.titleChange = this.titleChange.bind(this);
    this.contentChange = this.contentChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.genericChange = this.genericChange.bind(this);
  }
  // genericChange(e) {
  //   const keyName = e.target.id;
  //   this.setState({
  //     [keyName]: e.target.value
  //   });
  // }
  titleChange(e) {
    this.setState({
      title: e.target.value
    });
  }
  contentChange(e) {
    this.setState({
      content: e.target.value
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    fetch("/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(r => r.json())
      .then(data => {
        this.props.history.push("/posts");
      });
  }
  render() {
    return (
      <div>
        <h1>New Post</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            className="u-full-width"
            onChange={this.titleChange}
            value={this.state.title}
          />

          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            className="u-full-width"
            onChange={this.contentChange}
            value={this.state.content}
          />

          <input type="submit" value="Add Post" className="button-primary" />
        </form>
      </div>
    );
  }
}

export default NewPost;
