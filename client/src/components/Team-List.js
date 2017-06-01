import React from 'react';
import TeamItem from './Team-Item';
import { connect } from 'react-redux';
import {fetchTeams} from '../actions';

const TeamList = (props) => {
  props.dispatch(fetchTeams());
  console.log(props.data);
  const teams = props.data.map((team, index) => <TeamItem team={team} key={index} />);
  return (
    <div>
      <table>
        <tr>
        <th>Guard 1</th>
        <th>Guard 2</th>
        <th>Forward 1</th>
        <th>Forward 2</th>
        <th>Center</th>
      </tr>
        {teams}
      </table>
    </div>
  );
};

const mapStateToProps = (state) => {
  return{
    data: state.teams.data
  };
};
export default connect(mapStateToProps)(TeamList);