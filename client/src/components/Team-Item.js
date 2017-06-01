import React, {Component} from 'react';
import { connect } from 'react-redux';

class TeamItem extends Component {
  constructor(props){
    super(props);
  }

  render() {
      let team = this.props.team;

    return(
        <tr>
          {/*Render data into here*/}
          <td name={team.team.name + 'name'}>{player.player.FirstName} {this.props.player.player.LastName}</td>
        </tr>
  );
  }
}
const mapStateToProps = (state) => {
  return{
    data: state.teams.data
  }
}

export default connect(mapStateToProps)(TeamItem);