import React from 'react';
import PlayerItem from './Player-Item';
import { connect } from 'react-redux';

const PlayerList = (props) => {
  const players = props.data.map((player, index) => <PlayerItem player={player} key={index} />);
  return (
    <div>
      <ul>
        {players}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    data: state.players.data
  }
}
export default connect(mapStateToProps)(PlayerList)