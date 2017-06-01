import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import Header from './components/Header';
import TeamList from './components/Team-List';
import './App.css';
import { fetchPlayers } from '../src/actions';
import TeamName from './components/Team-Name';
import store from './store';
import Owner from './components/Owner';

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
            <Route exact path="/owner" component={Owner} />
            <Route exact path="/teams" component={TeamList} />
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
