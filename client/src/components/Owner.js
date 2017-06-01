import React from 'react';
import OwnerTeam from './Owner-Team';
import { connect } from 'react-redux';

const Owner = (props) => {
  //This gets all the owners teams and players
  const ownerTeams = props.data.map((ownerTeam, index) => <OwnerTeam team={ownerTeam} key={index} />);
  return (
    <div>
      <div>Owner's Name</div>
      {ownerTeams}
    </div>
  );
}

const mapStateToProps = (state) => {
  data: state.owner.data
}

export default connect(mapStateToProps)(Owner);