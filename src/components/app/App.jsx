import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CharacterDetail from '../characters/CharacterDetail';
import AllCharacters from '../../containers/AllCharacters';

export default class App extends React.Component {
  render() {
    return (
      <>
        <div className="main">
          <Router>
            <Switch>
              <Route
                exact path="/"
                // render={(routerProps) => <CharacterList {...routerProps} />}
                component={AllCharacters}
              />
              <Route
                path="/details/:id"
                // render={(routerProps) => <CharacterDetail {...routerProps} />}
                component={CharacterDetail}
              />
            </Switch>
          </Router>
        </div>
      </>
    );
  }
}
