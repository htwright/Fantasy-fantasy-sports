import React from 'react';
import MobilePlayerItem from './Mobile-Player-Item';
import { connect } from 'react-redux';
const PlayerList = (props) => {
  const players = props.data.map((player, index) => <MobilePlayerItem player={player} key={index} />);
  return (
      <table className="table-striped mobile-view">
        <tbody>
          <tr className="table-header">
            <th>Player Name</th>
            <th>Position</th>
            <th>Points/pg</th>
            <th>Add Player</th>
          </tr>
        </tbody>
        {players}
      </table>
  );
}

const mapStateToProps = (state) => {
  return{
    data: state.players.data
  }
}
export default connect(mapStateToProps)(PlayerList);