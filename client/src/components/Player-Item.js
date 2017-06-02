import React, {Component} from 'react';
import {addPlayerToTeam} from '../actions';
import { connect } from 'react-redux';
import './player-item.css';
class PlayerItem extends Component {
  constructor(props){
    super(props);
  }

  addPlayer(e){
    e.preventDefault();
    //This is the entire object
    //this.props.dispatch(addPlayerToTeam(this.props.player.player.FirstName));
    //This is just the fullName
    this.props.dispatch(addPlayerToTeam(this.props.player));
  }

  render() {
    let player = this.props.player;
    let headings = ['Player Name', 'Team', 'Position','Points/pg','Rebounds/PG','Assists/PG','Steals/PG','Turnovers/PG'];
    let headers = headings.map(header => <th>{header}</th> );
    return(
      <tbody>
        <tr>
          {/*Render data into here*/}
          <td name={player.player.FirstName + 'name'}>{player.player.FirstName} {this.props.player.player.LastName}</td>
          <td name={player.player.FirstName + 'team'}>{player.team.Name}</td>
          <td name={player.player.FirstName + 'position'}>{player.player.Position}</td>
          <td name={player.player.FirstName + 'points-per-game'}>{player.stats.PtsPerGame['#text']}</td>
          <td name={player.player.FirstName + 'rebounds'}>{player.stats.RebPerGame['#text']}</td>
          <td name={player.player.FirstName + 'assists'}>{player.stats.AstPerGame['#text']}</td>
          <td name={player.player.FirstName + 'steals'}>{player.stats.StlPerGame['#text']}</td>
          <td name={player.player.FirstName + 'turnovers'}>{player.stats.TovPerGame['#text']}</td>
          <td><button onClick={e=>this.addPlayer(e)} type="button">Add {player.player.FirstName + ' ' + player.player.LastName} to team!</button></td>
        </tr>
      </tbody>
    );
  }
}

export default connect()(PlayerItem);