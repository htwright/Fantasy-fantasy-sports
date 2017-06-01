import React from 'react';
// import OwnerPlayer from './OwnerPlayer';
import { connect } from 'react-redux';
import OwnerPlayer from './Owner-Player';

const OwnerTeam = (props) => {
  const ownerPlayers = props.team.map(());
  //const players = props.data.map((player, index) => <PlayerItem player={player} key={index} />);
  return (


      <ul>
        <li>first team</li>
        {ownerPlayers}
        <li>second team</li>
        <li>third team</li>
      </ul>

  );
}

// /owner/:ownerName
// findTeams(ownerName)
// Teams.find({owner:ownerName}) == array of teams for owner
const mapStateToProps = (state) => {
  return{
    data: state.players.data
  }
}
export default connect(mapStateToProps)(PlayerList)