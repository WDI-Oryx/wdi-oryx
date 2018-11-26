import React from "react";
import Search from "./Search";
import MovieResult from "./MovieResult";

class App extends React.Component {
  constructor() {
    super();
    this.state = { data: null };
    this.search = this.search.bind(this);
  }
  search(term) {
    this.setState({
      data: "Loading"
    });
    fetch(`https://omdbapi.com/?apikey=b51c8ed1&t=${term}`)
      .then(r => r.json())
      .then(data => {
        this.setState({
          data: data
        });
      });
  }
  render() {
    let movieResult = null;
    if (this.state.data === null) {
      movieResult = <h3>Search for something!</h3>;
    } else if (this.state.data === "Loading") {
      movieResult = <h3>Loading...</h3>;
    } else {
      const { Title, Poster, Plot } = this.state.data;
      movieResult = <MovieResult title={Title} poster={Poster} plot={Plot} />;
    }
    return (
      <div>
        <h1>Welcome to the Movie App</h1>
        <Search appSearch={this.search} />
        {movieResult}
      </div>
    );
  }
}

export default App;
