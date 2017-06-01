import React from 'react';
//import { connect } from 'react-redux';

const PlayerItem = (props) => {
  let player = props.player;
  return (


        <tr>
          {/*Render data into here*/}
          <td name={player.player.FirstName + 'name'}>{player.player.FirstName} {props.player.player.LastName}
          <button type="button">Add {player.player.FirstName + ' ' + player.player.LastName} to team!</button></td>
          <td name={player.player.FirstName + 'points-per-game'}>{player.stats.PtsPerGame['#text']}</td>
          <td name={player.player.FirstName + 'rebounds'}>{player.stats.RebPerGame['#text']}</td>
          <td name={player.player.FirstName + 'assists'}>{player.stats.AstPerGame['#text']}</td>
          <td name={player.player.FirstName + 'steals'}>{player.stats.StlPerGame['#text']}</td>
          <td name={player.player.FirstName + 'turnovers'}>{player.stats.TovPerGame['#text']}</td>
        </tr>
  );
};


export default PlayerItem;