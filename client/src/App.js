import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect, Provider } from 'react-redux';

import './App.css';

import { fetchPlayers } from '../src/actions';
import store from './store';
import {
  TeamName,
  Header,
  PlayerList,
  OwnerList,
  TeamList,
  Owner
} from './components'

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="App">
            <Route exact path="/" component={Header} />
            <Route exact path="/teams" component={OwnerList} />
            <Route exact path="/teams/:owner" component={Owner} />
            <Route exaxt path="/players" component={PlayerList}/>
            {/*<Route exact path="/teams" component={TeamList} />*/}
          </div>
        </Router>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);

// TODO: Use decorators
