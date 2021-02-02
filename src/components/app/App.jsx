import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CharacterDetail from '../characters/CharacterDetail';
import CharacterList from '../characters/CharacterList';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route
                path="/"
                exact
                component={CharacterList}
              />
              <Route
                path="/details"
                exact
                component={CharacterDetail}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
