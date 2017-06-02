import React from 'react';
import PlayerItem from './Player-Item';
import { connect } from 'react-redux';
const PlayerList = (props) => {
  const players = props.data.map((player, index) => <PlayerItem player={player} key={index} />);
  return (
    <div>      <table>
      <tr>
        <th>Player Name</th>
        <th>Points/Game</th>
        <th>Rebounds/Game</th>
        <th>Assists/Game</th>
        <th>Steals/Game</th>
        <th>Turnovers/Game</th>
      </tr>
        {players}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    data: state.players.data
  }
}
export default connect(mapStateToProps)(PlayerList)