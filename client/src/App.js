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
import { Navbar } from 'react-bootstrap';
import PlayerList from './components/Player-List';

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
            <Route exact path="/owner/:owner" component={Owner} />
            <Route exaxt path="/players" component={PlayerList}/>
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
