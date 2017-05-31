import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { connect, Provider } from 'react-redux';
import Header from './components/Header';
import './App.css';
import { fetchPlayers } from '../src/actions';
import TeamName from './components/Team-Name';
import PlayerList from './components/Player-List';
import store from './store';

class App extends Component {

  componentDidMount() {
    this.props.dispatch(fetchPlayers());
  }

  render() {
    return (
      <Provider store={store}>
          <div className="App">
            <Header />
            <PlayerList />
            {/*<Route exact path="/players" component={Header} />
            <Route exact path="/" component={PlayerList}/>
            <Route exact path="/teams" component={TeamName}/>*/}
          </div>
      </Provider>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.players.data
})

export default connect(mapStateToProps)(App);
