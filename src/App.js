import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Index from "./components/layout/Index";
import Lyrics from "./components/tracks/Lyrics";

import { Provider } from './context';

import "./App.scss";

function App() {
  return (
    <Provider>
      <Router>
        <React.Fragment>
          <div className="bg-light-purple" style={{ minHeight: '100vh' }}>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/lyrics/track/:id" component={Lyrics} />
              </Switch>
            </div>
          </div>
        </React.Fragment>
      </Router>
    </Provider>
  );
}

export default App;
