import React from 'react';
//import { connect } from 'react-redux';

const PlayerItem = (props) => {
  let player = props.player;
  return (
    <div>
      <table>
        <tr>
          <th>Player Name</th><th></th>
          <th>Points/Game</th>
          <th>Rebounds/Game</th>
          <th>Assists/Game</th>
          <th>Steals/Game</th>
          <th>Turnovers/Game</th>
        </tr>
        <tr>
          {/*Render data into here*/}
          <td name={player.player.FirstName + 'name'}>{player.player.FirstName} {props.player.player.LastName}</td><th></th>
          <td name={player.player.FirstName + 'points-per-game'}>{player.stats.PtsPerGame['#text']}</td>
          <td name={player.player.FirstName + 'rebounds'}>{player.stats.RebPerGame['#text']}</td>
          <td name={player.player.FirstName + 'assists'}>{player.stats.AstPerGame['#text']}</td>
          <td name={player.player.FirstName + 'steals'}>{player.stats.StlPerGame['#text']}</td>
          <td name={player.player.FirstName + 'turnovers'}>{player.stats.TovPerGame['#text']}</td>
        </tr>
        <button type="button">Add {player.player.FirstName + ' ' + player.player.LastName} to team!</button>
      </table>
    </div>
  );
};


export default PlayerItem;