import React, {Component} from 'react';
import {addPlayerToTeam} from '../actions';
import { connect } from 'react-redux';

class PlayerItem extends Component {
  constructor(props){
    super(props);
  }

  addPlayer(e){
    e.preventDefault();
    this.props.dispatch(addPlayerToTeam(this.props.player.player.FirstName+'-'+this.props.player.player.LastName));
  }

  render() {
      let player = this.props.player;

    return(
        <tr>
          {/*Render data into here*/}
          <td name={player.player.FirstName + 'name'}>{player.player.FirstName} {this.props.player.player.LastName}
          <button onClick={e=>this.addPlayer(e)} type="button">Add {player.player.FirstName + ' ' + player.player.LastName} to team!</button></td>
          <td name={player.player.FirstName + 'position'}>{player.stats.Position}</td>
          <td name={player.player.FirstName + 'points-per-game'}>{player.stats.PtsPerGame['#text']}</td>
          <td name={player.player.FirstName + 'rebounds'}>{player.stats.RebPerGame['#text']}</td>
          <td name={player.player.FirstName + 'assists'}>{player.stats.AstPerGame['#text']}</td>
          <td name={player.player.FirstName + 'steals'}>{player.stats.StlPerGame['#text']}</td>
          <td name={player.player.FirstName + 'turnovers'}>{player.stats.TovPerGame['#text']}</td>
        </tr>
  );
  }
}
function mapStateToProps(){

}

export default connect(mapStateToProps)(PlayerItem);