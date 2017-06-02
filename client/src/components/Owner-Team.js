import React from 'react';
// import OwnerPlayer from './OwnerPlayer';
import { connect } from 'react-redux';
import OwnerPlayer from './Owner-Player';

const OwnerTeam = (props) => {
  console.log(props.team.memberIds);
  let arr = [];
  let index = 0;
  for (let key in props.team.memberIds){
    arr.push(<OwnerPlayer player={props.team.memberIds[key]}index={index} key={index} />);
    index++;
  }
  // const ownerPlayers = props.team.map(());
  //const players = props.data.map((player, index) => <PlayerItem player={player} key={index} />);
  return (


      <div>
      {arr}
      {/*{arr.map(player => player)}*/}
      </div>

  );
}

// /owner/:ownerName
// findTeams(ownerName)
// Teams.find({owner:ownerName}) == array of teams for owner
const mapStateToProps = (state) => {
  return{
    data: state.owner.data
  }
}
export default connect(mapStateToProps)(OwnerTeam)