import React from "react";
import { HashRouter, Route, Link } from "react-router-dom";
import { AnimatedSwitch } from "react-router-transition";

import Home from "./Home";
import Search from "./Search";
import UserShow from "./UserShow";

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/search">Search</Link>
            <Link to="/users/mfalthaw">Moath's Profile</Link>
          </nav>

          <AnimatedSwitch
            atEnter={{ opacity: 0 }}
            atLeave={{ opacity: 0 }}
            atActive={{ opacity: 1 }}
            className="switch-wrapper"
          >
            <Route exact path="/" component={Home} />
            <Route path="/search" component={Search} />
            <Route path="/users/:username" component={UserShow} />
          </AnimatedSwitch>
        </div>
      </HashRouter>
    );
  }
}

export default Routes;
