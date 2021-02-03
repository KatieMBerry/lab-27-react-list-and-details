import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AllCharacters from '../../containers/AllCharacters';
import SelectedCharacter from '../../containers/SelectedCharacter';


export default class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route
              exact
              path="/"
              // render={(routerProps) => <CharacterList {...routerProps} />}
              component={AllCharacters}
            />
            <Route
              exact
              path="/characters/:id"
              // render={(routerProps) => <CharacterDetail {...routerProps} />}
              component={SelectedCharacter}
            />
          </Switch>
        </Router>
      </>
    );
  }
}
