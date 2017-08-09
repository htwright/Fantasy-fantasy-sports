import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import store from '../store';
import PlayerList from './Player-List';
import TeamList from './Team-List';
import CurrentTeam from './CurrentTeam';
import {pushTeamToDb, fetchPlayers, fetchTeams} from '../actions';
import MobilePlayerList from './Mobile-Player-List.js';
import './header.css';
//  https://www.mysportsfeeds.com/api/feed/pull/nba/2016-2017-regular
//  /cumulative_player_stats.json?

class Header extends Component {
  constructor(props) {
    super(props);
  }

  dispatchFetch(e) {
    e.preventDefault();
      // var val = this.selectInput.value;
      var val = this.nameInput.value;
    // var selectVal = this.selectInput.value;
    // console.log(selectVal);
    this.props.dispatch(fetchPlayers(val));
    this.nameInput.value='';
  }
  addToDatabase(e){
    e.preventDefault();
        let teamObj = {
      owner: this.ownerInput.value,
      players:{
        guard1:this.props.team[0],
        guard2:this.props.team[1],
        forward1:this.props.team[2],
        forward2:this.props.team[3],
        center:this.props.team[4]
      }
    };
    this.props.dispatch(pushTeamToDb(teamObj));
    //this.ownerInput.value='';
    //<Link to=""></Link>
    //history.push(`/owner/:${teamObj.owner}`);

  }

  render() {
    //this is the entire object from API--console.log('this is inside the render function', this.props.team);
    let teamRender = this.props.team.map((member, index)=> {
      return(<li key={index}>member#{index+1} - {member.player.FirstName + ' ' +member.player.LastName}</li>)
    });
    return(
      <div id="header-div">
      <Link to='/teams'>Click to see teams</Link>
      <h1>Welcome to</h1><h1>Fantasy Fantasy Sports</h1>
      <div className="outer">
            <img className="logo" src="https://cdn2.iconfinder.com/data/icons/royal-crowns/512/royal-alphabet-crown-letter-english-f-256.png" width={200} height={200} />
            </div>
            <h3>Search the NBA by last name!</h3>
      <form id="search-form" onSubmit={e => this.dispatchFetch(e) }>
        <select className="sports hidden">
          {/*<option value hidden>Pick a sport</option>*/}
          <option>Basketball</option>
          {/*<option value="hockey">Hockey</option>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>*/}
        </select>
        <ul>
        <input className="search" type="text" ref={(input) => this.nameInput = input} id="name-search" placeholder="Search By Last Name"/>
          <button type="submit">Search</button>
          </ul>
          <h4>Add two guards, two forwards, and a center from any team.</h4>

        <ul>
          <input className="owner-name"type="text" placeholder="Name of Team" ref={(input) => this.ownerInput = input}/>
          <button type="button" onClick={e=>this.addToDatabase(e)}>Submit Team</button>
        </ul>
          <h4>Once you're happy with your
          team, name it and submit it!</h4>
        </form>
            <PlayerList className="list" />
            <MobilePlayerList className="list" />
            <CurrentTeam/>
      </div>
    );
  }
}
function mapStateToProps (state) {
  return {
    data: state.players.data,
    team: state.players.team
  };
}


export default connect(mapStateToProps)(Header);