import React from "react";

// If the content gets clicked, call a function called handleClickContent (log out the content)

// If the author gets doubleclicked, call a function called handleAuthorDoubleClick (log out the author)

// If the number of likes gets right clicked, call a function called handleLikesContextMenu (log out the number of likes)

class Tweet extends React.Component {
  handleClickContent() {
    console.log(this.props.content);
  }
  handleDoubleClick() {
    console.log(this.props.author);
  }
  handleContextMenu() {
    console.log(this.props.likes);
  }
  render() {
    return (
      <div>
        <p onClick={this.handleClickContent.bind(this)}>{this.props.content}</p>
        <p onDoubleClick={this.handleDoubleClick.bind(this)}>
          Written by: {this.props.author}
        </p>
        <p onContextMenu={this.handleContextMenu.bind(this)}>
          Likes: {this.props.likes}
        </p>
      </div>
    );
  }
}

export default Tweet;
