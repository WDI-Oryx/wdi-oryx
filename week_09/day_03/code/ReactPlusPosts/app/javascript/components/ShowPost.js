import React from "react";

class ShowPost extends React.Component {
  render() {
    const id = this.props.match.params.id;
    return (
      <div>
        <h1>Post {id}</h1>
      </div>
    );
  }
}

export default ShowPost;
