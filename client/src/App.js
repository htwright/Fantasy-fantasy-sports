import React, { Component } from 'react';
import { connect } from 'react-redux';
import Sport from './components/Sport';
import './App.css';
import { fetchPlayers } from '../src/actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlayers())
  }

  render() {
    return (
      <div className="App">
        <Sport />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);
