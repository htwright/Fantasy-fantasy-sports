import React, { Component } from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import Sport from './components/Sport';
=======
// import logo from './logo.svg';
>>>>>>> 19d411ba706e818fb7b3fd52efdef58c36007031
import './App.css';
import { fetchPlayers } from '../src/actions';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlayers())
  }

  render() {
    return (
      <div className="App">
<<<<<<< HEAD
        <Sport />
=======
        <div className="App-header">
          <h2>Welcome to Fantasy Fantasy Sports!</h2>
        </div>
        <p className="App-intro">It's not sports, it's not fantasy sports...</p>
>>>>>>> 19d411ba706e818fb7b3fd52efdef58c36007031
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);
