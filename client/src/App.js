import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header';
import './App.css';
import { fetchPlayers } from '../src/actions';
import TeamName from './components/Team-Name';
import PlayerList from './components/Player-List';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlayers())
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Header} />
          <Route exact path="/teams" component={TeamName}/>
          <Route exact path="/teams/players" component={Header, PlayerList}/>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);
