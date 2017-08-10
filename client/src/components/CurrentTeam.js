import React, {Component} from 'react';
import {addPlayerToTeam} from '../actions';
import { connect } from 'react-redux';
class CurrentTeam extends Component {
  constructor(props){
    super(props);
  }

  render() {
    let players = this.props.team.map((member, index) => <li key={index}>member#{index+1} - {member.player.FirstName + ' ' +member.player.LastName}</li> )

    if(this.props.team.length > 0){
      return(<ul className="current-team"><h1>Current Team</h1>{players}</ul>);
    }else{
      return(<ul/>);
    }
  }
}

function mapStateToProps (state) {
  return {
    team: state.players.team
  };
}
export default connect(mapStateToProps)(CurrentTeam);