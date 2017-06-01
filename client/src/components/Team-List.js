import React from 'react';
import TeamItem from './Team-Item';
import { connect } from 'react-redux';

const TeamList = (props) => {
  const team = props.data.map((team, index) => <TeamItem team={team} key={index} />);
  return (
    <div>
      <table>
      <tr>
        <th>Team Name</th>
      </tr>
        {teams}
      </table>
    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    data: state.teams.data
  }
}
export default connect(mapStateToProps)(TeamList)