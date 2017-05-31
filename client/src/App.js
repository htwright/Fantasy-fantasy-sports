import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sport from './components/Sport';
// import logo from './logo.svg';
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
      <div className="App">
        <Sport />
        {/*<div className="App-header">
          <h2>Welcome to Fantasy Fantasy Sports!</h2>
        </div>
        <p className="App-intro">It's not sports, it's not fantasy sports...</p>*/}
        <TeamName />
        <PlayerList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);
