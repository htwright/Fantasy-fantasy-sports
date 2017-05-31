import React from 'react';
//import { connect } from 'react-redux';

const PlayerItem = (props) => {

  return (
    <div>
      <table>
        <tr>
          <th>Player Name</th><th></th>
          <th>Points</th>
          <th>Rebounds</th>
          <th>Assists</th>
          <th>Steals</th>
          <th>Turnovers</th>
        </tr>
        <tr>
          {/*Render data into here*/}
          <td name={props.player}>{props.player.player.FirstName}</td><th></th>
          <td name={props.player}>{props.player.stats.Fg2PtMade['#text']}</td>
          <td>6</td>
          <td>9</td>
          <td>2</td>
          <td>1</td>
        </tr>
        <tr>
          <td>Draymond Green</td><th></th>
          <td>12</td>
          <td>10</td>
          <td>9</td>
          <td>6</td>
          <td>3</td>
        </tr>
      </table>
    </div>
  );
}


export default PlayerItem