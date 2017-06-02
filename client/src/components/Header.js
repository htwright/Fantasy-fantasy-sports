import React, { Component } from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router';
import store from '../store';
import PlayerList from './Player-List';
import TeamList from './Team-List';
import {pushTeamToDb, fetchPlayers, fetchTeams} from '../actions';
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
    this.ownerInput.value='';
  }

  render() {
    //this is the entire object from API--console.log('this is inside the render function', this.props.team);
    let teamRender = this.props.team.map((member, index)=> {
      return(<li key={index}>member#{index+1} - {member.player.FirstName + ' ' +member.player.LastName}</li>)
    });
    return(
      <div>
      <h1>Welcome to</h1><h1>Fantasy Fantasy Sports</h1>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7exq6_YVJGfo6equ6tfjitTy5SxX8OkpKadodGj86IYVsFWSW" width={200} height={200} />
            <h3>Choose a Sport</h3>
      <form id="search-form" onSubmit={e => this.dispatchFetch(e) }>
        <select className="sports">
          {/*<option value hidden>Pick a sport</option>*/}
          <option>Basketball</option>
          {/*<option value="hockey">Hockey</option>
          <option value="baseball">Baseball</option>
          <option value="football">Football</option>*/}
        </select>
        <input className="search" type="text" ref={(input) => this.nameInput = input} id="name-search" placeholder="Search By Last Name"/>
        {/*<select name="hello" ref ={(input) => this.selectInput = input}>
          <option value hidden>Pick a team</option>
          <option value="ATL">Atlanta Hawks</option>
          <option value="BKN">Brooklyn Nets</option>
          <option value="BOS">Boston Celtics</option>
          <option value="CHA">Charlotte Hornets</option>
          <option value="CHI">Chicago Bulls</option>
          <option value="CLE">Cleveland Cavaliers</option>
          <option value="DAL">Dallas Mavericks</option>
          <option value="DEN">Denver Nuggets</option>
          <option value="DET">Detroit Pistons</option>
          <option value="GSW">Golden State Warriors</option>
          <option value="HOU">Houston Rockets</option>
          <option value="IND">Indiana Pacers</option>
          <option value="LAC">Los Angeles Clippers</option>
          <option value="LAL">Los Angeles Lakers</option>
          <option value="MEM">Memphis Grizzlies</option>
          <option value="MIA">Miami Heat</option>
          <option value="MIL">Milwaukee Bucks</option>
          <option value="MIN">Minnesota Timberwolves</option>
          <option value="NOP">New Orleans Pelicans</option>
          <option value="NYK">New York Knicks</option>
          <option value="OKC">Oklahoma City Thunder</option>
          <option value="ORL">Orlando Magic</option>
          <option value="PHI">Philadelphia 76ers</option>
          <option value="PHX">Phoenix Suns</option>
          <option value="POR">Portland Trail Blazers</option>
          <option value="SAC">Sacramento Kings</option>
          <option value="SAS">San Antonio Spurs</option>
          <option value="TOR">Toronto Raptors</option>
          <option value="UTA">Utah Jazz</option>
          <option value="WAS">Washington Wizards</option>
        </select>*/}

          <button type="submit">Search</button>

        <ul>
          <input className="owner-name"type="text" placeholder="Name of Owner" ref={(input) => this.ownerInput = input}/>
          <button type="button" onClick={e=>this.addToDatabase(e)}>Submit Team</button>
        </ul>
        </form>
        <span>  <PlayerList />   {teamRender}      </span>


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