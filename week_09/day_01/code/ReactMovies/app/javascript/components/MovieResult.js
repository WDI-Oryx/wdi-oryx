import React from "react";

class MovieResult extends React.Component {
  render() {
    const { title, poster, plot } = this.props;
    return (
      <div>
        <h4>{title}</h4>
        <img src={poster} />
        <p>{plot}</p>
      </div>
    );
  }
}

export default MovieResult;
