import React, {Component} from 'react';
import TeamItem from './Team-Item';
import { connect } from 'react-redux';
import {fetchTeams} from '../actions';

class TeamList extends Component {



  componentDidMount(){
    this.props.dispatch(fetchTeams());


  }
  // props.dispatch(fetchTeams());
  // console.log(props.data);
  render(){
  const teams = this.props.data.map((team, index) => <TeamItem team={team} key={index} />);

  return (
    <div>
      <table>
        <tr>
        <th>Owner</th>
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
  }

};

const mapStateToProps = (state) => {
  return{
    data: state.teams.data
  };
};
export default connect(mapStateToProps)(TeamList);